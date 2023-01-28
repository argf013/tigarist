import { Outlet } from "react-router-dom";
// import Footer from "../component/Footer";
// import Navibar from "../component/navibar";
const Layout = () => {
  return (
    <>
    {/* <Navibar/> */}
    <Outlet />
    </>
  )
};

export default Layout;