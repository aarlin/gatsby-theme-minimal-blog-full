import { GetStaticProps, GetStaticPaths } from "next";
import { getUniqueTags } from "@/lib/getTags";
import { getPostsMetaWithTag } from "@/lib/getPosts";
import { PostMeta } from "@/lib/types";
import PageLayout from "@/layouts/PageLayout";
import PostListLayout from "@/layouts/PostListLayout";
import { Heading, Text } from "@chakra-ui/react";

const TagsPage = ({ tag, posts }: { tag: string; posts: PostMeta[] }) => {
  return (
    <PageLayout>
      <Heading
        as="h1"
        pt={12}
        size="2xl"
        fontWeight="bold"
        color="dark.900"
        letterSpacing="tight"
      >
        {tag}
      </Heading>
      <Text fontSize="xl" fontWeight="semibold" color="dark.700" mt={4}>
        All posts tagged with {tag}
      </Text>
      <PostListLayout posts={posts} />
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) {
    throw new Error("params is undefined");
  }
  const tag = params.tag as string;
  const posts = getPostsMetaWithTag(tag);
  return {
    props: {
      tag,
      posts,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getUniqueTags().map((tag) => ({ params: { tag } }));
  return {
    paths,
    fallback: false,
  };
};

export default TagsPage;
