import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { getAllTags } from "@/lib/getTags";
import { GetStaticProps } from "next";
import PageLayout from "@/layouts/PageLayout";
import React from "react";
import Link from "next/link";
import { tagsDir } from "@/utils/routes";

const TagIndex = ({ tags }: { tags: string[] }) => {
  let countedTags: { [tag: string]: number } = {};
  tags.forEach((tag) => {
    if (tag in countedTags) {
      countedTags[tag]++;
    } else {
      countedTags[tag] = 1;
    }
  });
  const sortedTags = Object.entries(countedTags)
    .sort((a, b) => b[1] - a[1])
    .map(([tag, count]) => ({ tag, count }));
  return (
    <PageLayout full>
      <Flex flexDir="column" justifyContent="center">
        <Flex
          flexDir={{ base: "column", md: "row" }}
          alignItems="center"
          justifyContent="center"
        >
          <Heading
            pb={8}
            fontSize={{ base: "4xl", md: "5xl" }}
            fontWeight="bold"
            color={{ base: "dark.900", md: "dark.200" }}
            borderRightWidth={{ md: 2 }}
            pr={{ md: 6 }}
            borderRightColor="dark.400"
          >
            Tags
          </Heading>
          <Flex
            maxW="xl"
            flexWrap="wrap"
            color={{ base: "dark.700", md: "dark.400" }}
          >
            {sortedTags.map(({ tag, count }) => (
              <Box key={tag} py={1} pr={4} textTransform="uppercase">
                <Link href={`/${tagsDir}/${tag}`}>
                  <a className="postlist-tag-link mr-1">{tag}</a>
                </Link>
                <Text fontWeight="semibold">
                  {" ("}
                  {count}
                  {")"}
                </Text>
              </Box>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </PageLayout>
  );
};

export default TagIndex;

export const getStaticProps: GetStaticProps = async () => {
  const tags = getAllTags();
  return {
    props: {
      tags,
    },
  };
};
