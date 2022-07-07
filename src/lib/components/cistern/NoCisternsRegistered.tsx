import { Box, Text } from '@chakra-ui/react';
import type { FC } from 'react';

const NoCisternsRegistered: FC = () => (
	<Box border='1px' borderRadius='md' width='100%'>
		<Text align='center'>There are no cisterns registered.</Text>
	</Box>
);

export default NoCisternsRegistered;
