import Carousel from "../Carousel";

const data: any = [
	{
		code: "0",
	},
	{
		code: "0",
	},
	{
		code: "0",
	},
	{
		code: "0",
	},
	{
		code: "0",
	},
	{
		code: "0",
	},
];

const PrakiraanCuaca = () => {
	return (
		<>
			<div className="container">
				<h2>Prakiraan Cuaca</h2>
				<h3>Jakarta, Indonesia</h3>
				<Carousel data={data} />
			</div>
			<style>{`
				.container{
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
			`}</style>
		</>
	);
};

export default PrakiraanCuaca;
