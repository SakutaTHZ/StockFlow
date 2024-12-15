import { Link, useLocation } from "react-router-dom";
import CNetAdminNav from "../components/CNetAdminNav";
import { CarData } from "../data/types";
import { FaChevronDown, FaRegCommentDots, FaWheelchair } from "react-icons/fa";
import {
  MdOutlineTimer,
  MdOutlineNewReleases,
  MdEdit,
  MdOutlineInsertLink,
  MdOutlineRemoveRedEye,
  MdAirlineSeatReclineNormal,
  MdInsertPhoto,
  MdModeEditOutline,
} from "react-icons/md";
import {
  PiCalendarDots,
  PiCarProfile,
  PiChartLineDownBold,
  PiGasCan,
  PiGearFine,
  PiStar,
} from "react-icons/pi";
import { TbFaceIdError, TbRoad } from "react-icons/tb";
import Hybrid from "../assets/hybrid.png";
import {
  IoMdEye,
  IoMdInformationCircleOutline,
  IoMdPhotos,
} from "react-icons/io";
import { BiImages } from "react-icons/bi";
import {
  RiCarLine,
  RiLineChartLine,
  RiTimerLine,
  RiTruckLine,
} from "react-icons/ri";
import { HiOutlineChartBar } from "react-icons/hi";
import { useState } from "react";
import { BsBoxSeam } from "react-icons/bs";
import { IoLanguage, IoPersonCircleOutline } from "react-icons/io5";
import Gallery from "../components/Gallery";
import Popup from "../components/Popup";

import Engine from "../assets/EnginePower.svg";
import Certificate from "../assets/images/certificate.png";

interface DetailsProps {
  customClass?: string;
}

interface LocationState {
  card: CarData; // Define the expected type for 'card'
  cars: CarData[];
}

const SalesDropDown = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const buttonClass = "p-2 px-4 text-left hover:bg-gray-100";

  const toggle = () => {
    setDropDownOpen(!dropDownOpen);
  };
  return (
    <div className="relative">
      <button
        className="flex flex-col items-center justify-center gap-1 bg-gray-100 hover:bg-gray-200 h-16 px-4 rounded-md"
        onClick={toggle}
      >
        <HiOutlineChartBar size={20} />
        <p className="flex items-center gap-1 font-semibold">
          Sales <FaChevronDown size={10} className="translate-y-0.5" />
        </p>
      </button>
      {dropDownOpen && (
        <div
          className={`border bg-white shadow-sm absolute right-0 translate-y-2 flex flex-col text-nowrap rounded-md`}
        >
          <button className={buttonClass}>Add Promotion</button>
          <button className={buttonClass}>Update Banner</button>
          <button className={buttonClass}>Customer View</button>
        </div>
      )}
    </div>
  );
};

const LogsDropDown = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const buttonClass =
    "flex items-center gap-2 p-2 px-4 text-left hover:bg-gray-100";

  const toggle = () => {
    setDropDownOpen(!dropDownOpen);
  };
  return (
    <div className="relative">
      <button
        className="flex flex-col items-center justify-center gap-1 bg-gray-100 hover:bg-gray-200 h-16 px-4 rounded-md"
        onClick={toggle}
      >
        <MdOutlineInsertLink size={20} />
        <p className="flex items-center gap-1 font-semibold">
          Logs <FaChevronDown size={10} className="translate-y-0.5" />
        </p>
      </button>
      {dropDownOpen && (
        <div
          className={`border bg-white shadow-sm absolute right-0 translate-y-2 flex flex-col text-nowrap rounded-md`}
        >
          <button className={buttonClass}>
            <RiTimerLine size={18} />
            Stock Log
          </button>
          <button className={buttonClass}>
            <BsBoxSeam size={18} />
            Bids
          </button>
          <button className={buttonClass}>
            <RiLineChartLine size={18} />
            Price Changes
          </button>
          <button className={buttonClass}>
            <IoPersonCircleOutline size={18} />
            Visitor Log
          </button>
        </div>
      )}
    </div>
  );
};

const AdminCarStockDetails: React.FC<DetailsProps> = () => {
  const location = useLocation();
  const cardData = (location.state as LocationState)?.card;

  const labelClass = `text-gray-500`;

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

  const [showGallery, setShowGallery] = useState(false);

  function toggleGallery() {
    setShowGallery(() => !showGallery);
  }

  const [isTranslationPopupOpen, setIsTranslationPopupOpen] = useState(false);

  const openTranslationPopup = () => setIsTranslationPopupOpen(true);
  const closeTranslationPopup = () => setIsTranslationPopupOpen(false);

  const [isAuctionGradePopupOpen, setIsAuctionGradePopupOpen] = useState(false);

  const openAuctionGradePopup = () => setIsAuctionGradePopupOpen(true);
  const closeAuctionGradePopup = () => setIsAuctionGradePopupOpen(false);


  const CommentBox = () => {
    const [editMode, setEditMode] = useState(false);
    const [editableContent, setEditableContent] = useState(
      "Lorem ipsum dolor sit amet consectetur. Maecenas ac purus sed ut proin risus enim. Cras pellentesque gravida rhoncus rhoncus ullamcorper auctor feugiat. Mattis tincidunt non purus risus ullamcorper. Non pulvinar sodales in ornare in congue cursus proin justo."
    );
  
    return (
      <>
        <div className="border p-4 rounded-md">
          <div className="head flex justify-between items-center">
            <p className="font-bold text-xl">Comment</p>
            {!editMode && (
              <MdModeEditOutline
                size={18}
                onClick={() => setEditMode((prevMode) => !prevMode)}
              />
            )}
          </div>
  
          <div className="body mt-4">
            {editMode ? (
              <textarea
                className="w-full h-40 resize-none p-2 border rounded-md"
                value={editableContent}
                onChange={(e) => setEditableContent(e.target.value)}
              />
            ) : (
              <p>{editableContent}</p>
            )}
          </div>
  
          {editMode && (
            <div className="foot flex gap-4 justify-end">
              <button
                className="font-semibold py-2 px-4 bg-[#FFC158] hover:bg-[#FFCD79] rounded-md"
                onClick={() => setEditMode((prevMode) => !prevMode)}
              >
                Save
              </button>
              <button
                className="font-semibold py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-md"
                onClick={() => setEditMode((prevMode) => !prevMode)}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </>
    );
  };
  
  const SalesCommentBox = () => {
    const [editMode, setEditMode] = useState(false);
    const [editableContent, setEditableContent] = useState(
      "Lorem ipsum dolor sit amet consectetur. Maecenas ac purus sed ut proin risus enim. Cras pellentesque gravida rhoncus rhoncus ullamcorper auctor feugiat. Mattis tincidunt non purus risus ullamcorper. Non pulvinar sodales in ornare in congue cursus proin justo."
    );
  
    return (
      <>
        <div className="border p-4 rounded-md">
          <div className="head flex justify-between items-center">
            <p className="font-bold text-xl">Sales Comment</p>
            {!editMode && (
              <MdModeEditOutline
                size={18}
                onClick={() => setEditMode((prevMode) => !prevMode)}
              />
            )}
          </div>
  
          <div className="body mt-4">
            {editMode ? (
              <textarea
                className="w-full h-40 resize-none p-2 border rounded-md"
                value={editableContent}
                onChange={(e) => setEditableContent(e.target.value)}
              />
            ) : (
              <p>{editableContent}</p>
            )}
          </div>
  
          {editMode && (
            <div className="foot flex gap-4 justify-end">
              <button
                className="font-semibold py-2 px-4 bg-[#FFC158] hover:bg-[#FFCD79] rounded-md"
                onClick={() => setEditMode((prevMode) => !prevMode)}
              >
                Save
              </button>
              <button
                className="font-semibold py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-md"
                onClick={() => setEditMode((prevMode) => !prevMode)}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </>
    );
  };
  
  const SupplierInfo = () => {
    const [editMode, setEditMode] = useState(false);
    const [collapse, setCollapse] = useState(false);
  
    return (
      <>
        <div className="border p-4 rounded-md bg-white">
          <div className="head flex justify-between items-center">
            <p className="font-bold text-xl">Supplier Info</p>
            <div className="flex gap-4">
              {!editMode && (
                <MdModeEditOutline
                  size={18}
                  onClick={() => setEditMode((prevMode) => !prevMode)}
                />
              )}
              {
                collapse ? (
                  <FaChevronDown className="rotate transition-all" onClick={() => setCollapse((prevMode) => !prevMode)}/>):(
                  <FaChevronDown className="rotate-180 transition-all" onClick={() => setCollapse((prevMode) => !prevMode)}/>)
              }
            </div>
          </div>
            
          {!collapse && (
          <div className="body mt-4">
            {editMode ? (
              <div><p>Auction Name</p></div>
            ) : (
              <div className="flex justify-between"><p>Auction Name</p><p>{cardData.vesselFrom}</p></div>
            )}
          </div>
          )}
  
          {(editMode && !collapse)  && (
            <div className="foot flex gap-4 justify-end">
              <button
                className="font-semibold py-2 px-4 bg-[#FFC158] hover:bg-[#FFCD79] rounded-md"
                onClick={() => setEditMode((prevMode) => !prevMode)}
              >
                Save
              </button>
              <button
                className="font-semibold py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-md"
                onClick={() => setEditMode((prevMode) => !prevMode)}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </>
    );
  };
  return (
    <>
      <CNetAdminNav />

      {showGallery && (
        <Gallery
          customClass="animate-appear animate-slideUp"
          closeBox={toggleGallery}
        />
      )}

      <div className="flex flex-col gap-6 px-4 md:px-24 py-8">
        <div className="flex items-center gap-1 font-medium">
          <Link to="/StockFlow" className="text-gray-500">
            Car stock
          </Link>
          <p className="text-blue-950 font-semibold">/ Car Details</p>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col gap-3">
            <p className="text-3xl font-bold flex items-center gap-2 text-blue-950">
              {cardData.name}
              <IoMdEye size={20} className="text-green-600" />
            </p>
            <p className="font-medium text-blue-950">
              {cardData.package} / {cardData.vim}
            </p>
            <div className="flex gap-2">
              <span
                className={`id flex items-center gap-2 text-sm rounded-full px-3 py-1 text-white bg-black bg-opacity-40 ${
                  cardData.hold && "hidden"
                }`}
              >
                {cardData.id}
              </span>
              {cardData.highlightStatus !== "" && (
                <>{highlightPill(cardData.highlightStatus)}</>
              )}
            </div>
          </div>

          <div className="flex items-end gap-2">
            <button className="flex flex-col items-center justify-center gap-1 bg-gray-100 hover:bg-gray-200 h-16 px-4 rounded-md">
              <MdEdit size={20} />
              <p className="font-semibold">Edit</p>
            </button>
            <button className="flex flex-col items-center justify-center gap-1 bg-gray-100 hover:bg-gray-200 h-16 px-4 rounded-md">
              <BiImages size={20} />
              <p className="font-semibold">Images</p>
            </button>
            <button className="flex flex-col items-center justify-center gap-1 bg-gray-100 hover:bg-gray-200 h-16 px-4 rounded-md">
              <FaRegCommentDots size={20} />
              <p className="font-semibold">Comments</p>
            </button>
            <button className="flex flex-col items-center justify-center gap-1 bg-gray-100 hover:bg-gray-200 h-16 px-4 rounded-md">
              <RiTruckLine size={20} />
              <p className="font-semibold">Cargo</p>
            </button>
            <SalesDropDown />
            <LogsDropDown />
          </div>
        </div>

        <div className="grid grid-cols-[2.5fr_1.5fr_1.5fr] gap-4">
          <div className="col-1 flex flex-col gap-4">
            <div className="imagesContainer h-fit relative flex flex-col md:flex-row gap-4">
              {/* Main Image */}
              <div className="animate-slideRight mainImage w-full">
                <img
                  src={cardData.image}
                  alt="Main image"
                  className="rounded-lg h-auto md:h-full object-cover"
                />
              </div>

              {/* Secondary Images */}
              <div className="secondaryImages w-full h-full md:w-8/12 grid grid-cols-3 md:grid-cols-2 gap-2">
                <img
                  src={cardData.image}
                  alt="Secondary image 1"
                  className="rounded-lg animate-slideRight opacity-0 h-full w-full object-cover"
                  style={{
                    animationDelay: `.15s`,
                    animationFillMode: "forwards",
                  }}
                />
                <img
                  src={cardData.image}
                  alt="Secondary image 2"
                  className="rounded-lg animate-slideRight opacity-0 h-full w-full object-cover"
                  style={{
                    animationDelay: `.30s`,
                    animationFillMode: "forwards",
                  }}
                />
                <img
                  src={cardData.image}
                  alt="Secondary image 3"
                  className="rounded-lg animate-slideRight opacity-0 h-full w-full object-cover"
                  style={{
                    animationDelay: `.45s`,
                    animationFillMode: "forwards",
                  }}
                />
                <img
                  src={cardData.image}
                  alt="Secondary image 4"
                  className="rounded-lg animate-slideRight opacity-0 h-full w-full object-cover"
                  style={{
                    animationDelay: `.60s`,
                    animationFillMode: "forwards",
                  }}
                />
                <img
                  src={cardData.image}
                  alt="Secondary image 5"
                  className="rounded-lg animate-slideRight opacity-0 h-full w-full object-cover"
                  style={{
                    animationDelay: `.75s`,
                    animationFillMode: "forwards",
                  }}
                />
                <img
                  src={cardData.image}
                  alt="Secondary image 6"
                  className="rounded-lg animate-slideRight opacity-0 h-full w-full object-cover"
                  style={{
                    animationDelay: `.90s`,
                    animationFillMode: "forwards",
                  }}
                />
              </div>

              {/* Toggle Button */}
              <button
                className="absolute flex gap-2 items-center bg-white bg-opacity-75 hover:bg-opacity-100 shadow-md px-2 py-1 rounded-md right-2 md:right-2 bottom-2 md:bottom-2 transition-all"
                onClick={toggleGallery}
              >
                <MdOutlineRemoveRedEye size={20} />
                <p className="hidden md:block">See All Photos</p>
                <p className="count font-semibold">34</p>
              </button>
            </div>

            <div className="flex flex-col border rounded-md py-6 px-4 gap-4 shadow-sm">
              <div className="flex flex-col md:flex-row gap-2 justify-between">
                <p className="font-bold text-lg">Car Details</p>
                <div className="font-semibold flex gap-6">
                  <button
                    className="flex gap-1 items-center text-[#CC9A46]"
                    onClick={openTranslationPopup}
                  >
                    <IoLanguage /> Translation
                  </button>
                  <button
                    className="flex gap-1 items-center text-[#CC9A46]"
                    onClick={openAuctionGradePopup}
                  >
                    <IoMdInformationCircleOutline /> Auction Guide
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-2">
                <p className="flex gap-2 items-center">
                  <PiCarProfile size={20} className="flex-shrink-0" />
                  {cardData.exteriorColor.split("#")[0]}
                </p>
                <p className="flex gap-2 items-center">
                  <PiCalendarDots size={20} className="flex-shrink-0" />
                  {cardData.registerDate}
                </p>
                <p className="flex gap-2 items-center">
                  <img src={Engine} alt="engine" className="flex-shrink-0" />
                  {cardData.enginePower.toLocaleString()} cc
                </p>
                <p className="flex gap-2 items-center">
                  <TbRoad size={20} className="flex-shrink-0" />
                  {cardData.milleage.toLocaleString()} km
                </p>
                <p className="flex gap-2 items-center">
                  <PiGasCan size={20} className="flex-shrink-0" />
                  {cardData.fuelType}
                </p>
                <p className="flex gap-2 items-center">
                  <PiStar size={20} className="flex-shrink-0" />
                  {cardData.rating}
                </p>
                <p className="flex gap-2 items-center">
                  <MdAirlineSeatReclineNormal
                    size={20}
                    className="flex-shrink-0"
                  />
                  {cardData.seats} Seater
                </p>
                <p className="flex gap-2 items-center">
                  <PiGearFine size={20} className="flex-shrink-0" />
                  {cardData.extraParts}
                </p>
                <p className="flex gap-2 items-center">
                  <MdInsertPhoto className="flex-shrink-0" />
                  {cardData.picturesBaseDate}
                </p>
                <p className="flex gap-2 items-center">
                  <IoMdPhotos className="flex-shrink-0" />
                  {cardData.picturesExtraDate}
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row w-full gap-4">
              <div className="flex flex-col align-top w-full border rounded-md py-6 px-4 gap-4 shadow-sm flex-grow-0">
                <p className="font-bold text-lg">Certificate</p>
                <div>
                  <img
                    src={Certificate}
                    alt="certificate"
                    className="h-24 w-auto object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full border rounded-md py-6 px-4 gap-4 shadow-sm">
                <p className="font-bold text-lg">Parcel</p>
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between">
                    <p className={labelClass}>EC:</p>
                    <p>{cardData.ec}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className={labelClass}>Tracking Number:</p>
                    <p>{cardData.trackingNumber}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className={labelClass}>Sent Date:</p>
                    <p>{cardData.soldDate}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className={labelClass}>Customer:</p>
                    <p>{cardData.customer}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2 flex flex-col gap-4">
            <div className="flex flex-col border rounded-md py-6 px-4 gap-4 shadow-sm">
              <div className="head flex flex-col gap-1 text-right">
                <p className="text-[#CC9A46]">
                  <span className="text-4xl font-bold">
                    ¥{cardData.price.toLocaleString()}
                  </span>{" "}
                  CIF
                </p>
                <p>$9,327 UK VAT Duty Paid!</p>
              </div>
              <hr />
              <div className="flex flex-col gap-3">
                <div className="flex justify-between">
                  <p className={labelClass}>Sold Date:</p>
                  <p>{cardData.soldDate}</p>
                </div>
                <div className="flex justify-between">
                  <p className={labelClass}>ETY:</p>
                  <p>{cardData.soldDate}</p>
                </div>
                <div className="flex justify-between">
                  <p className={labelClass}>Vessel:</p>
                  <p>
                    {cardData.vessel}, {cardData.yardArea}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className={labelClass}>From:</p>
                  <p>
                    {cardData.vesselFrom}, {cardData.soldDate}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className={labelClass}>To:</p>
                  <p>
                    {cardData.vesselTo}, {cardData.soldDate}
                  </p>
                </div>
              </div>
            </div>
            <CommentBox />
            <SalesCommentBox />
          </div>
          <div className="col-3 flex flex-col gap-4">
            <div className="flex flex-col gap-4 bg-gray-100 p-4 rounded-md border border-gray-300">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <p className="text-lg font-bold text-blue-950">
                    {cardData.customer}
                  </p>
                  <p className="flex items-center gap-2 border border-gray-400 rounded-md px-2">
                    <RiCarLine />
                    Sold
                  </p>
                </div>
                <p className="text-gray-500 text-sm">
                  Sold Date:{" "}
                  <span className="font-semibold text-blue-950">
                    {cardData.soldDate}
                  </span>
                </p>
              </div>

              <SupplierInfo />
            </div>
          </div>
        </div>
      </div>

      <Popup
        isOpen={isTranslationPopupOpen}
        onClose={closeTranslationPopup}
        title="Translation"
        customClass="m-2 w-1/3"
        content={
          <>
            <p className="">
              Left mirror cover has some touch up marks <br /> Front window has
              some cracks Body has some scratches and dents
              <br /> Audio doesn't work well
              <br />
              Push start
              <br /> Standard alloy wheels
              <br /> HID head lamps Fog lamps
              <br /> Trade in vehicle Interior has some scratches
            </p>
          </>
        }
      />
      <Popup
        isOpen={isAuctionGradePopupOpen}
        onClose={closeAuctionGradePopup}
        title="Auction Grade"
        customClass="m-2 w-auto h-screen md:h-auto overflow-y-scroll"
        content={
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col gap-2 border rounded-md px-3 py-1">
              <p className="text-lg font-medium mb-2">
                Marks on Vehicle diagram
              </p>

              <div className="flex">
                <p className={`w-24`}>A</p>
                <p className="w-full md:w-80">Scratch</p>
              </div>
              <div className="flex">
                <p className={`w-24`}>B</p>
                <p className="w-full md:w-80">
                  Dent & Scratch - repair required
                </p>
              </div>
              <div className="flex">
                <p className={`w-24`}>C</p>
                <p className="w-full md:w-80">Corrosion</p>
              </div>
              <div className="flex">
                <p className={`w-24`}>E</p>
                <p className="w-full md:w-80">Dimple</p>
              </div>
              <div className="flex">
                <p className={`w-24`}>H</p>
                <p className="w-full md:w-80">Paint faded</p>
              </div>
              <div className="flex">
                <p className={`w-24`}>O/F</p>
                <p className="w-full md:w-80">Overfender</p>
              </div>
              <div className="flex">
                <p className={`w-24`}>P</p>
                <p className="w-full md:w-80">
                  Paint problems (paint faded / touch pen / paint spray)
                </p>
              </div>
              <div className="flex">
                <p className={`w-24`}>Pアセ</p>
                <p className="w-full md:w-80">Paint dull</p>
              </div>
              <div className="flex">
                <p className={`w-24`}>Pハゲ</p>
                <p className="w-full md:w-80">Paint faded</p>
              </div>
              <div className="flex">
                <p className={`w-24`}>S</p>
                <p className="w-full md:w-80">Rust</p>
              </div>
              <div className="flex">
                <p className={`w-24`}>U</p>
                <p className="w-full md:w-80">Dent</p>
              </div>
              <div className="flex">
                <p className={`w-24`}>多</p>
                <p className="w-full md:w-80">
                  Many, for example: U1多 many small dents
                </p>
              </div>
              <div className="flex">
                <p className={`w-24`}>W</p>
                <p className="w-full md:w-80">Paint wavy / repainted marks</p>
              </div>
              <div className="flex">
                <p className={`w-24`}>X</p>
                <p className="w-full md:w-80">Needs replacing</p>
              </div>
              <div className="flex">
                <p className={`w-24`}>XX</p>
                <p className="w-full md:w-80">Replaced</p>
              </div>
              <div className="flex">
                <p className={`w-24`}>Y</p>
                <p className="w-full md:w-80">Crack</p>
              </div>
              <div className="flex">
                <p className={`w-24`}>不良</p>
                <p className="w-full md:w-80">
                  Not working, for example: P/W不良 Power window(s) not working{" "}
                </p>
              </div>
              <div className="flex">
                <p className={`w-24`}>コゲ</p>
                <p className="w-full md:w-80">Cig burn</p>
              </div>
              <div className="flex">
                <p className={`w-24`}>穴</p>
                <p className="w-full md:w-80">Hole or Missing</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2 border rounded-md px-3 py-1">
                <p className="text-lg font-medium mb-2">
                  Speedometer / Mileage
                </p>

                <div className="flex">
                  <p className={`w-24`}>$</p>
                  <p className="w-full md:w-80">Documented speedo change</p>
                </div>
                <div className="flex">
                  <p className={`w-24`}>*</p>
                  <p className="w-full md:w-80">
                    Mileage unwarranted / undocumented speedo change
                  </p>
                </div>
                <div className="flex">
                  <p className={`w-24`}>#</p>
                  <p className="w-full md:w-80">Mileage unknown</p>
                </div>
                <div className="flex">
                  <p className={`w-24`}>Km</p>
                  <p className="w-full md:w-80">Km</p>
                </div>
                <div className="flex">
                  <p className={`w-24`}>キロ</p>
                  <p className="w-full md:w-80">Km</p>
                </div>
                <div className="flex">
                  <p className={`w-24`}>マイル</p>
                  <p className="w-full md:w-80">Miles</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 border rounded-md px-3 py-1">
                <p className="text-lg font-medium mb-2">Window / Glass</p>

                <div className="flex">
                  <p className={`w-24`}>G</p>
                  <p className="w-full md:w-80">
                    Front screen stone chip / small crack
                  </p>
                </div>
                <div className="flex">
                  <p className={`w-24`}>トビA</p>
                  <p className="w-full md:w-80">Stone chip / scratch</p>
                </div>
                <div className="flex">
                  <p className={`w-24`}>ヒビ</p>
                  <p className="w-full md:w-80">Crack</p>
                </div>
                <div className="flex">
                  <p className={`w-24`}>ワレ</p>
                  <p className="w-full md:w-80">Crack</p>
                </div>
                <div className="flex w-full md:w-96 text-sm mt-2">
                  Numbers from 1 - 4 after the letters above indicate degree of
                  damage. For example A1 indicates a small scratch, U3 indicates
                  a big dent.
                </div>
              </div>
            </div>

            <div className="flex flex-col h-fit gap-2 border rounded-md px-3 py-1">
              <p className="text-lg font-medium mb-2">Vehicle Body / Type</p>

              <div className="flex">
                <p className={`w-24`}>2D</p>
                <p className="w-full md:w-40">2 door</p>
              </div>
              <div className="flex">
                <p className={`w-24`}>4D</p>
                <p className="w-full md:w-40">4 door</p>
              </div>
              <div className="flex">
                <p className={`w-24`}>5D</p>
                <p className="w-full md:w-40">5 door</p>
              </div>
              <div className="flex">
                <p className={`w-24`}>CP</p>
                <p className="w-full md:w-40">Coupe</p>
              </div>
              <div className="flex">
                <p className={`w-24`}>HB</p>
                <p className="w-full md:w-40">Hatchback</p>
              </div>
              <div className="flex">
                <p className={`w-24`}>HT</p>
                <p className="w-full md:w-40">Hardtop</p>
              </div>
              <div className="flex">
                <p className={`w-24`}>SD</p>
                <p className="w-full md:w-40">Sedan</p>
              </div>
              <div className="flex">
                <p className={`w-24`}>SW</p>
                <p className="w-full md:w-40">Station Wagonr</p>
              </div>
              <div className="flex">
                <p className={`w-24`}>V</p>
                <p className="w-full md:w-40">Van</p>
              </div>
              <div className="flex">
                <p className={`w-24`}>W</p>
                <p className="w-full md:w-40">Wagon</p>
              </div>
            </div>

            <div className="flex flex-col h-fit gap-2 border rounded-md px-3 py-1">
              <p className="text-lg font-medium mb-2">Standard Specification</p>

              <div className="flex">
                <p className={`w-24`}>AAC</p>
                <p className="w-full md:w-40">Auto Aircon</p>
              </div>
              <div className="flex">
                <p className={`w-24`}>AC</p>
                <p className="w-full md:w-40">Aircon</p>
              </div>
              <div className="flex">
                <p className={`w-24`}>W</p>
                <p className="w-full md:w-40">Double / Twin</p>
              </div>
              <div className="flex">
                <p className={`w-24`}>WAC</p>
                <p className="w-full md:w-40">Twin Aircon</p>
              </div>
              <div className="flex">
                <p className={`w-24`}>AW</p>
                <p className="w-full md:w-40">Alloy Wheels</p>
              </div>
              <div className="flex">
                <p className={`w-24`}>PS</p>
                <p className="w-full md:w-40">Power Steering</p>
              </div>
              <div className="flex">
                <p className={`w-24`}>PW</p>
                <p className="w-full md:w-40">Power Windows</p>
              </div>
              <div className="flex">
                <p className={`w-24`}>SR</p>
                <p className="w-full md:w-40">Sunroof</p>
              </div>
              <div className="flex">
                <p className={`w-24`}>カワ</p>
                <p className="w-full md:w-40">Leather</p>
              </div>
              <div className="flex">
                <p className={`w-24`}>本革</p>
                <p className="w-full md:w-40">Leather</p>
              </div>
              <div className="flex">
                <p className={`w-24`}>AB</p>
                <p className="w-full md:w-40">Airbag</p>
              </div>
              <div className="flex">
                <p className={`w-24`}>エアB</p>
                <p className="w-full md:w-40">Airbag</p>
              </div>
              <div className="flex">
                <p className={`w-24`}>TV</p>
                <p className="w-full md:w-40">Television</p>
              </div>
              <div className="flex">
                <p className={`w-24`}>ナビ</p>
                <p className="w-full md:w-40">Navigation</p>
              </div>
              <div className="flex">
                <p className={`w-24`}>R スポ</p>
                <p className="w-full md:w-40">Rear Spoiler</p>
              </div>
              <div className="flex">
                <p className={`w-24`}>純 AW</p>
                <p className="w-full md:w-40">Standard Alloys</p>
              </div>
            </div>
          </div>
        }
      />
    </>
  );
};

export default AdminCarStockDetails;
