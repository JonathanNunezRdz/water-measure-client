import { Box, Text } from '@chakra-ui/react';
import type { FC } from 'react';

const NoCisternsRegistered: FC = () => (
	<Box mx='4' px='2' width='100%'>
		<Text align='center'>There are no cisterns registered.</Text>
	</Box>
);

export default NoCisternsRegistered;
