import { Heading, Stack, Text, VStack } from '@chakra-ui/react';

import ExternalLink from '@/components/ExternalLink';
import HeroImage from '@/components/HeroImage';
import SocialLinks from './SocialLinks';

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
