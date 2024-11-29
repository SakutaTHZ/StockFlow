import React, { CSSProperties } from "react";
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
import { MdOutlineNewReleases, MdOutlineTimer } from "react-icons/md";
import { PiChartLineDownBold } from "react-icons/pi";

interface CarRowProps {
  customClass?: string;
  extraStatus?: boolean; //for Stock Offer
  style?: CSSProperties;
  car: CarData;
}

const CarRow: React.FC<CarRowProps> = ({
  customClass,
  extraStatus = false,
  style,
  car,
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

  return (
    <div
      className={`card opacity-0 animate-slideRight transition-all  flex w-full h-44 shadow-md rounded-lg border-2 bg-white ${customClass} ${
        extraStatus ? "border-[#FFC158]" : "border-gray-100"
      } ${car.hold && "opacity-50 pointer-events-none"} transition-all`}
      style={style}
    >
      <div className="head relative flex">
        <img
          src={car.image}
          alt="car Image"
          className="rounded-s-md h-full"
          loading="lazy"
        />
        {car.hold && (
          <div className="absolute w-full bottom-0 flex items-center bg-black bg-opacity-40 text-white font-semibold justify-center gap-1 py-2">
            <FaRegPauseCircle />
            On Hold
          </div>
        )}
        {car.highlightStatus != "" && <>{highlightPill(car.highlightStatus)}</>}
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
        <button className="option h-4 w-4 flex items-center justify-center absolute right-2 bottom-2 bg-white p-3 rounded-full shadow-md border">
          <BsThreeDots size={12} className="absolute" />
        </button>
      </div>
      <div className="body flex flex-col gap-1 w-full p-2 px-4">
        <div className="flex justify-between">
          <p className="text-lg font-semibold">
            {car.name} {car.type}
          </p>
          <p className="text-right">
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
            <br />
            {car.discount != 0 && (
              <span className="ml-2 line-through text-gray-400">
                {car.price.toLocaleString()}
              </span>
            )}
          </p>
        </div>
        <p>15S Touring L Package</p>
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
        <button
          className={`w-fit px-4 py-2 bg-gray-100 mt-3 rounded-md font-semibold`}
        >
          Check Availability
        </button>
      </div>
    </div>
  );
};

export default CarRow;
