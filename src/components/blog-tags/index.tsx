import { Stack, Badge, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { ThemeTypings } from "@chakra-ui/styled-system";

type Props = {
  tags: string[];
};


const BlogTags = ({ tags }: Props) => {
  const badgeBorderColor = useColorModeValue("green.200", "green.900")
  const badgeBackgroundColor = useColorModeValue("green.300", "green.900")
  const badgeTextColor = useColorModeValue("green.900", "green.300")

  return (
    <Stack direction="row">
      {tags.sort().map((tag, index) => (
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
