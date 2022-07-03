import { Dispatch } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loadCuaca } from "../../redux/actions/cuaca";
import locations from "../../data/locations.json";
import { HiOutlineChevronDown } from "react-icons/hi";
import Carousel from "./Carousel";

interface Loation {
	name: string;
	locations: string[];
}

const PrakiraanCuaca = () => {
	const [selectedLocation, setSelectedLocation] = useState({
		location: "DKI Jakarta",
		sublocation: "Jakarta Pusat",
	});
	const [open, setOpen] = useState(false);

	const dispatch: Dispatch<any> = useDispatch();

	console.log(locations);

	useEffect(() => {
		(async () => {
			const formatLocation = selectedLocation.location.replace(/\s/g, "");
			dispatch(loadCuaca(formatLocation, selectedLocation.sublocation));
		})();
	}, [dispatch, selectedLocation]);

	return (
		<>
			<div className="container prakiraan-cuaca">
				<h2>Prakiraan Cuaca</h2>
				<div className="cuaca-header">
					<h3>
						{`${selectedLocation.sublocation}, ${selectedLocation.location}`}
						, Indonesia
					</h3>
					<div className="buttons">
						<div className="select-location">
							<button onClick={() => setOpen(!open)}>
								{selectedLocation
									? selectedLocation.sublocation
									: "Pilih Lokasi"}
								<HiOutlineChevronDown />
							</button>
							{open && (
								<div className="dropdown">
									{locations.map(
										(item: Loation, index: number) => (
											<div key={index} className="item">
												<div>
													{item.locations.map(
														(
															loc,
															index: number
														) => (
															<div
																className="sublocation"
																key={index}
																onClick={() => {
																	setSelectedLocation(
																		{
																			location:
																				item.name,
																			sublocation:
																				loc,
																		}
																	);
																	setOpen(
																		false
																	);
																}}
															>
																{loc}
															</div>
														)
													)}
												</div>
											</div>
										)
									)}
								</div>
							)}
						</div>
					</div>
				</div>
				<Carousel />
			</div>
			<style>{`
				.buttons{
					display:flex;
				}
				.select-location{
					position:relative;
				}

				.dropdown{
					position:absolute;
					top:52px;
					background:#ffffff;
					border-radius:4px;
					padding: 8px 0;
					width:240px;
					right:0;
					z-index:1;
					border:1px solid #ddd;
					max-height:400px;
					overflow-y:auto;
				}

				.dropdown .item .sublocation{
					padding: 4px 16px;
					cursor:pointer;
				}

				.dropdown .item .sublocation:hover{
					background:#f7f7f7;
				}

				.cuaca-header{
					display:flex;
					align-items:center;
					margin-bottom:20px;
					justify-content:space-between;
				}

				.cuaca-header button{
					margin:0;
					padding:12px 20px;
					border:none;
					background:#ffffff;
					border-radius:4px;
					cursor:pointer;
					border:1px solid #dddddd;
					display:flex;
					align-items:center;
				}

				.cuaca-header button svg{
					margin-left:8px;
				}

				.prakiraan-cuaca{
					padding-top: 52px;
					padding-bottom: 52px;
				}

				h2{
					margin:0;
					margin-bottom:4px;
				}
				h3{
					margin:0;
					text-align:left;
				}

				@media(max-width:576px){
					.map-container{
						flex-direction:column;
					}
				}
			`}</style>
		</>
	);
};

export default PrakiraanCuaca;
