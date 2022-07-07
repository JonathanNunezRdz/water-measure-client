import { Box, Flex, Show, useDisclosure } from '@chakra-ui/react';
import type { ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import SidebarDrawer from './SidebarDrawer';

type LayoutProps = {
	children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	const { isOpen, onClose, onToggle } = useDisclosure();
	return (
		<Box margin='0' transition='0.5s ease-out'>
			<Box margin='6'>
				<Header handleToggle={onToggle} />
				<Show below='md'>
					<SidebarDrawer isOpen={isOpen} onClose={onClose} />
				</Show>

				<Flex as='main' marginY={22}>
					<Show above='md'>
						<Sidebar onClose={onClose} />
					</Show>
					<Box flex='1'>{children}</Box>
				</Flex>
				<Footer />
			</Box>
		</Box>
	);
};

export default Layout;
