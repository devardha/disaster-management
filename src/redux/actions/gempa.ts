import axios from 'axios';
import { setGempa } from '../reducers/gempa';

export const loadGempa = () => async (dispatch: any) => {
	axios.get(`https://api.allorigins.win/get?url=${encodeURIComponent("https://data.bmkg.go.id/DataMKG/TEWS/gempadirasakan.json")}`)
		.then((res) => {
			const json = JSON.parse(res.data.contents);
			const data = json.Infogempa.gempa;
			dispatch(setGempa(data));
		})
		.catch(err => console.log(err));
};
