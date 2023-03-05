import {
  Badge,
  Heading,
  Stack,
  StackDirection,
  useColorModeValue,
} from "@chakra-ui/react";

type Props = {
  direction: StackDirection;
  tags: string[];
};

const BlogTags = ({ direction, tags }: Props) => {
  const badgeBorderColor = useColorModeValue("#8ed2af", "#155b3d");
  const badgeBackgroundColor = useColorModeValue("#f1fef7", "#051f13");
  const badgeTextColor = useColorModeValue("#2b825b", "#33cc87");

  return (
    <Stack direction={direction} flexWrap="wrap" alignItems="baseline">
      {tags.sort().map((tag, _) => (
        <Badge
          borderRadius="5px"
          key={tag}
          bg={badgeBackgroundColor}
          border={`1px solid ${badgeBorderColor}`}
          textColor={badgeTextColor}
          textTransform="lowercase"
          py="0.20rem"
          px="0.5rem"
        >
          {tag}
        </Badge>
      ))}
    </Stack>
  );
};

export default BlogTags;
