import CNetAdminNav from "../components/CNetAdminNav";
import { useNavigate, useLocation } from "react-router-dom";
import { FaArrowLeftLong, FaWheelchair } from "react-icons/fa6";
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
    "bg-gray-100 flex items-center p-2 px-3 md:px-4 gap-2 rounded-md shadow-sm font-semibold";

  return (
    <>
      <CNetAdminNav />

      <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 px-4 md:px-20 pt-4 md:pt-10 pb-2">
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
            <button className={`${buttonClass}`}>
              <RiTruckLine size={20} className="flex-shrink-0" /> Cargo
            </button>
            <button className={`${buttonClass}`}>
              <MdOutlineFileDownload size={20} className="flex-shrink-0" />{" "}
              Download
            </button>
            <button className={`${buttonClass}`}>
              <HiOutlineSwitchHorizontal size={20} className="flex-shrink-0" />{" "}
              Toggle
            </button>
            <button className={`${buttonClass}`}>
              <FaRegSave size={20} className="flex-shrink-0" /> Save
            </button>
          </div>
          <div className="w-full flex gap-2 items-center justify-start md:justify-end">
            <p className="text-gray-500 font-medium">Upload Progress</p>
            <div className="progress-bar w-40 h-4 bg-gray-200 rounded-md">
              <div className="progress w-full h-full bg-green-400 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarImages;
