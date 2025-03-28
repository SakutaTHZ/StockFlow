// LogsDropDown

import React, { useState,useRef, useEffect } from "react";
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

  const [isPriceChangesPopupOpen, setIsPriceChangesPopupOpen] = useState(false);
  const openPriceChangesPopup = () => setIsPriceChangesPopupOpen(true);
  const closePriceChangesPopup = () => setIsPriceChangesPopupOpen(false);

  const tableColumnClass = "text-left p-3 px-4";
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropDownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className={`relative inline-block w-full text-left ${customClass}`} ref={dropdownRef}>
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
            <button className={buttonClass} onClick={openPriceChangesPopup}>
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
      <StockLogs
        customClass="w-11/12 h-5/6"
        isOpen={isStocksLogPopupOpen}
        onClose={closeStocksLogPopup}
      />

      <Popup
        isOpen={isPriceChangesPopupOpen}
        onClose={closePriceChangesPopup}
        title="Price Changes"
        customClass="m-2 w-9/12 md:w-5/12"
        content={
          <>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className={`${tableColumnClass}`}>Price</th>
                  <th className={`${tableColumnClass}`}>Currency</th>
                  <th className={`${tableColumnClass}`}>Terms</th>
                  <th className={`${tableColumnClass}`}>Display</th>
                  <th className={`${tableColumnClass}`}>Modified</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-b border-gray-300">
                  <td className={`${tableColumnClass}`}>0.00</td>
                  <td className={`${tableColumnClass}`}>JPY</td>
                  <td className={`${tableColumnClass}`}>FOB</td>
                  <td className={`${tableColumnClass}`}>HIDE</td>
                  <td className={`${tableColumnClass}`}>20 Jun, 11:29</td>
                </tr>
                <tr className="border-t border-b border-gray-300">
                  <td className={`${tableColumnClass}`}>678,000.00</td>
                  <td className={`${tableColumnClass}`}>JPY</td>
                  <td className={`${tableColumnClass}`}>FOB</td>
                  <td className={`${tableColumnClass}`}>HIDE</td>
                  <td className={`${tableColumnClass}`}>20 Jun, 11:29</td>
                </tr>
                <tr className="border-t border-b border-gray-300">
                  <td className={`${tableColumnClass}`}>708,000.00</td>
                  <td className={`${tableColumnClass}`}>JPY</td>
                  <td className={`${tableColumnClass}`}>FOB</td>
                  <td className={`${tableColumnClass}`}>HIDE</td>
                  <td className={`${tableColumnClass}`}>20 Jun, 11:29</td>
                </tr>
                <tr className="border-t border-b border-gray-300">
                  <td className={`${tableColumnClass}`}>474,000.00</td>
                  <td className={`${tableColumnClass}`}>JPY</td>
                  <td className={`${tableColumnClass}`}>FOB</td>
                  <td className={`${tableColumnClass}`}>HIDE</td>
                  <td className={`${tableColumnClass}`}>20 Jun, 11:29</td>
                </tr>
                <tr className="border-t border-b border-gray-300">
                  <td className={`${tableColumnClass}`}>166,000.00</td>
                  <td className={`${tableColumnClass}`}>JPY</td>
                  <td className={`${tableColumnClass}`}>FOB</td>
                  <td className={`${tableColumnClass}`}>HIDE</td>
                  <td className={`${tableColumnClass}`}>20 Jun, 11:29</td>
                </tr>
              </tbody>
            </table>
          </>
        }
      />
      <Popup
        isOpen={isVisitorLogPopupOpen}
        onClose={closeVisitorLogPopup}
        title="Visitor Log"
        customClass="m-2 w-1/3 h-5/6 overflow-y-auto custom-scrollbar"
        content={
          <>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className={`${tableColumnClass}`}>Customer</th>
                <th className={`${tableColumnClass}`}>Time Stamp</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-b border-gray-300">
                <td className={`${tableColumnClass}`}>Andys Imports</td>
                <td className={`${tableColumnClass}`}>2024/8/24 19:02</td>
              </tr>
              <tr className="border-t border-b border-gray-300">
                <td className={`${tableColumnClass}`}>Bookham Imports</td>
                <td className={`${tableColumnClass}`}>2024/8/24 19:02</td>
              </tr>
              <tr className="border-t border-b border-gray-300">
                <td className={`${tableColumnClass}`}>Cye Import Ltd</td>
                <td className={`${tableColumnClass}`}>2024/8/24 19:02</td>
              </tr>
              <tr className="border-t border-b border-gray-300">
                <td className={`${tableColumnClass}`}>Shinko</td>
                <td className={`${tableColumnClass}`}>2024/8/24 19:02</td> 
              </tr>
              <tr className="border-t border-b border-gray-300">
                <td className={`${tableColumnClass}`}>John Pate</td>
                <td className={`${tableColumnClass}`}>2024/8/24 19:02</td> 
              </tr>
              <tr className="border-t border-b border-gray-300">
                <td className={`${tableColumnClass}`}>Andys Imports</td>
                <td className={`${tableColumnClass}`}>2024/8/24 19:02</td>
              </tr>
              <tr className="border-t border-b border-gray-300">
                <td className={`${tableColumnClass}`}>Bookham Imports</td>
                <td className={`${tableColumnClass}`}>2024/8/24 19:02</td>
              </tr>
              <tr className="border-t border-b border-gray-300">
                <td className={`${tableColumnClass}`}>Cye Import Ltd</td>
                <td className={`${tableColumnClass}`}>2024/8/24 19:02</td>
              </tr>
              <tr className="border-t border-b border-gray-300">
                <td className={`${tableColumnClass}`}>Shinko</td>
                <td className={`${tableColumnClass}`}>2024/8/24 19:02</td> 
              </tr>
            </tbody>
          </table>
          </>
        }
      />
    </>
  );
};

export default LogsDropDown;
