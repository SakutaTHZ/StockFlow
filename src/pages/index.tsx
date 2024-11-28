/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { FaRegTrashAlt, FaSearch, FaListUl } from "react-icons/fa";
import { MdTune, MdBorderAll } from "react-icons/md";
import DropDown from "../components/DropDown";
import CarCard from "../components/CarCard";
import { sortOptions } from "../data/generateData";
import { useAtom } from "jotai";
import { carAtom } from "../data/atoms";
import Pagination from "../components/Pagination";
import { useLocation, useNavigate } from "react-router-dom";

interface indexPageProps {
  customClass?: string;
}
interface LocationState {
  page?: number; // Optional since it might not always exist
}

const indexPage: React.FC<indexPageProps> = ({ customClass }) => {
  const [cars] = useAtom(carAtom);

  const [isFilterOn, setIsFilterOn] = useState(false);
  const [isTableView, setIsTableView] = useState(false);

  const toggleFilter = () => {
    setIsFilterOn(!isFilterOn);
  };

  const handleClearAll = () => {
    window.location.reload();
  };

  // Pagination

  const location = useLocation() as unknown as Location & {
    state: LocationState;
  };
  const [currentPage, setCurrentPage] = useState(location.state?.page || 1);
  const totalPages = Math.ceil(cars.length / 20);
  const navigate = useNavigate();

  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    return navigate(`/`, { state: { cars, page: page } });
  };

  return (
    <div className={`px-12 py-10 flex flex-col gap-6 ${customClass}`}>
      <div className="flex items-center justify-between">
        <p className="text-3xl font-bold">Car For Sale</p>
        <div className="flex items-center">
          <p className="px-6 text-gray-500">
                  {cars.length != 0 && (
                    <>
                      Showing{" "}
                      <b>
                        {20 * currentPage - 20 +1}-{20 * currentPage -1}
                      </b>{" "}
                      of <b>{cars.length}</b> listings
                    </>
                  )}
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
              options={sortOptions}
              customClass="my-custom-class"
              optionClass="my-option-class"
              optionBoxClass="md:w-fit right-0 z-50"
              buttonClass="py-2"
            />
            <DropDown
              options={sortOptions}
              customClass="my-custom-class"
              optionClass="my-option-class"
              optionBoxClass="md:w-fit right-0 z-50"
              buttonClass="py-2"
            />
          </div>
        </div>
      </div>

      <div className="lg:flex z-10 transition-all">
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
        <div className="flex-1 flex flex-wrap justify-evenly align-top gap-2 mt-6 lg:mt-0 transition-all">
        <div className="rightBox grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-x-2 gap-y-4 w-full h-full">
          {cars.slice(20 * currentPage - 20, 20 * currentPage).map((car) => (
            <CarCard car={car} extraStatus={car.showExtraStatus} />
          ))}
          </div>

          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default indexPage;
