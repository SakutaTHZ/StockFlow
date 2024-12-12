import React, { CSSProperties, useState } from "react";
import { FaWheelchair, FaRegCheckCircle, FaChevronDown } from "react-icons/fa";

import { RiDiscountPercentLine, RiShipLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import Vin from "../assets/vin.svg";
import { TbFaceIdError, TbRoad } from "react-icons/tb";
import { CarData } from "../data/types";
import JapanFlag from "../assets/JP.svg";
import UKFlag from "../assets/GB.svg";
import Hybrid from "../assets/hybrid.png";
import {
  MdAirlineSeatReclineNormal,
  MdOutlineCalendarMonth,
  MdOutlineNewReleases,
  MdOutlineTimer,
} from "react-icons/md";
import {
  PiCalendarDots,
  PiCar,
  PiCarProfile,
  PiChartLineDownBold,
  PiGasCan,
  PiStar,
} from "react-icons/pi";
import Popup from "./Popup";
import { IoIosArrowForward } from "react-icons/io";
import { useAtom } from "jotai";
import { carAtom } from "../data/atoms";
import { useNavigate } from "react-router-dom";
import Trans from "../assets/transmission.png";
import Engine from "../assets/EnginePower.svg";
import { LuMapPin } from "react-icons/lu";
import { IoCarOutline } from "react-icons/io5";
import { yards, promotionText, highlightStatus } from "../data/generateData";
import DropDown from "./DropDown";

interface StockFlowAdminTableRowProps {
  customClass?: string;
  style?: CSSProperties;
  car: CarData;
  onClick?: () => void;
}

const StockFlowAdminTableRow: React.FC<StockFlowAdminTableRowProps> = ({
  customClass,
  style,
  car,
  onClick,
}) => {
  const pillClass = `border flex gap-1 items-center w-fit px-2 rounded-md text-gray-500 border-gray-300`;

  const statusPill = (status: string) => {
    return status === "Arrived" ? (
      <span className={`bg-gray-50 border-gray-400 ${pillClass}`}>
        <FaRegCheckCircle />
        {status}
      </span>
    ) : status === "Transit" ? (
      <span className={`bg-gray-50 border-gray-400 ${pillClass}`}>
        <RiShipLine />
        {status}
      </span>
    ) : status === "In Japan" ? (
      <span className={`bg-gray-50 border-gray-400 ${pillClass}`}>
        <img src={JapanFlag} alt="Jp flag" className="h-4" />
        {status}
      </span>
    ) : status === "Clearance UK" ? (
      <span className={`bg-gray-50 border-gray-400 ${pillClass}`}>
        <img src={UKFlag} alt="UK flag" className="h-4" />
        {status}
      </span>
    ) : (
      <span className={`bg-gray-50 border-gray-400 ${pillClass}`}>
        <FaRegCheckCircle />
        Unknown Status
      </span>
    );
  };

  const highlightPill = (status: string) => {
    return status === "Welcab" ? (
      <span
        className={`stat flex items-center gap-2 text-sm font-semibold  rounded-full px-3 py-1 text-white bg-black bg-opacity-40 ${
          car.hold && "hidden"
        }`}
      >
        <FaWheelchair /> {car.highlightStatus}
      </span>
    ) : status === "Coming soon" ? (
      <span
        className={`stat flex items-center gap-2 text-sm font-semibold  rounded-full px-3 py-1 text-white bg-black bg-opacity-40 ${
          car.hold && "hidden"
        }`}
      >
        <MdOutlineTimer /> {car.highlightStatus}
      </span>
    ) : status === "Hybrid" ? (
      <span
        className={`stat flex items-center gap-2 text-sm font-semibold  rounded-full px-3 py-1 text-white bg-black bg-opacity-40 ${
          car.hold && "hidden"
        }`}
      >
        <img src={Hybrid} alt="Hybrid" /> {car.highlightStatus}
      </span>
    ) : status === "Reduced" ? (
      <span
        className={`stat2 flex items-center gap-2 text-sm font-semibold rounded-full px-3 py-1 text-red-600 bg-red-200 ${
          car.hold && "hidden"
        }`}
      >
        <PiChartLineDownBold /> {car.highlightStatus}
      </span>
    ) : status === "New" ? (
      <span
        className={`stat flex items-center gap-2 text-sm  font-semibold rounded-full px-3 py-1 text-green-800 bg-green-200 ${
          car.hold && "hidden"
        }`}
      >
        <MdOutlineNewReleases /> {car.highlightStatus}
      </span>
    ) : (
      <span
        className={`stat flex items-center gap-2 text-sm  font-semibold rounded-full px-3 py-1 text-white bg-black bg-opacity-40 ${
          car.hold && "hidden"
        }`}
      >
        <TbFaceIdError /> {car.highlightStatus}
      </span>
    );
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const [isPromotionPopupOpen, setIsPromotionPopupOpen] = useState(false);

  const openPromotionPopup = () => setIsPromotionPopupOpen(true);
  const closePromotionPopup = () => setIsPromotionPopupOpen(false);

  const [isBannerPopupOpen, setIsBannerPopupOpen] = useState(false);

  const openBannerPopup = () => setIsBannerPopupOpen(true);
  const closeBannerPopup = () => setIsBannerPopupOpen(false);

  const navigate = useNavigate();
  const [cars] = useAtom(carAtom);

  const handleCardClick = (carData: CarData) => {
    console.log("clicked" + carData.id);
    navigate(`/StockDetail/${carData.id.slice(1)}`, {
      state: { card: carData, cars: cars },
    });
  };

  const [cardOption, setcardOption] = useState(true);
  const checkOption = () => {
    if (cardOption === true) {
      console.log("false");
      setcardOption(false);
    } else {
      console.log("true");
      setcardOption(true);
    }
    console.log("box stat - " + cardOption);
  };

  const [more, setMore] = useState(true);
  const showMore = () => {
    setMore(!more);
  };

  return (
    <>
      <tr className={`border ${customClass}`} style={style}>
        <td className="border p-2" onClick={showMore}>
          <div className="flex justify-center">
            <FaChevronDown
              size={12}
              className={`text-gray-400 flex-shrink-0 transition-all ${
                more && "rotate-180"
              }`}
            />
          </div>
        </td>
        <td className="relative border w-48 p-2">
          <div
            className="flex flex-col justify-center items-center"
            onClick={() => handleCardClick}
          >
            <img
              src={car.image}
              alt="car Image"
              className={`rounded-md w-44 h-28 object-cover object- ${
                car.hold && "opacity-50 pointer-events-none"
              }`}
              loading="lazy"
            />
            <span
              className={`id absolute top-3 left-3 flex items-center gap-2 text-sm  rounded-full px-3 py-1 text-white bg-black bg-opacity-40 ${
                car.hold && "hidden"
              }`}
            >
              {car.id}
            </span>
            <p className="text-gray-500">In Stock: 3 days ago</p>
          </div>
        </td>
        <td className="border px-4">
          <div className="h-full flex flex-col justify-center items-start">
            
          <button
                onClick={() => (onClick ? onClick() : handleCardClick(car))}
                className="font-semibold text-nowrap text-left p-2 px-4 hover:bg-gray-100"
              >
                Customer View
              </button>
            <p>
              {car.name} {car.type}
            </p>
            <p>{car.package}</p>
            <div className="flex gap-2 mt-2">
              {car.highlightStatus != "" && (
                <>{highlightPill(car.highlightStatus)}</>
              )}
              <span
                className={`status flex items-center gap-2 text-sm font-semibold rounded-md bg-[#FFC158] px-3 py-1  ${
                  car.hold && "hidden"
                }`}
              >
                <RiDiscountPercentLine /> Stock Offer
              </span>
            </div>
          </div>
        </td>
        <td className="border">
          <div className="flex justify-center">{statusPill(car.status)}</div>
        </td>
        <td className="border px-4 leading-6">
          <p>{car.registerDate}</p>
          <p>
            {car.milleage}, {car.exteriorColor.split("#")[0]}
          </p>
          <p>
            {car.enginePower.toLocaleString()} cc, {car.fuelType}
          </p>
        </td>
        <td className="border px-4 leading-6">
          <p>{car.vim}</p>
        </td>
        <td className="border px-4 leading-6">
          <p>{car.vesselFrom}</p>
          <p className="flex items-center text-sm text-gray-500">
            <MdOutlineCalendarMonth size={12} />
            {car.sentDate}
          </p>
        </td>
        <td className="border px-4 leading-6">
          <p className=" relative">
            {car.discount != 0 && (
              <span className="line-through text-gray-400">
                ¥{car.price.toLocaleString()}
              </span>
            )}
            <br />
            <span
              className={`text-2xl font-bold ${
                car.discount === 0 ? "text-blue-950" : "text-red-600"
              }`}
            >
              ¥
              {car.discount === 0
                ? car.price.toLocaleString()
                : (car.price - car.discount).toLocaleString()}
            </span>{" "}
            <span
              className={`font-normal ${
                car.discount === 0 ? "text-blue-950" : "text-red-600"
              }`}
            >
              CIF
            </span>
          </p>
          <p className="text-sm text-gray-500">$6,000 UK duty/ VAT paid!</p>
        </td>
        <td className="border">
          <div className="relative flex justify-center">
            <button
              className="option z-20 bg-gray-200 p-3 rounded-md shadow-md border"
              onClick={checkOption}
            >
              <BsThreeDots />
            </button>
            <div
              className={`z-50 right-2 bottom-8 flex flex-col transition-all bg-white border rounded-md shadow-md ${
                cardOption ? "hidden" : "absolute"
              }`}
            >
              <button
                onClick={openPopup}
                className="font-semibold text-nowrap text-left p-2 px-4 hover:bg-gray-100"
              >
                Show Vehicle Overview
              </button>
              <button
                onClick={openPromotionPopup}
                className="font-semibold text-nowrap text-left p-2 px-4 hover:bg-gray-100"
              >
                Add Promotion
              </button>
              <button
                onClick={openBannerPopup}
                className="font-semibold text-nowrap text-left p-2 px-4 hover:bg-gray-100"
              >
                Add Banner
              </button>
              <button
                onClick={() => (onClick ? onClick() : handleCardClick(car))}
                className="font-semibold text-nowrap text-left p-2 px-4 hover:bg-gray-100"
              >
                Customer View
              </button>
            </div>
          </div>
        </td>
      </tr>

      <tr
        className={`carDetails bg-gray-100 transition-all ${more && "hidden"}`}
      >
        <td colSpan={9} className=" border">
          <div className={`${more ? " h-0 overflow-hidden" : "p-4 px-8"}`}>
            <p>
              <span className="w-28 text-gray-500">Customer Name:</span>{" "}
              {car.customer}
            </p>

            <p>
              <span className="w-28 text-gray-500">Vessel:</span> {car.vessel}
            </p>

            <p>
              <span className="w-28 text-gray-500">ETD:</span> {car.sentDate}
            </p>

            <p>
              <span className="w-28 text-gray-500">Destination:</span>{" "}
              {car.vesselTo}
            </p>
          </div>
        </td>
      </tr>

      <Popup
        isOpen={isPopupOpen}
        onClose={closePopup}
        title="Overview"
        customClass="m-2 w-1/3"
        content={
          <>
            <div className="imageContainer flex justify-center w-full h-80 overflow-hidden rounded-md">
              <img
                src={car.image}
                alt="car Image"
                className="rounded-md w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 my-4">
              <p className="flex gap-2 items-center">
                <PiCarProfile size={20} className="flex-shrink-0" />
                {car.exteriorColor.split("#")[0]}
              </p>
              <p className="flex gap-2 items-center">
                <img src={Vin} alt="" className="brightness-50" />
                {car.vim}
              </p>
              <p className="flex gap-2 items-center">
                <PiCalendarDots size={20} className="flex-shrink-0" />
                {car.registerDate}
              </p>
              <p className="flex gap-2 items-center">
                <PiCar size={20} className="flex-shrink-0" />
                {car.package}
              </p>
              <p className="flex gap-2 items-center">
                <img src={Engine} alt="engine" className="flex-shrink-0" />
                {car.enginePower.toLocaleString()} cc
              </p>
              <p className="flex gap-2 items-center">
                <TbRoad size={20} className="flex-shrink-0" />
                {car.milleage.toLocaleString()} km
              </p>
              <p className="flex gap-2 items-center">
                <PiGasCan size={20} className="flex-shrink-0" />
                {car.fuelType}
              </p>
              <p className="flex gap-2 items-center">
                <PiStar size={20} className="flex-shrink-0" />
                {car.rating}
              </p>
              <p className="flex gap-2 items-center">
                <img src={Trans} />
                Automatic Transmission
              </p>
              <p className="flex gap-2 items-center">
                <PiCarProfile size={20} className="flex-shrink-0" />
                {car.status}
              </p>
              <p className="flex gap-2 items-center">
                <MdAirlineSeatReclineNormal
                  size={20}
                  className="flex-shrink-0"
                />
                {car.seats} Seater
              </p>
              <p className="flex gap-2 items-center">
                <LuMapPin size={20} className="flex-shrink-0" />
                {car.vesselFrom}
              </p>
            </div>
            <button className="flex justify-center items-center gap-2 bg-[#FFC158] py-2 w-full rounded-md font-semibold" onClick={()=>handleCardClick}>
              View All Details <IoIosArrowForward />
            </button>
          </>
        }
      />

      <Popup
        isOpen={isPromotionPopupOpen}
        onClose={closePromotionPopup}
        title="Add Promotion"
        customClass="m-2 w-1/3"
        content={
          <>
            <div className="flex gap-2 items-center text-gray-500">
              <IoCarOutline size={20} />
              <p>
                {car.name} {car.type} {car.package} ({car.id})
              </p>
            </div>

            <div className="mt-4 flex flex-col gap-2">
              <p className="font-semibold">Customer</p>

              <DropDown
                options={yards}
                optionClass="w-full"
                optionBoxClass="md:w-full right-0 z-50"
                buttonClass="py-2"
              />
              <div className="flex items-center gap-2">
                <input type="checkbox" name="" id="" />
                <p>Include all customers in dropdown</p>
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-2">
              <p className="font-semibold">Promotion text</p>

              <DropDown
                options={promotionText}
                optionClass="w-full"
                optionBoxClass="md:w-full right-0 z-50"
                buttonClass="py-2"
              />
              <div className="flex items-center gap-2">
                <input type="checkbox" name="" id="" />
                <p>Visible to the selected customer</p>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-4">
              <button
                onClick={closePromotionPopup}
                className="py-2 w-full bg-yellow-400 font-semibold rounded-md"
              >
                Add
              </button>
              <button
                onClick={closePromotionPopup}
                className="py-2 w-full bg-gray-200 font-semibold rounded-md"
              >
                Cancel
              </button>
            </div>
          </>
        }
      />

      <Popup
        isOpen={isBannerPopupOpen}
        onClose={closeBannerPopup}
        title="Update Banner"
        customClass="m-2 w-1/3"
        content={
          <>
            <div className="flex gap-2 items-center text-gray-500">
              <IoCarOutline size={20} />
              <p>
                {car.name} {car.type} {car.package} ({car.id})
              </p>
            </div>

            <div className="mt-4 flex flex-col gap-2">
              <p className="font-semibold">Banner</p>

              <DropDown
                options={highlightStatus}
                optionClass="w-full"
                optionBoxClass="md:w-full right-0 z-50"
                buttonClass="py-2"
              />
            </div>

            <div className="mt-4 flex flex-col gap-2">
              <p className="font-semibold">Previous Price</p>
              <input
                type="text"
                className="border p-2 rounded-md border-gray-300"
                placeholder="Enter previous Price"
              />
            </div>

            <div className="flex items-center gap-2 mt-8">
              <button
                onClick={closeBannerPopup}
                className="py-2 w-full bg-yellow-400 font-semibold rounded-md"
              >
                Add
              </button>
              <button
                onClick={closeBannerPopup}
                className="py-2 w-full bg-gray-200 font-semibold rounded-md"
              >
                Cancel
              </button>
            </div>
          </>
        }
      />
    </>
  );
};

export default StockFlowAdminTableRow;
