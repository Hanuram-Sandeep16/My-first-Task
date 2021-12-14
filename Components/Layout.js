import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div className="content">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
