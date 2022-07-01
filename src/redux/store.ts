import { configureStore, Reducer } from '@reduxjs/toolkit';
import gempaReducer, { GempaStateType  } from './reducers/gempa';

const store = configureStore({
	reducer: {
		gempa: gempaReducer,
	} as RootStateType,
});

export default store;

export interface RootStateType {
	gempa: Reducer<GempaStateType>
}