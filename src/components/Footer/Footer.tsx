import "./footer.css";

const Footer = () => {
	return (
		<footer>
			<div className="container footer-container">
				<div className="logo">
					<img src="/images/logo.png" alt="" />
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
				.footer-container{
					display:grid;
					grid-template-columns: auto auto auto;
				}
				.kontak{
					margin-left:32px;
				}
				.kontak h1{
					margin:0;
					font-size:40px;
					margin-bottom:4px;
				}
				.kontak-row{
					display:flex;
					font-size:16px;
				}
			`}</style>
		</footer>
	);
};

export default Footer;
