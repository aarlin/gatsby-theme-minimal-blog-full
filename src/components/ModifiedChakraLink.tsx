import NextLink, { LinkProps } from 'next/link';
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';

type Props = LinkProps & ChakraLinkProps;

const ModifiedChakraLink = ({ href, children, ...rest }: Props) => {
  return (
    <ChakraLink as={NextLink} href={href} {...rest} color='green.500'>
      {children}
    </ChakraLink>
  );
};

export default ModifiedChakraLink;
