
import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

interface CuacaParams {
	id: string;
	jenis: string;
	type: string;
}

interface Cuaca {
	nama_daerah: string;
	parameter: CuacaParams[]
}
export interface CuacaStateType {
	cuaca: Cuaca;
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