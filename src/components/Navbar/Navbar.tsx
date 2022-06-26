import { Link } from "react-router-dom";
import "./navbar.css";
import Menu from "./script.js";

const Navbar = () => {
	return (
		<body>
		<nav>
			<div className="container navbar-container">
				<div className="lo">
					<img src="/images/logo.png" alt="logo" />
				</div>
				<ul >
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
			<div className="menu">
				<input type="checkbox" id="check"/>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</nav>
		<script src="script.js">
		</script>
		</body>
	);
	
};


	
export default Navbar;
