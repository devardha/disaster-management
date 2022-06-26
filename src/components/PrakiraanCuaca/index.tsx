import Carousel from "./Carousel";

const data: any = [
	{
		code: "0",
		t: 24,
	},
	{
		code: "1",
		t: 25,
	},
	{
		code: "61",
		t: 23,
	},
	{
		code: "3",
		t: 24,
	},
	{
		code: "97",
		t: 27,
	},
	{
		code: "4",
		t: 28,
	},
];

const PrakiraanCuaca = () => {
	return (
		<>
			<div className="container prakiraan-cuaca">
				<h2>Prakiraan Cuaca</h2>
				<h3>Jakarta, Indonesia</h3>
				<Carousel data={data} />
			</div>
			<style>{`
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
					margin-bottom:20px;
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
