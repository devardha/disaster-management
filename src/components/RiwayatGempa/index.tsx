const RiwayatGempa = () => {
	return (
		<div className="container">
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
					<tr>
						<td className="location">17 km Tenggara SARMI-PAPUA</td>
						<td>5,0</td>
						<td>10 km</td>
						<td>10 jam yang lalu</td>
						<td>-2.53,139.35</td>
						<td>Tidak berpotensi tsunami</td>
					</tr>
					<tr>
						<td className="location">17 km Tenggara SARMI-PAPUA</td>
						<td>5,0</td>
						<td>10 km</td>
						<td>10 jam yang lalu</td>
						<td>-2.53,139.35</td>
						<td>Tidak berpotensi tsunami</td>
					</tr>
					<tr>
						<td className="location">17 km Tenggara SARMI-PAPUA</td>
						<td>5,0</td>
						<td>10 km</td>
						<td>10 jam yang lalu</td>
						<td>-2.53,139.35</td>
						<td>Tidak berpotensi tsunami</td>
					</tr>
					<tr>
						<td className="location">17 km Tenggara SARMI-PAPUA</td>
						<td>5,0</td>
						<td>10 km</td>
						<td>10 jam yang lalu</td>
						<td>-2.53,139.35</td>
						<td>Tidak berpotensi tsunami</td>
					</tr>
				</tbody>
			</table>
			<style>
				{`
					table{
						border-collapse: collapse;
					}
					thead{
						background-color:#eeeeee;
					}
					td{
						font-size:16px;
						padding:12px 24px;
						color:#6b7280;
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
				`}
			</style>
		</div>
	);
};

export default RiwayatGempa;
