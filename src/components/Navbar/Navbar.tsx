import ".assets/styles/navbar.css";


const Navbar = () => {
	return (
		<nav>
            <div className="lo">
               <img src=".Logo.png" alt="logo"/>
            </div>
            <ul>
                <li><a href="#sejarah">Prakiraan Cuaca</a></li>
                <li><a href="#geografis">Berita Terkini</a></li>
                <li><a href="#wisata">Lapor</a></li>
            </ul>
        </nav>
	);
};

export default Navbar;
