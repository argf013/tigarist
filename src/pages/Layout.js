import { Outlet } from "react-router-dom";
import Navibar from "../component/navibar";
const Layout = () => {
  return (
    <>
    <Navibar/>
    <Outlet />
    </>
  )
};

export default Layout;