import { NavLink } from "react-router-dom"; // Import NavLink
import CosmoLogo from "../assets/CosmoLogo.svg";
import JapanFlag from "../assets/JPFlag.png";
import ProfileDropDown from "./ProfileDropDown";
import { useState } from "react";
import { MdArrowForward, MdOutlineMenu } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import DropDown from "./DropDown";

interface CNetAdminNavProps {
  customClass?: string;
  navClass?: string;
  activeNavClass?: string;
}

const CNetAdminNav: React.FC<CNetAdminNavProps> = ({
  customClass,
  navClass,
  activeNavClass,
}) => {
  navClass = `font-semibold px-2 ${navClass}`;
  activeNavClass = `h-full text-[#997435] font-bold ${activeNavClass}`;

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const navOptions = ["Car", "Ledger", "User", "Payment"];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white">
      <div
        className={`flex flex-col md:flex-row border-b items-center justify-between w-full min-h-16 bg-[#F8F5EF] px-10 py-3 ${customClass}`}
      >
        {/* Logo and Nav links */}
        <div className="flex items-center justify-between md:justify-normal w-full md:w-auto">
          <img className="h-9" src={CosmoLogo} alt="logo" />

          {/* Hamburger Menu for Mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 focus:outline-none"
          >
            <MdOutlineMenu size={28} />
          </button>
        </div>

        {/* Navigation Links and Profile/Time */}
        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } pl-8 py-4 md:py-0 md:flex flex-col md:flex-row items-center gap-4 w-full md:w-full`}
        >
          <li>
            <NavLink
              to="/StockFlowAdmin"
              className={({ isActive }) =>
                `text-nowrap flex items-center gap-2 ${navClass} ${
                  isActive ? activeNavClass : "text-gray-700"
                }`
              }
            >
              Menu
              <FaChevronDown size={10} className="translate-y-0.5" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Office"
              className={({ isActive }) =>
                `flex items-center gap-2 ${navClass} ${
                  isActive ? activeNavClass : "text-gray-700"
                }`
              }
            >
              Office
              <FaChevronDown size={10} className="translate-y-0.5" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Ledger"
              className={({ isActive }) =>
                `flex items-center gap-2 ${navClass} ${
                  isActive ? activeNavClass : "text-gray-700"
                }`
              }
            >
              Ledger
              <FaChevronDown size={10} className="translate-y-0.5" />
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Admin"
              className={({ isActive }) =>
                `flex items-center gap-2 ${navClass} ${
                  isActive ? activeNavClass : "text-gray-700"
                }`
              }
            >
              Admin
              <FaChevronDown size={10} className="translate-y-0.5" />
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Report"
              className={({ isActive }) =>
                `flex items-center gap-2 ${navClass} ${
                  isActive ? activeNavClass : "text-gray-700"
                }`
              }
            >
              Report
              <FaChevronDown size={10} className="translate-y-0.5" />
            </NavLink>
          </li>

          {/* Time and Profile in Hamburger */}
          <div className="w-full flex justify-end items-center gap-6 mt-4 md:mt-0">
            <div className="flex">
              <DropDown
                options={navOptions}
                optionClass="w-full h-fit"
                optionBoxClass="md:w-fit h-fit right-0 z-50"
                buttonClass="py-1 rounded-e-none bg-white"
              />
              <input
                type="text"
                className="focus-within:outline-none px-2 border rounded-e-md"
                placeholder="Search by Keyword"
              />
            </div>
            <button className="bg-[#FFC158] flex items-center p-2 px-4 gap-2 rounded-md shadow-sm font-semibold">
              Add
              <FaChevronDown size={10} className="translate-y-0.5" />
            </button>
            <div className="time flex items-center gap-2">
              <img src={JapanFlag} alt="flag" />
              {new Date().toLocaleTimeString()}
            </div>
            <ProfileDropDown username="John Dude" />
          </div>
        </ul>
      </div>
      <div className="flex px-10 py-3 border-b">
        <p className="flex items-center gap-2">Menu <MdArrowForward  className="translate-y-0.5"/></p>

        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } pl-8 py-4 md:py-0 md:flex flex-col md:flex-row items-center gap-4 w-full md:w-full`}
        >
          <li>
            <NavLink
              to="/StockFlowAdmin"
              className={({ isActive }) =>
                `text-nowrap flex items-center gap-2 ${navClass} ${
                  isActive ? activeNavClass : "text-gray-700"
                }`
              }
            >
              Car Stock
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Office"
              className={({ isActive }) =>
                `flex items-center gap-2 ${navClass} ${
                  isActive ? activeNavClass : "text-gray-700"
                }`
              }
            >
              Parts
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Office"
              className={({ isActive }) =>
                `flex items-center gap-2 ${navClass} ${
                  isActive ? activeNavClass : "text-gray-700"
                }`
              }
            >
              Shipping
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default CNetAdminNav;
