import { Dispatch } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadGempa } from "../../redux/actions/gempa";
import { useGempa } from "../../redux/reducers/gempa";
import Map from "./Map";

interface gempa {
	Wilayah: string;
	Kedalaman: string;
	Magnitude: string;
	Coordinates: string;
	Potensi: string;
}

const RiwayatGempa = () => {
	const { gempa } = useGempa();
	const dispatch: Dispatch<any> = useDispatch();

	useEffect(() => {
		dispatch(loadGempa());
	}, [dispatch]);

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
						{gempa.length > 0 &&
							gempa.map((item: gempa, index: number) => (
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
