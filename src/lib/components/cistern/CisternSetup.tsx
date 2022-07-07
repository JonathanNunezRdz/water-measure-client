import { Box, Code, Text, VStack } from '@chakra-ui/react';
import type { FC } from 'react';

import { useBoxBg } from 'lib/hooks';

interface CisternSetupProps {
	sensorId: number;
	cisternId: number;
}

const CisternSetup: FC<CisternSetupProps> = ({ sensorId, cisternId }) => {
	const bg = useBoxBg(1);
	return (
		<Box bg={bg} borderRadius='lg' px='1rem' py='2'>
			<Text my='1' fontSize='1.25rem'>
				Setting up your sensor
			</Text>
			<Box my='1'>
				<Text>
					In your RaspberryPi, set the following environmental
					variables:
				</Text>
				<VStack mt='1' alignItems='start'>
					<Code>SENSOR_ID = {sensorId}</Code>
					<Code>CISTERN_ID = {cisternId}</Code>
				</VStack>
			</Box>
		</Box>
	);
};

export default CisternSetup;
