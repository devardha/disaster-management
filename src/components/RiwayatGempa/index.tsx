import axios from "axios";
import { useEffect, useState } from "react";
import Map from "./Map";

const RiwayatGempa = () => {
	const [earthquakes, setEarthquakes] = useState<any>([]);

	useEffect(() => {
		axios
			.get(
				`https://api.allorigins.win/get?url=${encodeURIComponent(
					"https://data.bmkg.go.id/DataMKG/TEWS/gempadirasakan.json"
				)}`
			)
			.then((res) => {
				const json = JSON.parse(res.data.contents);
				const gempa = json.Infogempa.gempa;

				setEarthquakes(gempa);
			});
	}, []);
	return (
		<div className="container">
			<h2>Riwayat Gempa Bumi</h2>
			<Map />
			<div className="table-container">
				<table>
					<thead>
						<tr>
							<th>Lokasi</th>
							<th>Magnitudo</th>
							<th>Kedalaman</th>
							<th>Waktu</th>
							<th>Koordinat</th>
							<th>Keterangan</th>
						</tr>
					</thead>
					<tbody>
						{earthquakes.length > 0 &&
							earthquakes.map((item: any, index: number) => (
								<tr key={index}>
									<td className="location">
										{item?.Wilayah}
									</td>
									<td>{item?.Magnitude}</td>
									<td>{item?.Kedalaman}</td>
									<td>10 jam yang lalu</td>
									<td>{item?.Coordinates}</td>
									<td>{item.Potensi ? item.Potensi : "-"}</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
			<style>
				{`
					table{
						border-collapse: collapse;
						margin-top:32px;
					}
					thead{
						background-color:#eeeeee;
					}
					td{
						font-size:16px;
						padding:12px 24px;
						color:#6b7280;
						width: 326px
					}
					th{
						padding:12px 24px;
						font-weight:500;
					}
					tr{
						font-size:16px;
					}
					.location{
						color:#000000;
					}
					tr{
						border-bottom: 2px solid #eeeeee;
					}
					@media screen and (max-width : 576px){
						.table-container{
							overflow-y:auto;
						}
					}
				`}
			</style>
		</div>
	);
};

export default RiwayatGempa;
