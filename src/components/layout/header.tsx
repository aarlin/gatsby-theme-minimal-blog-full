import {
  HStack,
  Heading,
  IconButton,
  Link,
  Tooltip,
  Container,
  chakra,
  Button,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { FiCommand } from 'react-icons/fi';

import { CmdPaletteContext } from 'src/providers/cmd-palette-provider';
import { motion } from 'framer-motion';
import { Logo } from 'src/components/logo';
import ThemeToggleButton from '../theme-toggle';
import { useRouter } from "next/router";
import ColorModeToggle from '../colormode-toggle';
import { navigationLinks } from '@/data/links';

const Header = () => {
  const { open: openCommandPalette } = useContext(CmdPaletteContext);
  const [shortcut, setShortcut] = useState<string>();
  const MotionButton = motion(Button);
  const { asPath } = useRouter();
  const hoverBg = useColorModeValue("gray.200", "gray.900");

  useEffect(() => {
    setShortcut(
      navigator.userAgent.indexOf('Mac OS X') != -1 ? 'Cmd + K' : 'Ctrl + K'
    );
  }, [setShortcut]);

  return (
    <HStack
      as='nav'
      position='sticky'
      zIndex='popover'
      top={0}
      alignItems='center'
      justifyContent='space-between'
      w='full'
      mb={16}
      py={3}
      bg='white'
      _dark={{
        bg: 'gray.800',
      }}
      insetX={0}
      transitionDuration='normal'
      transitionProperty='background'
    >
      <Container
        alignItems='center'
        justifyContent='space-between'
        display='flex'
        maxW='container.md'
        px={{ base: 4, lg: 0 }}
      >
        <Heading size='sm'>
          <Link as={NextLink} href='/'>
            {/* <Logo/> */}
            Aaron Lin
          </Link>
        </Heading>
        <HStack alignItems='center' spacing={{ base: 0, md: 2 }}>
          {navigationLinks.map((navigationLink) => {
             const isActive = asPath.includes(navigationLink.href);

             return (
              <NextLink href={navigationLink.href} passHref key={navigationLink.label}>
                <Button
                  as={Link}
                  size="sm"
                  colorScheme="gray"
                  variant={isActive ? "solid" : "ghost"}
                  transition={"all 0.2s ease-in-out"}
                  _hover={{
                    background: !isActive ? hoverBg : "",
                    textDecoration: "none",
                  }}
                >
                  {navigationLink.label}
                </Button>
              </NextLink>
            );
          })}
          <Box flex={1} alignItems="right">
            <ThemeToggleButton />
            {/* <ColorModeToggle /> */}
          </Box>
          <Tooltip label={`Command Palette (${shortcut})`}>
            <IconButton
              aria-label='toggle theme'
              icon={<FiCommand />}
              onClick={openCommandPalette}
              size='sm'
              variant='ghost'
            />  
          </Tooltip>
        </HStack>
      </Container>
    </HStack>
  );
};

export default Header;
