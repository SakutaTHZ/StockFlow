import { NavLink } from "react-router-dom"; // Import NavLink
import CosmoLogo from "../assets/CosmoLogo.svg";
import JapanFlag from "../assets/JPFlag.png";
import ProfileDropDown from "./ProfileDropDown";
import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";

interface CNetNavProps {
  customClass?: string;
  navClass?: string;
  activeNavClass?: string;
}

const CNetNav: React.FC<CNetNavProps> = ({
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

  return (
    <nav
      className={`flex flex-col md:flex-row items-center justify-between w-full min-h-16 bg-[#F8F5EF] px-10 py-3 ${customClass}`}
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
            to="/StockFlow"
            className={({ isActive }) =>
              `text-nowrap ${navClass} ${isActive ? activeNavClass : "text-gray-700"}`
            }
          >
            Car Stock
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/#"
            className={({ isActive }) =>
              `${navClass} ${isActive ? activeNavClass : "text-gray-700"}`
            }
          >
            Parts
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/#"
            className={({ isActive }) =>
              `${navClass} ${isActive ? activeNavClass : "text-gray-700"}`
            }
          >
            Shipping
          </NavLink>
        </li>

        {/* Time and Profile in Hamburger */}
        <div className="w-full flex justify-end items-center gap-6 mt-4 md:mt-0">
          <div className="time flex items-center gap-2">
            <img src={JapanFlag} alt="flag" />
            {new Date().toLocaleTimeString()}
          </div>
          <ProfileDropDown username="John Dude" />
        </div>
      </ul>
    </nav>
  );
};

export default CNetNav;
