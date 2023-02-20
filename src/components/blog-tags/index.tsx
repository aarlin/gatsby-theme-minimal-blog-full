import { Stack, Badge } from "@chakra-ui/react";
import { ThemeTypings } from "@chakra-ui/styled-system";

type Props = {
  tags: string[];
};


const BlogTags = ({ tags }: Props) => {
  return (
    <Stack direction="row">
      {tags.sort().map((tag, index) => (
        <Badge 
          borderRadius="4px" 
          key={tag} 
          colorScheme={"purple"}
          variant="subtle"
        >
          {tag}
        </Badge>
      ))}
    </Stack>
  );
};

export default BlogTags;
