import { IoRestaurantSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navbar = () => {
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
          to="/shop"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#faa504] " : "text-white"
          }
        >
          OUR SHOP
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/signOut"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#faa504] " : "text-white"
          }
        >
          SIGN OUT
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
              md:w-52 font-medium text-black bg-[#1F2937] border border-gray-500"
          >
            {navOptions}
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
          <ul className="flex gap-12 font-bold text-xl">{navOptions}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
