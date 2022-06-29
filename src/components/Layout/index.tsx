import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

type Layout = {
  children: React.ReactNode;
};

const Layout = ({ children }: Layout) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
