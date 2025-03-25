import { Link, useLocation, useNavigate } from "react-router-dom";
import CNetAdminNav from "../components/CNetAdminNav";
import { CarData } from "../data/types";
import { FaChevronDown } from "react-icons/fa";
import {
  // MdOutlineRemoveRedEye,
  // MdAirlineSeatReclineNormal,
  // MdInsertPhoto,
  MdModeEditOutline,
  MdCalendarMonth,
} from "react-icons/md";
// import { PiCalendarDots, PiCarProfile, PiGasCan, PiStar } from "react-icons/pi";
// import { TbRoad } from "react-icons/tb";
// import { IoMdPhotos } from "react-icons/io";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { CgTrash } from "react-icons/cg";

// import Transmission from "../assets/transmission.png";
// import Engine from "../assets/EnginePower.svg";
// import Vin from "../assets/vin.svg";
import DropDown from "../components/DropDown";
import {
  bodyStyle,
  carEngines,
  carNames,
  color,
  currency,
  currentLoaction,
  descriptions,
  distanceUnit,
  doors,
  driveType,
  equipments,
  extraCost,
  FOB,
  // fuelType,
  milleageOption,
  models,
  promotionText,
  published,
  status,
  steering,
  // transmissions,
  types,
  vehicleType,
  visibility,
  yards,
} from "../data/generateData";
// import { carAtom } from "../data/atoms";
// import { useAtom } from "jotai";
import { FaArrowLeftLong } from "react-icons/fa6";
import YardTaskBox from "../components/adminComponents/YardTaskBox";
import BuyingTaskBox from "../components/adminComponents/BuyingTaskBox";
import Gallery from "../components/Gallery";

interface DetailsProps {
  customClass?: string;
}

interface LocationState {
  card: CarData;
  cars: CarData[];
}

const colClass = `border p-2 px-2 text-left`;
const labelClass = `text-gray-500`;

const AdminStockEdit: React.FC<DetailsProps> = () => {
  const location = useLocation();
  const cardData = (location.state as LocationState)?.card;

  useEffect(() => {
    document.title = `${cardData.id.substring(1)}`;
  }, [cardData.id]);

  // const [showGallery, setShowGallery] = useState(false);

  // function toggleGallery() {
  //   setShowGallery(() => !showGallery);
  // }

  const navigate = useNavigate();

  //   const [cars] = useAtom(carAtom);

  const CommentBox = () => {
    const [editMode, setEditMode] = useState(true);
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

          {/* {editMode && (
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
          )} */}
        </div>
      </>
    );
  };
  const SalesCommentBox = () => {
    const [editMode, setEditMode] = useState(true);
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

          {/* {editMode && (
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
          )} */}
        </div>
      </>
    );
  };
  const SupplierInfo = () => {
    const [editMode, setEditMode] = useState(true);
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
                        <p className={labelClass}>Auction Number/<br/> Lot Number:</p>
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
                        <p className="font-semibold text-blue-950 text-right">
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
        </div>
      </>
    );
  };
  const PaymentsInfo = () => {
    const [editMode, setEditMode] = useState(true);
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

          {/* {editMode && !collapse && (
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
          )} */}
        </div>
      </>
    );
  };
  const CalculatedCostsInfo = () => {
    const [editMode, setEditMode] = useState(true);
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
                        <input type="text" className="border px-2 rounded-md w-full" />
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

          {/* {editMode && !collapse && (
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
          )} */}
        </div>
      </>
    );
  };
  const ExtraCostsInfo = () => {
    const [editMode, setEditMode] = useState(true);
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
      <div className="border p-4 rounded-md bg-white overflow-auto">
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
          <div className="body mt-4 w-full">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className={`${colClass}`}>Type</th>
                  <th className={`${colClass} min-w-32`}>Description</th>
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
                          className="w-full  min-w-32 border px-2 rounded-md"
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
                          className="w-full border px-2 rounded-md appearance-none"
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

        {/* {editMode && !collapse && (
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
        )} */}
      </div>
    );
  };

  const goBack = () => {
    navigate(-1); // Redirects to the previous page
  };
  
  const [showGallery, setShowGallery] = useState(false);

  function toggleGallery() {
    setShowGallery(() => !showGallery);
  }

  return (
    <>
      <CNetAdminNav breadcrumb={true} />

      {showGallery && (
        <Gallery
          customClass="animate-appear animate-slideUp"
          closeBox={toggleGallery}
        />
      )}

      <div className="flex flex-col gap-6 px-4 md:px-32 py-8 text-sm w-screen">
        <div className="flex items-center gap-1 font-medium">
          <button
            className="hidden md:block mr-2 text-gray-500"
            onClick={goBack}
          >
            <FaArrowLeftLong size={15} />
          </button>
          <Link to="/StockFlowAdmin" className="text-gray-500">
            Car stock
          </Link>
          <p className="text-blue-950 font-semibold">/ Stock Edit</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="w-full flex flex-col gap-3">
            <p className="text-3xl font-bold flex items-center gap-2 text-blue-950 text-nowrap">
              Audi {cardData.name}
            </p>
            <div className="flex flex-wrap w-full items-center justify-between gap-4">
              <p className="font-medium text-blue-950 text-nowrap">
                {cardData.package} / {cardData.vim}
              </p>

              <div className="flex justify-center gap-2">
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
          </div>

          <div className="flex w-full md:w-fit items-end justify-end gap-2">
            <button
              className="bg-[#FFC158] hover:bg-[#FFCD79] p-2 px-12 rounded-md font-bold transition-colors w-1/3"
              onClick={goBack}
            >
              Save
            </button>
            <button
              className="bg-gray-100 hover:bg-red-100  p-2 px-12 rounded-md font-bold transition-colors w-1/3"
              onClick={goBack}
            >
              Back
            </button>
            <button
              className=" hover:bg-red-50 text-[#AE2E24]  p-2 px-1 rounded-md font-bold transition-colors flex items-center gap-1 w-1/3 md:w-fit"
              onClick={goBack}
            >
              <CgTrash size={16}/>
              Delete
            </button>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-[6fr_2fr_2fr] gap-4">
          {/* Column 1 */}
          <div className="col-1 flex flex-col gap-4">
            <div className="flex flex-wrap md:flex-nowrap gap-2 p-4 border rounded-md shadow-sm">
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
                <input
                  type="text"
                  className="px-2 w-full border border-gray-300 h-full rounded-md shadow-sm"
                  placeholder="Model"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-semibold">Grade</p>
                <input
                  type="text"
                  className="px-2 w-full border border-gray-300 h-full rounded-md shadow-sm"
                  placeholder="Grade"
                  value={cardData.name}
                />
              </div>

              <div className="flex flex-col gap-2">
                <p className="font-semibold text-nowrap">Chassis Number</p>
                <div className="flex gap-1">
                  <input
                    type="text"
                    className="px-2 border border-gray-300 h-full rounded-md shadow-sm min-h-8 w-full"
                    placeholder="Grade"
                    value={cardData.vim}
                  />
                  {"-"}
                  <input
                    type="text"
                    className="px-2 border border-gray-300 h-full rounded-md shadow-sm min-h-8 w-full"
                    placeholder="Grade"
                    value={cardData.vim}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <p className="font-semibold">Stock number</p>
                <input
                  type="text"
                  className="px-2 w-full border border-gray-300 h-full rounded-md shadow-sm min-h-8"
                  placeholder="Grade"
                  value={cardData.id}
                />
              </div>

              <div className="flex flex-col gap-2">
                <p className="font-semibold text-nowrap">Invoice Number</p>
                <input
                  type="text"
                  className="px-2 w-full border border-gray-300 h-full rounded-md shadow-sm min-h-8"
                  placeholder="Grade"
                  value={cardData.auctionNumber}
                />
              </div>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-[35%_64%] gap-2">
              <div className="imagesContainer w-full h-fit relative flex flex-col md:flex-row gap-2 cursor-pointer" onClick={toggleGallery}>
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
                {/* <button
    className="absolute flex gap-2 items-center bg-white bg-opacity-75 hover:bg-opacity-100 shadow-md px-2 py-1 rounded-md right-2 md:right-2 bottom-2 md:bottom-2 transition-all"
    onClick={toggleGallery}
  >
    <MdOutlineRemoveRedEye size={20} />
    <p className="hidden md:block">See All Photos</p>
    <p className="count font-semibold">34</p>
  </button> */}
              </div>

              <div className="flex flex-col gap-2 w-full0">
                {/* Car Details */}
                <div className="flex flex-col border rounded-md py-6 px-4 gap-4 shadow-sm">
                  <div className="flex flex-col">
                    <div className="grid grid-cols-2 gap-4 mt-2 mb-3">
                      {/* First Registration */}
                      <div className="w-full flex flex-col gap-2">
                        <p className="font-semibold">First Registration</p>
                        <div className="w-full flex items-center gap-1">
                          <input
                            className="w-full p-1 border rounded-md border-gray-300"
                            type="text"
                          />
                          {"/"}
                          <DropDown
                            options={distanceUnit}
                            selected="-"
                            customClass="fit-width"
                            optionClass="w-fit h-fit"
                            optionBoxClass="w-fit h-fit right-0 z-50"
                            buttonClass="rounded bg-white py-1"
                          />
                          {"/"}
                          <input
                            className="w-full p-1 border rounded-md border-gray-300"
                            type="text"
                          />
                        </div>
                      </div>
                      {/* Manufactured */}
                      <div className="w-full flex flex-col gap-2">
                        <p className="font-semibold">Manufactured</p>
                        <div className="w-full flex items-center gap-1">
                          <input
                            className="w-full p-1 border rounded-md border-gray-300 bg-gray-50"
                            type="text"
                          />
                          {"-"}
                          <input
                            className="w-full p-1 border rounded-md border-gray-300 bg-gray-50"
                            type="text"
                          />
                        </div>
                      </div>
                      {/* Engine */}
                      <div className="w-full flex flex-col gap-2">
                        <p className="font-semibold">Engine</p>
                        <div className="w-full flex items-center gap-1">
                          <DropDown
                            options={carEngines}
                            selected="-"
                            customClass="fit-width"
                            optionClass="w-fit h-fit"
                            optionBoxClass="w-fit h-fit right-0 z-50"
                            buttonClass="rounded bg-white py-1"
                          />

                          <input
                            className="w-full p-1 border rounded-md border-gray-300 "
                            type="text"
                          />
                          {"cc"}
                          <DropDown
                            options={carEngines}
                            selected="-"
                            customClass="fit-width"
                            optionClass="w-fit h-fit"
                            optionBoxClass="w-fit h-fit right-0 z-50"
                            buttonClass="rounded bg-white py-1"
                          />
                        </div>
                      </div>
                      {/* Mileage */}
                      <div className="w-full flex flex-col gap-2">
                        <p className="font-semibold">Engine</p>
                        <div className="w-full flex items-center gap-1">
                          <input
                            className="w-full p-1 border rounded-md border-gray-300 "
                            type="text"
                          />
                          <DropDown
                            options={carEngines}
                            selected="-"
                            customClass="fit-width"
                            optionClass="w-fit h-fit"
                            optionBoxClass="w-fit h-fit right-0 z-50"
                            buttonClass="rounded bg-white py-1"
                          />
                          <DropDown
                            options={carEngines}
                            selected="-"
                            customClass="fit-width"
                            optionClass="w-fit h-fit"
                            optionBoxClass="w-fit h-fit right-0 z-50"
                            buttonClass="rounded bg-white py-1"
                          />
                        </div>
                      </div>
                      {/* Transmission Color */}
                      <div className="w-full flex gap-4">
                        <div className="w-full flex flex-col gap-2">
                          <p className="font-semibold">Transmission</p>
                          <div className="w-full flex items-center gap-1">
                            <DropDown
                              options={carEngines}
                              selected="-"
                              customClass="fit-width"
                              optionClass="w-fit h-fit"
                              optionBoxClass="w-fit h-fit right-0 z-50"
                              buttonClass="rounded bg-white py-1"
                            />
                          </div>
                        </div>
                        <div className="w-full flex flex-col gap-2">
                          <p className="font-semibold">Color</p>
                          <div className="w-full flex items-center gap-1">
                            <input
                              className="w-full p-1 border rounded-md border-gray-300 "
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                      {/* Auction_Grade Plate */}
                      <div className="w-full flex gap-4">
                        <div className="w-full flex flex-col gap-2">
                          <p className="font-semibold">Auction Grade</p>
                          <div className="w-full flex items-center gap-1">
                            <input
                              className="w-full p-1 border rounded-md border-gray-300 "
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="w-full flex flex-col gap-2">
                          <p className="font-semibold">Plate</p>
                          <div className="w-full flex items-center gap-1">
                            <input
                              className="w-full p-1 border rounded-md border-gray-300 "
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Equipments */}
                <div className="flex flex-col border rounded-md p-4 gap-4 shadow-sm">
                  <p className="font-bold text-lg mt-2">Equipments</p>
                  <div className="grid grid-cols-3 gap-4 mt-3 border p-4 rounded-md">
                    {equipments.length > 0 ? (
                      equipments.map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between cursor-pointer transition-all"
                        >
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              className="form-checkbox h-3 w-3 cursor-pointer"
                            />
                            <span>{item}</span>
                          </label>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-red-500">No results found</p>
                    )}
                  </div>
                </div>

                <ExtraCostsInfo />

                <div className=" w-full flex flex-col gap-4">
                  <YardTaskBox customClass="w-full editTaskBox" />
                  <BuyingTaskBox customClass="w-full editTaskBox" />
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-2 flex flex-col gap-4">
            <div className="flex flex-col border rounded-md py-6 px-4 gap-4 shadow-sm">
              <div className="flex flex-col gap-2">
                <p className="font-semibold">Price</p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    className="px-2 border border-gray-300 h-full rounded-md shadow-sm min-h-8"
                    placeholder="Grade"
                    value={cardData.auctionNumber}
                  />

                  <DropDown
                    options={currency}
                    customClass="fit-width"
                    optionClass="w-fit h-fit"
                    optionBoxClass="w-fit h-fit right-0 z-50"
                    buttonClass="rounded bg-white py-1"
                  />
                  <DropDown
                    options={FOB}
                    customClass="fit-width"
                    optionClass="w-fit h-fit"
                    optionBoxClass="w-fit h-fit right-0 z-50"
                    buttonClass="rounded bg-white py-1"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-semibold">Status</p>
                <div className="flex gap-2">
                  <DropDown
                    options={status}
                    selected={cardData.status}
                    customClass="fit-width"
                    optionClass="w-fit h-fit"
                    optionBoxClass="w-fit h-fit right-0 z-50"
                    buttonClass="rounded bg-white py-1"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-semibold">Location</p>
                <div className="flex gap-2">
                  <DropDown
                    options={currentLoaction}
                    customClass="fit-width"
                    optionClass="w-fit h-fit"
                    optionBoxClass="w-fit h-fit right-0 z-50"
                    buttonClass="rounded bg-white py-1"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-semibold">Arrival Port</p>
                <div className="flex gap-2">
                  <DropDown
                    options={currentLoaction}
                    selected="Southampton"
                    customClass="fit-width"
                    optionClass="w-fit h-fit"
                    optionBoxClass="w-fit h-fit right-0 z-50"
                    buttonClass="rounded bg-white py-1"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-semibold">Translation</p>
                <div className="flex gap-2">
                  <textarea
                    name=""
                    id=""
                    placeholder="Translation here"
                    className="px-2 py-1 border border-gray-300 h-full rounded-md shadow-sm min-h-8 resize-none w-full"
                    rows={6}
                  ></textarea>
                </div>
              </div>
            </div>
            <CommentBox />
            <SalesCommentBox />

            <div className="flex flex-col border rounded-md py-6 px-4 gap-4 shadow-sm">
              <div className="flex flex-col gap-2">
                <p className="font-semibold">Inner cargo</p>
                <div className="flex flex-col gap-2">
                  <textarea
                    name=""
                    id=""
                    className="px-2 py-1 border border-gray-300 h-full rounded-md shadow-sm min-h-8 resize-none w-full"
                    rows={4}
                  ></textarea>

                  <div className="flex justify-between cursor-pointer transition-all">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox h-3 w-3 cursor-pointer"
                      />
                      <span>Publish Images</span>
                    </label>
                  </div>
                </div>
              </div>
              <hr />
              <div className="flex flex-col gap-2">
                <p className="font-semibold">Vehicle type</p>
                <div className="flex flex-col gap-2">
                  <DropDown
                    options={vehicleType}
                    customClass="fit-width"
                    optionClass="w-fit h-fit"
                    optionBoxClass="w-fit h-fit right-0 z-50"
                    buttonClass="rounded bg-white py-1"
                  />

                  <div className="flex justify-between cursor-pointer transition-all">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox h-3 w-3 cursor-pointer"
                      />
                      <span>Roof racks</span>
                    </label>
                  </div>
                </div>
              </div>
              <hr />
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 justify-between">
                  <div className="flex flex-col gap-2 w-full">
                    <p className="font-semibold">Yard Base</p>

                    <input className="px-2 border rounded py-1" type="date" />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <p className="font-semibold">CJP Extra</p>

                    <input className="px-2 border rounded py-1" type="date" />
                  </div>
                </div>

                <div className="flex justify-between cursor-pointer transition-all">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="form-checkbox h-3 w-3 cursor-pointer"
                    />
                    <span>Roof racks</span>
                  </label>
                </div>
              </div>
              <hr />
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 justify-between">
                  <div className="flex flex-col gap-2 w-full">
                    <p className="font-semibold">Nova ID</p>

                    <input className="px-2 border rounded py-1" type="text" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col border rounded-md py-6 px-4 gap-4 shadow-sm">
              <p className="font-bold text-lg">TCV Settings</p>
              <div className="flex gap-4 items-center">
                Accident
                <div className="flex justify-between cursor-pointer transition-all">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="form-checkbox h-3 w-3 cursor-pointer"
                    />
                  </label>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <p className="font-semibold">Mileage Option:</p>
                <DropDown
                  options={milleageOption}
                  selected="-"
                  customClass="fit-width"
                  optionClass="w-fit h-fit"
                  optionBoxClass="w-fit h-fit right-0 z-50"
                  buttonClass="rounded bg-white py-1"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-semibold">Mileage Option:</p>
                <DropDown
                  options={distanceUnit}
                  selected="-"
                  customClass="fit-width"
                  optionClass="w-fit h-fit"
                  optionBoxClass="w-fit h-fit right-0 z-50"
                  buttonClass="rounded bg-white py-1"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-semibold">Exerior Color:</p>
                <DropDown
                  options={color}
                  selected="-"
                  customClass="fit-width"
                  optionClass="w-fit h-fit"
                  optionBoxClass="w-fit h-fit right-0 z-50"
                  buttonClass="rounded bg-white py-1"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-semibold">Interior Color:</p>
                <DropDown
                  options={color}
                  selected="-"
                  customClass="fit-width"
                  optionClass="w-fit h-fit"
                  optionBoxClass="w-fit h-fit right-0 z-50"
                  buttonClass="rounded bg-white py-1"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-semibold">Doors:</p>
                <DropDown
                  options={doors}
                  selected="-"
                  customClass="fit-width"
                  optionClass="w-fit h-fit"
                  optionBoxClass="w-fit h-fit right-0 z-50"
                  buttonClass="rounded bg-white py-1"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-semibold">Body Style:</p>
                <div className="flex flex-col gap-2">
                  <DropDown
                    options={bodyStyle}
                    selected="-"
                    customClass="fit-width"
                    optionClass="w-fit h-fit"
                    optionBoxClass="w-fit h-fit right-0 z-50"
                    buttonClass="rounded bg-white py-1"
                  />
                  <DropDown
                    options={bodyStyle}
                    selected="-"
                    customClass="fit-width"
                    optionClass="w-fit h-fit"
                    optionBoxClass="w-fit h-fit right-0 z-50"
                    buttonClass="rounded bg-white py-1"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-semibold">Drive Type:</p>
                <DropDown
                  options={driveType}
                  selected="-"
                  customClass="fit-width"
                  optionClass="w-fit h-fit"
                  optionBoxClass="w-fit h-fit right-0 z-50"
                  buttonClass="rounded bg-white py-1"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-semibold">Passengers:</p>
                <input
                  className="p-2 py-1 w-full border rounded-md border-gray-300 shadow-sm"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-semibold">Steering:</p>
                <DropDown
                  options={steering}
                  selected="-"
                  customClass="fit-width"
                  optionClass="w-fit h-fit"
                  optionBoxClass="w-fit h-fit right-0 z-50"
                  buttonClass="rounded bg-white py-1"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-semibold">Model:</p>
                <DropDown
                  options={models}
                  selected="-"
                  customClass="fit-width"
                  optionClass="w-fit h-fit"
                  optionBoxClass="w-fit h-fit right-0 z-50"
                  buttonClass="rounded bg-white py-1"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-semibold">Price:</p>
                <div className="flex gap-2">
                  <input
                    className="p-2 py-1 w-1/2 border rounded-md border-gray-300 shadow-sm"
                    type="text"
                  />
                  <input
                    className="p-2 py-1 w-1/2 border rounded-md border-gray-300 shadow-sm"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex gap-4 items-center">
                Upload
                <div className="flex justify-between cursor-pointer transition-all">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="form-checkbox h-3 w-3 cursor-pointer"
                    />
                  </label>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                Uploaded:
                {/* <div className="flex justify-between cursor-pointer transition-all">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="form-checkbox h-3 w-3 cursor-pointer"
                    />
                  </label>
                </div> */}
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="col-3 flex flex-col gap-4">
            <div
              className={`flex flex-col gap-4 p-1.5 py-4 rounded-md border border-gray-300 ${
                cardData.highlightStatus === "Sold"
                  ? "bg-gray-100"
                  : "bg-[#E2E8DD]"
              }`}
            >
              <div className="flex flex-col gap-2 px-2">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-gray-500 text-md font-semibold">
                    Customer:{" "}
                  </p>

                  <DropDown
                    options={yards}
                    selected="0CY Stock"
                    customClass="fit-width"
                    optionClass="w-fit h-fit"
                    optionBoxClass="w-fit h-fit right-0 z-50"
                    buttonClass="rounded bg-white py-1"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-gray-500 text-md font-semibold">
                    Sold Date:{" "}
                  </p>
                  <div className="border px-2 flex gap-2 items-center rounded-md shadow-sm py-1 bg-white">
                    {cardData.sentDate}
                    <MdCalendarMonth />
                  </div>
                </div>
              </div>

              <SupplierInfo />
              <PaymentsInfo />
              <CalculatedCostsInfo />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminStockEdit;
