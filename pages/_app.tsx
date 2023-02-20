import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import "cal-sans";

import theme from "../src/theme";
import Layout from "@/components/layout";
import CmdPalette from "@/components/cmd-palette";
import CmdPaletteProvider from "src/providers/cmd-palette-provider";

import "../style.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <NextSeo
        title="Aaron Lin - Developer"
        description="Full-stack Engineer"
        openGraph={{
          url: "https://aarlin.netlify.com",
          title: "Aaron Lin - Developer",
          description:
            "Full-stack Engineer, UI Designer, and Open Source Advocate.",
          locale: "en_US",
          images: [
            {
              url: "https://aarlin.netlify.com/assets/images/aaron.jpeg",
              width: 1200,
              height: 630,
              alt: "Aaron Lin",
              type: "image/png",
            },
          ],
        }}
      />
      <CmdPaletteProvider>
        <Layout>
          <CmdPalette />
          <Component {...pageProps} />
        </Layout>
      </CmdPaletteProvider>
    </ChakraProvider>
  );
};

export default App;
