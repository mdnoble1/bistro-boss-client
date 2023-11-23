import { Outlet } from "react-router-dom";
import SideBar from "../pages/Dashboard/Shared/SideBar/SideBar";

const Dashboard = () => {
    return (
        <div className="flex">
            <div><SideBar></SideBar></div>
            <div><Outlet></Outlet></div>
        </div>
    );
};

export default Dashboard;