import Link from "next/link";
import {
  LinkBox,
  LinkOverlay,
  Heading,
  Text,
  VStack,
  HStack,
  useColorModeValue,
  Flex,
  Icon,
  Avatar,
} from "@chakra-ui/react";

import { BlogPost } from "@/types/blog-post";
import BlogTags from "@/components/blog/BlogTags";
import { RxCalendar, RxTimer } from "react-icons/rx";

const BlogPostCard = ({
  title,
  description,
  slug,
  date,
  readingTime,
  tags,
}: BlogPost) => {
  return (
    <LinkBox as="article">
      <VStack
        alignItems="stretch"
        w="full"
        p={{ base: 0, md: 4 }}
        _hover={{
          bg: "gray.100",
          transform: "scale(1.025, 1.025)",
        }}
        _dark={{
          _hover: {
            bg: "gray.700",
          },
        }}
        rounded="md"
        borderColor={useColorModeValue("gray.100", "gray.700")}
        transitionDuration="slow"
        transitionProperty="all"
        transitionTimingFunction="ease-out"
        padding='0.5rem'
      >
        <VStack alignItems="flex-start">
          <Heading size="md">
            <LinkOverlay as={Link} href={`/blog/${slug}`}>
              {title}
            </LinkOverlay>
          </Heading>
          <HStack
            divider={
              <Text mx={2} color="gray.500">
                •
              </Text>
            }
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
          </HStack>
        </VStack>
        <Text color="gray.500" fontSize="sm">
          {description}
        </Text>
        {tags?.length > 0 && <BlogTags direction="row" tags={tags} />}
      </VStack>
    </LinkBox>
  );
};

export default BlogPostCard;
