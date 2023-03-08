import { Box, AspectRatio, Flex } from "@chakra-ui/react";

import Image from "@/components/Image";

const HeroImage = () => {
	return (
		<Flex position='relative' justify='center' pb={4}>
			<AspectRatio as='figure' flexShrink={0} w={56} h={56} ratio={1}>
				<Box overflow='hidden'>
					<Image
						alt='Aaron Lin'
						src='/assets/images/aaron.jpeg'
						width={224}
						height={224}
						borderRadius='10px'
					/>
				</Box>
			</AspectRatio>
		</Flex>
	);
};

export default HeroImage;
