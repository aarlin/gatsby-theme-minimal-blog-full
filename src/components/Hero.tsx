import {
  Button, Flex, Heading, Icon, Stack, Text, VStack
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { SiLinkedin } from 'react-icons/si';

import ExternalLink from '@/components/ExternalLink';
import HeroImage from '@/components/HeroImage';
import Link from 'next/link';

const SocialLinks = () => {
  return (
    <Stack direction={{ base: 'column', md: 'row' }} spacing={3}>
      <Link href='https://github.com/aarlin' passHref>
        <Button
          as="a"
          variant='outline'
          colorScheme='primary'
          leftIcon={<Icon width="3.5" as={FaGithub} mr="-1" />}
          transition="all 0.3s ease-in-out"
          _hover={{
            transform: "scale(1.1)",
            boxShadow: "lg",
          }}
        >
          GitHub
        </Button>
      </Link>
      <Link href='https://www.linkedin.com/in/aarlin256/' passHref>
        <Button
          as="a"
          variant='outline'
          colorScheme='linkedin'
          leftIcon={<Icon width="3.5" as={SiLinkedin} mr="-1" />}
          transition="all 0.3s ease-in-out"
          _hover={{
            transform: "scale(1.1)",
            boxShadow: "lg",
          }}
        >
          LinkedIn
        </Button>
      </Link>
    </Stack>
  );
};


const Hero = () => (
  <Stack
    as='section'
    alignItems='center'
    direction={{ base: 'column-reverse', md: 'row' }}
    w='full'
    spacing={12}
  >
    <VStack alignItems='flex-start' w='full' spacing={3}>
      <Stack
        alignItems='center'
        justifyContent={{ base: 'center', md: 'flex-start' }}
        direction={{ base: 'column', md: 'row' }}
        w='full'
        spacing={3}
      >
        <Heading as='h1' size='lg'>
          Hi, I’m Aaron
        </Heading>
      </Stack>
      <Text as='h2' lineHeight='175%'>
        My current role is a Software Engineer II at <ExternalLink href='https://liveperson.com'>LivePerson</ExternalLink>.
        {' '}
        I have interests in web development, reverse engineering, and 3D printing
      </Text>
      <SocialLinks/>
    </VStack>
    <HeroImage />
  </Stack>
);

export default Hero;
