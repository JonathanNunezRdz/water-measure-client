import { Box, useBreakpointValue, useColorModeValue } from '@chakra-ui/react';
import type { FC } from 'react';

import Cisterns from 'lib/components/cistern/Cisterns';

interface SideBarProps {
	onClose: () => void;
}

const Sidebar: FC<SideBarProps> = ({ onClose }) => {
	const bgWhite = useBreakpointValue({ base: 'white', md: 'gray.200' });
	const bg = useColorModeValue(bgWhite, 'gray.700');
	const width = useBreakpointValue({
		base: undefined,
		md: '200px',
	});
	const marginEnd = useBreakpointValue({
		base: undefined,
		md: '1rem',
	});

	return (
		<Box
			bg={bg}
			me={marginEnd}
			borderRadius='md'
			py='4'
			width={width}
			onClick={onClose}
		>
			<Cisterns />
		</Box>
	);
};

export default Sidebar;
