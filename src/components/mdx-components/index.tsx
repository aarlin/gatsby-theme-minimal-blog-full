import {
  Alert,
  Box,
  chakra,
  Link,
  HTMLChakraProps,
  Kbd,
  useColorMode,
  useColorModeValue,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import NextImage from "next/image";
import slugify from "slugify";
import Highlight, { defaultProps } from "prism-react-renderer";
import darkTheme from "prism-react-renderer/themes/shadesOfPurple";
import lightTheme from "prism-react-renderer/themes/duotoneLight";
import { useId, useState } from "react";
// import Copy from '../copy';
import { CopyToClipboard } from "react-copy-to-clipboard";
import { BiCopy, BiCheck } from "react-icons/bi";
import { HiCheckCircle, HiClipboard } from "react-icons/hi";

const ChakraHighlight = chakra(Highlight, {
  shouldForwardProp: (prop) =>
    ["Prism", "theme", "code", "language", "children"].includes(prop),
});

const Pre = (props) => <chakra.div my="2em" borderRadius="sm" {...props} />;

const Table = (props) => (
  <chakra.div overflowX="auto">
    <chakra.table textAlign="left" mt="32px" width="full" {...props} />
  </chakra.div>
);

const THead = (props) => (
  <chakra.th
    bg="gray.50"
    _dark={{
      bg: "whiteAlpha.100",
    }}
    fontWeight="semibold"
    p={2}
    fontSize="sm"
    {...props}
  />
);

const TData = (props) => (
  <chakra.td
    p={2}
    borderTopWidth="1px"
    borderColor="inherit"
    fontSize="sm"
    whiteSpace="normal"
    {...props}
  />
);

const CodeHighlight = ({ children: codeString, className: language }: any) => {
  const theme = useColorModeValue(lightTheme, darkTheme);
  const codeId = useId();
  const [copied, setCopied] = useState(false);

  const buttonColor = useColorModeValue('rgba(0, 0, 0, 0.7)', 'rgba(255, 255, 255)');
  const languageColor = useColorModeValue("white", "black");
  const checkColor = useColorModeValue("green.300", "#ffffff")

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!language) {
    return (
      <chakra.code
        apply="mdx.code"
        color="green.500"
        _dark={{
          color: "green.200",
          bg: "green.900",
        }}
        bg="green.50"
        px={1}
        py={0.5}
        rounded={{ base: "none", md: "md" }}
      >
        {codeString}
      </chakra.code>
    );
  }
  language = language.replace("language-", "");
  const showLineNumbers = !["shell", "text"].includes(language);

  return (
    <Box position="relative" marginBottom="1rem">
      <chakra.div justifyContent="flex-end" pb={2}>
        <Box 
            position="absolute"
            top="0"
            left="0"
            bg={buttonColor}
            color={languageColor}
            borderRadius="0.25rem"
            fontSize="0.8rem"
            fontWeight="bold"
            px="0.5rem"
            py="0.2rem"
            textTransform="lowercase"
        >{language}</Box>
      </chakra.div>
      <ChakraHighlight
        {...defaultProps}
        code={codeString}
        language={language}
        theme={theme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => {
          tokens.pop();
          return (
            <div data-language={className}>
              <chakra.pre
                className={className}
                sx={{ ...style, backgroundColor: "gray.50" }}
                _dark={{
                  backgroundColor: "gray.900",
                }}
                overflowX="auto"
                rounded="md"
                p={4}
                mx={-4}
              >
                <chakra.div justifyContent="flex-end" pb={2}>
                  <CopyToClipboard text={codeString} onCopy={handleCopy}>
                    <IconButton
                      position="absolute"
                      top="50%"
                      right="0"
                      transform="translateY(-50%)"
                      padding="0.2rem 0.5rem"
                      backgroundColor="transparent"
                      border="none"
                      borderRadius="0.25rem"
                      icon={copied ? <HiCheckCircle color={checkColor} /> : <HiClipboard/>}
                      aria-label="Copy code"
                      onClick={handleCopy}
                    />
                  </CopyToClipboard>
                </chakra.div>
                {tokens.map((line, i) => {
                  const lineProps = getLineProps({ line, key: i });
                  return (
                    <chakra.div
                      {...lineProps}
                      display="table-row"
                      key={`${codeId}.${i}`}
                    >
                      {showLineNumbers && (
                        <chakra.span
                          key={`${codeId}.${i}.number`}
                          w={8}
                          display="table-cell"
                          textAlign="right"
                          userSelect="none"
                          color="blackAlpha.500"
                          pr={3}
                          _dark={{
                            color: "whiteAlpha.500",
                          }}
                        >
                          {i + 1}
                        </chakra.span>
                      )}
                      {line.map((token, key) => {
                        return (
                          <chakra.span
                            {...getTokenProps({ token, key })}
                            key={`${codeId}.${i}.${key}`}
                          />
                        );
                      })}
                    </chakra.div>
                  );
                })}
              </chakra.pre>
            </div>
          );
        }}
      </ChakraHighlight>
    </Box>
  );
};

const LinkedHeading = (props: HTMLChakraProps<"h2">) => {
  const slug = slugify(props.children as string, { lower: true });
  return (
    <Link alignItems="flex-end" display="flex" href={`#${slug}`} role="group">
      <Box
        {...props}
        display="inline"
        color="gray.700"
        fontFamily="heading"
        _dark={{
          color: "white",
        }}
      >
        {props.children}
      </Box>
      <chakra.span
        aria-label="anchor"
        color="green.500"
        userSelect="none"
        fontWeight="normal"
        outline="none"
        _focus={{ opacity: 1, boxShadow: "outline" }}
        opacity={0}
        _groupHover={{ opacity: 1 }}
        ml="0.375rem"
      >
        #
      </chakra.span>
    </Link>
  );
};

const Image = (props) => {
  return (
    <NextImage {...props} layout="responsive" loading="lazy" quality={100} />
  );
};

const Anchor = (props) => (
  <chakra.a color="green.500" _dark={{ color: "green.300" }} {...props} />
);

const MDXComponents = {
  code: CodeHighlight,
  h1: (props) => <LinkedHeading as="h1" apply="mdx.h1" {...props} />,
  h2: (props) => <LinkedHeading as="h2" apply="mdx.h2" {...props} />,
  h3: (props) => <LinkedHeading as="h3" apply="mdx.h3" {...props} />,
  h4: (props) => <LinkedHeading as="h4" apply="mdx.h4" {...props} />,
  hr: (props) => <chakra.hr apply="mdx.hr" {...props} />,
  strong: (props) => <Box as="strong" fontWeight="semibold" {...props} />,
  pre: Pre,
  kbd: Kbd,
  img: Image,
  br: (props) => <Box as={"br"} h={undefined} {...props} />,
  table: Table,
  th: THead,
  td: TData,
  a: Anchor,
  p: (props) => <chakra.p apply="mdx.p" {...props} />,
  ul: (props) => (
    <chakra.ul px={{ base: 4, md: 0 }} apply="mdx.ul" {...props} />
  ),
  ol: (props) => <chakra.ol apply="mdx.ul" {...props} />,
  li: (props) => <chakra.li pb="4px" {...props} />,
  blockquote: (props) => (
    <Box>
      <Alert
        as="blockquote"
        role="none"
        rounded="4px"
        status="warning"
        variant="left-accent"
        {...props}
        w="unset"
        mx={-4}
      />
    </Box>
  ),
};

export default MDXComponents;
