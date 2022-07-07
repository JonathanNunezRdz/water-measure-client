import { Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import type { FC } from 'react';

import Cistern from 'lib/components/cistern/Cistern';
import { getCisternNameFromQuery } from 'lib/utils';

const CisternPage: FC = () => {
	const router = useRouter();
	const name = getCisternNameFromQuery(router.query.name);
	if (typeof name === 'undefined')
		return <Text>Error at parsing name from route</Text>;
	return <Cistern cisternName={name} />;
};

export default CisternPage;
