import { socialLinks } from "@/data/links";
import {
	Box,
	ButtonGroup,
	Container,
	Flex,
	IconButton,
	Text,
} from "@chakra-ui/react";
import ExternalLink from "@/components/ExternalLink";
import { LAYOUT_CONTAINER_MAX_WIDTH } from "src/constants";

const Footer = () => (
	<Container maxW={LAYOUT_CONTAINER_MAX_WIDTH}>
		<Flex justify="center" direction="row" align="center">
			<ButtonGroup variant="ghost">
				{socialLinks.map((link) => (
					<IconButton
						key={link.label}
						as="a"
						href={link.href}
						_hover={{
							bg: "transparent",
							color: "green.500",
						}}
						aria-label={link.label}
						icon={<link.icon />}
					/>
				))}
			</ButtonGroup>
		</Flex>
		<Flex
			width="100%"
			display={{ base: "block", sm: "flex" }}
			justifyContent="space-between"
			alignItems="center"
			direction={{ base: "column", sm: "row" }}
			px={{ base: "5", sm: "6" }}
			paddingBottom={{ base: "3.5", sm: "4" }}
			textAlign="center"
		>
			<Box
				display="inline-block"
				position="relative"
				_hover={{
					"& .opening-brace": {
						color: "green.500",
						transform: "translateX(-3px)",
					},
					"& .closing-brace": {
						color: "green.500",
						transform: "translateX(3px)",
					},
					"& .developer-name": {
						color: "green.500",
					},
				}}
			>
				<Box
					display="inline-block"
					left="0"
					transition="transform 0.2s"
					className="opening-brace"
					_hover={{ transform: "translateX(-3px)" }}
					mb={3}
				>
					{"{ "}
				</Box>{" "}
				Developed by{" "}
				<Text as="span" fontWeight="bold" className="developer-name">
					Aaron Lin
				</Text>{" "}
				<Box
					display="inline-block"
					right="0"
					transition="transform 0.2s"
					className="closing-brace"
					_hover={{ transform: "translateX(3px)" }}
				>
					{" }"}
				</Box>
			</Box>

			<Text fontSize="sm" mt={{ base: "-1", sm: "0" }} mb="3">
				Built with{" "}
				<ExternalLink href={"https://nextjs.org/"}>Next.js</ExternalLink> and{" "}
				<ExternalLink href={"https://chakra-ui.com/"}>Chakra UI</ExternalLink>
			</Text>
		</Flex>
	</Container>
);

export default Footer;
