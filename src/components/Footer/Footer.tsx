import ".assets/styles/footer.css";


const Footer = () => {
	return(
		<><div className="logo">
			<img src="Logo-1.png" alt=""/>
			</div><div className="bmkg">
				<img src="Logo-BMKG.png" alt=""/>
					<div className="kontak">
						<h1>BMKG</h1>
						<table>
							<tr>
								<th>E-Mail</th>
								<td>: info@bmkg.co.id</td>
							</tr>
							<tr>
								<th>Call Centre</th>
								<td>: (021) 196</td>
							</tr>
							<tr>
								<th>Fax</th>
								<td>: (021) 4246703<sup>2</sup></td>
							</tr>
						</table>
					</div>
				</div><div className="link">
				<h1>Link Terkait</h1>
				<a href="https://www.bmkg.go.id/?lang=ID">BMKG</a>
				<a href="http://dataonline.bmkg.go.id/home"><p>Data Online</p></a>
			</div></>
	);
};

export default Footer;
