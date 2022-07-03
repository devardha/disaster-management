import axios from 'axios';
import { setCuaca } from '../reducers/cuaca';

interface Cuaca {
	nama_daerah: string;
}

export const loadCuaca = (provinceName: string, sublocation: string) => async (dispatch: any) => {
	axios.get(`https://api.allorigins.win/get?url=${encodeURIComponent(`http://w.aguspakpahan.com/perkiraan-cuaca/${provinceName}`)}`)
		.then((res) => {
			const json = JSON.parse(res.data.contents);
			const data = json.data;
			console.log(data)
			const filtered = data.filter((item: Cuaca) => item.nama_daerah === sublocation);

			dispatch(setCuaca(filtered[0]))
		})
		.catch(err => console.log(err));
};
