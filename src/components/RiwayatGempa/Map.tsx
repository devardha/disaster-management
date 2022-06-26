import { MapContainer, TileLayer, Circle, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

const CustomMarker = () => {
	return L.divIcon({
		html: `<span class="marker" ><span class="inner-marker" ></span></span>`,
		iconSize: [40, 40],
	});
};

const Map = () => {
	return (
		<div className="map-section">
			<div className="map-container">
				<div className="map">
					<MapContainer
						center={[-1.8332396, 138.7419573]}
						zoom={14}
						scrollWheelZoom={false}
						style={{ height: "100%", width: "100%" }}
					>
						<TileLayer
							attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						/>
						<Marker
							icon={CustomMarker()}
							position={[-1.8332396, 138.7419573]}
							draggable={false}
						>
							<Popup>aaa</Popup>
						</Marker>
					</MapContainer>
				</div>
				<div className="map-detail">
					<div className="label">Tidak Berpotensi Tsunami</div>
					<div className="loc">17 km Tenggara SARMI-PAPUA</div>
					<p className="coordinates">06 Juni 2022, 15:29:11 WIB</p>
					<div className="additional-info">
						<div className="info-card">
							<div>Magnitudo</div>
							<div className="value">5.0</div>
						</div>
						<div className="info-card">
							<div>Kedalaman</div>
							<div className="value">10</div>
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
