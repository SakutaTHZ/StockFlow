import React, { CSSProperties, useEffect, useRef, useState } from "react";
import {
  FaWheelchair,
  FaRegCheckCircle,
  FaChevronDown,
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
import {
  MdAddCircleOutline,
  MdAirlineSeatReclineNormal,
  MdOutlineCalendarMonth,
  MdOutlineNewReleases,
  MdOutlineTimer,
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
import Popup from "./Popup";
import { IoIosArrowForward } from "react-icons/io";
import { useAtom } from "jotai";
import { carAtom } from "../data/atoms";
import { useNavigate } from "react-router-dom";
import Trans from "../assets/transmission.png";
import Engine from "../assets/EnginePower.svg";
import CarAvailability from "../assets/check availability.svg";
import { LuMapPin } from "react-icons/lu";
import { IoCarOutline, IoEyeOutline } from "react-icons/io5";
import { yards, promotionText, highlightStatus } from "../data/generateData";
import DropDown from "./DropDown";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import dayjs from "dayjs";
import placeholderImage from "../assets/images/stock/00165048_01.jpg";

interface StockFlowAdminTableRowProps {
  customClass?: string;
  style?: CSSProperties;
  car: CarData;
  onClick?: () => void;
  collapse?: boolean;
}

const StockFlowAdminTableRow: React.FC<StockFlowAdminTableRowProps> = ({
  customClass,
  style,
  car,
  onClick,
  collapse,
}) => {
  const statusPill = (status: string) => {
    return status === "Arrived" ? (
      <span className={`flex gap-2 items-center`}>
        <FaRegCheckCircle />
        {status}
      </span>
    ) : status === "Transit" ? (
      <span
        className={`flex gap-2 items-center font-bold text-blue-800 text-shadow-md`}
      >
        <RiShipLine />
        {status}
      </span>
    ) : status === "In Japan" ? (
      <span className={`flex gap-2 items-center`}>
        <img src={JapanFlag} alt="Jp flag" className="h-4" />
        {status}
      </span>
    ) : status === "Clearance UK" ? (
      <span className={`flex gap-2 items-center`}>
        <img src={UKFlag} alt="UK flag" className="h-4" />
        {status}
      </span>
    ) : (
      <span className={`flex gap-2 items-center`}>
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
    ) : status === "On Hold" ? (
      <span
        className={`stat flex items-center gap-2 text-sm font-semibold  rounded-full px-3 py-1 text-white bg-black bg-opacity-40`}
      >
        <FaRegPauseCircle /> {car.highlightStatus}
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
    ) : status === "Sold" ? (
      <span
        className={`stat flex items-center gap-2 text-sm  font-semibold rounded-full px-3 py-1 text-white bg-black bg-opacity-40 ${
          car.hold && "hidden"
        }`}
      >
        <FaMoneyBillTrendUp /> {car.highlightStatus}
      </span>
    ) : status === "New" ? (
      <span
        className={`stat flex items-center gap-2 text-sm  font-semibold rounded-full px-3 py-1 text-yellow-800 bg-yellow-100 ${
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

  const handleCardClick = (carData: CarData, toPath: string) => {
    console.log("clicked" + carData.id);
    navigate(toPath, {
      state: { card: carData, cars: cars },
    });
  };
  const [more, setMore] = useState(collapse);
  const showMore = () => {
    setMore(!more);
  };

  useEffect(() => {
    setMore(collapse);
  }, [collapse]);

  const [openOptions, setOpenOptions] = useState<string | null>(null);
  const optionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        optionsRef.current &&
        !optionsRef.current.contains(event.target as Node)
      ) {
        setOpenOptions(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleCardOptions = (cardId: string) => {
    setOpenOptions((prev) => (prev === cardId ? null : cardId));
  };
  
  const [isCarHidden, setIsCarHidden] = useState(car.hidden);

  const cardOptionBox = (cardId: string) => {
    return (
      <div className="relative flex justify-center" ref={optionsRef}>
        <button
          className="option bg-gray-200 p-3 rounded-md shadow-md border"
          onClick={(e) => {
            e.stopPropagation();
            toggleCardOptions(cardId);
          }}
        >
          <BsThreeDots />
        </button>
        <div
          className={`z-50 right-2 bottom-8 flex flex-col transition-all bg-white border rounded-md shadow-md ${
            openOptions === cardId ? "absolute" : "hidden"
          }`}
        >
          {isCarHidden ? (
            <div className="w-full flex border-b">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsCarHidden(false);
                }}
                className="flex items-center justify-center gap-1 border-r font-semibold w-1/2 text-nowrap text-left p-2 px-4 hover:bg-gray-100"
              >
                <MdAddCircleOutline size={20} className="flex-shrink-0" />
                On List
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
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
              onClick={(e) => {
                e.stopPropagation();
                setIsCarHidden(true);
              }}
              className="border-b flex items-center gap-2 font-semibold text-nowrap text-left p-2 px-4 hover:bg-gray-100"
            >
              <IoEyeOutline size={20} className="flex-shrink-0" />
              Hide
            </button>
          )}
          <button
            onClick={(e) => {
              e.stopPropagation();
              openPopup();
            }}
            className="font-semibold text-nowrap text-left p-2 px-4 hover:bg-gray-100"
          >
            Show Vehicle Overview
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              openPromotionPopup();
            }}
            className="font-semibold text-nowrap text-left p-2 px-4 hover:bg-gray-100"
          >
            Add Promotion
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              openBannerPopup();
            }}
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
  const formatDate = (dateString: string) => {
    dayjs.locale("en");
    const date = dayjs(dateString);

    if (!date.isValid()) return "Invalid Date";

    return date.format("YYYY-MMM-DD");
  };

  return (
    <>
      <tr
        className={`border ${customClass} ${
          isCarHidden ? `bg-[#FDC5C5]` : car.hold ? `bg-gray-100` : ""
        } ${car.showExtraStatus && "bg-[#FFC158] bg-opacity-20"}`}
        style={style}
        onClick={() =>
          onClick
            ? onClick()
            : handleCardClick(car, `/StockDetail/${car.id.slice(1)}`)
        }
      >
        <td
          className="border p-2"
          onClick={(e) => {
            e.stopPropagation();
            showMore();
          }}
        >
          <div className="flex justify-center cursor-pointer">
            <FaChevronDown
              size={12}
              className={`text-gray-400 flex-shrink-0 transition-all ${
                !more && "rotate-180"
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
              className={`rounded-md w-44 h-28 object-cover ${
                (car.hold || car.highlightStatus === "Sold") && "opacity-50"
              }`}
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).src = placeholderImage;
              }}
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
        <td className="relative border px-4">
          {/* <button
            onClick={() =>
              onClick
                ? onClick()
                : handleCardClick(car, `/StockDetail/${car.id.slice(1)}`)
            }
            className="absolute top-2 right-2 font-semibold text-nowrap text-left p-2 rounded-md hover:bg-gray-100"
          >
            <IoMdEye className="text-gray-400" />
          </button> */}
          <div className="relative h-full flex flex-col justify-center items-start">
            <p>
              {car.name} {car.type}
            </p>
            <p>{car.package}</p>
            <div className="flex gap-2 mt-2">
              {car.highlightStatus != "" && (
                <>{highlightPill(car.highlightStatus)}</>
              )}
              {car.showExtraStatus && (
                <span
                  className={`status flex items-center gap-2 text-sm font-semibold rounded-md bg-[#FFC158] px-3 py-1  ${
                    car.hold && "hidden"
                  }`}
                >
                  <RiDiscountPercentLine /> Stock Offer
                </span>
              )}
            </div>
          </div>
        </td>
        <td className="border">
          <div className="flex justify-center">{statusPill(car.status)}</div>
        </td>
        <td className="border px-4 leading-6">
          <p className="flex gap-1 items-center text-gray-700">
            <MdOutlineCalendarMonth size={12} />
            {formatDate(car.soldDate)}
          </p>
          <p>
            {car.milleage.toLocaleString()} km,{" "}
            <span className="capitalize">
              {car.exteriorColor.split("#")[0]}
            </span>
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
          <p className="flex gap-1 items-center text-sm text-gray-500">
            <MdOutlineCalendarMonth size={12} />
            {formatDate(car.soldDate)}
          </p>
        </td>
        <td className="border px-4 leading-6">
          <p className={`relative ${car.hold && "hidden"}`}>
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
            </span>{" "}
            {car.discount != 0 && (
              <span className="line-through text-gray-400">
                ¥{car.price.toLocaleString()}
              </span>
            )}
          </p>
          <p className={`text-sm text-gray-500 ${car.hold && "hidden"}`}>
            $6,000 UK duty/ VAT paid!
          </p>
        </td>
        <td className="border">{cardOptionBox(car.id)}</td>
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
              <span className="w-28 text-gray-500">ETD:</span>{" "}
              {formatDate(car.sentDate)}
            </p>

            <p>
              <span className="w-28 text-gray-500">Destination:</span>{" "}
              {car.vesselFrom}
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
                <img src={Trans} className="flex-shrink-0" />
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
                handleCardClick(car, `/StockDetail/${car.id.slice(1)}`)
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

export default StockFlowAdminTableRow;
