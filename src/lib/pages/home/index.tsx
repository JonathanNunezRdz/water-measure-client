import { Box, Flex, Heading, Text, useBreakpointValue } from '@chakra-ui/react';
import type { FC } from 'react';

import { useBoxBg } from 'lib/hooks';

const Home: FC = () => {
	const bg = useBoxBg(0);
	const label = useBreakpointValue({ base: 'top', md: 'left' });
	return (
		<Box bg={bg} borderRadius='md'>
			<Box py='2' px='4'>
				<Flex alignItems='center' my='2'>
					<Heading size='lg'>No cistern selected.</Heading>
				</Flex>
				<Box my='2'>
					<Text fontSize='1.25rem'>
						Select a cistern from the {label} menu or register a new
						one.
					</Text>
				</Box>
			</Box>
		</Box>
	);
};

export default Home;
