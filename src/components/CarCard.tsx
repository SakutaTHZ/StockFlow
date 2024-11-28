import React from "react";
import { FaWheelchair, FaRegCheckCircle, FaRegStar, FaRegPauseCircle } from "react-icons/fa";

import { RiDiscountPercentLine, RiShipLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import Vin from "../assets/vin.svg";
import { TbRoad } from "react-icons/tb";
import { CarData } from "../data/types";
import JapanFlag from "../assets/JP.svg"
import UKFlag from "../assets/GB.svg"

interface CarCardProps {
  customClass?: string;
  extraStatus?: boolean; //for Stock Offer
  car: CarData;
}

const CarCard: React.FC<CarCardProps> = ({
  customClass,
  extraStatus = false,
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
        <img src={JapanFlag} alt="Jp flag" className="h-4"/>
        {status}
      </span>
    ) : status === "Clearance UK" ? (
      <span className={`bg-gray-50 border-gray-400 ${pillClass}`}>
        <img src={UKFlag} alt="UK flag" className="h-4"/>
        {status}
      </span>
    ) : (
      <span className={`bg-gray-50 border-gray-400 ${pillClass}`}>
        <FaRegCheckCircle />
        Unknown Status
      </span>
    );
  };

  return (
    <div
      className={`card w-80 min-h-32 shadow-md rounded-lg border-2 ${customClass} ${
        extraStatus ? "border-[#FFC158]" : "border-gray-100"
      } ${car.hold && "opacity-50 pointer-events-none"} transition-all`}
    >
      <div className="head relative flex h-42">
        <img
          src={car.image}
          alt="car Image"
          className="rounded-t-md h-42"
          loading="lazy"
        />
        {car.hold && (
          <div className="absolute w-full bottom-0 flex items-center bg-black bg-opacity-40 text-white font-semibold justify-center gap-1 py-2">
          <FaRegPauseCircle/>
          On Hold
          </div>
        )}
        {car.highlightStatus != "" && (
          <span
            className={`stat absolute top-2 left-2 flex items-center gap-2 text-sm  rounded-full px-3 py-1 text-white bg-black bg-opacity-40 ${
              car.hold && "hidden"
            }`}
          >
            <FaWheelchair /> {car.highlightStatus}
          </span>
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
        <button className="option absolute right-2 -bottom-4 bg-white p-3 rounded-full shadow-md border">
          <BsThreeDots />
        </button>
      </div>
      <div className="body p-2">
        <p className="text-lg font-semibold">
          {car.name} {car.type}
        </p>
        <p>
          <span className="text-2xl font-bold text-blue-950">
            ¥{car.price.toLocaleString()}
          </span>{" "}
          <span className="font-normal text-gray-500">CIF</span>
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
        <button
          className={`w-full py-2 bg-gray-100 mt-3 rounded-md font-semibold`}
        >
          Check Availability
        </button>
      </div>
    </div>
  );
};

export default CarCard;
