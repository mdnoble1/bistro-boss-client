import { HiMenuAlt1 } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import {
  FaCalendarAlt,
  FaCalendarCheck,
  FaHome,
  FaShoppingCart,
} from "react-icons/fa";
import { MdOutlinePayments, MdReviews } from "react-icons/md";

const Topbar = () => {


  return (
    <div className="navbar bg-[#d1a054] p-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle text-3xl text-white"
          >
            <HiMenuAlt1 />
          </div>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 border-2 border-[#d1a054] rounded-box w-52">
            <div>
              <li className="mb-6">
                <NavLink
                  to="/dashboard/userHome"
                  className={({ isActive }) =>
                    isActive
                      ? `text-[#d1a054] flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                      : `text-black flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                  }
                >
                  <FaHome className="lg:text-2xl"></FaHome> USer Home
                </NavLink>
              </li>
              <li className="mb-6">
                <NavLink
                  to="/dashboard/reservation"
                  className={({ isActive }) =>
                    isActive
                      ? `text-[#d1a054] flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                      : `text-black flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                  }
                >
                  <FaCalendarAlt className="lg:text-2xl"></FaCalendarAlt>
                  Reservation
                </NavLink>
              </li>
              <li className="mb-6">
                <NavLink
                  to="/dashboard/payment"
                  className={({ isActive }) =>
                    isActive
                      ? `text-[#d1a054] flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                      : `text-black flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                  }
                >
                  <MdOutlinePayments className="lg:text-2xl"></MdOutlinePayments>{" "}
                  Payment History
                </NavLink>
              </li>
              <li className="mb-6">
                <NavLink
                  to="/dashboard/cart"
                  className={({ isActive }) =>
                    isActive
                      ? `text-[#d1a054] flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                      : `text-black flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                  }
                >
                  <FaShoppingCart className="lg:text-2xl"></FaShoppingCart> My
                  Cart
                </NavLink>
              </li>
              <li className="mb-6">
                <NavLink
                  to="/dashboard/addReview"
                  className={({ isActive }) =>
                    isActive
                      ? `text-[#d1a054] flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                      : `text-black flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                  }
                >
                  <MdReviews className="lg:text-2xl"></MdReviews> Add Review
                </NavLink>
              </li>
              <li className="mb-10">
                <NavLink
                  to="/dashboard/myBooking"
                  className={({ isActive }) =>
                    isActive
                      ? `text-[#d1a054] flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                      : `text-black flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                  }
                >
                  <FaCalendarCheck className="lg:text-2xl"></FaCalendarCheck> My
                  Booking
                </NavLink>
              </li>
            </div>
            <div className="border border-[#d1a054] w-11/12 mx-auto mb-4"></div>
            {/* shared  */}
            <li className="mb-6">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? `text-[#d1a054] flex items-center gap-3 font-bold uppercase`
                    : `text-black flex items-center gap-3 font-bold uppercase`
                }
              >
                <FaHome className="text-2xl"></FaHome>Home
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-end">
        <div>
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
        </div>
      </div>
    </div>
  );
};

export default Topbar;
