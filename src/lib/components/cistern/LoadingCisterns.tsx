import { Box, Center, Spinner } from '@chakra-ui/react';
import type { FC } from 'react';

const LoadingCisterns: FC = () => {
	return (
		<Box mx='4' px='2' width='100%'>
			<Center>
				<Spinner size='xl' />
			</Center>
		</Box>
	);
};

export default LoadingCisterns;
