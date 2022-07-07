import { Box, IconButton, Flex, Heading, Show } from '@chakra-ui/react';
import Link from 'next/link';
import { RiMenuFill } from 'react-icons/ri';

import ThemeToggle from './ThemeToggle';

type HeaderProps = {
	handleToggle: () => void;
};

const Header = ({ handleToggle }: HeaderProps) => {
	return (
		<Flex as='header' width='full' align='center'>
			<Show below='md'>
				<IconButton
					aria-label='open menu'
					icon={<RiMenuFill />}
					onClick={handleToggle}
					me='1rem'
				/>
			</Show>
			<Heading as='h1' size='md'>
				<Link href='/'>water-measure</Link>
			</Heading>

			<Box marginLeft='auto'>
				<ThemeToggle />
			</Box>
		</Flex>
	);
};

export default Header;
