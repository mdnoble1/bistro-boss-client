import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import SideBar from "../pages/Dashboard/Shared/SideBar/SideBar";
import Topbar from "../pages/Dashboard/Shared/Topbar/Topbar";

const Dashboard = () => {
  return (
    <section>
      <Helmet>
        <title>Bistro Boss | Dashboard</title>
      </Helmet>
      <div className="md:grid grid-cols-4">
        <div className="hidden md:block">
          <SideBar></SideBar>
        </div>
        <div className="col-span-3">
          <div className="md:hidden">
            <Topbar></Topbar>
          </div>
          <div>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
