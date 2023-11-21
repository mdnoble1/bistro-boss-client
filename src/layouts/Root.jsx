import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import Navbar from "../pages/shared/Navbar/Navbar";

const Root = () => {


    const location = useLocation();

    // console.log(location)

    const isLogin = location.pathname.includes('login')
    const isRegister= location.pathname.includes('register')


    return (
        <div>
            { ( isLogin || isRegister ) || <Navbar></Navbar>}
            <Outlet></Outlet>
            { ( isLogin || isRegister ) || <Footer></Footer>}
        </div>
    );
};

export default Root;