import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import type {
	CisternState,
	GetAllCisternsResponse,
	GetCisternReponse,
	RegisterCisternDto,
	RegisterCisternError,
	RegisterCisternResponse,
} from '../../types';
import { getRegisterCisternErrorMessage } from '../../utils';
import cisternService from '../services/cisternService';
import type { RootState } from '../store';

export const getCistern = createAsyncThunk<GetCisternReponse, string>(
	'cistern/getCistern',
	async (name) => {
		const res = await cisternService.getCistern(name);
		return res.data;
	}
);

export const registerCistern = createAsyncThunk<
	RegisterCisternResponse,
	RegisterCisternDto,
	{ rejectValue: RegisterCisternError }
>('cistern/registerCistern', async (dto, thunkApi) => {
	try {
		const res = await cisternService.registerCistern(dto);
		return res.data;
	} catch (error) {
		if (error instanceof AxiosError) {
			const { response } = error as AxiosError<RegisterCisternError>;
			if (response) {
				return thunkApi.rejectWithValue(response.data);
			}
		}
		throw error;
	}
});

export const getAllCisterns = createAsyncThunk<GetAllCisternsResponse>(
	'cistern/getAllCisterns',
	async () => {
		const res = await cisternService.getAllCisterns();
		return res.data;
	}
);

const initialState: CisternState = {
	cisternNames: [],
	getCisternsStatus: 'idle',
	getCisternsError: '',
	currentCistern: undefined,
	getCisternStatus: 'idle',
	getCisternError: '',
	registerStatus: 'idle',
	registerError: '',
};

export const cisternSlice = createSlice({
	name: 'cistern',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(registerCistern.pending, (state) => {
				state.registerStatus = 'loading';
			})
			.addCase(registerCistern.fulfilled, (state, action) => {
				state.cisternNames.push({
					id: action.payload.id,
					name: action.payload.name,
				});
				if (state.cisternNames.length === 1) {
					state.currentCistern = action.payload;
				}
				state.registerStatus = 'succeeded';
				state.registerError = '';
			})
			.addCase(registerCistern.rejected, (state, action) => {
				state.registerError = getRegisterCisternErrorMessage(
					'Failed to register cistern',
					action
				);
				state.registerStatus = 'failed';
			})
			.addCase(getAllCisterns.pending, (state) => {
				state.getCisternsStatus = 'loading';
			})
			.addCase(getAllCisterns.fulfilled, (state, action) => {
				state.cisternNames = action.payload;
				state.getCisternsStatus = 'succeeded';
			})
			.addCase(getAllCisterns.rejected, (state, action) => {
				state.getCisternsError =
					action.error.message || 'Failed to get cisterns';
				state.getCisternsStatus = 'failed';
			})
			.addCase(getCistern.pending, (state) => {
				state.getCisternStatus = 'loading';
			})
			.addCase(getCistern.fulfilled, (state, action) => {
				state.currentCistern = action.payload;
				state.getCisternStatus = 'succeeded';
			})
			.addCase(getCistern.rejected, (state, action) => {
				state.getCisternError =
					action.error.message || `Failed to get cistern`;
				state.getCisternStatus = 'failed';
			});
	},
});

export const selectCisternStatus = (state: RootState) => ({
	getCisternStatus: state.cistern.getCisternStatus,
	getCisternError: state.cistern.getCisternError,
});

export const selectCistern = (state: RootState) => state.cistern.currentCistern;

export const selectCisterns = (state: RootState) => state.cistern.cisternNames;

export const selectCisternsStatus = (state: RootState) => ({
	getCisternsStatus: state.cistern.getCisternsStatus,
	getCisternsError: state.cistern.getCisternsError,
});

export const selectRegisterCisternStatus = (state: RootState) => ({
	registerCisternStatus: state.cistern.registerStatus,
	registerCisternError: state.cistern.registerError,
});

export default cisternSlice.reducer;
