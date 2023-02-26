import { socialLinks } from "@/data/links";
import { Box, ButtonGroup, Flex, IconButton, Text } from "@chakra-ui/react";
import ExternalLink from "../external-link";

const Footer = () => (
  <Box as="footer" role="contentinfo" py={{ base: "12", md: "16" }}>
    <Flex justify="center" direction="row" align="center">
      <ButtonGroup variant="ghost">
        {socialLinks.map((link) => (
          <IconButton
            key={link.label}
            as="a"
            href={link.href}
            _hover={{
              bg: "transparent",
              color: "brand",
            }}
            aria-label={link.label}
            icon={<link.icon />}
          />
        ))}
      </ButtonGroup>
    </Flex>
    <Flex
      width="100%"
      display={{ base: "block", sm: "flex" }}
      justifyContent="space-between"
      alignItems="center"
      direction={{ base: "column", sm: "row" }}
      px={{ base: "5", sm: "6" }}
      py={{ base: "3.5", sm: "4" }}
      textAlign="center"
    >
      <Box
        display="inline-block"
        position="relative"
        _hover={{
          "& .opening-brace": {
            color: "green.500",
            transform: "translateX(-3px)",
          },
          "& .closing-brace": {
            color: "green.500",
            transform: "translateX(3px)",
          },
        }}
      >
        <Box
          display="inline-block"
          left="0"
          transition="transform 0.2s"
          className="opening-brace"
          _hover={{ transform: "translateX(-3px)" }}
        >
          {"{ "}
        </Box>
        {" "}
        Developed by{" "}
        <Text as="span" fontWeight="bold">
          Aaron Lin
        </Text>
        {" "}
        <Box
          display="inline-block"
          right="0"
          transition="transform 0.2s"
          className="closing-brace"
          _hover={{ transform: "translateX(3px)" }}
        >
          {" }"}
        </Box>
      </Box>

      <Text fontSize="sm" mt={{ base: "-1", sm: "0" }} mb="0">
        Built with{" "}
        <ExternalLink href={"https://nextjs.org/"}>Next.js</ExternalLink> and{" "}
        <ExternalLink href={"https://chakra-ui.com/"}>Chakra UI</ExternalLink>
      </Text>
    </Flex>
  </Box>
);

export default Footer;
