import { configureStore, Reducer } from '@reduxjs/toolkit';
import gempaReducer, { GempaStateType  } from './reducers/gempa';
import cuacaReducer, { CuacaStateType  } from './reducers/cuaca';

const store = configureStore({
	reducer: {
		gempa: gempaReducer,
		cuaca: cuacaReducer
	} as RootStateType,
});

export default store;

export interface RootStateType {
	gempa: Reducer<GempaStateType>,
	cuaca: Reducer<CuacaStateType>
}