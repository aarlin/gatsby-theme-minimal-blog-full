import Link from 'next/link';
import {
  LinkBox,
  LinkOverlay,
  Heading,
  Text,
  VStack,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';

import { BlogPost } from '@/types/blog-post';
import BlogTags from "../blog-tags";

const BlogPostCard = ({
  title,
  description,
  slug,
  date,
  readingTime,
  tags,
}: BlogPost) => {
  return (
    <LinkBox as='article'>
      <VStack
        alignItems='stretch'
        w='full'
        p={{ base: 0, md: 4 }}
        _hover={{
          bg: 'gray.100',
          transform: 'scale(1.025, 1.025)',
        }}
        _dark={{
          _hover: {
            bg: 'gray.700',
          },
        }}
        rounded='md'
        borderColor={useColorModeValue('gray.100', 'gray.700')}
        transitionDuration='slow'
        transitionProperty='all'
        transitionTimingFunction='ease-out'
      >
        <VStack alignItems='flex-start'>
          <Heading size='md'>
            <LinkOverlay as={Link} href={`/blog/${slug}`}>
              {title}
            </LinkOverlay>
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
              {readingTime}
            </Text>
          </HStack>
        </VStack>
        <Text color='gray.500' fontSize='sm'>
          {description}
        </Text>
        {tags?.length > 0 && <BlogTags tags={tags} />}
      </VStack>
    </LinkBox>
  );
};

export default BlogPostCard;
