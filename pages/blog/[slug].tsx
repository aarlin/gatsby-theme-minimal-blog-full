import { GetStaticProps, GetStaticPaths } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { NextSeo } from 'next-seo';
import { format } from 'timeago.js';
import {
  VStack,
  Heading,
  HStack,
  Text,
  Spinner,
  Divider,
} from '@chakra-ui/react';

import { BlogPost } from '@/types/blog-post';
import { getBlogPosts } from '@/utils/get-blog-posts';
import { readBlogPost } from '@/utils/read-blog-post';
import MDXComponents from '@/components/mdx-components';
import { useRouter } from 'next/router';
import usePostViews from 'src/hooks/use-post-views';
import { useEffect } from 'react';
import LikeButton from '@/components/like-button';
import usePostLikes from 'src/hooks/use-post-likes';
import imageMetadata from '@/utils/plugins/image-metadata';
import ScrollToTopButton from '@/components/scroll-to-top-button';
import BlogTags from "@/components/blog-tags";

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

  const { views, increment: incrementViews } = usePostViews(slug);
  const {
    likes,
    userLikes,
    isLoading,
    increment: incrementLikes,
  } = usePostLikes(slug);

  useEffect(() => {
    if (slug) {
      incrementViews();
    }
  }, [slug, incrementViews]);

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
          <HStack
            divider={
              <Text mx={2} color='gray.500'>
                •
              </Text>
            }
          >
            <Text color='gray.500' fontSize='sm'>
              {date}
            </Text>
            <Text color='gray.500' fontSize='sm'>
              {format(date)}
            </Text>
            <Text color='gray.500' fontSize='sm'>
              {readingTime}
            </Text>
          </HStack>
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
