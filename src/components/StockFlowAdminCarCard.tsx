import React, { CSSProperties, useState, useRef, useEffect } from "react";
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
import CarAvailability from "../assets/check availability.svg";
import {
  MdOutlineTimer,
  MdOutlineNewReleases,
  // MdOutlinePinDrop,
  MdAirlineSeatReclineNormal,
  MdAddCircleOutline,
  MdRemoveCircleOutline,
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
import { IoCarOutline, IoEyeOutline } from "react-icons/io5";
import DropDown from "./DropDown";
import { highlightStatus, promotionText, yards } from "../data/generateData";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import dayjs from "dayjs";
import { BiPlus } from "react-icons/bi";

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
  const [isCarHidden, setIsCarHidden] = useState(car.hidden);
  const pillClass = `border flex gap-1 items-center w-fit px-2 rounded-md text-gray-500 ${
    isCarHidden ? `bg-red-200 border-transparent shadow-sm` : `border-gray-300`
  }`;

  const statusPill = (status: string) => {
    return status === "Arrived" ? (
      <span className={` ${pillClass}`}>
        <FaRegCheckCircle />
        {status}
      </span>
    ) : status === "Transit" ? (
      <span
        className={` font-semibold border flex gap-1 items-center w-fit px-2 rounded-md text-blue-800`}
      >
        <RiShipLine />
        {status}
      </span>
    ) : status === "In Japan" ? (
      <span className={`${pillClass}`}>
        <img src={JapanFlag} alt="Jp flag" className="h-4" />
        {status}
      </span>
    ) : status === "Clearance UK" ? (
      <span className={` ${pillClass}`}>
        <img src={UKFlag} alt="UK flag" className="h-4" />
        {status}
      </span>
    ) : (
      <span className={`  ${pillClass}`}>
        <FaRegCheckCircle />
        Unknown Status
      </span>
    );
  };

  const [cardOption, setcardOption] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null); // Ref for dropdown

  // const toggleDropdown = () => {
  //   setcardOption((prev) => !prev);
  // };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setcardOption(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const cardOptions = () => {
    return (
      <div className="relative" ref={dropdownRef}>
        <button
          className="option z-20 absolute right-2 -bottom-4 bg-white p-3 rounded-full shadow-md border"
          onClick={() => setcardOption(true)}
        >
          <BsThreeDots />
        </button>
        <div
          className={`z-50 right-2 bottom-8 flex flex-col transition-all bg-white border rounded-md shadow-md ${
            cardOption ? "absolute" : "hidden"
          }`}
        >
          {isCarHidden ? (
            <div className="w-full flex border-b">
              <button
                onClick={() => {
                  setIsCarHidden(false);
                }}
                className="flex items-center justify-center gap-1 border-r font-semibold w-1/2 text-nowrap text-left p-2 px-4 hover:bg-gray-100"
              >
                <MdAddCircleOutline size={20} className="flex-shrink-0" />
                On List
              </button>
              <button
                onClick={() => {
                  setIsCarHidden(false);
                }}
                className="flex items-center justify-center gap-1 font-semibold  w-1/2 text-nowrap text-left p-2 px-4 hover:bg-gray-100"
              >
                <MdRemoveCircleOutline size={20} className="flex-shrink-0" />
                Off List
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                setIsCarHidden(true);
              }}
              className="border-b flex items-center gap-2 font-semibold text-nowrap text-left p-2 px-4 hover:bg-gray-100"
            >
              <IoEyeOutline size={20} className="flex-shrink-0" />
              Hide
            </button>
          )}
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
            onClick={(e) => {
              e.stopPropagation();
              if (onClick) {
                onClick();
              } else {
                handleCardClick(car, `/detail/${car.id.slice(1)}`);
              }
            }}
            className="font-semibold text-nowrap text-left p-2 px-4 hover:bg-gray-100"
          >
            Customer View
          </button>
        </div>
      </div>
    );
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const [isPromotionPopupOpen, setIsPromotionPopupOpen] = useState(false);

  const openPromotionPopup = () => setIsPromotionPopupOpen(true);
  const closePromotionPopup = () => setIsPromotionPopupOpen(false);

  const [isStockOfferPopupOpen, setIsStockOfferPopupOpen] = useState(false);

  const openStockOfferPopup = () => setIsStockOfferPopupOpen(true);
  const closeStockOfferPopup = () => setIsStockOfferPopupOpen(false);

  const [isBannerPopupOpen, setIsBannerPopupOpen] = useState(false);

  const openBannerPopup = () => setIsBannerPopupOpen(true);
  const closeBannerPopup = () => setIsBannerPopupOpen(false);

  const highlightPill = (status: string) => {
    return status === "Welcab" ? (
      <span
        className={`stat absolute top-2 left-2 flex items-center gap-2 text-sm font-semibold  rounded-full px-3 py-1 text-white bg-black bg-opacity-40 ${
          (car.hold || car.highlightStatus === "Sold") && "hidden"
        }`}
      >
        <FaWheelchair /> {car.highlightStatus}
      </span>
    ) : status === "Coming soon" ? (
      <span
        className={`stat absolute top-2 left-2 flex items-center gap-2 text-sm font-semibold  rounded-full px-3 py-1 text-white bg-black bg-opacity-40 ${
          (car.hold || car.highlightStatus === "Sold") && "hidden"
        }`}
      >
        <MdOutlineTimer /> {car.highlightStatus}
      </span>
    ) : status === "Hybrid" ? (
      <span
        className={`stat absolute top-2 left-2 flex items-center gap-2 text-sm font-semibold  rounded-full px-3 py-1 text-white bg-black bg-opacity-40 ${
          (car.hold || car.highlightStatus === "Sold") && "hidden"
        }`}
      >
        <img src={Hybrid} alt="Hybrid" /> {car.highlightStatus}
      </span>
    ) : status === "Sold" ? (
      <span
        className={`stat absolute top-2 left-2 flex items-center gap-2 text-sm  font-semibold rounded-full px-3 py-1 text-yellow-800 bg-yellow-200 ${
          (car.hold || car.highlightStatus === "Sold") && "hidden"
        }`}
      >
        <FaMoneyBillTrendUp /> {car.highlightStatus}
      </span>
    ) : status === "Reduced" ? (
      <span
        className={`stat absolute top-2 left-2 flex items-center gap-2 text-sm font-semibold rounded-full px-3 py-1 text-red-600 bg-red-200 ${
          (car.hold || car.highlightStatus === "Sold") && "hidden"
        }`}
      >
        <PiChartLineDownBold /> {car.highlightStatus}
      </span>
    ) : status === "New" ? (
      <span
        className={`stat absolute top-2 left-2 flex items-center gap-2 text-sm  font-semibold rounded-full px-3 py-1 text-yellow-800 bg-yellow-100 ${
          (car.hold || car.highlightStatus === "Sold") && "hidden"
        }`}
      >
        <MdOutlineNewReleases /> {car.highlightStatus}
      </span>
    ) : (
      <span
        className={`stat absolute top-2 left-2 flex items-center gap-2 text-sm  font-semibold rounded-full px-3 py-1 text-white bg-black bg-opacity-40 ${
          (car.hold || car.highlightStatus === "Sold") && "hidden"
        }`}
      >
        <TbFaceIdError /> {car.highlightStatus}
      </span>
    );
  };

  const navigate = useNavigate();

  const [cars] = useAtom(carAtom);

  const handleCardClick = (carData: CarData, toPath: string) => {
    console.log("clicked" + carData.id);
    navigate(toPath, {
      state: { card: carData, cars: cars },
    });
  };

  const formatDate = (dateString: string) => {
    dayjs.locale("en");
    const date = dayjs(dateString);

    if (!date.isValid()) return "Invalid Date";

    return date.format("YYYY-MMM-DD");
  };
  return (
    <>
      <div
        className={`card relative animate-slideUp transition-all w-full rounded-lg border-2 cursor-pointer ${customClass} ${
          extraStatus && car.hold === false && car.highlightStatus != "Sold"
            ? "border-[#FFC158] border-[3px]"
            : "border-gray-100"
        } ${car.hold && " opacity-15 border-[#FFC158]"} ${
          car.highlightStatus === "Sold" && ``
        } ${isCarHidden && `bg-[#FDC5C5] border-red-400`} transition-all`}
        style={style}
      >
        <div
          className="ClickArea absolute z-10 w-full h-full cursor-pointer"
          onClick={() =>
            onClick
              ? onClick()
              : handleCardClick(car, `/StockDetail/${car.id.slice(1)}`)
          }
        ></div>
        <div className="head relative flex h-42">
          <img
            src={car.image}
            alt="car Image"
            className={`rounded-t-md h-42 ${
              car.highlightStatus === "Sold"
                ? "opacity-50"
                : car.hold && "opacity-50 pointer-events-none"
            }`}
            loading="lazy"
          />
          {car.highlightStatus === "Sold" ? (
            <div className="absolute w-full bottom-0 flex items-center bg-black bg-opacity-40 text-white font-semibold justify-center gap-2 py-2">
              <FaMoneyBillTrendUp />
              Sold
            </div>
          ) : (
            car.hold && (
              <div className="absolute w-full bottom-0 flex items-center bg-black bg-opacity-40 text-white font-semibold justify-center gap-2 py-2">
                <FaRegPauseCircle />
                On Hold
              </div>
            )
          )}
          {car.highlightStatus != "" && (
            <>{highlightPill(car.highlightStatus)}</>
          )}
          {extraStatus && (
            <span
              className={`z-50 status absolute top-2 right-0 flex items-center gap-2 text-sm font-semibold border-2 border-[#FFC158] rounded-s-full px-3 py-1 bg-gradient-to-r from-[#FFF3DE] to-[#FFC158] ${
                (car.hold || car.highlightStatus === "Sold") && "hidden"
              }`}
              onClick={openStockOfferPopup}
            >
              <RiDiscountPercentLine /> Stock Offer
            </span>
          )}
          <span
            className={`id absolute bottom-1.5 left-2 flex items-center gap-2 text-sm  rounded-full px-3 py-1 text-white  ${
              car.hold || car.highlightStatus === "Sold"
                ? "bg-white bg-opacity-20"
                : "bg-black bg-opacity-40"
            }`}
          >
            {car.id}
          </span>
          {cardOptions()}
        </div>
        <div className="body p-2">
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
              <TbRoad />
              {car.milleage.toLocaleString()} km
            </span>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <span className={` ${pillClass}`}>
                  <img src={Vin} alt="" />
                  {car.vim}
                </span>
                <span className={` ${pillClass}`}>
                  <FaRegStar />
                  {car.rating}
                </span>
              </div>
              <span className={` ${pillClass}`}>
                <RiShipLine />
                {car.yard}
              </span>
            </div>

            {/* <span className={`${pillClass}`}>
              <MdOutlinePinDrop />
              {car.vesselFrom}
            </span> */}
          </div>
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
                <PiCarProfile
                  size={20}
                  className="flex-shrink-0 transform scale-x-[-1]"
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
                {car.transmission}
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
                {car.vesselTo}
              </p>
            </div>
            <button
              className="flex justify-center items-center gap-2 bg-[#FFC158] py-2 w-full rounded-md font-semibold"
              onClick={() =>
                onClick
                  ? onClick()
                  : handleCardClick(car, `/StockDetail/${car.id.slice(1)}`)
              }
            >
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
                className="py-2 w-full bg-[#FFC158] font-semibold rounded-md"
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
        isOpen={isStockOfferPopupOpen}
        onClose={closeStockOfferPopup}
        title="Promotion"
        customClass="m-2 md:w-1/3 sm:w-[75%]"
        content={
          <>
            <div className="flex flex-col gap-5 py-3">
              <div className="flex flex-col">
                <div className="flex gap-3 items-start">
                  <RiDiscountPercentLine
                    size={20}
                    className="shrink-0 translate-y-0.5"
                  />
                  <div className="flex flex-col w-full gap-1">
                    <p className="font-semibold">NG Trading Ltd</p>
                    <p>
                      <span>Stock Offer : </span>
                      <span>¥{car.price.toLocaleString()}</span>
                    </p>
                  </div>
                  <p className="text-gray-500 text-nowrap">24 Jun, 2:45 pm</p>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex gap-3 items-start">
                  <RiDiscountPercentLine
                    size={20}
                    className="shrink-0 translate-y-0.5"
                  />
                  <div className="flex flex-col w-full gap-1">
                    <p className="font-semibold">NG Trading Ltd</p>
                    <p>
                      <span>Stock Offer : </span>
                      <span>¥{car.price.toLocaleString()}</span>
                    </p>
                  </div>
                  <p className="text-gray-500 text-nowrap">24 Jun, 2:45 pm</p>
                </div>
              </div>
              <button
                onClick={()=>{
                  closeStockOfferPopup();
                  openPromotionPopup();
                }}
                className="text-[#997435] flex items-center gap-2 font-semibold text-nowrap text-left p-2 px-4 "
              >
                <BiPlus/>Add Promotion
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
                className="py-2 w-full bg-[#FFC158] font-semibold rounded-md"
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

export default StockFlowAdminCarCard;
