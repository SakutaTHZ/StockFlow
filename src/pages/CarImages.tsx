import CNetAdminNav from "../components/CNetAdminNav";
import { useNavigate, useLocation } from "react-router-dom";
import { FaArrowLeftLong, FaCircleInfo, FaWheelchair } from "react-icons/fa6";
import { CarData } from "../data/types";
import {
  MdOutlineTimer,
  MdOutlineNewReleases,
  MdOutlineFileDownload,
  MdModeEditOutline,
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
import StatusState from "../components/adminComponents/StausState";
import Gallery from "../components/Gallery";
import { carTypes } from "../data/generateData";
import { AiOutlineClose } from "react-icons/ai";

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
        className={`stat flex items-center gap-2 text-sm font-semibold rounded-full px-3 py-1 text-yellow-800 bg-yellow-200 ${
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

  const [showHint, setShowHint] = useState(false);

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
          className={`-bottom-8 group-hover:bottom-0 text-sm absolute w-full left-0 text-center transition-all duration-300 rounded-md ${
            isSelected ? "bg-[#0B66E4] text-white" : "text-black bg-white"
          }`}
        >
          {cardData.registerDate}
        </p>
      </div>
    );
  };

  const [showGallery, setShowGallery] = useState(false);

  function toggleGallery() {
    setShowGallery(() => !showGallery);
  }

  const [isInnerCargoPopupOpen, setIsInnerCargoPopupOpen] = useState(false);
  const openInnerCargoPopup = () => setIsInnerCargoPopupOpen(true);
  const closeInnerCargoPopup = () => setIsInnerCargoPopupOpen(false);

  
    const InnerCargoPopup = () => {
      const colClass = `border p-2 px-4 text-left`;
      const handleBackgroundClick = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
      ) => {
        if (e.target === e.currentTarget) {
          closeInnerCargoPopup();
        }
      };
  
      const [editMode, setEditMode] = useState(false);
      const [extras, setExtras] = useState(() =>
        carTypes.map((type) => ({
          Description: "Description",
          PartNo: `Pt-` + Math.round(Math.random() * (999 - 1) + 1),
          Manufacture: type,
          Units: Math.round(Math.random() * (999 - 1) + 1),
          Weight: Math.round(Math.random() * (999 - 100) + 100),
          Value: Math.round(Math.random() * (99999 - 100) + 100),
        }))
      );
  
      const [newRow, setNewRow] = useState({
        Description: "",
        PartNo: "",
        Manufacture: "",
        Units: 0,
        Weight: 0,
        Value: 0,
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
        if (newRow.Manufacture && newRow.Description) {
          setExtras((prev) => [...prev, { ...newRow }]);
          setNewRow({
            Description: "",
            PartNo: "",
            Manufacture: "",
            Units: 0,
            Weight: 0,
            Value: 0,
          });
        }
      };
  
      const handleDeleteRow = (index: number) => {
        const updatedExtras = extras.filter((_, i) => i !== index);
        setExtras(updatedExtras);
      };
  
      return (
        <div
          className={`fixed inset-0 bg-gray-800 backdrop-blur-sm bg-opacity-50 flex justify-center items-center z-[100]`}
          onClick={handleBackgroundClick}
        >
          <div
            className={`custom-scrollbar overflow-y-scroll animate-slideUp bg-white p-8 md:p-12 py-8 rounded-lg shadow-lg relative min-w-96 m-2 w-3/5 max-h-[80%]`}
          >
            <div className="w-full flex items-center justify-between mb-4">
              <p className="text-2xl font-bold">Inner Cargo</p>
  
              {}
              <button
                className="text-lg bg-gray-100 hover:bg-gray-200 text-gray-800 p-1 rounded-full transition-all"
                onClick={closeInnerCargoPopup}
              >
                <AiOutlineClose />
              </button>
            </div>
            {}
            <div>
              <div className="w-full">
                <p className="text-sm mb-2">Inner Cargo comment</p>
                <textarea
                  rows={3}
                  className="border w-full rounded-md p-2 resize-none"
                  placeholder="Comments here"
                />
              </div>
              <table className="w-full mt-6">
                <thead>
                  <tr className="bg-gray-50">
                    <th className={`${colClass}`}>Description</th>
                    <th className={`${colClass}`}>Part No</th>
                    <th className={`${colClass}`}>Manufacturer</th>
                    <th className={`${colClass}`}>Units</th>
                    <th className={`${colClass}`}>Weight</th>
                    <th className={`${colClass}`}>Value</th>
                    <th className={`${colClass} text-center`}>
                      {!editMode && (
                        <button
                          onClick={() => setEditMode((prevMode) => !prevMode)}
                        >
                          <MdModeEditOutline size={18} />
                        </button>
                      )}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {extras.map((extra, index) => (
                    <tr
                      key={index}
                      className={`${index % 2 === 1 && "bg-gray-50"}`}
                    >
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
                            type="text"
                            className="w-full border px-2 rounded-md"
                            value={extra.PartNo}
                            onChange={(e) =>
                              handleInputChange(index, "PartNo", e.target.value)
                            }
                          />
                        ) : (
                          <p>{extra.PartNo}</p>
                        )}
                      </td>
                      <td className={`${colClass}`}>
                        {editMode ? (
                          <input
                            type="text"
                            className="w-full border px-2 rounded-md"
                            value={extra.Manufacture}
                            onChange={(e) =>
                              handleInputChange(
                                index,
                                "Manufacture",
                                e.target.value
                              )
                            }
                          />
                        ) : (
                          <>¥ {extra.Weight.toLocaleString()}</>
                        )}
                      </td>
                      <td className={`${colClass}`}>
                        {editMode ? (
                          <input
                            type="number"
                            className="w-full border px-2 rounded-md"
                            value={extra.Units}
                            onChange={(e) =>
                              handleInputChange(
                                index,
                                "Units",
                                Number(e.target.value)
                              )
                            }
                          />
                        ) : (
                          <>¥ {extra.Value.toLocaleString()}</>
                        )}
                      </td>
                      <td className={`${colClass}`}>
                        {editMode ? (
                          <input
                            type="number"
                            className="w-full border px-2 rounded-md"
                            value={extra.Weight}
                            onChange={(e) =>
                              handleInputChange(
                                index,
                                "Weight",
                                Number(e.target.value)
                              )
                            }
                          />
                        ) : (
                          <>¥ {extra.Units.toLocaleString()}</>
                        )}
                      </td>
                      <td className={`${colClass}`}>
                        {editMode ? (
                          <input
                            type="number"
                            className="w-full border px-2 rounded-md"
                            value={extra.Value}
                            onChange={(e) =>
                              handleInputChange(
                                index,
                                "Value",
                                Number(e.target.value)
                              )
                            }
                          />
                        ) : (
                          <>¥ {extra.Units.toLocaleString()}</>
                        )}
                      </td>
                      <td className={`${colClass} text-center`}>
                        <button onClick={() => handleDeleteRow(index)}>
                          <IoClose size={20} />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {editMode && (
                    <tr className="bg-gray-100">
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
                          type="text"
                          className="w-full border px-2 rounded-md"
                          value={newRow.PartNo}
                          onChange={(e) =>
                            handleNewRowChange("PartNo", e.target.value)
                          }
                        />
                      </td>
                      <td className={`${colClass}`}>
                        <input
                          type="text"
                          className="w-full border px-2 rounded-md"
                          value={newRow.Manufacture}
                          onChange={(e) =>
                            handleNewRowChange("Manufacture", e.target.value)
                          }
                        />
                      </td>
                      <td className={`${colClass}`}>
                        <input
                          type="number"
                          className="w-full border px-2 rounded-md"
                          value={newRow.Units}
                          onChange={(e) =>
                            handleNewRowChange("Units", Number(e.target.value))
                          }
                        />
                      </td>
                      <td className={`${colClass}`}>
                        <input
                          type="number"
                          className="w-full border px-2 rounded-md"
                          value={newRow.Weight}
                          onChange={(e) =>
                            handleNewRowChange("Weight", Number(e.target.value))
                          }
                        />
                      </td>
                      <td className={`${colClass}`}>
                        <input
                          type="number"
                          className="w-full border px-2 rounded-md"
                          value={newRow.Value}
                          onChange={(e) =>
                            handleNewRowChange("Value", Number(e.target.value))
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
                </tbody>
              </table>
              <div className="flex gap-4 justify-end mt-6">
                <button
                  className="font-semibold py-2 px-4 bg-[#FFC158] hover:bg-[#FFCD79] rounded-md"
                  onClick={closeInnerCargoPopup}
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
  
              <div className="w-full">
                <p className="text-sm mb-2">Photos</p>
                <input
                  type="file"
                  className="border w-full rounded-md p-2 resize-none"
                  placeholder="Comments here"
                />
              </div>
              <div className="flex gap-2 text-gray-500 mt-2 px-2 text-sm">
                <input type="checkbox" />
                <p>Invinsible to end user</p>
              </div>
            </div>
          </div>
        </div>
      );
    };

  return (
    <>
      <CNetAdminNav />
      
      {isInnerCargoPopupOpen && <InnerCargoPopup />}
      {showGallery && (
        <Gallery
          customClass="animate-appear animate-slideUp"
          closeBox={toggleGallery}
        />
      )}

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
                  Mazda {cardData.name}
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
              <button className={`${buttonClass} bg-gray-200 `} 
              onClick={openInnerCargoPopup}>
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
        <div className="grid md:grid-cols-[2fr_1fr] min-h-20 gap-4 py-2 pb-8">
          {/* Column 1 */}
          <div className="flex flex-col gap-2 md:gap-4">
            {/* Auction Images Box */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col md:flex-row gap-2 min-h-9 justify-between">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-lg font-semibold w-32">Auction Images</h2>
                  <button
                    className="flex items-center gap-2 bg-[#FFDA9B] p-1.5 px-3 rounded-md font-semibold"
                    onClick={toggleGallery}
                  >
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
              <div className="ImagesContainer flex flex-wrap border-4 gap-2 min-h-32 border-dotted p-4 rounded-md">
                {Array(8)
                  .fill(null)
                  .map((_: number, index: number) => (
                    <ImageBox key={index} />
                  ))}
              </div>
            </div>

            {/* Yard Images Box */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col md:flex-row gap-2 min-h-9 justify-between">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-lg font-semibold w-32">Yard Images</h2>
                  <button
                    className="flex items-center gap-2 bg-[#FFDA9B] p-1.5 px-3 rounded-md font-semibold"
                    onClick={toggleGallery}
                  >
                    <BsEyeFill size={20} className="flex-shrink-0" /> Check
                    Details
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <StatusState
                    data={"Yard Base"}
                    status={"Pending"}
                    customClass="list-none"
                  />
                  <StatusState
                    data={"CJP Extra"}
                    status={"Pending"}
                    customClass="list-none"
                  />
                  <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="relative w-9 h-5 bg-gray-200 rounded-full peer-checked:bg-[#FFC158] peer-checked:after:translate-x-full peer-focus:outline-none after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all" />
                  </label>
                  <p>Show Yard Images</p>
                </div>
              </div>
              <div className="ImagesContainer flex flex-wrap border-4 gap-2 min-h-32 border-dotted p-4 rounded-md">
                {Array(52)
                  .fill(null)
                  .map((_: number, index: number) => (
                    <ImageBox key={index} />
                  ))}
              </div>
            </div>

            {/* Shitami Images Box */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col md:flex-row gap-2 min-h-9 justify-between">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-lg font-semibold w-32">Shitami Images</h2>
                </div>

                <div className="flex items-center gap-2">
                  <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="relative w-9 h-5 bg-gray-200 rounded-full peer-checked:bg-[#FFC158] peer-checked:after:translate-x-full peer-focus:outline-none after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all" />
                  </label>
                  <p>Show Shitami Images</p>
                </div>
              </div>
              <div className="ImagesContainer flex flex-wrap border-4 gap-2 min-h-32 border-dotted p-4 rounded-md">
                {Array(0)
                  .fill(null)
                  .map((_: number, index: number) => (
                    <ImageBox key={index} />
                  ))}
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-2">
            <div className="flex flex-col md:flex-row gap-2 md:gap-4">
              {/* Sheet Box */}
              <div className="w-full md:w-1/2 flex flex-col gap-2">
                <div className="flex flex-col md:flex-row gap-2 min-h-9 justify-between">
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="text-lg font-semibold">Sheet</h2>
                  </div>
                </div>
                <div className="ImagesContainer flex flex-wrap border-4 gap-2 border-dotted min-h-32 p-4 rounded-md">
                  {Array(0)
                    .fill(null)
                    .map((_: number, index: number) => (
                      <ImageBox key={index} />
                    ))}
                </div>
              </div>
              {/* EC Box */}
              <div className="w-full md:w-1/2 flex flex-col gap-2">
                <div className="flex flex-col md:flex-row gap-2 min-h-9 justify-between">
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="text-lg font-semibold">EC</h2>
                  </div>
                </div>
                <div className="ImagesContainer flex flex-wrap border-4 gap-2 border-dotted p-4 min-h-32 rounded-md">
                  {Array(0)
                    .fill(null)
                    .map((_: number, index: number) => (
                      <ImageBox key={index} />
                    ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-2 md:gap-4">
              {/* Cosmo Check Sheet Box */}
              <div className="w-full md:w-1/2 flex flex-col gap-2">
                <div className="flex flex-col md:flex-row gap-2 min-h-9 justify-between">
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="text-lg font-semibold">Cosmo Check Sheet</h2>
                  </div>
                </div>
                <div className="ImagesContainer flex flex-wrap border-4 gap-2 border-dotted min-h-32 p-4 rounded-md">
                  {Array(1)
                    .fill(null)
                    .map((_: number, index: number) => (
                      <ImageBox key={index} />
                    ))}
                </div>
              </div>
              {/* VIN Box */}
              <div className="w-full md:w-1/2 flex flex-col gap-2">
                <div className="flex flex-col md:flex-row gap-2 min-h-9 justify-between">
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="text-lg font-semibold">VIN</h2>
                  </div>
                </div>
                <div className="ImagesContainer flex flex-wrap border-4 gap-2 border-dotted p-4 min-h-32 rounded-md">
                  {Array(0)
                    .fill(null)
                    .map((_: number, index: number) => (
                      <ImageBox key={index} />
                    ))}
                </div>
              </div>
            </div>

            {/* Recall Check Box */}
            <div className="w-full flex flex-col gap-2">
              <div className="flex flex-col md:flex-row gap-2 min-h-9 justify-between">
                <div className="flex items-center w-full justify-between gap-3">
                  <h2 className="text-lg font-semibold">Recall Check</h2>
                  
                  <StatusState
                    data={"Recall Check"}
                    status={"Pending"}
                    customClass="list-none"
                  />
                </div>
              </div>
              <div className="ImagesContainer flex flex-wrap border-4 gap-2 border-dotted min-h-32 p-4 rounded-md">
                {Array(1)
                  .fill(null)
                  .map((_: number, index: number) => (
                    <ImageBox key={index} />
                  ))}
              </div>
            </div>

            {/* Inner Cargo Box */}
            <div className="w-full flex flex-col gap-2">
              <div className="flex flex-col md:flex-row gap-2 min-h-9 justify-between">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-lg font-semibold">Inner Cargo</h2>
                </div>
              </div>
              <div className="ImagesContainer flex flex-wrap border-4 gap-2 border-dotted min-h-32 p-4 rounded-md">
                {Array(1)
                  .fill(null)
                  .map((_: number, index: number) => (
                    <ImageBox key={index} />
                  ))}
              </div>
            </div>

            {/* Lashing Box */}
            <div className="w-full flex flex-col gap-2">
              <div className="flex flex-col md:flex-row gap-2 min-h-9 justify-between">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-lg font-semibold">Lashing</h2>
                </div>
              </div>
              <div className="ImagesContainer flex flex-wrap border-4 gap-2 border-dotted min-h-32 p-4 rounded-md">
                {Array(0)
                  .fill(null)
                  .map((_: number, index: number) => (
                    <ImageBox key={index} />
                  ))}
              </div>
            </div>

            {/* Hidden Images Box */}
            <div className="w-full flex flex-col gap-2">
              <div className="flex flex-col md:flex-row gap-2 min-h-9 justify-between">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-lg font-semibold">Hidden Images</h2>
                </div>
              </div>
              <div className="ImagesContainer flex flex-wrap border-4 gap-2 border-dotted min-h-32 p-4 rounded-md">
                {Array(0)
                  .fill(null)
                  .map((_: number, index: number) => (
                    <ImageBox key={index} />
                  ))}
              </div>
            </div>

            {/* Deleted Images Box */}
            <div className="w-full flex flex-col gap-2">
              <div className="flex flex-col md:flex-row gap-2 min-h-9 justify-between">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-lg font-semibold">Deleted Images</h2>
                </div>
              </div>
              <div className="ImagesContainer flex flex-wrap border-4 gap-2 border-dotted min-h-32 p-4 rounded-md bg-red-50 border-red-300">
                {Array(2)
                  .fill(null)
                  .map((_: number, index: number) => (
                    <ImageBox key={index} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarImages;
