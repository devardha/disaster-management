const Footer = () => {
	return (
		<footer>
			<div className="container footer-container">
				<div className="logo">
					<img src="/images/logo-with-text.png" alt="" />
				</div>
				<div className="bmkg">
					<img src="/images/bmkg.png" alt="" />
					<div className="kontak">
						<h1>BMKG</h1>
						<div>
							<div className="kontak-row">
								<div>E-Mail</div>
								<div>: info@bmkg.co.id</div>
							</div>
							<div className="kontak-row">
								<div>Call Centre</div>
								<div>: (021) 196</div>
							</div>
							<div className="kontak-row">
								<div>Fax</div>
								<div>
									: (021) 4246703<sup>2</sup>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="link">
					<h1>Link Terkait</h1>
					<a href="https://www.bmkg.go.id/?lang=ID">BMKG</a>
					<a href="http://dataonline.bmkg.go.id/home">
						<p>Data Online</p>
					</a>
				</div>
			</div>
			<style>{`
			footer {
				display: flex;
				padding: 20px 0;
				background-color: #000000;
				color: #ffff;
				justify-content: space-around;
				font-family: "Poppins", sans-serif;
				font-size: 12px;
			}
			
			footer .link {
				margin-right: 100px;
				text-decoration: none;
				list-style-type: none;
				color: #ffff;
				width: 50%;
			}
			
			footer .link a {
				text-decoration: none;
				list-style-type: none;
				color: #ffff;
			}
			
			footer .logo img {
				margin: 15px 0px;
				display: flex;
				align-items: center;
				width: 300px;
			}
			footer .bmkg .kontak h1 {
				margin-right: 40px;
			}
			
			footer .bmkg .kontak p {
				text-align: left;
			}
			
			footer .bmkg img {
				display: flex;
				width: 100px;
				align-items: center;
				object-fit: contain;
			}
			
			footer .bmkg {
				display: flex;
				margin-right: 100px;
			}
			
			.footer-container {
				display: grid;
				grid-template-columns: auto auto auto;
			}
			.kontak {
				margin-left: 20px;
			}
			.kontak h1 {
				margin: 0;
				font-size: 30px;
				margin-bottom: 4px;
			}
			.kontak-row {
				display: flex;
				font-size: 16px;
			}
			
			@media screen and (max-width: 800px) {
				.footer-container {
					width: 100%;
					display: block;
				}
			
				footer .logo img {
					width: 50%;
					margin-top: -10px;
					padding-bottom: 50px;
				}
			
				.container .footer-container {
					display: flex;
					flex-direction: column;
					height: 100px;
					justify-content: space-between;
				}
			
				footer .bmkg {
					margin-bottom: 50px;
					margin-right: 0;
				}
			
				footer .link {
					display: block;
					width: 40%;
					margin-top: 50px;
					margin-bottom: 40px;
				}
			}
			
			@media screen and (max-width: 576px) {
				.footer-container {
					width: 100%;
					display: block;
				}
			
				footer .logo img {
					width: 70%;
					margin-top: -10px;
					padding-bottom: 50px;
				}
			
				.container .footer-container {
					display: flex;
					flex-direction: column;
					height: 100px;
					justify-content: space-between;
				}
			
				footer .bmkg {
					margin-bottom: 50px;
				}
			
				footer .link {
					display: block;
					width: 40%;
					margin-top: 50px;
					margin-bottom: 40px;
				}
			}
			
			`}</style>
		</footer>
	);
};

export default Footer;
