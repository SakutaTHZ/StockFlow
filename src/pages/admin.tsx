/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { FaRegTrashAlt, FaSearch, FaListUl } from "react-icons/fa";
import { MdTune, MdBorderAll } from "react-icons/md";
import DropDown from "../components/DropDown";
import {
  carStatus,
  exteriorColor,
  series,
  sortOptions,
  yardArea,
} from "../data/generateData";
import { useAtom } from "jotai";
import { carAtom } from "../data/atoms";
// import Pagination from "../components/Pagination";
import { useNavigate } from "react-router-dom";
import { FaCarTunnel } from "react-icons/fa6";
import FilterOptionDropDown from "../components/FilterOptionDropDown";
import { makeBrandData, Model } from "../data/arrayData";
import FilterClearDropDown from "../components/FilterClearDropDown";
import RangeSlider from "../components/RangeSlider";
import StockFlowAdminCarCard from "../components/StockFlowAdminCarCard";
import StockFlowAdminTableRow from "../components/StockFlowAdminTableRow";
import CNetAdminNav from "../components/CNetAdminNav";
import { TiArrowSortedDown, TiArrowUnsorted } from "react-icons/ti";
import SeriesDropDown from "../components/SeriesDropDown";
import React from "react";

interface adminPageProps {
  customClass?: string;
}
// interface LocationState {
//   page?: number; // Optional since it might not always exist
// }

const adminPage: React.FC<adminPageProps> = ({ customClass }) => {
  const [cars] = useAtom(carAtom);

  const [isFilterOn, setIsFilterOn] = useState(false);
  const [isTableView, setIsTableView] = useState(false);

  const toggleFilter = () => {
    setIsFilterOn(!isFilterOn);
  };

  const navigate = useNavigate();

  const handleClearAll = () => {
    navigate(`/StockFlowAdmin`, { state: { cars, page: 1 } });
  };

  // Pagination

  // const location = useLocation() as unknown as Location & {
  //   state: LocationState;
  // };
  // const [currentPage, setCurrentPage] = useState(location.state?.page || 1);
  // const totalPages = Math.ceil(cars.length / 20);

  // const handlePageChange = (page: number) => {
  //   setCurrentPage(page);

  //   return navigate(`/StockFlowAdmin`, { state: { cars, page: page } });
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

  const carOptions = [
    `All Vehicles (${cars.length})`,
    `Available vehicles (${cars.filter((car) => car.hold === true).length})`,
    `Unavailable vehicles (${cars.filter((car) => car.hold === true).length})`,
  ];
  const visibilityOptions = [`Visible and Hidden`, `Hidden`, `Visible`];

  const [selectedVisibility, setSelectedVisibility] =
    useState("Visible and Hidden");
  const [selectedSort, setSelectedSort] = useState("Most Relevant");

  const handleVisibilityChange = (option: string) => {
    setSelectedVisibility(option);
  };

  const handleSortChange = (option: string) => {
    setSelectedSort(option);
  };

  // Sort the cars
  const filterCars = React.useCallback(() => {
    let filteredCars = cars;
    // Apply visibility filter
    if (selectedVisibility === "Visible") {
      filteredCars = filteredCars.filter((car) => !car.hidden);
    } else if (selectedVisibility === "Hidden") {
      filteredCars = filteredCars.filter((car) => car.hidden);
    }

    // Apply sorting
    return filteredCars.sort((a, b) => {
      switch (selectedSort) {
        case "Date Latest to Oldest":
          return (
            new Date(b.sentDate).getTime() - new Date(a.sentDate).getTime()
          );
        case "Date Oldest to Latest":
          return (
            new Date(a.sentDate).getTime() - new Date(b.sentDate).getTime()
          );
        case "Price Low to High":
          return a.price - b.price;
        case "Price High to Low":
          return b.price - a.price;
        case "Mileage Low to High":
          return a.milleage - b.milleage;
        case "Mileage High to Low":
          return b.milleage - a.milleage;
        default:
          return 0; // "Most Relevant" or fallback
      }
    });
  }, [cars, selectedVisibility, selectedSort]);

  const displayedCars = filterCars();

  return (
    <>
      <CNetAdminNav customClass="sticky top-0" />
      <div className={`px-12 py-5 flex flex-col gap-6 ${customClass}`}>
        <div className="sticky top-28 py-4 z-40 transition-all bg-white flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <p className="text-3xl font-bold">Car For Sale</p>
            <div className="flex items-center">
              <p className="px-6 text-gray-500">
                {cars.length != 0 && (
                  <>
                    Showing{" "}
                    {/* <b>
                    {20 * currentPage - 20 + 1}-{20 * currentPage - 1}
                  </b>{" "}
                  of  */}
                    <b>{displayedCars.length}</b> listings
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
          <div className="flex gap-2 w-full items-center transition-all">
            <div className="flex items-center gap-2 transition-all">
              <button
                className="flex items-center gap-2 border p-2 px-5 rounded-3xl bg-white border-gray-300"
                onClick={toggleFilter}
              >
                <MdTune size={18} />
                Filters
              </button>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-2 justify-between items-center">
              <div className="relative w-72 border rounded-md border-gray-300">
                <input
                  type="text"
                  placeholder="Search by Make or Model"
                  className="pl-10 pr-4 py-2 rounded-md w-full bg-white outline-none"
                />
                <FaSearch className="absolute left-3 top-3.5 text-gray-600" />
              </div>
              <div className="flex gap-2 items-center w-fit">
                <SeriesDropDown
                  optionBoxClass="custom-scrollbar md:w-24 h-fit right-0 z-50"
                  buttonClass=""
                  options={series}
                />
                <DropDown
                  options={visibilityOptions}
                  optionBoxClass="custom-scrollbar md:w-fit h-fit right-0 z-50"
                  buttonClass="py-2"
                  onSelectionChange={handleVisibilityChange}
                />
                <DropDown
                  options={sortOptions}
                  optionBoxClass="md:w-fit right-0 z-50"
                  buttonClass="py-2"
                  onSelectionChange={handleSortChange}
                />
                <DropDown
                  options={carOptions}
                  optionBoxClass="custom-scrollbar md:w-fit h-fit right-0 z-50"
                  buttonClass="py-2"
                  onSelectionChange={(option) => console.log(option)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:flex z-10 transition-all">
          {/* Left Sticky Box */}
          <div
            className={`leftBox mr-6 overflow-hidden overflow-y-auto custom-scrollbar animate-slideUp transition-all inset-0 md:sticky top-60 max-h-[70dvh] flex flex-col rounded-md shadow-lg h-fit z-40 ${
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
                "bg-slate-50 transmission border-b border-b-gray-200"
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

            <RangeSlider
              min={1900}
              max={2025}
              boxName={"Registration Year"}
              customClass={"bg-slate-50 makeBrand border-b border-b-gray-200"}
            />
            <RangeSlider
              min={0}
              max={10000}
              boxName={"Mileage km"}
              customClass={"bg-slate-50 mileage border-b border-b-gray-200"}
            />
            <RangeSlider
              min={0}
              max={99999}
              boxName={"Price ¥"}
              customClass={"bg-slate-50 price border-b border-b-gray-200"}
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
              <div className="rightBox flex flex-col gap-4 w-full h-full">
                <table className=" animate-slideUp transition-all table-auto border-collapse border border-gray-300 w-full">
                  <thead>
                    <tr className="border">
                      <th className="border h-16"></th>
                      <th className="border">Stock Number</th>
                      <th className="border">Model</th>
                      <th className="border">
                        <p className="flex justify-center items-center gap-2">
                          Status
                          <TiArrowSortedDown />
                        </p>
                      </th>
                      <th className="border">Car Specs</th>
                      <th className="border">Chassis Number</th>
                      <th className="border">
                        <p className="flex justify-center items-center gap-2">
                          ETY
                          <TiArrowSortedDown />
                        </p>
                      </th>
                      <th className="border">
                        <p className="flex justify-center items-center gap-2">
                          Price
                          <TiArrowUnsorted />
                        </p>
                      </th>
                      <th className="border"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {displayedCars
                      // .slice(20 * currentPage - 20, 20 * currentPage)
                      .map((car, index: number) => (
                        <StockFlowAdminTableRow
                          customClass={`${
                            car.highlightStatus === "Sold" &&
                            "bg-green-50 border-green-300"
                          }`}
                          key={index}
                          car={car}
                        />
                      ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="rightBox grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 w-full h-full">
                {displayedCars
                  // .slice(20 * currentPage - 20, 20 * currentPage)
                  .map((car, index: number) => (
                    <StockFlowAdminCarCard
                      key={index}
                      car={car}
                      extraStatus={car.showExtraStatus}
                      customClass={``}
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

export default adminPage;
