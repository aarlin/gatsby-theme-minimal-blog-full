import React from "react";
import { ColorModeScript } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";

import theme from "../src/theme";

const Doc = () => (
	<Html lang='en'>
		<Head>
			<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
		</Head>
		<body>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<Main />
			<NextScript />
		</body>
	</Html>
);

export default Doc;
