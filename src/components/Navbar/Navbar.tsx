import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
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
				{/* {open && (
				<div className="menu">
					<input type="checkbox" id="check" />
					<span></span>
					<span></span>
					<span></span>
				</div>
			)} */}
			</nav>
			<style>{`
				nav{
					position:relative;
				}
			`}</style>
		</>
	);
};

export default Navbar;
