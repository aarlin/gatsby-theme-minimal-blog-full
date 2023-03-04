import BlogTags from "@/components/blog/BlogTags";
import MDXComponents from "@/components/markdown/MdxComponents";
import ModifiedChakraLink from "@/components/ModifiedChakraLink";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SocialShare from "@/components/SocialShare";
import TableOfContents from "@/components/TableOfContents";
import * as blogPost from "@/types/blog-post";
import { getBlogPosts } from "@/utils/get-blog-posts";
import imageMetadata from "@/utils/plugins/image-metadata";
import { readBlogPost } from "@/utils/read-blog-post";
import {
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { RxCalendar, RxChevronLeft, RxTimer } from "react-icons/rx";
import readingTime from "reading-time";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

type Props = blogPost.BlogPost & {
  source: MDXRemoteSerializeResult;
  frontMatter: any;
  content: any;
};

const BackToBlogButton = () => {
  return (
    <HStack>
      <ModifiedChakraLink
        display="flex"
        alignItems="center"
        href="/blog"
        ml={{ base: 0, md: 4 }}
        role=""
      >
        <Icon
          as={RxChevronLeft}
          ml={1}
          _groupHover={{ ml: -3 }}
          transitionDuration="slow"
          transitionProperty="margin-left"
          transitionTimingFunction="ease-out"
        />
        Back
      </ModifiedChakraLink>
    </HStack>
  );
};

const BlogPostContent = ({ frontMatter, source }) => {
  return (
    <>
      <Heading as="h1" size="lg">
        {frontMatter.title}
      </Heading>
      <Flex
        flexFlow="row"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        my={8}
      >
        <Flex alignItems="center">
          <Image
            alt="Aaron Lin"
            height={10}
            width={10}
            borderRadius="10px"
            sizes="20vw"
            src="/aaron.webp"
            className="rounded-full mt-0 mb-0"
          />
          <Text ml={2} fontSize="sm" color="gray.600" fontWeight="medium">
            <Text as="span" color="black" fontWeight="bold">
              Aaron Lin
            </Text>
            <br />
            <Flex align="center">
              <Icon as={RxCalendar} mr={2} />
              <Text color="gray.500" fontSize="sm">
                {frontMatter.date}
              </Text>
            </Flex>
          </Text>
        </Flex>
        <Flex align="center">
          <Icon as={RxTimer} mr={2} />
          <Text color="gray.500" fontSize="sm">
            {frontMatter.readingTime}
          </Text>
        </Flex>
      </Flex>
      <MDXRemote {...source} components={MDXComponents} />
    </>
  );
};

const BlogContentAside = ({ frontMatter, content }) => {
  return (
    <>
      <BlogTags direction="column" tags={frontMatter.tags} />
      <TableOfContents source={content} />
      <SocialShare title={frontMatter.title} />
    </>
  );
};

const BlogPostPage = ({ source, frontMatter, content }) => {
  const { query } = useRouter();
  const slug = query.slug as string;
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <NextSeo
        title={`${frontMatter.title} - Aaron Lin`}
        description={frontMatter.description}
        openGraph={{
          description: frontMatter.description,
          title: `${frontMatter.title} - Aaron Lin`,
          url: `https://aarlin.netlify.com/blog/${slug}`,
        }}
      />

      {!isMobile && (
        <HStack spacing={8} w="100%">
          <VStack
            alignSelf="flex-start"
            spacing={4}
            flex={1}
            align="flex-start"
            w="full"
            position="sticky"
            as="nav"
            zIndex="popover"
            top={100}
          >
            <BackToBlogButton />
          </VStack>
          <VStack spacing={4} flex={3} align="flex-start" w="100%">
            <BlogPostContent frontMatter={frontMatter} source={source} />
          </VStack>
          <VStack
            alignSelf="flex-start"
            spacing={4}
            flex={1}
            align="flex-start"
            w="full"
            position="sticky"
            as="nav"
            zIndex="popover"
            top={100}
          >
            <BlogContentAside frontMatter={frontMatter} content={content} />
          </VStack>
        </HStack>
      )}

      {isMobile && (
        <VStack spacing={4} flex={4} align="flex-start" w="100%">
          <BlogPostContent frontMatter={frontMatter} source={source} />
        </VStack>
      )}
      <ScrollToTopButton />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getBlogPosts();

  return {
    paths: posts.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const slug = ctx.params.slug as string;

  const postContent = await readBlogPost(slug);
  const { content, data } = matter(postContent);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [imageMetadata, rehypeAutolinkHeadings],
    },
  });

  return {
    props: {
      source: mdxSource,
      content,
      frontMatter: {
        ...data,
        readingTime: readingTime(content).text,
      },
    },
  };
};

export default BlogPostPage;
