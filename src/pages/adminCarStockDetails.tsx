import { Link, useLocation } from "react-router-dom";
import CNetAdminNav from "../components/CNetAdminNav";
import { CarData } from "../data/types";
import { FaChevronDown, FaRegCommentDots, FaWheelchair } from "react-icons/fa";
import {
  MdOutlineTimer,
  MdOutlineNewReleases,
  MdEdit,
  MdOutlineInsertLink,
} from "react-icons/md";
import { PiChartLineDownBold } from "react-icons/pi";
import { TbFaceIdError } from "react-icons/tb";
import Hybrid from "../assets/hybrid.png";
import { IoMdEye } from "react-icons/io";
import { BiImages } from "react-icons/bi";
import { RiLineChartLine, RiTimerLine, RiTruckLine } from "react-icons/ri";
import { HiOutlineChartBar } from "react-icons/hi";
import { useState } from "react";
import { BsBoxSeam } from "react-icons/bs";
import { IoPersonCircleOutline } from "react-icons/io5";

interface DetailsProps {
  customClass?: string;
}

interface LocationState {
  card: CarData; // Define the expected type for 'card'
  cars: CarData[];
}

const SalesDropDown = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const buttonClass = "p-2 px-4 text-left hover:bg-gray-100";

  const toggle = () => {
    setDropDownOpen(!dropDownOpen);
  };
  return (
    <div className="relative">
      <button
        className="flex flex-col items-center justify-center gap-1 bg-gray-100 hover:bg-gray-200 h-16 px-4 rounded-md"
        onClick={toggle}
      >
        <HiOutlineChartBar size={20} />
        <p className="flex items-center gap-1 font-semibold">
          Sales <FaChevronDown size={10} className="translate-y-0.5" />
        </p>
      </button>
      {dropDownOpen && (
        <div
          className={`border bg-white shadow-sm absolute right-0 translate-y-2 flex flex-col text-nowrap rounded-md`}
        >
          <button className={buttonClass}>Add Promotion</button>
          <button className={buttonClass}>Update Banner</button>
          <button className={buttonClass}>Customer View</button>
        </div>
      )}
    </div>
  );
};

const LogsDropDown = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const buttonClass =
    "flex items-center gap-2 p-2 px-4 text-left hover:bg-gray-100";

  const toggle = () => {
    setDropDownOpen(!dropDownOpen);
  };
  return (
    <div className="relative">
      <button
        className="flex flex-col items-center justify-center gap-1 bg-gray-100 hover:bg-gray-200 h-16 px-4 rounded-md"
        onClick={toggle}
      >
        <MdOutlineInsertLink size={20} />
        <p className="flex items-center gap-1 font-semibold">
          Logs <FaChevronDown size={10} className="translate-y-0.5" />
        </p>
      </button>
      {dropDownOpen && (
        <div
          className={`border bg-white shadow-sm absolute right-0 translate-y-2 flex flex-col text-nowrap rounded-md`}
        >
          <button className={buttonClass}>
            <RiTimerLine size={18} />
            Stock Log
          </button>
          <button className={buttonClass}>
            <BsBoxSeam size={18} />
            Bids
          </button>
          <button className={buttonClass}>
            <RiLineChartLine size={18} />
            Price Changes
          </button>
          <button className={buttonClass}>
            <IoPersonCircleOutline size={18} />
            Visitor Log
          </button>
        </div>
      )}
    </div>
  );
};

const AdminCarStockDetails: React.FC<DetailsProps> = () => {
  const location = useLocation();
  const cardData = (location.state as LocationState)?.card;

  const highlightPill = (status: string) => {
    return status === "Welcab" ? (
      <span
        className={`stat flex items-center gap-2 text-sm font-semibold rounded-full px-3 py-1 text-white bg-black bg-opacity-40 ${
          cardData.hold && "hidden"
        }`}
      >
        <FaWheelchair /> {cardData.highlightStatus}
      </span>
    ) : status === "Coming soon" ? (
      <span
        className={`stat flex items-center gap-2 text-sm font-semibold rounded-full px-3 py-1 text-white bg-black bg-opacity-40 ${
          cardData.hold && "hidden"
        }`}
      >
        <MdOutlineTimer /> {cardData.highlightStatus}
      </span>
    ) : status === "Hybrid" ? (
      <span
        className={`stat flex items-center gap-2 text-sm font-semibold rounded-full px-3 py-1 text-white bg-black bg-opacity-40 ${
          cardData.hold && "hidden"
        }`}
      >
        <img src={Hybrid} alt="Hybrid" /> {cardData.highlightStatus}
      </span>
    ) : status === "Reduced" ? (
      <span
        className={`stat flex items-center gap-2 text-sm font-semibold rounded-full px-3 py-1 text-red-600 bg-red-200 ${
          cardData.hold && "hidden"
        }`}
      >
        <PiChartLineDownBold /> {cardData.highlightStatus}
      </span>
    ) : status === "New" ? (
      <span
        className={`stat flex items-center gap-2 text-sm font-semibold rounded-full px-3 py-1 text-green-800 bg-green-200 ${
          cardData.hold && "hidden"
        }`}
      >
        <MdOutlineNewReleases /> {cardData.highlightStatus}
      </span>
    ) : (
      <span
        className={`stat flex items-center gap-2 text-sm font-semibold rounded-full px-3 py-1 text-white bg-black bg-opacity-40 ${
          cardData.hold && "hidden"
        }`}
      >
        <TbFaceIdError /> {cardData.highlightStatus}
      </span>
    );
  };

  return (
    <>
      <CNetAdminNav />

      <div className="flex flex-col gap-6 px-4 md:px-32 py-8">
        <div className="flex items-center gap-1 font-medium">
          <Link to="/StockFlow" className="text-gray-500">
            Car stock
          </Link>
          <p className="text-blue-950 font-semibold">/ Car Details</p>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col gap-3">
            <p className="text-3xl font-bold flex items-center gap-2 text-blue-950">
              {cardData.name}
              <IoMdEye size={20} className="text-green-600" />
            </p>
            <p className="font-medium text-blue-950">
              {cardData.package} / {cardData.vim}
            </p>
            <div className="flex gap-2">
              <span
                className={`id flex items-center gap-2 text-sm rounded-full px-3 py-1 text-white bg-black bg-opacity-40 ${
                  cardData.hold && "hidden"
                }`}
              >
                {cardData.id}
              </span>
              {cardData.highlightStatus !== "" && (
                <>{highlightPill(cardData.highlightStatus)}</>
              )}
            </div>
          </div>

          <div className="flex items-end gap-2">
            <button className="flex flex-col items-center justify-center gap-1 bg-gray-100 hover:bg-gray-200 h-16 px-4 rounded-md">
              <MdEdit size={20} />
              <p className="font-semibold">Edit</p>
            </button>
            <button className="flex flex-col items-center justify-center gap-1 bg-gray-100 hover:bg-gray-200 h-16 px-4 rounded-md">
              <BiImages size={20} />
              <p className="font-semibold">Images</p>
            </button>
            <button className="flex flex-col items-center justify-center gap-1 bg-gray-100 hover:bg-gray-200 h-16 px-4 rounded-md">
              <FaRegCommentDots size={20} />
              <p className="font-semibold">Comments</p>
            </button>
            <button className="flex flex-col items-center justify-center gap-1 bg-gray-100 hover:bg-gray-200 h-16 px-4 rounded-md">
              <RiTruckLine size={20} />
              <p className="font-semibold">Cargo</p>
            </button>
            <SalesDropDown />
            <LogsDropDown />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminCarStockDetails;
