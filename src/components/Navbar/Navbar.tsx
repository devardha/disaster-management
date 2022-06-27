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
						<Link to="/">
							<img src="/images/logo.png" alt="logo" />
						</Link>
					</div>
					<ul className={`${open ? "open" : ""}`}>
						<li className="nav-link">
							<Link to="/">Prakiraan Cuaca</Link>
						</li>
						<li className="nav-link">
							<Link to="/berita-terkini">Berita Terkini</Link>
						</li>
						<li className="nav-link">
							<Link to="/lapor">Lapor</Link>
						</li>
					</ul>
				</div>
				<div className="menu" onClick={() => setOpen(!open)}>
					<input type="checkbox" id="check" />
					<span></span>
					<span></span>
					<span></span>
				</div>
			</nav>
			<style>{`
				nav{
					position:relative;
				}

				.navbar-container{
					padding:0;
				}

				@media(max-width:576px){
					nav ul{
						display:none;
					}

					nav ul.open{
						display:block;
					}

					.navbar-container{
						padding:0 20px;
					}
				}
			`}</style>
		</>
	);
};

export default Navbar;
