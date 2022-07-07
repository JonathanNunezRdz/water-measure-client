import type {
	GetAllCisternsResponse,
	GetCisternReponse,
	RegisterCisternDto,
	RegisterCisternResponse,
} from 'lib/types';

import api from './api';

const route = '/cistern';

const getCistern = (name: string) =>
	api.get<GetCisternReponse>(`${route}/${name}`);

const registerCistern = (dto: RegisterCisternDto) =>
	api.post<RegisterCisternResponse>(`${route}/register`, dto);

const getAllCisterns = () => api.get<GetAllCisternsResponse>(`${route}/all`);

const cisternService = {
	registerCistern,
	getAllCisterns,
	getCistern,
};

export default cisternService;
