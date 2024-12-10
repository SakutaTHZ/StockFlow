import React, { CSSProperties, useState } from "react";
import {
  FaWheelchair,
  FaRegCheckCircle,
  FaRegStar,
  FaRegPauseCircle,
} from "react-icons/fa";

import { RiDiscountPercentLine, RiShipLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import Vin from "../assets/vin.svg";
import { TbFaceIdError, TbRoad } from "react-icons/tb";
import { CarData } from "../data/types";
import JapanFlag from "../assets/JP.svg";
import UKFlag from "../assets/GB.svg";
import Hybrid from "../assets/hybrid.png";
import Engine from "../assets/EnginePower.svg";
import Trans from "../assets/transmission.png";
import {
  MdOutlineTimer,
  MdOutlineNewReleases,
  MdOutlinePinDrop,
  MdAirlineSeatReclineNormal,
} from "react-icons/md";
import {
  PiCalendarDots,
  PiCar,
  PiCarProfile,
  PiChartLineDownBold,
  PiGasCan,
  PiStar,
} from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { carAtom } from "../data/atoms";
import { IoIosArrowForward } from "react-icons/io";
import { LuMapPin } from "react-icons/lu";
import Popup from "./Popup";
import { IoCarOutline } from "react-icons/io5";
import DropDown from "./DropDown";
import { promotionText, yards } from "../data/generateData";

interface CarCardProps {
  customClass?: string;
  extraStatus?: boolean; //for Stock Offer
  style?: CSSProperties;
  car: CarData;
  onClick?: () => void;
}

const StockFlowAdminCarCard: React.FC<CarCardProps> = ({
  customClass,
  extraStatus = false,
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

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const [isPromotionPopupOpen, setIsPromotionPopupOpen] = useState(false);

  const openPromotionPopup = () => setIsPromotionPopupOpen(true);
  const closePromotionPopup = () => setIsPromotionPopupOpen(false);

  const highlightPill = (status: string) => {
    return status === "Welcab" ? (
      <span
        className={`stat absolute top-2 left-2 flex items-center gap-2 text-sm font-semibold  rounded-full px-3 py-1 text-white bg-black bg-opacity-40 ${
          car.hold && "hidden"
        }`}
      >
        <FaWheelchair /> {car.highlightStatus}
      </span>
    ) : status === "Coming soon" ? (
      <span
        className={`stat absolute top-2 left-2 flex items-center gap-2 text-sm font-semibold  rounded-full px-3 py-1 text-white bg-black bg-opacity-40 ${
          car.hold && "hidden"
        }`}
      >
        <MdOutlineTimer /> {car.highlightStatus}
      </span>
    ) : status === "Hybrid" ? (
      <span
        className={`stat absolute top-2 left-2 flex items-center gap-2 text-sm font-semibold  rounded-full px-3 py-1 text-white bg-black bg-opacity-40 ${
          car.hold && "hidden"
        }`}
      >
        <img src={Hybrid} alt="Hybrid" /> {car.highlightStatus}
      </span>
    ) : status === "Reduced" ? (
      <span
        className={`stat absolute top-2 left-2 flex items-center gap-2 text-sm font-semibold rounded-full px-3 py-1 text-red-600 bg-red-200 ${
          car.hold && "hidden"
        }`}
      >
        <PiChartLineDownBold /> {car.highlightStatus}
      </span>
    ) : status === "New" ? (
      <span
        className={`stat absolute top-2 left-2 flex items-center gap-2 text-sm  font-semibold rounded-full px-3 py-1 text-green-800 bg-green-200 ${
          car.hold && "hidden"
        }`}
      >
        <MdOutlineNewReleases /> {car.highlightStatus}
      </span>
    ) : (
      <span
        className={`stat absolute top-2 left-2 flex items-center gap-2 text-sm  font-semibold rounded-full px-3 py-1 text-white bg-black bg-opacity-40 ${
          car.hold && "hidden"
        }`}
      >
        <TbFaceIdError /> {car.highlightStatus}
      </span>
    );
  };

  const navigate = useNavigate();

  const [cars] = useAtom(carAtom);

  const handleCardClick = (carData: CarData) => {
    console.log("clicked" + carData.id);
    navigate(`/detail/${carData.id.slice(1)}`, {
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

  return (
    <>
      <div
        className={`card pb-2 relative animate-slideUp transition-all w-full h-fit min-h-32 shadow-md rounded-lg border-2 bg-white ${customClass} ${
          extraStatus ? "border-[#FFC158]" : "border-gray-100"
        } ${car.hold && "opacity-15 pointer-events-none"} transition-all`}
        style={style}
      >
        <div
          className="ClickArea absolute z-10 w-full h-full"
          onClick={() => (onClick ? onClick() : handleCardClick(car))}
        ></div>
        <div className="head relative flex h-42">
          <img
            src={car.image}
            alt="car Image"
            className={`rounded-t-md h-42 ${
              car.hold && "opacity-50 pointer-events-none"
            }`}
            loading="lazy"
          />
          {car.hold && (
            <div className="absolute w-full bottom-0 flex items-center bg-black bg-opacity-40 text-white font-semibold justify-center gap-1 py-2">
              <FaRegPauseCircle />
              On Hold
            </div>
          )}
          {car.highlightStatus != "" && (
            <>{highlightPill(car.highlightStatus)}</>
          )}
          {extraStatus && (
            <span
              className={`status absolute top-2 right-0 flex items-center gap-2 text-sm font-semibold border border-[#FFC158] rounded-s-full px-3 py-1 bg-gradient-to-r from-[#FFF3DE] to-[#FFC158] ${
                car.hold && "hidden"
              }`}
            >
              <RiDiscountPercentLine /> Stock Offer
            </span>
          )}
          <span
            className={`id absolute bottom-2 left-2 flex items-center gap-2 text-sm  rounded-full px-3 py-1 text-white bg-black bg-opacity-40 ${
              car.hold && "hidden"
            }`}
          >
            {car.id}
          </span>
          <div className="relative">
            <button
              className="option z-20 absolute right-2 -bottom-4 bg-white p-3 rounded-full shadow-md border"
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
              <button className="font-semibold text-nowrap text-left p-2 px-4 hover:bg-gray-100">
                Add Banner
              </button>
              <button className="font-semibold text-nowrap text-left p-2 px-4 hover:bg-gray-100">
                Customer View
              </button>
            </div>
          </div>
        </div>
        <div className="body p-2">
          <p className="text-lg font-semibold">
            {car.name} {car.type}
          </p>
          <p>
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
            {car.discount != 0 && (
              <span className="ml-2 line-through text-gray-400">
                {car.price.toLocaleString()}
              </span>
            )}
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {statusPill(car.status)}
            <span className={` ${pillClass}`}>
              <FaRegStar />
              {car.rating}
            </span>
            <span className={` ${pillClass}`}>
              <TbRoad />
              {car.milleage.toLocaleString()} km
            </span>
            <span className={` ${pillClass}`}>
              <img src={Vin} alt="" />
              {car.vim}
            </span>
          </div>

          <span className={`${pillClass} mt-2`}>
            <MdOutlinePinDrop />
            {car.vesselFrom}
          </span>
        </div>
      </div>

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
            <button className="flex justify-center items-center gap-2 bg-[#FFC158] py-2 w-full rounded-md font-semibold">
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
                <button className="py-2 w-full bg-yellow-400 font-semibold rounded-md">
                    Add
                </button>
                <button className="py-2 w-full bg-gray-200 font-semibold rounded-md">
                    Cancel
                </button>
            </div>
          </>
        }
      />
    </>
  );
};

export default StockFlowAdminCarCard;
