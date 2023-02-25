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
    link: "https://github.com/aarlin",
    icon: <FaGithub />,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/aarlin256/",
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
    <Flex
        width="100%"
        display={{ base: 'block', sm: 'flex' }}
        justifyContent="space-between"
        alignItems="center"
        direction={{ base: 'column', sm: 'row' }}
        px={{ base: '5', sm: '6' }}
        py={{ base: '3.5', sm: '4' }}
        textAlign="center"
      >
        <Text fontSize="sm" mb="0">
          {'{'}Developed by{' '}
          <Text as="span" fontWeight="bold">
            Aaron Lin
          </Text>
          {'}'}
        </Text>
        <Text fontSize="sm" mt={{ base: '-1', sm: '0' }} mb="0">
          With <b>Next.js</b> and <b>ChakraUI</b>
        </Text>
      </Flex>
  </Box>
)

export default Footer
