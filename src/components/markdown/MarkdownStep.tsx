import { Flex, Box, Text } from "@chakra-ui/react";

export default function MarkdownStep({ number, title }) {
  return (
    <Flex alignItems="center" py={4}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        border="1px"
        borderColor="gray.200"
        pt={1}
        fontWeight="bold"
        borderRadius={'5px'}
        h={8}
        w={8}
      >
        <Text color="green.500" transform="translateY(-2px)">
          {number}
        </Text>
      </Box>
      <Text ml={3} fontWeight="bold" letterSpacing="tight">
        {title}
      </Text>
    </Flex>
  );
}
