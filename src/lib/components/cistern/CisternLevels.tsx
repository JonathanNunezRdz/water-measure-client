import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import type { FC } from 'react';

import { useBoxBg } from 'lib/hooks';
import { truncateDecimal } from 'lib/utils';

interface CisternLevelsProps {
	min: number;
	max: number;
	current: number | string;
	length: number;
	width: number;
}

const CisternLevels: FC<CisternLevelsProps> = ({
	min,
	max,
	current,
	length,
	width,
}) => {
	const bg = useBoxBg(1);
	const waterLevel = () => {
		if (typeof current === 'number') return `${truncateDecimal(current)} m`;
		return current;
	};
	const waterCapacity = () => {
		if (typeof current === 'number')
			return `${truncateDecimal(length * width * current * 1000)} l`;
		return 'n/a';
	};
	return (
		<Box bg={bg} borderRadius='lg' px='1rem' py='2'>
			<Text my='1' fontSize='1.25rem'>
				Levels
			</Text>
			<SimpleGrid my='1' columns={{ base: 1, sm: 2, xl: 3 }}>
				<Box width='100%'>
					<SimpleGrid columns={2}>
						<Text>Minimum water level:</Text>
						<Text textAlign='center'>{truncateDecimal(min)} m</Text>
					</SimpleGrid>
				</Box>
				<Box width='100%'>
					<SimpleGrid columns={2}>
						<Text>Maximum water level:</Text>
						<Text textAlign='center'>{truncateDecimal(max)} m</Text>
					</SimpleGrid>
				</Box>
				<Box width='100%'>
					<SimpleGrid columns={2}>
						<Text>Current water level:</Text>
						<Text textAlign='center'>{waterLevel()}</Text>
					</SimpleGrid>
				</Box>
				<Box width='100%'>
					<SimpleGrid columns={2}>
						<Text>Current water volume:</Text>
						<Text textAlign='center'>{waterCapacity()}</Text>
					</SimpleGrid>
				</Box>
			</SimpleGrid>
		</Box>
	);
};

export default CisternLevels;
