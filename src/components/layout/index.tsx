import { Container, VStack } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { LAYOUT_CONTAINER_MAX_WIDTH } from 'src/constants';

import Footer from './footer';
import Header from './header';

type Props = PropsWithChildren<{}>;

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Container
        display='flex'
        maxW={LAYOUT_CONTAINER_MAX_WIDTH}
        minH={{ base: 'auto', md: '100vh' }}
        px={{ base: 4, lg: 0 }}
      >
        <VStack alignItems='stretch' flex={1} w='full' spacing={16}>
          <VStack as='main' flex={1} w='full' spacing={16}>
            {children}
          </VStack>
          <Footer />
        </VStack>
      </Container>
    </>
  );
};

export default Layout;
