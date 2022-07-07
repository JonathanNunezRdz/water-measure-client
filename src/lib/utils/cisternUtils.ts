import type { Serie } from '@nivo/line';

import type { registerCistern } from 'lib/redux/reducers/cisternSlice';
import type { WaterLevel } from 'lib/types/waterLevelTypes';

export const getRegisterCisternErrorMessage = (
	fallbackError: string,
	action: ReturnType<typeof registerCistern.rejected>
) => {
	if (action.payload) return action.payload.message;
	return action.error.message || fallbackError;
};

export const getCisternNameFromQuery = (
	query: string[] | string | undefined
) => {
	if (typeof query === 'string') return query;
	return undefined;
};

export const transformWaterLevelData = (waterLevel: WaterLevel[]): Serie[] => {
	const data = waterLevel.map(({ createdAt, level }) => ({
		x: createdAt,
		y: level,
	}));
	return [
		{
			id: 'water-level',
			data,
		},
	];
};
