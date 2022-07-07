import { Box, Text } from '@chakra-ui/react';
import type { FC } from 'react';

import { useBoxBg } from 'lib/hooks';
import type { WaterLevel } from 'lib/types';

import CisternWaterLevelChart from './CisternWaterLevelChart';

interface CisternHistoryProps {
	waterLevel: WaterLevel[];
	maxWaterHeight: number;
	minWaterHeight: number;
}

const CisternHistory: FC<CisternHistoryProps> = ({
	waterLevel,
	maxWaterHeight,
	minWaterHeight,
}) => {
	const bg = useBoxBg(1);
	return (
		<Box bg={bg} borderRadius='lg' px='1rem' py='2'>
			<Text my='1' fontSize='1.25rem'>
				History
			</Text>
			<CisternWaterLevelChart
				waterLevel={waterLevel}
				maxWaterHeight={maxWaterHeight}
				minWaterHeight={minWaterHeight}
			/>
		</Box>
	);
};

export default CisternHistory;
