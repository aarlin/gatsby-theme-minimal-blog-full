import {
  ButtonGroup,
  IconButton,
  Flex,
  Text,
  Box,
  useColorModeValue,
} from "@chakra-ui/react"
import * as React from "react"
import { FaGithub, FaLinkedin, FaTwitter, FaGitlab } from "react-icons/fa"
import { socialLinks } from "@/data/links"

const Links = [
  {
    name: "Github",
    link: "https://github.com/amankrx",
    icon: <FaGithub />,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/amankrx/",
    icon: <FaLinkedin />,
  },
]

const Footer = () => (
  <Box as="footer" role="contentinfo" py={{ base: "12", md: "16" }}>
    <Flex justify="center" direction="row" align="center">
      <ButtonGroup variant="ghost">
        {Links.map((link) => (
          <IconButton
            key={link.name}
            as="a"
            href={link.link}
            _hover={{
              bg: "transparent",
              color: "brand",
            }}
            aria-label={link.name}
            icon={link.icon}
          />
        ))}
      </ButtonGroup>
    </Flex>
    <Text
      fontSize={["xs", "sm"]}
      align="center"
      color={useColorModeValue("textMediumLight", "textMediumDark")}
    >
      &copy; {new Date().getFullYear()} Aaron Lin. Made with{" "}
      <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
        NextJS
      </a>{" "}
      and{" "}
      <a href="https://chakra-ui.com/" target="_blank" rel="noreferrer">
        Chakra UI
      </a>
      . View Source on{" "}
      <a
        href="https://github.com/aarlin/aarlin.netlify.app"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
    </Text>
  </Box>
)

export default Footer
