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
					<ul className={`${open ? "open" : ""}`}>
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
