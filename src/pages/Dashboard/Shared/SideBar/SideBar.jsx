import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import useCart from "../../../../hooks/useCart";

const SideBar = () => {


  const [cart] = useCart();

  return (
    <div className="w-[160px] lg:w-96 bg-[#d1a054] flex justify-center min-h-screen">
      <ul className="mt-6 lg:mt-12">
        <div className="text-black mb-10 lg:mb-20">
          <h2 className={`font-black lg:text-3xl cinzel`}>
            BISTRO BOSS
          </h2>
          <p
            className={`font-bold text-sm lg:text-2xl cinzel tracking-[3px] lg:tracking-[7px]`}
          >
            Restaurant
          </p>
        </div>
        <li className="mb-6">
          <NavLink
            to="/dashboard/userHome"
            className={({ isActive }) =>
              isActive
                ? `text-white flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
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
                ? `text-white flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                : `text-black flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
            }
          >
            <FaCalendarAlt className="lg:text-2xl"></FaCalendarAlt>Reservation
          </NavLink>
        </li>
        <li className="mb-6">
          <NavLink
            to="/dashboard/payment"
            className={({ isActive }) =>
              isActive
                ? `text-white flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                : `text-black flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
            }
          >
            <MdOutlinePayments className="lg:text-2xl"></MdOutlinePayments> Payment
            History
          </NavLink>
        </li>
        <li className="mb-6">
          <NavLink
            to="/dashboard/cart"
            className={({ isActive }) =>
              isActive
                ? `text-white flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                : `text-black flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
            }
          >
            <FaShoppingCart className="lg:text-2xl"></FaShoppingCart> My Cart ({cart.length})
          </NavLink>
        </li>
        <li className="mb-6">
          <NavLink
            to="/dashboard/addReview"
            className={({ isActive }) =>
              isActive
                ? `text-white flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
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
                ? `text-white flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                : `text-black flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
            }
          >
            <FaCalendarCheck className="lg:text-2xl"></FaCalendarCheck> My Booking
          </NavLink>
        </li>
        <div className="border text-white w-full mb-10"></div>
        <li className="mb-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `text-white flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                : `text-black flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
            }
          >
            <FaHome className="lg:text-2xl"></FaHome>Home
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
