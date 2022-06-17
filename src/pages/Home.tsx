import Footer from "../components/Footer/Footer";
import LaporanTerkini from "../components/LaporanTerkini/LaporanTerkini";
import Navbar from "../components/Navbar/Navbar";
import PrakiraanCuaca from "../components/PrakiraanCuaca";
import RiwayatGempa from "../components/RiwayatGempa";

const Home = () => {
	return (
		<div>
			<Navbar />
			<PrakiraanCuaca />
			<RiwayatGempa />
			<LaporanTerkini />
			<Footer />
		</div>
	);
};

export default Home;
