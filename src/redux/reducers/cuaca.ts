
import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

export interface CuacaStateType {
	cuaca: any;
}

const GempaSlice = createSlice({
	name: 'CUACA',
	initialState: {
		cuaca: {},
	} as CuacaStateType,
	reducers: {
		setCuaca: (state, action) => {
			state.cuaca = action.payload;
		},
	},
});

export const { setCuaca } = GempaSlice.actions;
export const useCuaca = (): CuacaStateType => useSelector((RootState: { cuaca: CuacaStateType }) => RootState.cuaca);
export default GempaSlice.reducer;