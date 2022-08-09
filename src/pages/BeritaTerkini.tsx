import Layout from "../components/Layout";
import AllBerita from "../components/AllBeritaTerkini/AllBerita";

const Beritaterkini = () => {
	return (
		<Layout>
			<main>
				<AllBerita />
			</main>
			<style>{`
				main{
					min-height:100vh;
				}
			`}</style>
		</Layout>
	);
};

export default Beritaterkini;
