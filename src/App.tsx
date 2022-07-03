import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Lapor from "./pages/Lapor";
import Beritaterkini from "./pages/BeritaTerkini";
import Berita from "./pages/Berita";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/lapor" element={<Lapor />} />
				<Route path="/berita-terkini" element={<Beritaterkini />} />
				<Route path="/laporan/:id" element={<Berita />} />
			</Routes>
		</div>
	);
}

export default App;
