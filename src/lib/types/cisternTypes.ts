import { z } from 'zod';

import type { Status } from './commonTypes';
import type { Sensor } from './sensorTypes';
import type { WaterLevel } from './waterLevelTypes';

export const registerCisternSchema = z.object({
	name: z.string().min(2, 'Name should have at least 2 letters'),
	length: z.number().positive(),
	width: z.number().positive(),
	maxWaterHeight: z.number().positive(),
	minWaterHeight: z.number().positive(),
	waterLevelThreshold: z.number().positive(),
	sensorHeight: z.number().positive(),
	sensorOffset: z.number(),
});

export type RegisterCisternDto = z.infer<typeof registerCisternSchema>;

export type RegisterCisternError = {
	error: string;
	message: string;
	statusCode: number;
};

export type Cistern = {
	id: number;
	createdAt: string;
	updatedAt: string;
	name: string;
	length: number;
	width: number;
	maxWaterHeight: number;
	minWaterHeight: number;
	waterLevelThreshold: number;
};

export type CompleteCistern = Cistern & {
	sensor: Sensor;
	waterLevel: WaterLevel[];
};

export type CisternWithSensor = Cistern & {
	sensor: Sensor;
};

export type CisternWithWaterLevel = Cistern & {
	waterLevel: WaterLevel[];
};

export type GetCisternReponse = CompleteCistern;

export type RegisterCisternResponse = CompleteCistern;

export type GetAllCisternsResponse = CisternName[];

export type CisternName = {
	id: number;
	name: string;
};

export type CisternState = {
	cisternNames: CisternName[];
	getCisternsStatus: Status;
	getCisternsError: string;

	currentCistern: CompleteCistern | undefined;
	getCisternStatus: Status;
	getCisternError: string;

	registerStatus: Status;
	registerError: string;
};
