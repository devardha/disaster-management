import useEmblaCarousel from "embla-carousel-react";

useEmblaCarousel.globalOptions = { align: "start" };

const Carousel = ({ data }: any) => {
	const [emblaRef] = useEmblaCarousel();

	const getIcon = (code: any) => {
		if (code === "0") {
			return "/images/sun.png";
		}

		return "";
	};

	return (
		<div className="embla" ref={emblaRef}>
			<div className="embla__container">
				{data.map((item: any, index: number) => (
					<div className="embla__slide">
						<div className="time">13:00 WIB</div>
						<img src={getIcon(item.code)} alt="icon" key={index} />
						<div className="weather">Cerah</div>
						<div className="temperature">30° C</div>
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
			`}</style>
		</div>
	);
};

export default Carousel;
