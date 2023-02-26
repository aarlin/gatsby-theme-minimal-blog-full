import { socialLinks } from "@/data/links"
import {
  Box, ButtonGroup, Flex, IconButton, Text
} from "@chakra-ui/react"
import ExternalLink from "../external-link"

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
        display={{ base: 'block', sm: 'flex' }}
        justifyContent="space-between"
        alignItems="center"
        direction={{ base: 'column', sm: 'row' }}
        px={{ base: '5', sm: '6' }}
        py={{ base: '3.5', sm: '4' }}
        textAlign="center"
      >
        <Text fontSize="sm" mb="0">
          {'{ '}Developed by{' '}
          <Text as="span" fontWeight="bold">
            Aaron Lin
          </Text>
          {' }'}
        </Text>
        <Text fontSize="sm" mt={{ base: '-1', sm: '0' }} mb="0">
          Built with{' '}
          <ExternalLink href={'https://nextjs.org/'}>Next.js</ExternalLink>
          {' '}and{' '}
          <ExternalLink href={'https://chakra-ui.com/'}>Chakra UI</ExternalLink>
        </Text>
      </Flex>
  </Box>
)

export default Footer
