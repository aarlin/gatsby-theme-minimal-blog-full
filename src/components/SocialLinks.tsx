import { Stack, Button, Icon, Link } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import NextLink from 'next/link';

const SocialLinks = () => {
  return (
    <Stack direction={{ base: "column", md: "row" }} spacing={3}>
      <Link as={NextLink} href="https://github.com/aarlin" passHref>
        <Button
          variant="outline"
          colorScheme="primary"
          leftIcon={<Icon width="3.5" as={FaGithub} mr="-1" />}
          transition="all 0.3s ease-in-out"
          _hover={{
            transform: "scale(1.1)",
            boxShadow: "lg",
            textDecoration: "none",
          }}
        >
          GitHub
        </Button>
      </Link>
      <Link
        as={NextLink}
        href="https://www.linkedin.com/in/aaronlin256/"
        passHref
      >
        <Button
          variant="outline"
          colorScheme="linkedin"
          leftIcon={<Icon width="3.5" as={SiLinkedin} mr="-1" />}
          transition="all 0.3s ease-in-out"
          _hover={{
            transform: "scale(1.1)",
            boxShadow: "lg",
            textDecoration: "none",
          }}
        >
          LinkedIn
        </Button>
      </Link>
    </Stack>
  );
};

export default SocialLinks;
