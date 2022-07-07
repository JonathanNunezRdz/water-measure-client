import type { FC } from 'react';

import SidebarLink from '../sidebar/SidebarLink';

const RegisterCisternLink: FC = () => {
	return <SidebarLink label='Add cistern' to='/register' />;
};

export default RegisterCisternLink;
