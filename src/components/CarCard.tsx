import React, { CSSProperties, useState } from "react";
import { FaWheelchair, FaRegCheckCircle, FaRegStar } from "react-icons/fa";

import { RiDiscountPercentLine, RiShipLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import Vin from "../assets/vin.svg";
import { TbFaceIdError, TbRoad } from "react-icons/tb";
import { CarData } from "../data/types";
import JapanFlag from "../assets/JP.svg";
import UKFlag from "../assets/GB.svg";
import Hybrid from "../assets/hybrid.png";
import CarAvailability from "../assets/check availability.svg";
import {
  MdOutlineTimer,
  MdOutlineNewReleases,
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
import Engine from "../assets/EnginePower.svg";
import Popup from "./Popup";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { carAtom } from "../data/atoms";
import Trans from "../assets/transmission.png";
import { LuMapPin } from "react-icons/lu";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { formatDate } from "../data/generateData";
import placeholderImage from "../assets/images/stock/00165048_01.jpg";

interface CarCardProps {
  customClass?: string;
  extraStatus?: boolean; //for Stock Offer
  style?: CSSProperties;
  car: CarData;
  isAdmin?: boolean;
  onClick?: () => void;
}

const CarCard: React.FC<CarCardProps> = ({
  customClass,
  extraStatus = false,
  isAdmin = false,
  style,
  car,
  onClick,
}) => {
  const statusPill = (status: string) => {
    return status === "Arrived" ? (
      <span className={` border-gray-300 text-gray-500 ${pillClass}`}>
        <FaRegCheckCircle />
        {status}
      </span>
    ) : status === "Transit" ? (
      <span className={`text-blue-800 border-blue-200 ${pillClass}`}>
        <RiShipLine />
        {status}
      </span>
    ) : status === "In Japan" ? (
      <span className={`border-gray-300 text-gray-500 ${pillClass}`}>
        <img src={JapanFlag} alt="Jp flag" className="h-4" />
        {status}
      </span>
    ) : status === "Clearance UK" ? (
      <span className={`border-gray-300 text-gray-500 ${pillClass}`}>
        <img src={UKFlag} alt="UK flag" className="h-4" />
        {status}
      </span>
    ) : (
      <span className={`border-gray-300 text-gray-500 ${pillClass}`}>
        <FaRegCheckCircle />
        Unknown Status
      </span>
    );
  };

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
        className={`stat absolute top-2 left-2 flex items-center gap-2 text-sm  font-semibold rounded-full px-3 py-1 text-yellow-800 bg-yellow-100 ${
          car.hold && "hidden"
        }`}
      >
        <MdOutlineNewReleases /> {car.highlightStatus}
      </span>
    ) : status === "Sold" ? (
      <span
        className={`stat absolute top-2 left-2 flex items-center gap-2 text-sm  font-semibold rounded-full px-3 py-1 text-yellow-800 bg-yellow-200 ${
          car.hold && "hidden"
        }`}
      >
        <FaMoneyBillTrendUp /> {car.highlightStatus}
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

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const [isCheckPopupOpen, setIsCheckPopupOpen] = useState(false);

  const openCheckPopup = () => setIsCheckPopupOpen(true);
  const closeCheckPopup = () => setIsCheckPopupOpen(false);

  const navigate = useNavigate();

  const [cars] = useAtom(carAtom);

  const handleCardClick = (carData: CarData) => {
    console.log("clicked" + carData.id);
    navigate(`/detail/${carData.id.slice(1)}`, {
      state: { card: carData, cars: cars },
    });
  };
  const [isCarHidden] = useState(car.hidden);
  const pillClass = `border flex gap-1 items-center w-fit px-2 rounded-md text-gray-500 ${
    isCarHidden ? `bg-red-200 border-transparent shadow-sm` : `border-gray-300`
  }`;

  return (
    <>
      <div
        className={`card pb-2 flex flex-col relative animate-slideUp transition-all w-full min-h-32 rounded-lg border-2 ${customClass} ${
          extraStatus && car.hold === false && car.highlightStatus != "Sold"
            ? "border-[#FFC158] border-[3px]"
            : "border-gray-100"
        } ${car.hold && " opacity-15 border-[#FFC158]"} ${
          car.highlightStatus === "Sold" && ``
        } ${isCarHidden && `bg-[#FDC5C5] border-red-400`} transition-all`}
        style={style}
      >
        <div
          className="ClickArea absolute z-10 w-full h-full"
          onClick={() => (onClick ? onClick() : handleCardClick(car))}
        ></div>
        <div className="head relative">
          <div className=" w-full bg-gray-50">
            <img
              src={car.image}
              alt="car Image"
              className={`rounded-t-md min-h-42 bg-gray-50 ${
                car.hold && "opacity-50 pointer-events-none"
              }`}
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).src = placeholderImage;
              }}
            />
          </div>
          {car.hold && (
            <div className="absolute w-full bottom-0 flex items-center bg-black bg-opacity-40 text-white font-semibold justify-center gap-1 py-2">
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
            className={`id absolute bottom-1.5 left-2 flex items-center gap-2 text-sm  rounded-full px-3 py-1 text-white bg-black bg-opacity-40  ${
              car.hold || car.highlightStatus === "Sold"
                ? "bg-white bg-opacity-20"
                : "bg-black bg-opacity-40"
            }`}
          >
            {car.id}
          </span>
          <button
            className="option z-20 absolute right-2 -bottom-4 bg-white p-3 rounded-full shadow-md border"
            onClick={openPopup}
          >
            <BsThreeDots />
          </button>
        </div>
        <div className="body flex flex-col h-full justify-between p-2">
          <div>
            <p className="text-lg font-semibold">
              {car.name} {car.type}
            </p>
            <p className={`${car.hold && "opacity-0"}`}>
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
          </div>
          <button
            className={`w-full transition-colors py-2 bg-gray-100 hover:bg-gray-200 mt-3 rounded-md font-semibold z-20 relative ${
              isAdmin && "hidden"
            }`}
            onClick={openCheckPopup}
          >
            Check Availability
          </button>
        </div>
      </div>

      <Popup
        isOpen={isPopupOpen}
        onClose={closePopup}
        title="Overview"
        customClass="m-2"
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
                <PiCarProfile
                  size={20}
                  className="flex-shrink-0  scale-x-[-1]"
                />

                <span className="capitalize">
                  {car.exteriorColor.split("#")[0]}
                </span>
              </p>
              <p className="flex gap-2 items-center">
                <img src={Vin} alt="" className="brightness-50" />
                {car.vim}
              </p>
              <p className="flex gap-2 items-center">
                <PiCalendarDots size={20} className="flex-shrink-0" />
                {formatDate(car.registerDate)}
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
                Auto
              </p>
              <p className="flex gap-2 items-center">
                <img
                  src={CarAvailability}
                  alt="engine"
                  className="flex-shrink-0"
                />
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
            <button
              className="flex justify-center items-center gap-2 bg-[#FFC158] py-2 w-full rounded-md font-semibold"
              onClick={() => handleCardClick(car)}
            >
              View All Details <IoIosArrowForward />
            </button>
          </>
        }
      />

      <Popup
        isOpen={isCheckPopupOpen}
        onClose={closeCheckPopup}
        title="Check Availability"
        customClass="m-2 w-1/3"
        content={
          <>
            <p className="font-semibold mb-1">Ask Question</p>
            <textarea
              name="check"
              className="w-full border resize-none rounded-md mb-3 p-2"
              cols={100}
              rows={5}
              placeholder="Ask us something about the car"
            ></textarea>
            <button className="flex justify-center items-center gap-2 bg-[#FFC158] py-2 w-full rounded-md font-semibold">
              Submit
            </button>
          </>
        }
      />
    </>
  );
};

export default CarCard;
