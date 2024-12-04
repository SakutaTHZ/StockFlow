// import { useParams } from "react-router-dom";

import { Link, useLocation } from "react-router-dom";
import { CarData } from "../data/types";
import { PiChartLineDownBold } from "react-icons/pi";
import { FaWheelchair } from "react-icons/fa";
import {
  MdOutlineTimer,
  MdOutlineNewReleases,
  MdOutlineRemoveRedEye,
} from "react-icons/md";
import { TbFaceIdError } from "react-icons/tb";
import Hybrid from "../assets/hybrid.png";
import { useState } from "react";
import Gallery from "../components/Gallery";
import { IoLanguage } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";

interface DetailsProps {
  customClass?: string;
}

interface LocationState {
  card: CarData; // Define the expected type for 'card'
  cars: CarData[];
}

const Details: React.FC<DetailsProps> = () => {
  // const { id } = useParams();
  const labelClass = `text-gray-500`;

  const location = useLocation();
  const cardData = (location.state as LocationState)?.card;

  const highlightPill = (status: string) => {
    return status === "Welcab" ? (
      <span
        className={`stat   flex items-center gap-2 text-sm font-semibold  rounded-full px-3 py-1 text-white bg-black bg-opacity-40 ${
          cardData.hold && "hidden"
        }`}
      >
        <FaWheelchair /> {cardData.highlightStatus}
      </span>
    ) : status === "Coming soon" ? (
      <span
        className={`stat   flex items-center gap-2 text-sm font-semibold  rounded-full px-3 py-1 text-white bg-black bg-opacity-40 ${
          cardData.hold && "hidden"
        }`}
      >
        <MdOutlineTimer /> {cardData.highlightStatus}
      </span>
    ) : status === "Hybrid" ? (
      <span
        className={`stat   flex items-center gap-2 text-sm font-semibold  rounded-full px-3 py-1 text-white bg-black bg-opacity-40 ${
          cardData.hold && "hidden"
        }`}
      >
        <img src={Hybrid} alt="Hybrid" /> {cardData.highlightStatus}
      </span>
    ) : status === "Reduced" ? (
      <span
        className={`stat   flex items-center gap-2 text-sm font-semibold rounded-full px-3 py-1 text-red-600 bg-red-200 ${
          cardData.hold && "hidden"
        }`}
      >
        <PiChartLineDownBold /> {cardData.highlightStatus}
      </span>
    ) : status === "New" ? (
      <span
        className={`stat   flex items-center gap-2 text-sm  font-semibold rounded-full px-3 py-1 text-green-800 bg-green-200 ${
          cardData.hold && "hidden"
        }`}
      >
        <MdOutlineNewReleases /> {cardData.highlightStatus}
      </span>
    ) : (
      <span
        className={`stat   flex items-center gap-2 text-sm  font-semibold rounded-full px-3 py-1 text-white bg-black bg-opacity-40 ${
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

  return (
    <div className="flex flex-col gap-6 px-32 py-8">
      {showGallery && (
        <Gallery
          customClass="animate-appear animate-slideUp"
          closeBox={toggleGallery}
        />
      )}
      <div className="flex items-center gap-1 font-medium">
        <Link to="/" className="text-gray-500">
          Car stock
        </Link>
        <p className="text-blue-950 font-semibold">/ Car Details</p>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-3xl font-bold text-blue-950">{cardData.name}</p>
        <p className="font-medium text-blue-950">
          {cardData.package} / {cardData.vim}
        </p>
        <div className="flex gap-2">
          {cardData.highlightStatus != "" && (
            <>{highlightPill(cardData.highlightStatus)}</>
          )}

          <span
            className={`id flex items-center gap-2 text-sm  rounded-full px-3 py-1 text-white bg-black bg-opacity-40 ${
              cardData.hold && "hidden"
            }`}
          >
            {cardData.id}
          </span>
        </div>
      </div>
      <div className="relative w-full grid md:grid-cols-[2.2fr_0.8fr] gap-4">
        <div className="flex flex-col gap-4">
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
            <div className="flex justify-between">
              <p className="font-bold text-lg">Car Details</p>
              <div className="font-semibold flex gap-6">
                <button className="flex gap-1 items-center text-[#CC9A46]">
                <IoLanguage /> Translation
                </button>
                <button className="flex gap-1 items-center text-[#CC9A46]">
                <IoMdInformationCircleOutline /> Auction Guide
                </button>
              </div>
            </div>

            <div>
              <p>{cardData.exteriorColor}</p>
            </div>
          </div>
        </div>

        <div className="DataBox gap-4 flex flex-col">
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
          <div className="flex flex-col border rounded-md py-6 px-4 gap-4 shadow-sm">
            <p className="font-bold text-lg">Comment</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur possimus pariatur autem veritatis reiciendis sapiente
              obcaecati id animi mollitia, asperiores labore dolore iusto fugit
              qui dignissimos officia omnis error. Molestias.
            </p>
          </div>
          <div className="flex flex-col border rounded-md py-6 px-4 gap-4 shadow-sm">
            <p className="font-bold text-lg">Ask Question</p>
            <textarea
              name="askQuestion"
              id="askQuestion"
              placeholder="Enter question"
              rows={3}
              className="border resize-none p-2 py-1 rounded-md"
            ></textarea>

            <button className="flex justify-center items-center gap-2 bg-[#FFC158] py-2 w-full rounded-md font-semibold">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
