import BlogTags from "@/components/blog-tags";
import MDXComponents from '@/components/mdx-components';
import ScrollToTopButton from '@/components/scroll-to-top-button';
import { BlogPost } from '@/types/blog-post';
import { getBlogPosts } from '@/utils/get-blog-posts';
import imageMetadata from '@/utils/plugins/image-metadata';
import { readBlogPost } from '@/utils/read-blog-post';
import {
  Flex, Heading,
  HStack, Icon, Text, VStack
} from '@chakra-ui/react';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { RxCalendar, RxTimer } from 'react-icons/rx';
import readingTime from 'reading-time';

type Props = BlogPost & {
  source: MDXRemoteSerializeResult;
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
      <VStack position='relative' alignItems='stretch' w='full' spacing={8}>
        <VStack alignItems='flex-start' spacing={3}>
          <Heading as='h1' size='lg'>
            {title}
          </Heading>
          <Flex
            flexFlow="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Flex align="center">
              <Icon as={RxCalendar} mr={2} />
              <Text color="gray.500" fontSize="sm">
                {date}
              </Text>
            </Flex>
            <Flex align="center">
              <Icon as={RxTimer} mr={2} />
              <Text color="gray.500" fontSize="sm">
                {readingTime}
              </Text>
            </Flex>
          </Flex>
          <HStack>
            <BlogTags tags={tags} />
          </HStack>
        </VStack>
        <MDXRemote {...source} components={MDXComponents} />
      </VStack>
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
