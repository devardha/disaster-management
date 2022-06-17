import LaporanTerkini from "../components/LaporanTerkini/LaporanTerkini";
import Layout from "../components/Layout";
import PrakiraanCuaca from "../components/PrakiraanCuaca";
import RiwayatGempa from "../components/RiwayatGempa";

const Home = () => {
	return (
		<Layout>
			<PrakiraanCuaca />
			<RiwayatGempa />
			<LaporanTerkini />
		</Layout>
	);
};

export default Home;
