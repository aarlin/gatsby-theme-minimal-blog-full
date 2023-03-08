import { GetStaticProps } from "next";
import Head from "next/head";

import BlogPostsSection from "@/components/blog/BlogPostsSection";
import Hero from "@/components/Hero";
import { BlogPost } from "@/types/blog-post";
import { getRecentBlogPosts } from "@/utils/get-blog-posts";

type Props = {
	posts: BlogPost[];
};

const IndexPage = ({ posts }: Props) => {
	return (
		<>
			<Head>
				<link rel='me' href='https://aarlin.netlify.com' />
			</Head>
			<Hero />
			{/* <CoursesSection courses={courses} /> */}
			<BlogPostsSection posts={posts} />
		</>
	);
};

export const getStaticProps: GetStaticProps<Props> = async () => {
	const posts = await getRecentBlogPosts(4);

	const props: Props = {
		posts,
	};

	return {
		props,
	};
};

export default IndexPage;
