import { Badge, Stack, StackDirection, useColorModeValue } from "@chakra-ui/react";

type Props = {
  direction: StackDirection;
  tags: string[];
};

const BlogTags = ({ direction, tags }: Props) => {
  const badgeBorderColor = useColorModeValue("green.200", "green.900");
  const badgeBackgroundColor = useColorModeValue("green.300", "green.900");
  const badgeTextColor = useColorModeValue("green.900", "green.300");

  return (
    <Stack direction={direction} flexFlow="wrap" flexDirection="column" alignItems="baseline">
      {tags.sort().map((tag, _) => (
        <Badge
          borderRadius="4px"
          key={tag}
          bg={badgeBackgroundColor}
          border={badgeBorderColor}
          textColor={badgeTextColor}
          variant="outline"
          textTransform="lowercase"
          py="0.125rem"
          px="0.625rem"
        >
          {tag}
        </Badge>
      ))}
    </Stack>
  );
};

export default BlogTags;
