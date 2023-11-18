import { NavLink } from "react-router-dom";
import { FaFacebook, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-[#1F2937] text-white text-center py-16 md:py-24">
          <h2 className="font-medium text-2xl lg:text-3xl mb-6">CONTACT US</h2>
          <p className="font-medium lg:text-xl">
            123 ABS Street, Uni 21, Bangladesh
          </p>
          <p className="font-medium lg:text-xl">+88 123456789</p>
          <p className="font-medium lg:text-xl">Mon - Fri: 08:00 - 22:00</p>
          <p className="font-medium lg:text-xl">Sat - Sun: 10:00 - 23:00</p>
        </div>
        <div className="bg-[#111827] text-white text-center lg:text-xl py-16 md:py-24">
          <h2 className="font-medium text-2xl lg:text-3xl mb-6">Follow US</h2>
          <p className="font-medium lg:text-xl mb-8">Join us on social media</p>
          <div className="flex items-center justify-center gap-8 text-2xl md:text-3xl">
            <NavLink>
              <FaFacebook />
            </NavLink>
            <NavLink>
              <FaInstagramSquare />
            </NavLink>
            <NavLink>
              <FaTwitterSquare />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="bg-[#151515] text-center py-4">
        <p className="font-medium text-xs md:text-xl text-white">
          Copyright © mdnoble.wd@gmail.com . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
