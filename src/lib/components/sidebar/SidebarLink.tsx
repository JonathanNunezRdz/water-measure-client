import { Button, LinkBox, LinkOverlay } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import type { FC } from 'react';

import { useAppDispatch } from 'lib/redux/hooks';
import { getCistern } from 'lib/redux/reducers/cisternSlice';

interface SidebarLinkProps {
	label: string;
	to?: string;
}

const SidebarLink: FC<SidebarLinkProps> = ({ label, to }) => {
	const dispatch = useAppDispatch();
	const { isReady, asPath } = useRouter();
	const url = to || `/cistern/${encodeURIComponent(label)}`;
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		if (isReady) {
			const linkPathname = new URL(url, window.location.href).pathname;
			const activePathname = new URL(asPath, window.location.href)
				.pathname;
			const newActive = linkPathname === activePathname;

			if (isActive !== newActive) setIsActive(newActive);
		}
	}, [isReady, asPath, url, label, isActive, setIsActive]);

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const handleClick = () => {
		if (to) return;
		dispatch(getCistern(label));
	};

	return (
		<LinkBox>
			<NextLink href={url} passHref>
				<LinkOverlay>
					<Button>{label}</Button>
				</LinkOverlay>
			</NextLink>
		</LinkBox>
	);
};

export default SidebarLink;
