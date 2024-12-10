import React, { useState } from "react";
import { MdLogout } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoPersonCircleOutline } from "react-icons/io5";

interface ProfileDropDownProps{
  username?:string;
}

const ProfileDropDown: React.FC<ProfileDropDownProps> = ({username}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Profile and Chevron */}
      <div
        className="flex items-center gap-1 cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="profile rounded-full">
          <IoPersonCircleOutline size={30} className="text-gray-500" />
        </div>
        <p className="font-semibold px-1">
        {username}
        </p>
        <FaChevronDown size={10} className="text-gray-500 translate-y-0.5" />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <Link
              className="flex items-center gap-1 w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              to={"/StockFlow/login"}
              onClick={toggleDropdown}
            >
              <MdLogout size={20} />
              Sign out
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropDown;
