import "./navbar.css";

const Navbar = () => {
	return (
		<nav>
			<div className="container navbar-container">
				<div className="lo">
					<img src="/images/logo.png" alt="logo" />
				</div>
				<ul>
					<li>
						<a href="#sejarah">Prakiraan Cuaca</a>
					</li>
					<li>
						<a href="#geografis">Berita Terkini</a>
					</li>
					<li>
						<a href="#wisata">Lapor</a>
					</li>
				</ul>
			</div>
			<style>{`
				.navbar-container {
					flex-direction: row;
					justify-content: space-between;
				}
			`}</style>
		</nav>
	);
};

export default Navbar;
