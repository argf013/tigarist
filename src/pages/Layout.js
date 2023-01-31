import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";

const Layout = () => {
  return (
    <>
    <Outlet />
    <Footer />
    </>
  )
};

export default Layout;