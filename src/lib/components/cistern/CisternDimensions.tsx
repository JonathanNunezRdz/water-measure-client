import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import type { FC } from 'react';

import { useBoxBg } from 'lib/hooks';

interface CisternDimensionsProps {
	length: number;
	width: number;
}

const CisternDimensions: FC<CisternDimensionsProps> = ({ length, width }) => {
	const bg = useBoxBg(1);
	return (
		<Box bg={bg} borderRadius='lg' px='1rem' py='2'>
			<Text my='1' fontSize='1.25rem'>
				Dimensions
			</Text>
			<SimpleGrid my='1' columns={{ base: 1, sm: 2, xl: 3 }}>
				<Box width='100%'>
					<SimpleGrid columns={2}>
						<Text>Length:</Text>
						<Text textAlign='center'>{length.toFixed(2)} m</Text>
					</SimpleGrid>
				</Box>
				<Box width='100%'>
					<SimpleGrid columns={2}>
						<Text>Width:</Text>
						<Text textAlign='center'>{width.toFixed(2)} m</Text>
					</SimpleGrid>
				</Box>
			</SimpleGrid>
		</Box>
	);
};

export default CisternDimensions;
