import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import type { FC } from 'react';

import { useBoxBg } from 'lib/hooks';

interface CisternLevelsProps {
	min: number;
	max: number;
	current: string;
}

const CisternLevels: FC<CisternLevelsProps> = ({ min, max, current }) => {
	const bg = useBoxBg(1);
	return (
		<Box bg={bg} borderRadius='lg' px='1rem' py='2'>
			<Text my='1' fontSize='1.25rem'>
				Levels
			</Text>
			<SimpleGrid my='1' columns={{ base: 1, sm: 2, xl: 3 }}>
				<Box width='100%'>
					<SimpleGrid columns={2}>
						<Text>Minimum water level:</Text>
						<Text textAlign='center'>{min} m</Text>
					</SimpleGrid>
				</Box>
				<Box width='100%'>
					<SimpleGrid columns={2}>
						<Text>Maximum water level:</Text>
						<Text textAlign='center'>{max} m</Text>
					</SimpleGrid>
				</Box>
				<Box width='100%'>
					<SimpleGrid columns={2}>
						<Text>Current water level:</Text>
						<Text textAlign='center'>{current}</Text>
					</SimpleGrid>
				</Box>
			</SimpleGrid>
		</Box>
	);
};

export default CisternLevels;
