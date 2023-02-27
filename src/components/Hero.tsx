import {
  Button, Flex, Heading, Icon, Stack, Text, VStack
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { SiLinkedin } from 'react-icons/si';

import ExternalLink from '@/components/ExternalLink';
import HeroImage from '@/components/HeroImage';

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
      <Stack direction={{ base: 'column', md: 'row' }} spacing={3}>
        <Flex justifyContent="start" gap="3">
          <Button variant='outline' colorScheme='primary' as="a" href='https://github.com/aarlin' leftIcon={<Icon width="3.5" as={FaGithub} mr="-1" />}>
            GitHub
          </Button>
          <Button variant='outline' colorScheme='linkedin' as="a" href='https://www.linkedin.com/in/aarlin256/' leftIcon={<Icon width="3.5" as={SiLinkedin} mr="-1" />}>
            LinkedIn
          </Button>
        </Flex>
      </Stack>
    </VStack>
    <HeroImage />
  </Stack>
);

export default Hero;
