import {
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	DrawerHeader,
	DrawerBody,
} from '@chakra-ui/react';
import type { FC } from 'react';

import Sidebar from './Sidebar';

interface SidebarDrawerProps {
	isOpen: boolean;
	onClose: () => void;
}

const SidebarDrawer: FC<SidebarDrawerProps> = ({ isOpen, onClose }) => {
	return (
		<Drawer isOpen={isOpen} placement='left' onClose={onClose}>
			<DrawerOverlay />
			<DrawerContent>
				<DrawerCloseButton />
				<DrawerHeader>Select cister</DrawerHeader>
				<DrawerBody>
					<Sidebar onClose={onClose} />
				</DrawerBody>
			</DrawerContent>
		</Drawer>
	);
};

export default SidebarDrawer;
