import type { FC } from 'react';

import SidebarLink from '../sidebar/SidebarLink';
import type { CisternName } from 'lib/types';

interface CisternLinksProps {
	cisternNames: CisternName[];
}

const CisternLinks: FC<CisternLinksProps> = ({ cisternNames }) => {
	return (
		<>
			{cisternNames.map(({ id, name }) => (
				<SidebarLink key={id} label={name} />
			))}
		</>
	);
};

export default CisternLinks;
