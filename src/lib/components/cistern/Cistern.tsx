import { Box } from '@chakra-ui/react';
import { useCallback, useEffect } from 'react';
import type { FC } from 'react';

import { useBoxBg } from 'lib/hooks';
import { useAppDispatch, useAppSelector } from 'lib/redux/hooks';
import {
	getCistern,
	selectCisternStatus,
} from 'lib/redux/reducers/cisternSlice';

import CisternDetails from './CisternDetails';

interface CisternProps {
	cisternName: string;
}

const Cistern: FC<CisternProps> = ({ cisternName }) => {
	const bg = useBoxBg(0);
	const dispatch = useAppDispatch();
	const { getCisternStatus } = useAppSelector(selectCisternStatus);
	const dispatchGetCistern = useCallback(() => {
		dispatch(getCistern(cisternName));
	}, [cisternName, dispatch]);

	useEffect(() => {
		if (getCisternStatus === 'idle') dispatchGetCistern();
	}, [getCisternStatus, dispatchGetCistern]);

	useEffect(() => {
		const intervalId = setInterval(() => {
			if (getCisternStatus === 'succeeded') {
				dispatchGetCistern();
			}
		}, 10.5 * 1000);
		return () => clearInterval(intervalId);
	}, [dispatchGetCistern, getCisternStatus]);

	return (
		<Box bg={bg} borderRadius='md'>
			<CisternDetails
				currentCisternStatus={getCisternStatus}
				getCistern={dispatchGetCistern}
			/>
		</Box>
	);
};

export default Cistern;
