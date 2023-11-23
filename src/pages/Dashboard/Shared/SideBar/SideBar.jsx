import { NavLink } from "react-router-dom";

const SideBar = () => {
    return (
        <div className="w-72 bg-[#d1a054]">
            <ul className="menu">
                <li><NavLink to="/dashboard/cart">My Cart</NavLink></li>
            </ul>
        </div>
    );
};

export default SideBar;