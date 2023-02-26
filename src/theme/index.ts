import { extendTheme, theme as base, ThemeConfig } from '@chakra-ui/react';
import colors from './options/colors'
import config from './options/config'
import fontSizes from './options/font-sizes'
import fonts from './options/fonts'
import mdx from './options/mdx'
import semanticTokens from './options/semantic-tokens'
import styles from './options/styles'

const inputBorder = () => ({
  _focus: {
    borderColor: 'green.300',
    _dark: {
      borderColor: 'green.600',
    },
  },
});

const theme = extendTheme({
  // colors,
  // config,
  // fontSizes,
  // fonts,
  // semanticTokens,
  // styles,
  mdx,
  styles: {
    global: {
      body: {
        fontFeatureSettings: '"ss02"',
      },
    },
  },
  sizes: {
    18: '4.5rem',
  },
  components: {
    Heading: {
      baseStyle: {
        color: 'gray.700',
        letterSpacing: '1px',

        _dark: {
          color: 'white',
        },
      },
    },
    Text: {
      baseStyle: {
        color: 'gray.700',
        _dark: {
          color: 'white',
        },
      },
    },
    Input: {
      variants: {
        filled: {
          field: {
            ...inputBorder,
          },
        },
      },
    },
    Textarea: {
      variants: {
        filled: {
          ...inputBorder,
        },
      },
    },
  },
  fonts: {
    heading: `Cal Sans, ${base.fonts.heading}`,
    body: `Inter, ${base.fonts.body}`,
  },
});

export default theme;
