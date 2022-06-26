import useEmblaCarousel from "embla-carousel-react";

useEmblaCarousel.globalOptions = { align: "start" };

const Carousel = ({ data }: any) => {
	const [emblaRef] = useEmblaCarousel();

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

	return (
		<div className="embla" ref={emblaRef}>
			<div className="embla__container">
				{data.map((item: any, index: number) => (
					<div className="embla__slide">
						<div className="time">13:00 WIB</div>
						<img src={getIcon(item.code)} alt="icon" key={index} />
						<div className="weather">{getLabel(item.code)}</div>
						<div className="temperature">{item.t}° C</div>
					</div>
				))}
			</div>
			<style>{`
				.time, .weather, .temperature{
					font-weight:800;
					text-align:center;
					font-size:20px;
				}

				.time{
					margin-bottom:24px;
				}

				.temperature{
					margin-top:16px;
				}

				.weather{
					margin-top:24px;
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
					flex: 0 0 15%;
					background:#D9D9D91F;
					padding:24px;
					margin-right:20px;
					display:flex;
					flex-direction:column;
					items:center;
				}
				.embla__slide img{
					width:100px;
					margin:auto;
				}

				@media(max-width:576px){
					.embla__slide {
						flex: 0 0 31%;
					}
				}
			`}</style>
		</div>
	);
};

export default Carousel;
