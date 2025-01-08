// LogsDropDown

import React, { useState } from "react";
import Popup from "../Popup";
import { BsBoxSeam } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdOutlineInsertLink } from "react-icons/md";
import { RiTimerLine, RiLineChartLine } from "react-icons/ri";
import StockLogs from "../StockLogs";

interface LogsDropDownProps {
  customClass?: string;
  data?: string;
}

const LogsDropDown: React.FC<LogsDropDownProps> = ({ customClass }) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const buttonClass =
    "flex items-center gap-2 p-2 px-4 text-left hover:bg-gray-100";

  const toggle = () => {
    setDropDownOpen(!dropDownOpen);
  };

  const [isVisitorLogPopupOpen, setIsVisitorLogPopupOpen] = useState(false);
  const openVisitorLogPopup = () => setIsVisitorLogPopupOpen(true);
  const closeVisitorLogPopup = () => setIsVisitorLogPopupOpen(false);

  const [isStocksLogPopupOpen, setIsStocksLogPopupOpen] = useState(false);
  const openStocksLogPopup = () => setIsStocksLogPopupOpen(true);
  const closeStocksLogPopup = () => setIsStocksLogPopupOpen(false);
  return (
    <>
      <div className={`relative inline-block w-full text-left ${customClass}`}>
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
            className={`z-50 border bg-white shadow-sm absolute right-0 translate-y-2 flex flex-col text-nowrap rounded-md`}
          >
            <button className={buttonClass} onClick={openStocksLogPopup}>
              <RiTimerLine size={18} className="flex-shrink-0" />
              Stock Log
            </button>
            <button className={buttonClass}>
              <BsBoxSeam size={18} className="flex-shrink-0" />
              Bids
            </button>
            <button className={buttonClass}>
              <RiLineChartLine size={18} className="flex-shrink-0" />
              Price Changes
            </button>
            <button className={buttonClass} onClick={openVisitorLogPopup}>
              <IoPersonCircleOutline size={18} className="flex-shrink-0" />
              Visitor Log
            </button>
          </div>
        )}
      </div>

      {/* Popups */}
        <StockLogs customClass="w-11/12 h-5/6" isOpen={isStocksLogPopupOpen} onClose={closeStocksLogPopup}/>

      <Popup
        isOpen={isVisitorLogPopupOpen}
        onClose={closeVisitorLogPopup}
        title="Visitor Log"
        customClass="m-2 w-1/3"
        content={
          <>
            <p className="">
              Left mirror cover has some touch up marks <br /> Front window has
              some cracks Body has some scratches and dents
              <br /> Audio doesn't work well
              <br />
              Push start
              <br /> Standard alloy wheels
              <br /> HID head lamps Fog lamps
              <br /> Trade in vehicle Interior has some scratches
            </p>
          </>
        }
      />
    </>
  );
};

export default LogsDropDown;
