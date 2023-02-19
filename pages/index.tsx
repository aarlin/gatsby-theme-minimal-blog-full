import { GetStaticProps } from 'next';
import Head from 'next/head';

import Hero from '@/components/hero';
import CoursesSection from '@/components/courses-section';
import { readData } from '@/utils/read-data';
import { Video } from '@/types/video';
import VideosSection from '@/components/videos-section';
import courses from '@/data/courses';
import { getRecentBlogPosts } from '@/utils/get-blog-posts';
import { BlogPost } from '@/types/blog-post';
import BlogPostsSection from '@/components/blogposts-section';

type Props = {
  posts: BlogPost[];
  videos?: Video[];
};

const IndexPage = ({ videos, posts }: Props) => {
  return (
    <>
      <Head>
        <link rel='me' href='https://aarlin.netlify.com' />
      </Head>
      <Hero />
      <CoursesSection courses={courses} />
      <BlogPostsSection posts={posts} />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await getRecentBlogPosts(3);

  const props: Props = {
    posts,
  };

  return {
    props,
  };
};

export default IndexPage;
