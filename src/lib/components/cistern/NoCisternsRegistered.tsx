import { Box, Text } from '@chakra-ui/react';
import type { FC } from 'react';

const NoCisternsRegistered: FC = () => (
	<Box border='1px' borderRadius='md' mx='4' px='2'>
		<Text align='center'>There are no cisterns registered.</Text>
	</Box>
);

export default NoCisternsRegistered;
