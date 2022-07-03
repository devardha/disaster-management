
import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

interface Gempa {
	lat: number;
	lng: number;
	Potensi: string;
	Wilayah: string;
	Tanggal: string;
	Jam: number;
	Magnitude: string;
	Kedalaman: string;
	Coordinates: string;
}

export interface GempaStateType {
	gempa: Gempa[];
}

const GempaSlice = createSlice({
	name: 'GEMPA',
	initialState: {
		gempa: [],
	} as GempaStateType,
	reducers: {
		setGempa: (state, action) => {
			state.gempa = action.payload;
		},
	},
});

export const { setGempa } = GempaSlice.actions;
export const useGempa = (): GempaStateType => useSelector((RootState: { gempa: GempaStateType }) => RootState.gempa);
export default GempaSlice.reducer;