import {
  Box, Container,
  Flex,
  Heading,
  HStack,
  Link,
  Text,
  useColorModeValue
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
    <NextLink href={href} passHref>
      <Link borderRadius="full" p="0.5" position="relative" role="group">
        <Flex py={1} px={2} rounded="full" align="end" justifyContent="center">
          <Text
            fontSize="sm"
            color={isActive ? textColorLight : textColorDark}
            _groupHover={{
              color: textColorLight,
            }}
          >
            {name}
          </Text>
          {isActive && (
            <Box
              height="1px"
              width="70%"
              pos="absolute"
              top="10"
              bgGradient="linear(to-r, blackAlpha.50, orange.500, blackAlpha.50)"
            ></Box>
          )}
        </Flex>
      </Link>
    </NextLink>
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
    >
      <Container
        alignItems="center"
        justifyContent="space-between"
        display="flex"
        maxW={LAYOUT_CONTAINER_MAX_WIDTH}
        px={{ base: 4, lg: 0 }}
      >
        <Flex alignItems="center" fontWeight="bold" columnGap="5">
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
        <Flex alignItems="center" fontSize="sm" fontWeight="bold" columnGap="5">
          {navigationLinks.map((navigationLink) => {
            return (
              <NavigationLink
                key={navigationLink.label}
                href={navigationLink.href}
                name={navigationLink.label}
              />
            );
          })}
          <ToggleThemeButton />
        </Flex>
      </Container>
    </HStack>
  );
};

export default Header;
