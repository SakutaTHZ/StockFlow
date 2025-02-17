import CNetAdminNav from "../components/CNetAdminNav";
import { useNavigate, useLocation } from "react-router-dom";
import { FaArrowLeftLong, FaCircleInfo, FaWheelchair } from "react-icons/fa6";
import { CarData } from "../data/types";
import {
  MdOutlineTimer,
  MdOutlineNewReleases,
  MdOutlineFileDownload,
} from "react-icons/md";
import { PiChartLineDownBold } from "react-icons/pi";
import { TbFaceIdError } from "react-icons/tb";
import Hybrid from "../assets/hybrid.png";
import { RiTruckLine } from "react-icons/ri";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { FaRegSave } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { BsEyeFill, BsStarFill } from "react-icons/bs";

interface CarImagesProps {
  customClass?: string;
}

interface LocationState {
  card: CarData;
}

const CarImages: React.FC<CarImagesProps> = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const cardData = (location.state as LocationState)?.card;

  const goBack = () => {
    navigate(-1); // Redirects to the previous page
  };

  const highlightPill = (status: string) => {
    return status === "Welcab" ? (
      <span
        className={`stat flex items-center gap-2 text-sm font-semibold rounded-full px-3 py-1 text-white bg-black bg-opacity-40 ${
          cardData.hold && "hidden"
        }`}
      >
        <FaWheelchair /> {cardData.highlightStatus}
      </span>
    ) : status === "Coming soon" ? (
      <span
        className={`stat flex items-center gap-2 text-sm font-semibold rounded-full px-3 py-1 text-white bg-black bg-opacity-40 ${
          cardData.hold && "hidden"
        }`}
      >
        <MdOutlineTimer /> {cardData.highlightStatus}
      </span>
    ) : status === "Hybrid" ? (
      <span
        className={`stat flex items-center gap-2 text-sm font-semibold rounded-full px-3 py-1 text-white bg-black bg-opacity-40 ${
          cardData.hold && "hidden"
        }`}
      >
        <img src={Hybrid} alt="Hybrid" /> {cardData.highlightStatus}
      </span>
    ) : status === "Reduced" ? (
      <span
        className={`stat flex items-center gap-2 text-sm font-semibold rounded-full px-3 py-1 text-red-600 bg-red-200 ${
          cardData.hold && "hidden"
        }`}
      >
        <PiChartLineDownBold /> {cardData.highlightStatus}
      </span>
    ) : status === "New" ? (
      <span
        className={`stat flex items-center gap-2 text-sm font-semibold rounded-full px-3 py-1 text-green-800 bg-green-200 ${
          cardData.hold && "hidden"
        }`}
      >
        <MdOutlineNewReleases /> {cardData.highlightStatus}
      </span>
    ) : (
      <span
        className={`stat flex items-center gap-2 text-sm font-semibold rounded-full px-3 py-1 text-white bg-black bg-opacity-40 ${
          cardData.hold && "hidden"
        }`}
      >
        <TbFaceIdError /> {cardData.highlightStatus}
      </span>
    );
  };
  const buttonClass =
    "flex items-center p-2 px-3 md:px-4 gap-2 rounded-md shadow-sm font-semibold";

  const [showHint, setShowHint] = useState(true);

  const ImageBox = () => {
    const [isSelected, setIsSelected] = useState(false);

    return (
      <div
        className={`relative group overflow-hidden cursor-pointer border p-1.5 rounded-md shadow-md transition-all duration-300 ${
          isSelected && "bg-[#0B66E4]"
        }`}
        onClick={() => setIsSelected(!isSelected)}
      >
        <button
          className={`absolute right-0 top-0 p-1 rounded-md transition-all duration-300 ${
            isSelected ? "bg-[#0B66E4] text-white" : "text-[#0B66E4] bg-white"
          }`}
        >
          <BsStarFill size={15} />
        </button>
        <img
          src={cardData.image}
          alt="image"
          className="w-20 aspect-square object-cover shadow-md"
        />
        <p
          className={`-bottom-8 group-hover:bottom-0 text-sm bg-white absolute w-full left-0 text-center transition-all duration-300 rounded-md ${
            isSelected ? "bg-[#0B66E4] text-white" : "text-black bg-white"
          }`}
        >
          {cardData.registerDate}
        </p>
      </div>
    );
  };

  return (
    <>
      <CNetAdminNav />

      <div className="flex flex-col px-4 md:px-20">
        {/* Top Nav */}
        <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 pt-4 md:pt-10 pb-2">
          {/* Car Data */}
          <div className="flex flex-col md:flex-row  items-start gap-4 md:gap-8">
            <button className="hidden md:block" onClick={goBack}>
              <FaArrowLeftLong />
            </button>
            <div className="flex items-start gap-4 md:gap-8">
              <div className="imageContainer flex-shrink-0 w-16 md:w-24 h-16 md:h-24 bg-red-200 rounded-full overflow-hidden">
                <img
                  src={cardData.image}
                  alt="Car image"
                  className="h-full object-cover"
                />
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-lg md:text-3xl font-bold flex items-center gap-2 text-blue-950">
                  {cardData.type} {cardData.name}
                </p>
                <p className="font-medium text-gray-500">
                  {cardData.package} / {cardData.vim}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span
                    className={`id flex items-center gap-2 text-sm rounded-full px-3 py-1 text-white bg-black bg-opacity-40 ${
                      cardData.hold && "hidden"
                    }`}
                  >
                    {cardData.id}
                  </span>
                  {cardData.highlightStatus != "" && (
                    <>{highlightPill(cardData.highlightStatus)}</>
                  )}
                  <span className="font-medium text-gray-500">
                    (for {cardData.customer})
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Burrons */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap gap-2">
              <button className={`${buttonClass} bg-gray-200 `}>
                <RiTruckLine size={20} className="flex-shrink-0" /> Cargo
              </button>
              <button className={`${buttonClass} bg-gray-200 `}>
                <MdOutlineFileDownload size={20} className="flex-shrink-0" />{" "}
                Download
              </button>
              <button className={`${buttonClass} bg-gray-200 `}>
                <HiOutlineSwitchHorizontal
                  size={20}
                  className="flex-shrink-0"
                />{" "}
                Toggle
              </button>
              <button className={`${buttonClass} bg-[#FFC158]`}>
                <FaRegSave size={20} className="flex-shrink-0" /> Save
              </button>
            </div>
            <div className="w-full flex gap-2 items-center justify-start md:justify-end">
              <p className="text-gray-500 font-medium text-nowrap">
                Upload Progress
              </p>
              <div className="progress-bar w-full md:w-40 h-4 bg-gray-200 rounded-md">
                <div className="progress w-full h-full bg-green-400 rounded-md"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Hint */}
        <div
          className={`flex items-start md:items-center justify-between gap-2 my-2 px-4 bg-[#FFF3DE] text-gray-700 font-semibold rounded-md overflow-hidden ${
            showHint ? "h-auto py-2" : "h-0"
          } transition-all`}
        >
          <div className="flex items-start md:items-center gap-2">
            <FaCircleInfo
              size={20}
              className="flex-shrink-0 translate-y-1 md:translate-y-0"
            />
            <p>
              Drag images between the image areas. Upload new images by dragging
              them from your computer into a drop zone. Hover over an image with
              “CTRL” pressed so show it bigger.
            </p>
          </div>
          <button onClick={() => setShowHint(!showHint)}>
            <IoClose
              size={20}
              className="flex-shrink-0 translate-y-1 md:translate-y-0"
            />
          </button>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-[2fr_1fr] min-h-20 gap-4 py-2">
          <div className="flex flex-col gap-4">
            {/* Auction Images Box */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col md:flex-row gap-2 min-h-9 justify-between">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-lg font-semibold">Auction Images</h2>
                  <button className="flex items-center gap-2 bg-[#FFDA9B] p-1.5 px-3 rounded-md font-semibold">
                    <BsEyeFill size={20} className="flex-shrink-0" /> Check
                    Details
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="relative w-9 h-5 bg-gray-200 rounded-full peer-checked:bg-[#FFC158] peer-checked:after:translate-x-full peer-focus:outline-none after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all" />
                  </label>
                  <p>Show Auction Images</p>
                </div>
              </div>
              <div className="flex flex-wrap border-4 gap-2 min-h-[134px] border-dotted p-4 rounded-md">
                {Array(8)
                  .fill(null)
                  .map((_: number, index: number) => (
                    <ImageBox key={index} />
                  ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-4">
              {/* Sheet Box */}
              <div className="w-1/2 flex flex-col gap-2">
                <div className="flex flex-col md:flex-row gap-2 min-h-9 justify-between">
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="text-lg font-semibold">Sheet</h2>
                  </div>
                </div>
                <div className="flex flex-wrap border-4 gap-2 border-dotted min-h-[134px] p-4 rounded-md">
                  {Array(0)
                    .fill(null)
                    .map((_: number, index: number) => (
                      <ImageBox key={index} />
                    ))}
                </div>
              </div>
              {/* EC Box */}
              <div className="w-1/2 flex flex-col gap-2">
                <div className="flex flex-col md:flex-row gap-2 min-h-9 justify-between">
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="text-lg font-semibold">EC</h2>
                  </div>
                </div>
                <div className="flex flex-wrap border-4 gap-2 border-dotted p-4 min-h-[134px] rounded-md">
                  {Array(0)
                    .fill(null)
                    .map((_: number, index: number) => (
                      <ImageBox key={index} />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarImages;
