/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { FaRegTrashAlt, FaSearch, FaListUl } from "react-icons/fa";
import { MdTune, MdBorderAll } from "react-icons/md";
import DropDown from "../components/DropDown";

interface indexPageProps {
  customClass?: string;
}

const indexPage: React.FC<indexPageProps> = ({ customClass }) => {
  const [isFilterOn, setIsFilterOn] = useState(false);
  const [isTableView, setIsTableView] = useState(false);

  const toggleFilter = () => {
    setIsFilterOn(!isFilterOn);
  };

  const handleClearAll = () => {
    window.location.reload();
  };

  const options = [
    "Most Relevant",
    "Date Latest to Oldest",
    "Date Oldest to Latest",
    "Price Low to High",
    "Price High to Low",
    "Mileage Low to High",
    "Mileage High to Low",
  ];

  return (
    <div className={`px-12 py-10 flex flex-col gap-6 ${customClass}`}>
      <div className="flex items-center justify-between">
        <p className="text-3xl font-bold">Car For Sale</p>
        <div className="flex items-center">
          <p className="px-6 text-gray-500">
            Showing <b className="text-blue-950">1</b>-
            <b className="text-blue-950">20</b> of{" "}
            <b className="text-blue-950">2,420</b> listings
          </p>
          <div className="flex items-center gap-4 pl-6 border-l">
            <button
              onClick={() => setIsTableView(false)}
              className={`flex items-center p-2 rounded-md transition ${
                !isTableView
                  ? "bg-amber-200 border border-yellow-400"
                  : "bg-gray-100 hover:bg-amber-100"
              }`}
            >
              <MdBorderAll size={18} />
            </button>
            <button
              onClick={() => setIsTableView(true)}
              className={`flex items-center p-2 rounded-md transition ${
                isTableView
                  ? "bg-amber-200 border border-yellow-400"
                  : "bg-gray-100 hover:bg-amber-100"
              }`}
            >
              <FaListUl size={16} />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-6 lg:flex z-10 transition-all">
        {/* Left Sticky Box */}
        {isFilterOn && (
          <div
            className="leftBox mr-6 overflow-hidden animate-slideUp transition-all inset-0 md:sticky top-24 w-full md:w-64 flex flex-col rounded-md shadow-lg h-fit z-40"
            style={{ animationFillMode: "forwards" }}
          >
            <div className="bg-slate-50 w-full flex gap-1 justify-between items-center py-2.5 px-4 border-b border-b-gray-200">
              <p className="text-lg font-bold">Filter Options</p>
              <button
                className="clearAll text-yellow-600 font-semibold"
                onClick={handleClearAll}
              >
                <FaRegTrashAlt />
              </button>
            </div>
          </div>
        )}

        {/* Right Scrollable Content */}
        <div className="flex-1 flex flex-col gap-6 mt-6 lg:mt-0 transition-all">
          <div className="flex flex-wrap gap-2 w-full items-center justify-between transition-all">
            <div className="flex items-center gap-2 transition-all">
              <button
                className="flex items-center gap-2 border p-2 px-3 rounded-3xl bg-white border-gray-300"
                onClick={toggleFilter}
              >
                <MdTune size={18} />
                Filters
              </button>
            </div>
            <div className="w-full md:w-auto flex flex-col md:flex-row gap-2 items-center">
              <div className="relative w-full md:w-auto border rounded-md border-gray-300">
                <input
                  type="text"
                  placeholder="Search by Make or Model"
                  className="pl-10 pr-4 py-2 rounded-md w-full md:w-72 bg-white outline-none"
                />
                <FaSearch className="absolute left-3 top-3.5 text-gray-600" />
              </div>
              <div className="flex gap-2 items-center w-full">
                <DropDown
                  options={options}
                  customClass="my-custom-class"
                  optionClass="my-option-class"
                  optionBoxClass="md:w-fit right-0 z-50"
                  buttonClass="py-2"
                />
                <DropDown
                  options={options}
                  customClass="my-custom-class" 
                  optionClass="my-option-class"
                  optionBoxClass="md:w-fit right-0 z-50"
                  buttonClass="py-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default indexPage;
