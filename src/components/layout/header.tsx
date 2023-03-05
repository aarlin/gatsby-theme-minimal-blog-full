import {
  Box,
  chakra,
  Container,
  Flex,
  Heading,
  HStack,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";

import { useRouter } from "next/router";
import { ToggleThemeButton } from "src/components/toggle-theme-button";
import { LAYOUT_CONTAINER_MAX_WIDTH } from "src/constants";
import { navigationLinks } from "src/data/links";

const NavigationLink = ({ name, href }) => {
  const router = useRouter();
  const isActive = `/${router.pathname.split("/")[1]}` === href;

  const textColorLight = useColorModeValue("green.600", "green.500");
  const textColorDark = useColorModeValue("blue.700", "blue.400");

  return (
    <Link
      as={NextLink}
      href={href}
      px={2}
      py={1}
      rounded="full"
      _hover={{ color: textColorLight }}
      color={isActive ? textColorLight : textColorDark}
    >
      <Text fontSize="sm">{name}</Text>
      {isActive && (
        <Box
          bgGradient="linear(to-r, blackAlpha.50, green.500, blackAlpha.50)"
          bottom="-1px"
          height="2px"
          pos="absolute"
          width="1.2%"
          zIndex="1"
        />
      )}
    </Link>
  );
};

const Header = () => {
  return (
    <HStack
      as="nav"
      position="sticky"
      zIndex="popover"
      top={0}
      alignItems="center"
      justifyContent="space-between"
      w="full"
      mb={16}
      py={3}
      bg="white"
      _dark={{
        bg: "gray.800",
      }}
      insetX={0}
      opacity="0.95"
      transitionDuration="normal"
      transitionProperty="background"
      id="navbar"
    >
      <Container
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        maxW={LAYOUT_CONTAINER_MAX_WIDTH}
        px={{ base: 4, lg: 0 }}
      >
        <Flex alignItems="center" fontWeight="bold">
          <Heading size="sm">
            <Link
              as={NextLink}
              href="/"
              _hover={{
                color: "green.500",
              }}
            >
              {/* <Logo/> */}
              Aaron Lin
            </Link>
          </Heading>
        </Flex>
        <Flex alignItems="center" fontWeight="bold">
          <HStack spacing={4}>
            {navigationLinks.map((navigationLink) => (
              <NavigationLink
                key={navigationLink.label}
                href={navigationLink.href}
                name={navigationLink.label}
              />
            ))}
            <ToggleThemeButton />
          </HStack>
        </Flex>
      </Container>
    </HStack>
  );
};

export default Header;
