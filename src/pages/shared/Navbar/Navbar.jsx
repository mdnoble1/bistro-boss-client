import { useContext } from "react";
import { IoRestaurantSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { CgProfile } from "react-icons/cg";
import { FaCartPlus } from "react-icons/fa6";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("user logged out");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#faa504] " : "text-white"
          }
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#faa504] " : "text-white"
          }
        >
          CONTACT US
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#faa504] " : "text-white"
          }
        >
          DASHBOARD
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#faa504] " : "text-white"
          }
        >
          OUR MENU
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/shop/salads"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#faa504] " : "text-white"
          }
        >
          OUR SHOP
        </NavLink>
      </li>
      <li>
        <NavLink to="/">
          <button className="btn btn-ghost">
            <FaCartPlus className="text-3xl lg:text-4xl text-white"></FaCartPlus>
            <div className="badge badge-secondary">+0</div>
          </button>
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-black bg-opacity-50 absolute z-10 w-full px-4 md:px-8 lg:px-20 py-2 lg:py-10">
      <div className="flex justify-between items-center">
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="text-3xl font-extrabold text-white">
            <IoRestaurantSharp />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content mt-3 z-[1] p-4 drop-shadow-2xl rounded-box w-40
              md:w-52 font-medium text-black bg-black border border-black bg-opacity-90"
          >
            {navOptions}
            <div className="mt-4">
              {user ? (
                <>
                  <div className="flex items-center justify-between">
                    <div>
                      <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar"
                      >
                        <div className="w-10 rounded-full">
                          <img src={user.photoURL} />
                        </div>
                      </label>
                    </div>
                    <div>
                      <span className="block font-semibold text-sm text-center text-white uppercase">
                        {user.displayName}
                      </span>
                      <button
                        onClick={handleLogOut}
                        className="btn btn-xs btn-outline text-[#ffa903]"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="my-8 text-left">
                    <NavLink to="/login" className="text-[#ffa903]">
                      <button className="btn btn-sm btn-outline text-[#ffa903] ml-2">
                        Login
                      </button>
                    </NavLink>
                  </div>
                </>
              )}
            </div>
          </ul>
        </div>
        <NavLink to="/">
          <div className="text-white">
            <h2 className={`font-black text-xl lg:text-3xl cinzel`}>
              BISTRO BOSS
            </h2>
            <p
              className={`font-bold text-sm lg:text-2xl cinzel tracking-[6px] lg:tracking-[7px]`}
            >
              Restaurant
            </p>
          </div>
        </NavLink>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-12 font-bold text-xl items-center">{navOptions}</ul>
        </div>
        <div className={`hidden lg:block`}>
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar text-6xl text-white"
            >
              <CgProfile></CgProfile>
            </label>
            <div
              tabIndex={0}
              className="menu dropdown-content z-[1] p-2 shadow rounded-box w-52 mt-4 bg-black border border-black bg-opacity-80"
            >
              {user ? (
                <>
                  <div>
                    <div>
                      <div>
                        <img
                          className="w-10 rounded-full mx-auto my-4"
                          src={user.photoURL}
                        />
                      </div>
                    </div>
                    <div>
                      <span className="block font-semibold text-center mb-4 text-white uppercase">
                        {user.displayName}
                      </span>
                    </div>
                    <div className="text-center mb-6">
                      <button
                        onClick={handleLogOut}
                        className="btn btn-sm btn-outline text-[#ffa903]"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="my-8 text-center">
                    <p className="font-semibold text-white text-lg">
                      Please{" "}
                      <NavLink to="/login" className="">
                        <button className="btn btn-sm btn-outline text-[#ffa903] ml-2">
                          Login
                        </button>
                      </NavLink>
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
