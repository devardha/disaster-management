import useEmblaCarousel from "embla-carousel-react";
import { isToday, isTomorrow, format } from "date-fns";
import { useCuaca } from "../../redux/reducers/cuaca";

useEmblaCarousel.globalOptions = { align: "start" };

const Carousel = () => {
	const [emblaRef] = useEmblaCarousel();
	const { cuaca } = useCuaca();

	const getIcon = (code: string) => {
		if (code === "0") {
			return "/images/sun.png";
		}

		if (code === "1" || code === "2") {
			return "/images/sunny-cloudy.png";
		}

		if (code === "60" || code === "61") {
			return "/images/rainy.png";
		}

		if (code === "95" || code === "97") {
			return "/images/thunderstorm.png";
		}

		if (code === "3" || code === "4") {
			return "/images/cloudy.png";
		}

		return "";
	};

	const getLabel = (code: string) => {
		if (code === "0") {
			return "Cerah";
		} else if (code === "1") {
			return "Cerah Berawan";
		} else if (code === "2") {
			return "Cerah Berawan";
		} else if (code === "1") {
			return "Cerah Berawan";
		} else if (code === "3") {
			return "Berawan";
		} else if (code === "4") {
			return "Berawan Tebal";
		} else if (code === "5") {
			return "Udara Kabur";
		} else if (code === "10") {
			return "Asap";
		} else if (code === "45") {
			return "Kabut";
		} else if (code === "60") {
			return "Hujan Ringan";
		} else if (code === "61") {
			return "Hujan Sedang";
		} else if (code === "63") {
			return "Hujan Lebat";
		} else if (code === "80") {
			return "Hujan Lokal";
		} else if (code === "95") {
			return "Hujan Petir";
		} else if (code === "97") {
			return "Hujan Petir";
		}
	};

	console.log(cuaca.parameter);

	return (
		<div className="embla" ref={emblaRef}>
			<div className="embla__container">
				{cuaca &&
					cuaca.parameter &&
					cuaca.parameter
						.filter((item: any) => item.id === "weather")
						.map((item: any) => {
							return item.nilai.map(
								(cuaca: any, index: number) => {
									const date = cuaca.waktu.split(" ")[0];
									const time = cuaca.waktu.split(" ")[1];
									const day = date.split("-")[0];
									const month = date.split("-")[1];
									const year = date.split("-")[2];

									const formattedDate =
										year +
										"-" +
										month +
										"-" +
										day +
										"T" +
										time +
										"Z";

									console.log(new Date(formattedDate));

									if (
										isToday(new Date(formattedDate)) ||
										isTomorrow(new Date(formattedDate))
									) {
										return (
											<div
												className="embla__slide"
												key={index}
											>
												<div className="time">
													<div className="date">
														{format(
															new Date(
																formattedDate
															),
															"d MMMM yyyy"
														)}
													</div>
													<div>
														{format(
															new Date(
																formattedDate
															),
															"HH:mm"
														)}
													</div>
												</div>
												<img
													src={getIcon(cuaca.value)}
													alt="icon"
													key={index}
												/>
												<div className="weather">
													{getLabel(cuaca.value)}
												</div>
												{/* <div className="temperature">
													{item.t}° C
												</div> */}
											</div>
										);
									}

									return <></>;
								}
							);
						})}
			</div>
			<style>{`
				.time, .weather, .temperature{
					font-weight:800;
					text-align:center;
					font-size:20px;
				}

				.time{
					margin-bottom:24px;
					user-select: none;
				}

				.time .date{
					font-size:16px;
					font-weight:600;
				}

				.temperature{
					margin-top:16px;
				}

				.weather{
					margin-top:24px;
					font-weight:600;
					font-size:20px;
					line-height:26px;
					user-select: none;
				}

				.embla {
					overflow: hidden;
				}
				.embla__container {
					display: flex;
					justify-content:space-between;
				}
				.embla__slide {
					position: relative;
					flex: 0 0 16%;
					background:#D9D9D91F;
					padding:24px;
					display:flex;
					flex-direction:column;
					margin-right:16px;
				}
				.embla__slide img{
					width:100px;
					margin:auto;
				}

				@media(max-width:576px){
					.embla__slide {
						flex: 0 0 47%;
					}
				}
			`}</style>
		</div>
	);
};

export default Carousel;
