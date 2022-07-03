import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const { pathname } = useLocation();

	return (
		<>
			<nav>
				<div className="container navbar-container">
					<div>
						<Link to="/">
							<img src="/images/logo.png" alt="logo" />
						</Link>
					</div>
					<ul className={`${open ? "open" : ""}`}>
						<li className="nav-link">
							<Link
								to="/"
								className={`${
									pathname === "/" ? "active" : ""
								}`}
							>
								Prakiraan Cuaca
							</Link>
						</li>
						<li className="nav-link">
							<Link
								to="/berita-terkini"
								className={`${
									pathname === "/berita-terkini"
										? "active"
										: ""
								}`}
							>
								Berita Terkini
							</Link>
						</li>
						<li className="nav-link">
							<Link
								to="/lapor"
								className={`${
									pathname === "/lapor" ? "active" : ""
								}`}
							>
								Lapor
							</Link>
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

				@import url("https://fonts.googleapis.com/css?family=Poppins:400,700,900");

				body {
					overflow-x: hidden;
					font-family: "Poppins";
				}

				nav {
					display: flex;
					background-color: #ffff;
					box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
					border-radius: 5px;
					justify-content: space-around;
					height: 100px;
					align-items: center;
				}

				nav ul {
					display: flex;
					list-style-type: none;
					justify-content: space-around;
				}

				nav li a {
					font-size: 16px;
					font-weight: 400;
					text-decoration: none;
					color: rgb(0, 0, 0);
					font-family: "Poppins", sans-serif;
					background-color: #ffff;
					border-radius: 30px;
					padding: 10px;
					display: flex;
					margin-left:4px;
				}

				a.active{
					background-color: #2fb18b;
					color: white;
				}

				nav li {
					display: inline-flex;
					align-items: center;
				}

				nav .nav-link a:hover {
					background-color: #2fb58c;
					color: #ffff;
				}

				nav img {
					display: flex;
					width: 220px;
					align-items: center;
					transform: translateY(9px);
				}

				.navbar-container {
					flex-direction: row;
					justify-content: space-between;
				}

				.menu {
					display: none;
					flex-direction: column;
					height: 20px;
					justify-content: space-between;
					position: relative;
					margin-right: 20px;
					border-radius: 2px;
				}

				.menu input {
					position: absolute;
					width: 40px;
					height: 28px;
					left: -10px;
					top: -7px;
					opacity: 0;
					cursor: pointer;
					opacity: 0;
					z-index: 4;
				}

				.menu span {
					display: block;
					width: 28px;
					height: 3px;
					background-color: black;
					border-radius: 3px;
					transition: all 0.5s;
				}

				.menu span:nth-child(2) {
					transform-origin: 0 0;
				}

				.menu span:nth-child(4) {
					transform-origin: 0 100%;
				}

				.menu input:checked ~ span:nth-child(2) {
					transform: rotate(45deg) translate(2px, -4px);
					background-color: #2fb58c;
				}

				.menu input:checked ~ span:nth-child(4) {
					transform: rotate(-45deg) translate(3px, 3px);
					background-color: #2fb58c;
				}

				.menu input:checked ~ span:nth-child(3) {
					transform: scale(0);
				}

				@media screen and (max-width: 800px) {
					nav {
						width: 100%;
					}
					nav a {
						font-size: 14px;
					}

					nav ul {
						width: 100%;
						padding:8px;
					}

					nav ul li{
						width: 100%;
					}

					nav a {
						font-size: 14px;
						width: 100%;
					}

					nav img {
						width: 50%;
						margin-top: 15px;
					}
				}

				@media screen and (max-width: 576px) {
					nav {
						width: 100%;
					}

					nav ul {
						position: absolute;
						right: 0;
						flex-direction: column;
						top: 0;
						width: 50%;
						align-items: flex-start;
						justify-content: space-around;
						z-index: 1;
						background-color: white;
						border-radius: 10px;
						top: 55px;
						margin-right: 10px;
						box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 1);
						transition: all 1s;
						opacity: 1;
					}

					nav ul .slide {
						opacity: 1;
						transform: translate(0);
					}

					nav a {
						font-size: 14px;
						margin-top: 5px;
					}

					nav img {
						width: 50%;
						margin-top: 15px;
						transform: translateY(0px) scale(1.2) translateX(11px);
					}

					.menu {
						display: flex;
					}

					.navbar-container {
						padding: 20px;
					}
				}


				@media(max-width:576px){
					nav ul{
						display:none;
					}

					nav ul.open{
						display:flex;
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
