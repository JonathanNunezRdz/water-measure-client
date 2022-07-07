import { Box, Flex, Heading, IconButton, Text, VStack } from '@chakra-ui/react';
import { useMemo } from 'react';
import type { FC } from 'react';
import { RiRefreshLine } from 'react-icons/ri';

import { useAppSelector } from 'lib/redux/hooks';
import { selectCistern } from 'lib/redux/reducers/cisternSlice';
import type { Status } from 'lib/types';

import CisternDimensions from './CisternDimensions';
import CisternHistory from './CisternHistory';
import CisternLevels from './CisternLevels';
import CisternSetup from './CisternSetup';

interface CisternDetailsProps {
	currentCisternStatus: Status;
	getCistern: () => void;
}

const CisternDetails: FC<CisternDetailsProps> = ({
	currentCisternStatus,
	getCistern,
}) => {
	const currentCistern = useAppSelector(selectCistern);
	const lastWaterLevel = useMemo(() => {
		if (currentCistern) {
			const { waterLevel } = currentCistern;
			if (waterLevel && waterLevel.length > 0)
				return `${waterLevel[0].level} m`;
		}
		return 'n/a';
	}, [currentCistern]);
	if (!currentCistern)
		return (
			<Box py='2' px='1rem'>
				<Text>Loading...</Text>
			</Box>
		);
	return (
		<Box py='2' px='1rem'>
			<Flex alignItems='center' mt='2' mb='4'>
				<Heading size='lg'>{currentCistern.name}</Heading>
				<IconButton
					ms='2'
					size='sm'
					icon={<RiRefreshLine size={22} />}
					aria-label='refresh cistern'
					isLoading={currentCisternStatus === 'loading'}
					onClick={getCistern}
				/>
			</Flex>
			<VStack align='stretch' gap='2' my='2'>
				<CisternDimensions
					length={currentCistern.length}
					width={currentCistern.width}
				/>
				<CisternLevels
					min={currentCistern.minWaterHeight}
					max={currentCistern.maxWaterHeight}
					current={lastWaterLevel}
				/>
				<CisternHistory
					waterLevel={currentCistern.waterLevel}
					maxWaterHeight={currentCistern.maxWaterHeight}
					minWaterHeight={currentCistern.minWaterHeight}
				/>
				<CisternSetup
					cisternId={currentCistern.id}
					sensorId={currentCistern.sensor.id}
				/>
			</VStack>
		</Box>
	);
};

export default CisternDetails;
