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
  Flex,
} from '@chakra-ui/react';
import NextLink from 'next/link';

import { motion } from 'framer-motion';
import { Logo } from 'src/components/logo';
import ThemeToggleButton from '../theme-toggle';
import { useRouter } from "next/router";
import { navigationLinks } from 'src/data/links';
import RouterLink from 'next/link'
import { DarkThemeButton } from 'src/components/dark-theme-button';

interface NavigationLinkProps {
  href: string
  textLink: string
}

function NavigationLink(props: NavigationLinkProps) {
  const { href, textLink } = props

  const router = useRouter()

  const isActive = router.pathname === href

  return (
    <RouterLink href={href} passHref>
      <Link
        _hover={{
          textColor: 'secondary.400',
        }}
        pointerEvents={isActive ? 'none' : undefined}
        textColor={isActive && 'secondary.400'}
      >
        {textLink}
      </Link>
    </RouterLink>
  )
}


const Header = () => {
  const MotionButton = motion(Button);
  const { asPath } = useRouter();
  const hoverBg = useColorModeValue("gray.200", "gray.900");

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
        <Flex>
        <Heading size='sm'>
          <Link as={NextLink} href='/'>
            {/* <Logo/> */}
            Aaron Lin
          </Link>
        </Heading>

        </Flex>
        <Flex alignItems="center" fontSize="sm" fontWeight="bold" columnGap="5">
          
          {navigationLinks.map((navigationLink) => {
            return (
              <NavigationLink href={navigationLink.href} textLink={navigationLink.label} />
            )
          })}
          <DarkThemeButton />
        </Flex>
      </Container>
    </HStack>
  );
};

export default Header;
