import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { chakra, Stack, VStack, HStack, Divider, Link, Text } from '@chakra-ui/react';

import {
  GITHUB_PROFILE, LINKEDIN_PROFILE
} from '../../constants';
import { Link as LinkType } from '@/types/link';
import { SiGithub, SiLinkedin } from 'react-icons/si';

const externalLinks = [
  {
    href: GITHUB_PROFILE,
    icon: SiGithub,
    label: 'GitHub',
  },
  {
    href: LINKEDIN_PROFILE,
    icon: SiLinkedin,
    label: 'LinkedIn'
  }
];


const Footer = () => {
  const { pathname } = useRouter();

  return (
    <VStack as='footer' alignItems='flex-start' pb={8} spacing={8}>
      <Divider />
      <Stack
        justifyContent='space-between'
        direction={{ base: 'column', md: 'row' }}
        w='full'
        spacing={{ base: 2, md: 8 }}
      >
        <HStack alignItems='flex-center'>
          {externalLinks.map(({ href, label }) => (
            <Link
              key={href}
              as={NextLink}
              color='gray.500'
              href={href}
              isExternal={href.startsWith('http')}
              target='_blank'
            >
              {label}
            </Link>
          ))}
        </HStack>
      </Stack>
      <Stack
        alignItems='center'
        justifyContent={{ base: 'center', md: 'space-between' }}
        direction={{ base: 'column', md: 'row' }}
        gridRowGap={4}
        w='full'
        spacing={0}
      >
        <Text color='gray.500' fontSize='sm'>
          ©{' '}
          <chakra.span as='time' color='purple.500'>
            {new Date().getFullYear()}
          </chakra.span>{' '}
          Aaron Lin
        </Text>
      </Stack>
    </VStack>
  );
};

export default Footer;
