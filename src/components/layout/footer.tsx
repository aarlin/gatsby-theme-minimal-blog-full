import { Flex, Link, IconButton, useColorMode, Box, Tooltip, HStack } from "@chakra-ui/react";
import { socialLinks } from 'src/data/links';

const Footer = () => {
  const { colorMode } = useColorMode();
  const borderIcon = {
    light: "undefined",
    dark: "undefined",
  };
  const footerHoverBg = {
    light: "gray.400",
    dark: "gray.400",
  };
  const linkColor = {
    light: "undefined",
    dark: "white",
  };
  return (
    <Box color={linkColor[colorMode]} mt={8} >
      <Flex align="center" my={8} direction="column">
        <HStack>
          {socialLinks.map((socialLink) => {
            return (
              <Tooltip key={socialLink.label} label={socialLink.label}>
                <Link
                  href={socialLink.href}
                  isExternal
                >
                  <IconButton
                    aria-label={socialLink.label}
                    icon={<socialLink.icon />}
                    size="lg"
                    color={borderIcon[colorMode]}
                    variant="ghost"
                    _hover={{ backgroundColor: footerHoverBg[colorMode] }}
                  />
                </Link>
              </Tooltip>
            )
          })}
         </HStack>
      </Flex>
    </Box>
  );
};

export default Footer;
