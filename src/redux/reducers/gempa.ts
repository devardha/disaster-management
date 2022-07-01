
import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

export interface GempaStateType {
	gempa: any;
}

const GempaSlice = createSlice({
	name: 'CART',
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