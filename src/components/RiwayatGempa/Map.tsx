import { MapContainer, TileLayer, Circle, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import axios from "axios";

const CustomMarker = () => {
	return L.divIcon({
		html: `<span class="marker" ><span class="inner-marker" ></span></span>`,
		iconSize: [40, 40],
	});
};

const Map = () => {
	const [coordinates, setCoordinates] = useState<any>();
	const [earthquake, setEarthquake] = useState<any>();

	useEffect(() => {
		axios
			.get(
				`https://api.allorigins.win/get?url=${encodeURIComponent(
					"https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json"
				)}`
			)
			.then((res) => {
				const json = JSON.parse(res.data.contents);
				const gempa = json.Infogempa.gempa;
				const coordinates = gempa.Coordinates.split(",").map(
					(item: string) => parseFloat(item)
				);

				setEarthquake(gempa);
				setCoordinates(coordinates);
			});
	}, []);

	return (
		<div className="map-section">
			<div className="map-container">
				<div className="map">
					{coordinates && (
						<MapContainer
							center={coordinates}
							zoom={9}
							scrollWheelZoom={false}
							style={{ height: "100%", width: "100%" }}
						>
							<TileLayer
								attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
								url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
							/>
							<Marker
								icon={CustomMarker()}
								position={coordinates}
								draggable={false}
							>
								<Popup>aaa</Popup>
							</Marker>
						</MapContainer>
					)}
				</div>
				<div className="map-detail">
					<div className="label">{earthquake?.Potensi}</div>
					<div className="loc">{earthquake?.Wilayah}</div>
					<p className="coordinates">
						{earthquake?.Tanggal}, {earthquake?.Jam}
					</p>
					<div className="additional-info">
						<div className="info-card">
							<div>Magnitudo</div>
							<div className="value">{earthquake?.Magnitude}</div>
						</div>
						<div className="info-card">
							<div>Kedalaman</div>
							<div className="value">{earthquake?.Kedalaman}</div>
						</div>
					</div>
				</div>
			</div>
			<style>{`
				.leaflet-div-icon {
					border-style: none;
					background-color: #0000;
					color: rgba(255, 255, 255);
				}

				.marker{
					display:flex;
					width:40px;
					height:40px;
					background:#ff000045;
					border-radius:50%;
					position:relative;
					justify-content:center;
					align-items:center;
				}

				.inner-marker{
					display:flex;
					width:12px;
					height:12px;
					background:red;
					border-radius:50%;
					z-index:2;
				}

				.map{
					width:50%;
					height:340px;
					background:#D9D9D91F;
					
				}
				.map-container{
					display:flex;
					justify-content:space-between;
					margin-top:32px;
				}
				.map-detail{
					width:50%;
					padding-left:40px;
					display:flex;
					flex-direction:column;
					justify-content:start;
					align-items:flex-start;
				}
				.map-detail .loc{
					font-weight:500;
					font-size:24px;
					margin-bottom:12px;
				}
				.map-detail .label{
					color:#A93261;
					background:#FCE7F3;
					padding:4px 16px;
					font-weight:bold;
					border-radius:400px;
					
					margin-bottom:24px;
				}
				.coordinates{
					color:#777E8B;
					margin:0;
				}
				.additional-info{
					display:flex;
					margin-top:24px;
				}
				.additional-info .info-card{
					display:flex;
					flex-direction:column;
					padding:20px;
					color:#A93261;
					background:#FCE7F3;
					margin-right:12px;
					text-align:center;
					border-radius:8px;
				}

				.info-card .value{
					font-size:42px;
					font-weight:600;
				}

				@media(max-width:576px){
					.map, .map-detail{
						width:100%;
					}

					.map-detail{
						padding-left:0;
					}
				}
			`}</style>
		</div>
	);
};

export default Map;
