import BlogTags from "@/components/blog-tags";
import MDXComponents from "@/components/mdx-components";
import ScrollToTopButton from "@/components/scroll-to-top-button";
import SocialShare from "@/components/social-share.tsx";
// import { TableOfContents } from "@/components/table-of-contents";
import { BlogPost } from "@/types/blog-post";
import { getBlogPosts } from "@/utils/get-blog-posts";
import imageMetadata from "@/utils/plugins/image-metadata";
import { readBlogPost } from "@/utils/read-blog-post";
import {
  Box,
  Flex,
  Grid,
  Heading,
  HStack,
  Icon,
  Text,
  useMediaQuery,
  VStack,
  Image,
  GridItem,
} from "@chakra-ui/react";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { RxChevronLeft, RxCalendar, RxTimer } from "react-icons/rx";
import readingTime from "reading-time";

type Props = BlogPost & {
  source: MDXRemoteSerializeResult;
};

const BackButton = () => {
  return (
    <HStack position="sticky">
      <Icon as={RxChevronLeft} mr={2} />
      <Text>Back</Text>
    </HStack>
  );
};

const BlogPostContent = ({ date, title, readingTime, source }) => {
  return (
    <>
      <Heading as="h1" size="lg">
        {title}
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
                {date}
              </Text>
            </Flex>
          </Text>
        </Flex>
        <Flex align="center">
          <Icon as={RxTimer} mr={2} />
          <Text color="gray.500" fontSize="sm">
            {readingTime}
          </Text>
        </Flex>
      </Flex>
      <MDXRemote {...source} components={MDXComponents} />
    </>
  );
};

const BlogContentAside = ({ tags, title }) => {
  return (
    <>
      {/* <TableOfContents source={post.body.raw} /> */}
      <BlogTags tags={tags} />
      <SocialShare title={title} />
    </>
  );
};

const BlogPostPage = ({
  title,
  description,
  date,
  source,
  readingTime,
  tags,
}: Props) => {
  const { query } = useRouter();
  const slug = query.slug as string;
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <NextSeo
        title={`${title} - Aaron Lin`}
        description={description}
        openGraph={{
          description,
          title: `${title} - Aaron Lin`,
          url: `https://aarlin.netlify.com/blog/${slug}`,
        }}
      />

      {!isMobile && (
        <HStack spacing={4} w="100%">
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
            <BackButton />
          </VStack>
          <VStack spacing={4} flex={3} align="flex-start" w="100%">
            <BlogPostContent
              date={date}
              title={title}
              readingTime={readingTime}
              source={source}
            />
          </VStack>
          <VStack
          alignItems="flex-start"
            spacing={4}
            flex={1}
            align="flex-start"
            w="full"
            position="sticky"
            as="nav"
            zIndex="popover"
            top={100}
            alignSelf="center"
          >
            <BlogContentAside tags={tags} title={title} />
          </VStack>
        </HStack>
      )}

      {isMobile && (
        <VStack spacing={4} flex={4} align="flex-start" w="100%">
          <BlogPostContent
            date={date}
            title={title}
            readingTime={readingTime}
            source={source}
          />
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
  const {
    content,
    data: { title, description, date, tags },
  } = matter(postContent);

  return {
    props: {
      source: await serialize(content, {
        mdxOptions: {
          rehypePlugins: [imageMetadata],
        },
      }),
      readingTime: readingTime(content).text,
      title,
      description,
      date,
      slug,
      tags,
    },
  };
};

export default BlogPostPage;
