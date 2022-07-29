import { VStack } from '@chakra-ui/react';
import { useEffect } from 'react';
import type { FC } from 'react';

import { useAppDispatch, useAppSelector } from 'lib/redux/hooks';
import {
	getAllCisterns,
	selectCisterns,
	selectCisternsStatus,
} from 'lib/redux/reducers/cisternSlice';

import CisternLinks from './CisternLinks';
import LoadingCisterns from './LoadingCisterns';
import NoCisternsRegistered from './NoCisternsRegistered';
import RegisterCisternLink from './RegisterCisternLink';

const Cisterns: FC = () => {
	const dispatch = useAppDispatch();
	const cisternNames = useAppSelector(selectCisterns);
	const { getCisternsStatus } = useAppSelector(selectCisternsStatus);

	useEffect(() => {
		if (getCisternsStatus === 'idle') dispatch(getAllCisterns());
	}, [getCisternsStatus, dispatch]);

	const content = () => {
		if (getCisternsStatus === 'loading') return <LoadingCisterns />;
		if (cisternNames.length > 0)
			return <CisternLinks cisternNames={cisternNames} />;
		return <NoCisternsRegistered />;
	};

	return (
		<VStack px={1} alignItems='center'>
			{content()}
			<RegisterCisternLink />
		</VStack>
	);
};

export default Cisterns;
