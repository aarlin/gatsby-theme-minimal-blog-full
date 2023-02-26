import {
  Button,
  LightMode,
  Link,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaTwitter } from "react-icons/fa";

const ShareBlogCard = ({ title, slug }) => {
  const url = "https://aarlin.netlify.app/blog/" + slug;

  return (
    <VStack
      p={4}
      bg={useColorModeValue("blue.50", "blueGray.800")}
      rounded="xl"
      borderWidth="1px"
      color={useColorModeValue("blue.800", "blue.800")}
      borderColor={useColorModeValue("blue.100", "blueGray.600")}
      textAlign="left"
      align="stretch"
      spacing={4}
      position="relative"
      mt={6}
    >
      <Text>Did you like the article?</Text>
      <Link
        href={`https://twitter.com/intent/tweet?text=${
          encodeURIComponent(title) + " " + "by @aarlin"
        }&url=${encodeURIComponent(url)}`}
        isExternal
      >
        <LightMode>
          <Button
            leftIcon={<FaTwitter />}
            colorScheme="twitter"
            transition="all 0.25s"
            transition-timing-function="spring(1 100 10 10)"
            _hover={{ transform: "translateY(-4px)", shadow: "sm" }}
          >
            Share on Twitter
          </Button>
        </LightMode>
      </Link>
    </VStack>
  );
};

export default ShareBlogCard;
