import { VStack, Heading, Text, AspectRatio } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const NotFound = () => {
	const [videoVersion, setVideoVersion] = useState<number>();

	// Have to use useEffect because Next.js will hardcode the video version on build time (static generation)
	useEffect(() => {
		setVideoVersion((new Date().getSeconds() % 3) + 1);
	}, [setVideoVersion]);

	return (
		<VStack w="full" spacing={12}>
			<VStack w="full" spacing={4}>
				<Heading>404 - Page Not Found</Heading>
				<Text>Unfortunately we couldn't find what you were looking for 😕</Text>
			</VStack>
		</VStack>
	);
};

export default NotFound;
