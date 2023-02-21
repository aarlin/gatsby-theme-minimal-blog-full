import {
  Stack,
  VStack,
  Heading,
  Text,
  Button,
  Icon,
  Link,
} from '@chakra-ui/react';
import { FiArrowUpRight } from 'react-icons/fi';

import ExternalLink from '../external-link';
import HeroImage from '../hero-image';

const Hero = () => {
  return (
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
        </Stack>
      </VStack>
      <HeroImage />
    </Stack>
  );
};

export default Hero;
