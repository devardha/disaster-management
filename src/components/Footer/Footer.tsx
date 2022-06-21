import "./footer.css";

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
		</footer>
	);
};

export default Footer;
