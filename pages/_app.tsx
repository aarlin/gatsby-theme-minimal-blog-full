import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import "cal-sans";

import theme from "../src/theme";
import Layout from "@/components/layout";

import "../style.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <NextSeo
        title="Aaron Lin - Software Engineer"
        description="Software Engineer"
        openGraph={{
          url: "https://aarlin.netlify.com",
          title: "Aaron Lin - Software Engineer",
          description:
            "Software Engineer",
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
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </ChakraProvider>
  );
};

export default App;
