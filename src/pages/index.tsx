/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { FaRegTrashAlt, FaSearch, FaListUl } from "react-icons/fa";
import { MdTune, MdBorderAll } from "react-icons/md";
import DropDown from "../components/DropDown";
import CarCard from "../components/CarCard";
import {
  carStatus,
  exteriorColor,
  sortOptions,
  yardArea,
} from "../data/generateData";
import { useAtom } from "jotai";
import { carAtom } from "../data/atoms";
// import Pagination from "../components/Pagination";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCarTunnel } from "react-icons/fa6";
import CarRow from "../components/CarRow";
import FilterOptionDropDown from "../components/FilterOptionDropDown";
import { makeBrandData, Model } from "../data/arrayData";
import FilterClearDropDown from "../components/FilterClearDropDown";
import CNetNav from "../components/CNetNav";
import RangeSlider_V2 from "../components/RangeSlider_V2";

interface indexPageProps {
  customClass?: string;
}
interface LocationState {
  page?: number;
}

const indexPage: React.FC<indexPageProps> = ({ customClass }) => {
  const [cars] = useAtom(carAtom);

  const [isFilterOn, setIsFilterOn] = useState(false);
  const [isTableView, setIsTableView] = useState(false);

  const toggleFilter = () => {
    setIsFilterOn(!isFilterOn);
  };

  const handleClearAll = () => {
    navigate(`/StockFlow`, { state: { cars, page: currentPage } });
  };

  // Pagination

  const location = useLocation() as unknown as Location & {
    state: LocationState;
  };
  const [currentPage] = useState(location.state?.page || 1);
  // const totalPages = Math.ceil(cars.length / 20);
  const navigate = useNavigate();

  // const handlePageChange = (page: number) => {
  //   setCurrentPage(page);

  //   return navigate(`/StockFlow`, { state: { cars, page: page } });
  // };

  const [filteredModels, setFilteredModels] = useState<Model[]>([]);

  const market = [
    { name: "All", count: cars.length },
    {
      name: "My Market",
      count: cars.filter((car) => car.marketType === true).length,
    },
    {
      name: "Other Market",
      count: cars.filter((car) => car.marketType === false).length,
    },
  ];
  const filteredCarStatus = carStatus.map((status) => {
    const count = cars.filter((car) => car.status === status).length;
    return { name: status, count };
  });
  const filteredYardArea = yardArea.map((area) => {
    const count = cars.filter((car) => car.yardArea === area).length;
    return { name: area, count };
  });
  const filteredExteriorColor = exteriorColor.map((color) => {
    const count = cars.filter((car) => car.exteriorColor === color).length;
    return { name: color, count };
  });

  const handleMakeSelection = (selectedOptions: string[]) => {
    const models = makeBrandData
      .filter((make) => selectedOptions.includes(make.name))
      .flatMap((make) => make.models);
    setFilteredModels(models);
  };

  const sortOptions2 = [
    `All Vehicles (${cars.length})`,
    `Available vehicles (${cars.filter((car) => car.hold === true).length})`,
    `Unavailable vehicles (${cars.filter((car) => car.hold === true).length})`,
  ];

  return (
    <>
      <CNetNav customClass="sticky top-0" />
      <div className={`px-12 flex flex-col gap-6 ${customClass}`}>
        <div className="sticky top-[64px] py-4 z-10 transition-all bg-white flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <p className="text-3xl font-bold">Car For Sale</p>
            <div className="flex items-center">
              <p className="px-6 text-gray-500">
                {cars.length != 0 && (
                  <>
                    Showing{" "}
                    <b>
                      {20 * currentPage - 20 + 1}-{20 * currentPage - 1}
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
                  optionBoxClass="custom-scrollbar md:w-fit h-fit right-0 z-50"
                  buttonClass="py-2"
                />
                <DropDown
                  options={sortOptions2}
                  customClass="my-custom-class"
                  optionClass="my-option-class"
                  optionBoxClass="custom-scrollbar md:w-fit h-fit right-0 z-50"
                  buttonClass="py-2"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex transition ease-in-out duration-300">
          {/* Left Sticky Box */}
          <div
            className={`leftBox mr-6 overflow-hidden overflow-y-auto custom-scrollbar animate-slideUp transition-all inset-0 md:sticky top-52 max-h-[75dvh] flex flex-col rounded-md shadow-lg h-fit z-40 ${
              isFilterOn ? "md:w-64 w-full mr-6" : "w-0"
            }`}
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

            <FilterClearDropDown
              customClass={
                "bg-slate-50 makeBrand transmission border-b border-b-gray-200"
              }
              boxName="Market"
              listData={market}
            />

            <FilterOptionDropDown
              boxName="Make/Brand"
              listData={makeBrandData.map((make) => ({
                name: make.name,
                count: make.count,
              }))}
              customClass={"bg-slate-50 makeBrand border-b border-b-gray-200"}
              placeholder={"Search Make/Brand"}
              onSelectionChange={handleMakeSelection}
            />

            {filteredModels.length > 0 && (
              <FilterOptionDropDown
                boxName="Model"
                listData={filteredModels.map((model) => ({
                  name: model.name || "Unknown",
                  count: model.count || 0,
                }))}
                customClass={
                  "animate-slideRight bg-slate-50 model border-b border-b-gray-200"
                }
                placeholder={"Search Model"}
              />
            )}

            <RangeSlider_V2
              min={1900}
              max={2025}
              boxName={"Registration Year"}
              customClass={"bg-slate-50 makeBrand border-b border-b-gray-200"}
              reset={false}
            />
            <RangeSlider_V2
              min={0}
              max={10000}
              boxName={"Mileage km"}
              customClass={"bg-slate-50 mileage border-b border-b-gray-200"}
              reset={false}
            />
            <RangeSlider_V2
              min={0}
              max={99999}
              boxName={"Price"}
              customClass={"bg-slate-50 price border-b border-b-gray-200"}
              reset={false}
            />

            <FilterClearDropDown
              customClass={
                "bg-slate-50 transmission border-b border-b-gray-200"
              }
              boxName="Status"
              listData={filteredCarStatus}
            />

            <FilterClearDropDown
              customClass={
                "bg-slate-50 transmission border-b border-b-gray-200"
              }
              boxName="Yard Area"
              listData={filteredYardArea}
            />

            <FilterClearDropDown
              customClass={
                "bg-slate-50 transmission border-b border-b-gray-200"
              }
              boxName="Exterior Color"
              listData={filteredExteriorColor}
              color={true}
            />
          </div>

          {/* Right Scrollable Content */}
          <div className="flex-1 flex flex-wrap justify-evenly align-top gap-2 mt-6 lg:mt-0 transition-all">
            {cars.length == 0 ? (
              <div className="w-full h-96 flex flex-col md:flex-row gap-2 md:gap-5 text-xl md:text-2xl items-center justify-start md:justify-center py-5">
                <FaCarTunnel size={30} className="text-gray-400" />
                <p className="text-center text-gray-400 font-semibold">
                  Looks like all the cars have zoomed off. Check back soon for
                  new arrivals!
                </p>
              </div>
            ) : isTableView ? (
              <div className="rightBox flex flex-col gap-4 w-full h-full transition ease-in-out  duration-300">
                {cars
                  // .slice(20 * currentPage - 20, 20 * currentPage)
                  .map((car, index: number) => (
                    <CarRow
                      key={index}
                      car={car}
                      extraStatus={car.showExtraStatus}
                      customClass={`${
                        car.highlightStatus === "Sold" &&
                        "bg-gray-100 border-2 border-gray-100"
                      }`}
                      style={{
                        animationDelay: `${
                          index === 0 ? "0s" : `${index * 0.1}s`
                        }`,
                        animationFillMode: "forwards",
                      }}
                    />
                  ))}
              </div>
            ) : (
              <div
                className="rightBox grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 w-full h-full"
                style={{
                  transition: "0.5s linear",
                }}
              >
                {cars
                  // .slice(20 * currentPage - 20, 20 * currentPage)
                  .map((car, index: number) => (
                    <CarCard
                      key={index}
                      car={car}
                      extraStatus={car.showExtraStatus}
                      customClass={`cursor-pointer transition ease-in-out duration-300 ${
                        car.hidden && `bg-[#FDC5C5] border-red-400`
                      } transition-all`}
                      style={{
                        animationDelay: `${
                          index === 0 ? "0s" : `${index * 0.1}s`
                        }`,
                        animationFillMode: "forwards",
                      }}
                    />
                  ))}
              </div>
            )}

            {/* <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default indexPage;
