import { Link } from "react-router-dom";
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
						<Link to="/">Prakiraan Cuaca</Link>
					</li>
					<li>
						<Link to="/">Berita Terkini</Link>
					</li>
					<li>
						<Link to="/lapor">Lapor</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
