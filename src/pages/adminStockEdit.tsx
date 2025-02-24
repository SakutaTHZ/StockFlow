import { Link, useLocation, useNavigate } from "react-router-dom";
import CNetAdminNav from "../components/CNetAdminNav";
import { CarData } from "../data/types";
import { FaChevronDown} from "react-icons/fa";
import {
  MdOutlineRemoveRedEye,
  MdAirlineSeatReclineNormal,
  MdInsertPhoto,
  MdModeEditOutline,
  MdCalendarMonth,
} from "react-icons/md";
import {
  PiCalendarDots,
  PiCarProfile,
  PiGasCan,
  PiGearFine,
  PiStar,
} from "react-icons/pi";
import { TbRoad } from "react-icons/tb";
import {
  IoMdInformationCircleOutline,
  IoMdPhotos,
} from "react-icons/io";
import { RiCarLine} from "react-icons/ri";
import { useEffect, useState } from "react";
import {IoClose, IoLanguage } from "react-icons/io5";
import Popup from "../components/Popup";

import Transmission from "../assets/transmission.png";
import Engine from "../assets/EnginePower.svg";
import Certificate from "../assets/images/certificate.png";
import Vin from "../assets/vin.svg";
import DropDown from "../components/DropDown";
import {
  carNames,
  carTypes,
  descriptions,
  extraCost,
  promotionText,
  published,
  types,
  visibility,
  yards,
} from "../data/generateData";
// import { carAtom } from "../data/atoms";
// import { useAtom } from "jotai";
import YardTaskBox from "../components/adminComponents/YardTaskBox";
import BuyingTaskBox from "../components/adminComponents/BuyingTaskBox";
import { FaArrowLeftLong } from "react-icons/fa6";

interface DetailsProps {
  customClass?: string;
}

interface LocationState {
  card: CarData;
  cars: CarData[];
}

const colClass = `border p-2 px-4 text-left`;
const labelClass = `text-gray-500`;

const AdminStockEdit: React.FC<DetailsProps> = () => {
  const location = useLocation();
  const cardData = (location.state as LocationState)?.card;

  useEffect(() => {
    document.title = `${cardData.id.substring(1)}`;
  }, [cardData.id]);

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

  const navigate = useNavigate();

//   const [cars] = useAtom(carAtom);

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
              <button className="cursor">
                <MdModeEditOutline
                  size={18}
                  onClick={() => setEditMode((prevMode) => !prevMode)}
                />
              </button>
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
              <button className="cursor">
                <MdModeEditOutline
                  size={18}
                  onClick={() => setEditMode((prevMode) => !prevMode)}
                />
              </button>
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
                <button className="cursor">
                  <MdModeEditOutline
                    size={18}
                    onClick={() => setEditMode((prevMode) => !prevMode)}
                  />
                </button>
              )}
              {collapse ? (
                <button className="cursor">
                  <FaChevronDown
                    className="rotate transition-all"
                    onClick={() => setCollapse((prevMode) => !prevMode)}
                  />
                </button>
              ) : (
                <button className="cursor">
                  <FaChevronDown
                    className="rotate-180 transition-all"
                    onClick={() => setCollapse((prevMode) => !prevMode)}
                  />
                </button>
              )}
            </div>
          </div>

          {!collapse && (
            <div className="body mt-4">
              {editMode ? (
                <div>
                  <>
                    <div className="flex flex-col gap-3 py-2">
                      <div className="flex justify-between">
                        <p className={labelClass}>Auction Name:</p>
                        <p className="font-semibold text-blue-950">
                          <DropDown
                            options={yards}
                            selected={cardData.vesselFrom}
                            optionBoxClass="md:w-fit right-0 z-50"
                            buttonClass=""
                          />
                        </p>
                      </div>

                      <div className="flex justify-between">
                        <p className={labelClass}>Bought Date:</p>
                        <p className="border px-2 flex gap-2 items-center rounded-md shadow-sm font-semibold text-blue-950">
                          {cardData.sentDate}
                          <MdCalendarMonth />
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <p className={labelClass}>Bought Car Cost:</p>
                        <p className="font-semibold text-blue-950">
                          ¥ {cardData.auctionFee.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <hr />

                    <div className="flex flex-col gap-3 py-2">
                      <div className="flex justify-between">
                        <p className={labelClass}>Auction Number/Lot Number:</p>
                        <p className="font-semibold text-blue-950">
                          {cardData.auctionNumber}/{cardData.lotNumber}
                        </p>
                      </div>

                      <div className="flex justify-between">
                        <p className={labelClass}>Auction Fee:</p>
                        <p className="font-semibold text-blue-950">
                          ¥ {cardData.auctionFee.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <hr />

                    <div className="flex flex-col gap-3 py-2">
                      <div className="flex justify-between">
                        <p className={labelClass}>Transporter Name:</p>
                        <p className="font-semibold text-blue-950">
                          {cardData.yardArea} (Standard)
                        </p>
                      </div>

                      <div className="flex justify-between">
                        <p className={labelClass}>Trans Date:</p>
                        <p className="font-semibold text-blue-950">
                          {cardData.soldDate}
                        </p>
                      </div>

                      <div className="flex justify-between">
                        <p className={labelClass}>Inland Cost:</p>
                        <p className="font-semibold text-blue-950">
                          ¥ {cardData.inlandCost.toLocaleString()}
                        </p>
                      </div>

                      <div className="flex justify-between">
                        <p className={labelClass}>Total Inland Cost:</p>
                        <p className="font-semibold text-blue-950">
                          ¥ {cardData.totalInlandCost.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="flex flex-col gap-3 py-2">
                      <div className="flex justify-between">
                        <p className={labelClass}>Transporter Deal:</p>
                        <p className="font-semibold text-blue-950">
                          <DropDown
                            options={yards}
                            selected={cardData.yardArea}
                            optionBoxClass="md:w-fit right-0 z-50"
                            buttonClass=""
                          />
                        </p>
                      </div>
                    </div>
                    <hr />

                    <div className="flex flex-col gap-3 py-2">
                      <div className="flex justify-between">
                        <p className={labelClass}>Shipping Yard:</p>
                        <p className="font-semibold text-blue-950">
                          {cardData.yardArea}
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <p className={labelClass}>ETY:</p>
                        <p className="border px-2 flex gap-2 items-center rounded-md shadow-sm font-semibold text-blue-950">
                          {cardData.sentDate}
                          <MdCalendarMonth />
                        </p>
                      </div>

                      <div className="flex justify-between">
                        <p className={labelClass}>Shipping Yard Cost:</p>
                        <p className="font-semibold text-blue-950">
                          ¥ {cardData.shippingYardCost.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <hr />

                    <div className="flex flex-col gap-3 py-2">
                      <div className="flex justify-between">
                        <p className={labelClass}>Est. extra Cost:</p>
                        <p className="font-semibold text-blue-950">
                          ¥ {cardData.extraCost.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <hr />

                    <div className="flex flex-col gap-3 py-2">
                      <div className="flex justify-between">
                        <p className={labelClass}>FOB:</p>
                        <p className="font-bold text-blue-950">
                          ¥{" "}
                          {(
                            cardData.extraCost +
                            cardData.shippingYardCost +
                            cardData.totalInlandCost +
                            cardData.auctionFee +
                            cardData.auctionFee
                          ).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </>
                </div>
              ) : (
                <>
                  <div className="flex flex-col gap-3 py-2">
                    <div className="flex justify-between">
                      <p className={labelClass}>Auction Name:</p>
                      <p className="font-semibold text-blue-950">
                        {cardData.vesselFrom}
                      </p>
                    </div>

                    <div className="flex justify-between">
                      <p className={labelClass}>Bought Date:</p>
                      <p className="font-semibold text-blue-950">
                        {cardData.sentDate}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className={labelClass}>Bought Car Cost:</p>
                      <p className="font-semibold text-blue-950">
                        ¥ {cardData.auctionFee.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <hr />

                  <div className="flex flex-col gap-3 py-2">
                    <div className="flex justify-between">
                      <p className={labelClass}>Auction Number/Lot Number:</p>
                      <p className="font-semibold text-blue-950">
                        {cardData.auctionNumber}/{cardData.lotNumber}
                      </p>
                    </div>

                    <div className="flex justify-between">
                      <p className={labelClass}>Auction Fee:</p>
                      <p className="font-semibold text-blue-950">
                        ¥ {cardData.auctionFee.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <hr />

                  <div className="flex flex-col gap-3 py-2">
                    <div className="flex justify-between">
                      <p className={labelClass}>Transporter Name:</p>
                      <p className="font-semibold text-blue-950">
                        {cardData.yardArea} (Standard)
                      </p>
                    </div>

                    <div className="flex justify-between">
                      <p className={labelClass}>Trans Date:</p>
                      <p className="font-semibold text-blue-950">
                        {cardData.soldDate}
                      </p>
                    </div>

                    <div className="flex justify-between">
                      <p className={labelClass}>Inland Cost:</p>
                      <p className="font-semibold text-blue-950">
                        ¥ {cardData.inlandCost.toLocaleString()}
                      </p>
                    </div>

                    <div className="flex justify-between">
                      <p className={labelClass}>Total Inland Cost:</p>
                      <p className="font-semibold text-blue-950">
                        ¥ {cardData.totalInlandCost.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="flex flex-col gap-3 py-2">
                    <div className="flex justify-between">
                      <p className={labelClass}>Transporter Deal:</p>
                      <p className="font-semibold text-blue-950">
                        {cardData.yardArea}
                      </p>
                    </div>
                  </div>
                  <hr />

                  <div className="flex flex-col gap-3 py-2">
                    <div className="flex justify-between">
                      <p className={labelClass}>Shipping Yard:</p>
                      <p className="font-semibold text-blue-950">
                        {cardData.yardArea}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className={labelClass}>ETY:</p>
                      <p className="font-semibold text-blue-950">
                        {cardData.sentDate}
                      </p>
                    </div>

                    <div className="flex justify-between">
                      <p className={labelClass}>Shipping Yard Cost:</p>
                      <p className="font-semibold text-blue-950">
                        ¥ {cardData.shippingYardCost.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <hr />

                  <div className="flex flex-col gap-3 py-2">
                    <div className="flex justify-between">
                      <p className={labelClass}>Est. extra Cost:</p>
                      <p className="font-semibold text-blue-950">
                        ¥ {cardData.extraCost.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <hr />

                  <div className="flex flex-col gap-3 py-2">
                    <div className="flex justify-between">
                      <p className={labelClass}>FOB:</p>
                      <p className="font-bold text-blue-950">
                        ¥{" "}
                        {(
                          cardData.extraCost +
                          cardData.shippingYardCost +
                          cardData.totalInlandCost +
                          cardData.auctionFee +
                          cardData.auctionFee
                        ).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}

          {editMode && !collapse && (
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
  const PaymentsInfo = () => {
    const [editMode, setEditMode] = useState(false);
    const [collapse, setCollapse] = useState(false);

    return (
      <>
        <div className="border p-4 rounded-md bg-white">
          <div className="head flex justify-between items-center">
            <p className="font-bold text-xl">Payments (HM23S)</p>
            <div className="flex gap-4">
              {!editMode && (
                <button className="cursor">
                  <MdModeEditOutline
                    size={18}
                    onClick={() => setEditMode((prevMode) => !prevMode)}
                  />
                </button>
              )}
              {collapse ? (
                <button className="cursor">
                  <FaChevronDown
                    className="rotate transition-all"
                    onClick={() => setCollapse((prevMode) => !prevMode)}
                  />
                </button>
              ) : (
                <button className="cursor">
                  <FaChevronDown
                    className="rotate-180 transition-all"
                    onClick={() => setCollapse((prevMode) => !prevMode)}
                  />
                </button>
              )}
            </div>
          </div>

          {!collapse && (
            <div className="body mt-4">
              {editMode ? (
                <>
                  <div className="flex flex-col gap-3 py-2">
                    <div className="flex justify-between gap-2">
                      <p className={`w-1/3 text-blue-500`}>Consignee:</p>

                      <DropDown
                        options={yards}
                        selected={cardData.vesselFrom}
                        optionBoxClass="md:w-fit right-0 z-50"
                        buttonClass=""
                      />
                    </div>

                    <div className="flex justify-between gap-2">
                      <p className={`w-1/3 ${labelClass}`}>Sze: (L x W x H)</p>
                      <p className="font-semibold text-blue-950">
                        {cardData.size.toLocaleString()} m<sup>2</sup> (
                        {cardData.length.toLocaleString()} x{" "}
                        {cardData.width.toLocaleString()} x{" "}
                        {cardData.height.toLocaleString()})
                      </p>
                    </div>
                    <div className="flex justify-between gap-2">
                      <p className={`w-1/3 ${labelClass}`}>Deposit:</p>
                      <input
                        type="text"
                        placeholder="¥ 0"
                        className="w-1/3 px-2 border rounded-md shadow-sm"
                      />
                    </div>
                    <div className="flex justify-between gap-2">
                      <p className={`w-1/3 ${labelClass}`}>Container:</p>

                      <DropDown
                        options={yards}
                        selected={"No Container"}
                        optionBoxClass="md:w-fit lg:w-fit right-0 z-50"
                        buttonClass=""
                      />
                    </div>
                    <div className="flex justify-between gap-2">
                      <p className={`w-1/3 ${labelClass}`}>Payment Deal:</p>
                      <DropDown
                        options={promotionText}
                        selected={"No Payment Deal"}
                        optionBoxClass="md:w-fit lg:w-fit right-0 z-50"
                        buttonClass="w-fit"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col gap-3 py-2">
                    <div className="flex justify-between">
                      <p className={`text-blue-600`}>Consignee:</p>
                    </div>

                    <div className="flex justify-between">
                      <p className={labelClass}>Sze: (L x W x H)</p>
                      <p className="font-semibold text-blue-950">
                        {cardData.size.toLocaleString()} m<sup>2</sup> (
                        {cardData.length.toLocaleString()} x{" "}
                        {cardData.width.toLocaleString()} x{" "}
                        {cardData.height.toLocaleString()})
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className={labelClass}>Deposit:</p>
                      <p className="font-semibold text-blue-950">¥ 0</p>
                    </div>
                    <div className="flex justify-between">
                      <p className={labelClass}>Container:</p>
                      <p className="font-semibold text-blue-950"></p>
                    </div>
                    <div className="flex justify-between">
                      <p className={labelClass}>Payment Deal:</p>
                      <p className="font-semibold text-blue-950"></p>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}

          {editMode && !collapse && (
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
  const CalculatedCostsInfo = () => {
    const [editMode, setEditMode] = useState(false);
    const [collapse, setCollapse] = useState(false);

    return (
      <>
        <div className="border p-4 rounded-md bg-white">
          <div className="head flex justify-between items-center">
            <p className="font-bold text-xl">Calculated Costs</p>
            <div className="flex gap-4">
              {!editMode && (
                <button className="cursor">
                  <MdModeEditOutline
                    size={18}
                    onClick={() => setEditMode((prevMode) => !prevMode)}
                  />
                </button>
              )}
              {collapse ? (
                <button className="cursor">
                  <FaChevronDown
                    className="rotate transition-all"
                    onClick={() => setCollapse((prevMode) => !prevMode)}
                  />
                </button>
              ) : (
                <button className="cursor">
                  <FaChevronDown
                    className="rotate-180 transition-all"
                    onClick={() => setCollapse((prevMode) => !prevMode)}
                  />
                </button>
              )}
            </div>
          </div>

          {!collapse && (
            <div className="body mt-4">
              {editMode ? (
                <>
                  <div className="relative flex flex-col gap-3 py-2">
                    <div className="flex justify-between">
                      <p className={`text-nowrap w-1/2 ` + labelClass}>
                        Days in UK:
                      </p>
                      <div className="flex items-center justify-start gap-2 w-1/2">
                        <input type="text" className="border px-2 rounded-md" />
                        <p>{"   "}</p>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <p className={`text-nowrap w-1/2 ` + labelClass}>
                        C-Net Price Est:
                      </p>
                      <div className="flex items-center justify-start gap-2 w-1/2">
                        <input
                          type="text"
                          className="border px-2 rounded-md w-full"
                        />
                        <p>JPY</p>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <p className={`text-nowrap w-1/2 ` + labelClass}>
                        Claims:
                      </p>
                      <div className="flex items-center justify-end gap-2 w-1/2">
                        <input
                          type="text"
                          className="border px-2 rounded-md w-full"
                        />
                        <p>JPY</p>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <p className={`text-nowrap w-1/2 ` + labelClass}>
                        Discounts:
                      </p>
                      <div className="flex items-center justify-end gap-2 w-1/2">
                        <input
                          type="text"
                          className="border px-2 rounded-md w-full"
                        />
                        <p>JPY</p>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <p className={`text-nowrap w-1/2 ` + labelClass}>
                        Actual Freights:
                      </p>
                      <div className="flex items-center justify-end gap-2 w-1/2">
                        <input
                          type="text"
                          className="border px-2 rounded-md w-full"
                        />
                        <p>GBP</p>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <p className={`text-nowrap w-1/2 ` + labelClass}>Duty:</p>
                      <div className="flex items-center justify-end gap-2 w-1/2">
                        <input
                          type="text"
                          className="border px-2 rounded-md w-full"
                        />
                        <p>GBP</p>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <p className={`text-nowrap w-1/2 ` + labelClass}>THC:</p>
                      <div className="flex items-center justify-end gap-2 w-1/2">
                        <input
                          type="text"
                          className="border px-2 rounded-md w-full"
                        />
                        <p>GBP</p>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <p className={`text-nowrap w-1/2 ` + labelClass}>
                        SLC Docs:
                      </p>
                      <div className="flex items-center justify-end gap-2 w-1/2">
                        <input
                          type="text"
                          className="border px-2 rounded-md w-full"
                        />
                        <p>GBP</p>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <p className={`text-nowrap w-1/2 ` + labelClass}>
                        Clearence:
                      </p>
                      <div className="flex items-center justify-end gap-2 w-1/2">
                        <input
                          type="text"
                          className="border px-2 rounded-md w-full"
                        />
                        <p>GBP</p>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <p className={`text-nowrap w-1/2 ` + labelClass}>
                        Entry VAT:
                      </p>
                      <div className="flex items-center justify-end gap-2 w-1/2">
                        <input
                          type="text"
                          className="border px-2 rounded-md w-full"
                        />
                        <p>GBP</p>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <p className={`text-nowrap w-1/2 ` + labelClass}>
                        Other Costs:
                      </p>

                      <div className="flex items-center justify-end gap-2 w-1/2">
                        <input
                          type="text"
                          className="border px-2 rounded-md w-full"
                        />
                        <p>GBP</p>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <p className={`text-nowrap w-1/2 ` + labelClass}>
                        Invoiced Storage:
                      </p>
                      <div className="flex items-center justify-end gap-2 w-1/2">
                        <input
                          type="text"
                          className="border px-2 rounded-md w-full"
                        />
                        <p>GBP</p>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <p className={`text-nowrap w-1/2 ` + labelClass}>
                        Actual Storage:
                      </p>
                      <div className="flex items-center justify-end gap-2 w-1/2">
                        <input
                          type="text"
                          className="border px-2 rounded-md w-full"
                        />
                        <p>GBP</p>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <p className={`text-nowrap w-1/2 ` + labelClass}>
                        Est Sales Price:
                      </p>
                      <div className="flex items-center justify-end gap-2 w-1/2">
                        <input
                          type="text"
                          className="border px-2 rounded-md w-full"
                        />
                        <p>GBP</p>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <p className={`text-nowrap w-1/2 ` + labelClass}>
                        Deal Rate:
                      </p>

                      <div className="flex items-center justify-end gap-2 w-1/2">
                        <input
                          type="text"
                          className="border px-2 rounded-md w-full"
                        />
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <p className={`text-nowrap w-1/2 ` + labelClass}>
                        C-Net JPY:
                      </p>
                      <div className="flex items-center justify-end gap-2 w-1/2">
                        <input
                          type="text"
                          className="border px-2 rounded-md w-full"
                        />
                        <p>JPY</p>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <p className={`text-nowrap w-1/2 ` + labelClass}>
                        Display Landed:
                      </p>
                      <div className="flex items-center justify-end gap-2 w-1/2">
                        <input
                          type="text"
                          className="border px-2 rounded-md w-full"
                        />
                        <p>GBP</p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col gap-3 py-2">
                    <div className="flex justify-between">
                      <p className={labelClass}>EUR</p>
                      <p className="font-semibold text-blue-950">121.81</p>
                    </div>
                    <div className="flex justify-between">
                      <p className={labelClass}>GBP:</p>
                      <p className="font-semibold text-blue-950">186.81</p>
                    </div>
                    <div className="flex justify-between">
                      <p className={labelClass}>KS:</p>
                      <p className="font-semibold text-blue-950">111.09</p>
                    </div>
                    <div className="flex justify-between">
                      <p className={labelClass}>THB:</p>
                      <p className="font-semibold text-blue-950">146.45</p>
                    </div>

                    <div className="flex justify-between">
                      <p className={labelClass}>Arrival Port:</p>
                      <p className="font-semibold text-blue-950"></p>
                    </div>
                    <div className="flex justify-between">
                      <p className={labelClass}>Days in UK:</p>
                      <p className="font-semibold text-blue-950"></p>
                    </div>

                    <div className="flex justify-between">
                      <p className={labelClass}>C-Net Price:</p>
                      <p className="font-semibold text-blue-950">
                        ¥ {cardData.price.toLocaleString()}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className={labelClass}>FOB 90:</p>
                      <p className="font-semibold text-blue-950">
                        ¥{" "}
                        {(cardData.price - cardData.discount).toLocaleString()}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className={labelClass}>Margin 90:</p>
                      <p className="font-semibold text-blue-950">
                        ¥ {cardData.extraCost.toLocaleString()}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className={labelClass}>FOB + MI + Comm:</p>
                      <p className="font-semibold text-blue-950">
                        ¥{" "}
                        {(
                          cardData.extraCost +
                          cardData.shippingYardCost +
                          cardData.totalInlandCost +
                          cardData.auctionFee +
                          cardData.auctionFee
                        ).toLocaleString()}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className={labelClass}>Estimated Stoage:</p>
                      <p className="font-semibold text-blue-950"></p>
                    </div>

                    <div className="flex justify-between">
                      <p className={labelClass}>Invoiced Stoage:</p>
                      <p className="font-semibold text-blue-950"></p>
                    </div>

                    <div className="flex justify-between">
                      <p className={labelClass}>Actual Stoage:</p>
                      <p className="font-semibold text-blue-950"></p>
                    </div>

                    <div className="flex justify-between">
                      <p className={labelClass}>Used Stoage:</p>
                      <p className="font-semibold text-blue-950"></p>
                    </div>
                    <div className="flex justify-between">
                      <p className={labelClass}>C-Net Id:</p>
                      <p className="font-semibold text-blue-950">
                        ¥ {cardData.extraCost.toLocaleString()}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className={labelClass}>C-Net Id/VAT:</p>
                      <p className="font-semibold text-blue-950">
                        ¥ {cardData.extraCost.toLocaleString()}
                      </p>
                    </div>

                    <div className="flex justify-between">
                      <p className={labelClass}>Total Profit 90:</p>
                      <p className="font-semibold text-blue-950"></p>
                    </div>
                    <div className="flex justify-between">
                      <p className={labelClass}>Profit over 90:</p>
                      <p className="font-semibold text-blue-950"></p>
                    </div>
                    <div className="flex justify-between">
                      <p className={labelClass}>Est Sales Price:</p>
                      <p className="font-semibold text-blue-950"></p>
                    </div>
                    <div className="flex justify-between">
                      <p className={labelClass}>Est Profit:</p>
                      <p className="font-semibold text-blue-950">
                        ¥{" -"}
                        {(
                          cardData.price +
                          cardData.extraCost +
                          cardData.shippingYardCost +
                          cardData.totalInlandCost +
                          cardData.auctionFee +
                          cardData.auctionFee
                        ).toLocaleString()}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className={labelClass}>Est Profit over:</p>
                      <p className="font-semibold text-blue-950">
                        ¥{" -"}
                        {(
                          cardData.price +
                          cardData.extraCost +
                          cardData.shippingYardCost +
                          cardData.totalInlandCost +
                          cardData.totalInlandCost +
                          cardData.auctionFee +
                          cardData.auctionFee
                        ).toLocaleString()}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className={labelClass}>C-Net JPY:</p>
                      <p className="font-semibold text-blue-950"></p>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}

          {editMode && !collapse && (
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
  const ExtraCostsInfo = () => {
    const [editMode, setEditMode] = useState(false);
    const [collapse, setCollapse] = useState(false);
    const [extras, setExtras] = useState(() =>
      extraCost.map((type, index) => ({
        Type: type,
        Description: descriptions[index],
        Estimate: Math.round(Math.random() * (999999 - 100000) + 100000),
        Actual: Math.round(Math.random() * (999999 - 100000) + 100000),
      }))
    );

    const [newRow, setNewRow] = useState({
      Type: "",
      Description: "",
      Estimate: 0,
      Actual: 0,
    });

    const handleInputChange = (
      index: number,
      key: string,
      value: string | number
    ) => {
      const updatedExtras = [...extras];
      updatedExtras[index] = { ...updatedExtras[index], [key]: value };
      setExtras(updatedExtras);
    };

    const handleNewRowChange = (key: string, value: string | number) => {
      setNewRow((prev) => ({ ...prev, [key]: value }));
    };

    const handleAddNewRow = () => {
      if (newRow.Type && newRow.Description) {
        setExtras((prev) => [...prev, { ...newRow }]);
        setNewRow({ Type: "", Description: "", Estimate: 0, Actual: 0 });
      }
    };

    const handleDeleteRow = (index: number) => {
      const updatedExtras = extras.filter((_, i) => i !== index);
      setExtras(updatedExtras);
    };

    return (
      <div className="border p-4 rounded-md bg-white">
        <div className="head flex justify-between items-center">
          <p className="font-bold text-xl">Extra Costs</p>
          <div className="flex gap-4">
            {!editMode && (
              <button onClick={() => setEditMode((prevMode) => !prevMode)}>
                <MdModeEditOutline size={18} />
              </button>
            )}
            <button onClick={() => setCollapse((prevMode) => !prevMode)}>
              <FaChevronDown
                className={`transition-all ${collapse ? "" : "rotate-180"}`}
              />
            </button>
          </div>
        </div>

        {!collapse && (
          <div className="body mt-4">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className={`${colClass}`}>Type</th>
                  <th className={`${colClass}`}>Description</th>
                  <th className={`${colClass}`}>Estimate</th>
                  <th className={`${colClass}`}>Actual</th>
                  {editMode && <th className={`${colClass}`}></th>}
                </tr>
              </thead>
              <tbody>
                {extras.map((extra, index) => (
                  <tr
                    key={index}
                    // className={`${index % 2 === 1 && "bg-gray-50"}`}
                  >
                    <td className={`${colClass}`}>
                      {editMode ? (
                        <DropDown
                          options={extraCost}
                          selected={extra.Type}
                          onSelectionChange={(selected) =>
                            handleInputChange(index, "Type", selected)
                          }
                          optionBoxClass="z-50 h-fit"
                        />
                      ) : (
                        <p>{extra.Type}</p>
                      )}
                    </td>
                    <td className={`${colClass}`}>
                      {editMode ? (
                        <input
                          type="text"
                          className="w-full border px-2 rounded-md"
                          value={extra.Description}
                          onChange={(e) =>
                            handleInputChange(
                              index,
                              "Description",
                              e.target.value
                            )
                          }
                        />
                      ) : (
                        <p>{extra.Description}</p>
                      )}
                    </td>
                    <td className={`${colClass}`}>
                      {editMode ? (
                        <input
                          type="number"
                          className="w-full border px-2 rounded-md"
                          value={extra.Estimate}
                          onChange={(e) =>
                            handleInputChange(
                              index,
                              "Estimate",
                              Number(e.target.value)
                            )
                          }
                        />
                      ) : (
                        <>¥ {extra.Estimate.toLocaleString()}</>
                      )}
                    </td>
                    <td className={`${colClass}`}>
                      {editMode ? (
                        <input
                          type="number"
                          className="w-full border px-2 rounded-md"
                          value={extra.Actual}
                          onChange={(e) =>
                            handleInputChange(
                              index,
                              "Actual",
                              Number(e.target.value)
                            )
                          }
                        />
                      ) : (
                        <>¥ {extra.Actual.toLocaleString()}</>
                      )}
                    </td>
                    {editMode && (
                      <td className={`${colClass} text-center`}>
                        <button onClick={() => handleDeleteRow(index)}>
                          <IoClose size={20} />
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
                {editMode && (
                  <tr className="bg-gray-50">
                    <td className={`${colClass}`}>
                      <DropDown
                        options={types}
                        selected={newRow.Type}
                        onSelectionChange={(selected) =>
                          handleNewRowChange("Type", selected)
                        }
                        optionBoxClass="z-50 h-fit"
                      />
                    </td>
                    <td className={`${colClass}`}>
                      <input
                        type="text"
                        className="w-full border px-2 rounded-md"
                        value={newRow.Description}
                        onChange={(e) =>
                          handleNewRowChange("Description", e.target.value)
                        }
                      />
                    </td>
                    <td className={`${colClass}`}>
                      <input
                        type="number"
                        className="w-full border px-2 rounded-md"
                        value={newRow.Estimate}
                        onChange={(e) =>
                          handleNewRowChange("Estimate", Number(e.target.value))
                        }
                      />
                    </td>
                    <td className={`${colClass}`}>
                      <input
                        type="number"
                        className="w-full border px-2 rounded-md"
                        value={newRow.Actual}
                        onChange={(e) =>
                          handleNewRowChange("Actual", Number(e.target.value))
                        }
                      />
                    </td>
                    <td className={`${colClass}`}>
                      <button
                        onClick={handleAddNewRow}
                        className="font-semibold"
                      >
                        Add
                      </button>
                    </td>
                  </tr>
                )}
                <tr className="bg-gray-100">
                  <td colSpan={2} className={`${colClass} font-bold`}>
                    Total
                  </td>
                  <td className={`${colClass} font-semibold text-nowrap`}>
                    ¥{" "}
                    {extras
                      .reduce((sum, item) => sum + item.Estimate, 0)
                      .toLocaleString()}
                  </td>
                  <td className={`${colClass} font-semibold text-nowrap`}>
                    ¥{" "}
                    {extras
                      .reduce((sum, item) => sum + item.Actual, 0)
                      .toLocaleString()}
                  </td>
                  {editMode && <td className={`${colClass}`}></td>}
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {editMode && !collapse && (
          <div className="foot flex gap-4 justify-end mt-4">
            <button
              className="font-semibold py-2 px-4 bg-[#FFC158] hover:bg-[#FFCD79] rounded-md"
              onClick={() => setEditMode(false)}
            >
              Save
            </button>
            <button
              className="font-semibold py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-md"
              onClick={() => setEditMode(false)}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    );
  };

  const goBack = () => {
    navigate(-1); // Redirects to the previous page
  };

  return (
    <>
      <CNetAdminNav breadcrumb={true} />

      <div className="flex flex-col gap-6 px-4 md:px-56 py-8">
        <div className="flex items-center gap-1 font-medium">
          <button className="hidden md:block mr-2 text-gray-500" onClick={goBack}>
            <FaArrowLeftLong size={15}/>
          </button>
          <Link to="/StockFlowAdmin" className="text-gray-500">
            Car stock
          </Link>
          <p className="text-blue-950 font-semibold">/ Stock Edit</p>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col gap-3">
            <p className="text-3xl font-bold flex items-center gap-2 text-blue-950">
              Audi {cardData.name}
            </p>
            <div className="flex items-center gap-4">
                <p className="font-medium text-blue-950 text-nowrap">
                {cardData.package} / {cardData.vim}
                </p>
                
                <DropDown
                options={visibility}
                customClass="fit-width"
                optionClass="w-fit h-fit"
                optionBoxClass="w-fit h-fit right-0 z-50"
                buttonClass="py-1 rounded bg-white"
              />
              <DropDown
                options={published}
                customClass="fit-width"
                optionClass="w-fit h-fit"
                optionBoxClass="w-fit h-fit right-0 z-50"
                buttonClass="py-1 rounded bg-white"
              />
            </div>
          </div>

          <div className="flex items-end gap-2">
            <button className="bg-[#FFC158] hover:bg-[#FFCD79] p-2 px-12 rounded-md font-bold transition-colors">Save</button>
            <button className="bg-gray-100 hover:bg-red-100 text-[#ff5858]  p-2 px-12 rounded-md font-bold transition-colors">Delete</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[2.5fr_1.5fr_1.5fr] gap-4">
          <div className="col-1 flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 border rounded-md shadow-sm">
              <div className="flex flex-col gap-2">
                <p className="font-semibold">Make</p>
                <DropDown
                  options={carNames}
                  selected="Audi"
                  customClass="fit-width"
                  optionClass="w-fit h-fit"
                  optionBoxClass="w-fit h-fit right-0 z-50"
                  buttonClass="py-1 rounded bg-white"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-semibold">Model</p>
                <input type="text" className="px-2 border border-gray-300 h-full rounded-md shadow-sm" placeholder="Model"/>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-semibold">Grade</p>
                <input type="text" className="px-2 border border-gray-300 h-full rounded-md shadow-sm" placeholder="Grade" value={cardData.name}/>
              </div>
              
              <div className="flex flex-col gap-2">
                <p className="font-semibold">Chassis Number</p>
                <input type="text" className="px-2 border border-gray-300 h-full rounded-md shadow-sm min-h-8" placeholder="Grade" value={cardData.vim}/>
              </div>
              
              <div className="flex flex-col gap-2">
                <p className="font-semibold">Stock number</p>
                <input type="text" className="px-2 border border-gray-300 h-full rounded-md shadow-sm min-h-8" placeholder="Grade" value={cardData.id}/>
              </div>
              
              <div className="flex flex-col gap-2">
                <p className="font-semibold">Invoice Number</p>
                <input type="text" className="px-2 border border-gray-300 h-full rounded-md shadow-sm min-h-8" placeholder="Grade" value={cardData.auctionNumber}/>
              </div>
            </div>

            <div className="imagesContainer h-fit relative flex flex-col md:flex-row gap-4">
              {}
              <div className="animate-slideRight mainImage w-full">
                <img
                  src={cardData.image}
                  alt="Main image"
                  className="rounded-lg h-auto md:h-full object-cover"
                />
              </div>

              {}
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

              {}
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

              <div className="flex flex-col">
                <div className="grid grid-cols-2 gap-4 mt-2 mb-3">
                  <p className="flex gap-2 items-center">
                    <PiCarProfile
                      size={20}
                      className="flex-shrink-0  scale-x-[-1]"
                    />
                    {cardData.exteriorColor.split("#")[0]}
                  </p>
                  <p className="flex gap-2 items-center">
                    <img
                      src={Vin}
                      alt="engine"
                      className="brightness-0 flex-shrink-0"
                    />
                    {cardData.vim}
                  </p>
                  <p className="flex gap-2 items-center">
                    <img src={Engine} alt="engine" className="flex-shrink-0" />
                    {cardData.enginePower.toLocaleString()} cc
                  </p>
                  <p className="flex gap-2 items-center">
                    <PiCalendarDots size={20} className="flex-shrink-0" />
                    {cardData.registerDate}
                  </p>
                  <p className="flex gap-2 items-center">
                    <PiGasCan size={20} className="flex-shrink-0" />
                    {cardData.fuelType}
                  </p>
                  <p className="flex gap-2 items-center">
                    <TbRoad size={20} className="flex-shrink-0" />
                    {cardData.milleage.toLocaleString()} km
                  </p>

                  <p className="flex gap-2 items-center">
                    <img
                      src={Transmission}
                      alt="engine"
                      className="flex-shrink-0"
                    />
                    {cardData.transmission}
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
                </div>
                <hr />
                <div className="grid grid-cols-2 gap-4 mt-3">
                  <p className="flex gap-2 items-center">
                    <MdInsertPhoto className="flex-shrink-0" />
                    Base: <span>{cardData.picturesBaseDate}</span>
                  </p>
                  <p className="flex gap-2 items-center">
                    <IoMdPhotos className="flex-shrink-0" />
                    Extra: <span>{cardData.picturesExtraDate}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row w-full gap-4">
              <div className="flex flex-col align-top w-full border rounded-md py-6 px-4 gap-4 shadow-sm flex-grow-0">
                <p className="font-bold text-lg">Export Certificate</p>
                <div>
                  <img
                    src={Certificate}
                    alt="certificate"
                    className="h-24 w-auto object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full border rounded-md py-6 px-4 gap-4 shadow-sm">
                <p className="font-bold text-lg">Parcels</p>
                <div className="flex flex-col gap-3">
                  <div className="flex gap-2">
                    <p>BL :</p>
                    <p>Surrendered</p>
                  </div>
                  <p className="text-base italic text-gray-500">
                    Sent {cardData.soldDate} to {cardData.customer}
                  </p>
                  <hr />
                  <div className="flex gap-2">
                    <p>EC :</p>
                    <p>
                      {cardData.ec} ({cardData.trackingNumber})
                    </p>
                  </div>
                  <p className="text-base italic text-gray-500">
                    Sent {cardData.soldDate} to {cardData.customer}
                  </p>
                </div>
              </div>
            </div>
            <ExtraCostsInfo />
            <div className="flex gap-4">
              <YardTaskBox />
              <BuyingTaskBox />
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
              {cardData.highlightStatus === "Sold" && (
                <div className="flex flex-col gap-3">
                  <hr />
                  <p className="font-bold text-lg">Invoice Breakdown</p>
                  <div className="flex justify-between">
                    <p className={labelClass}>23-JM271</p>
                    <p> ¥{cardData.price.toLocaleString()}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className={labelClass}>23-JM271</p>
                    <p> ¥{cardData.price.toLocaleString()}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className={labelClass}>23-JM271</p>
                    <p className="text-red-500">
                      - ¥{cardData.price.toLocaleString()}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className={labelClass}>X-Rate Diff</p>
                    <p className="font-semibold">
                      ¥{(cardData.price - 500000).toLocaleString()}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className={labelClass}>Total</p>
                    <p className="font-semibold">
                      ¥{(cardData.price + 200000).toLocaleString()}
                    </p>
                  </div>
                </div>
              )}
              <hr />
              <div className="flex flex-col gap-3">
                <div className="flex justify-between">
                  <p className={labelClass}>Sold Date:</p>
                  <p>{cardData.soldDate}</p>
                </div>
                <div className="flex justify-between">
                  <p className={labelClass}>Vessel:</p>
                  <p>
                    {cardData.vessel}, {cardData.yardArea}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className={labelClass}>ETY:</p>
                  <p>{cardData.soldDate}</p>
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
            <div
              className={`flex flex-col gap-4 p-4 rounded-md border border-gray-300 ${
                cardData.highlightStatus === "Sold"
                  ? "bg-gray-100"
                  : "bg-[#E2E8DD]"
              }`}
            >
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <p className="text-lg font-bold text-blue-950">
                    {cardData.customer}
                  </p>
                  {cardData.highlightStatus === "Sold" && (
                    <p className="flex items-center gap-2 border border-gray-400 rounded-md px-2">
                      <RiCarLine />
                      Sold
                    </p>
                  )}
                </div>
                <p className="text-gray-500 text-sm">
                  Sold Date:{" "}
                  <span className="font-semibold text-blue-950">
                    {cardData.soldDate}
                  </span>
                </p>
              </div>

              <SupplierInfo />
              <PaymentsInfo />
              <CalculatedCostsInfo />
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

export default AdminStockEdit;
