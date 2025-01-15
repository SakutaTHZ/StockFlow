import  { useState, useEffect, useRef } from "react";
import { BsThreeDots } from "react-icons/bs";

const CardOptions = () => {
  const [cardOption, setCardOption] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const checkOption = () => {
    setCardOption(!cardOption);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setCardOption(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="option z-20 absolute right-2 -bottom-4 bg-white p-3 rounded-full shadow-md border"
        onClick={checkOption}
      >
        <BsThreeDots />
      </button>
      <div
        className={`z-50 right-2 bottom-8 flex flex-col transition-all bg-white border rounded-md shadow-md ${
          cardOption ? "absolute" : "hidden"
        }`}
      >
        
        <button
          onClick={() => console.log("Show Vehicle Overview")}
          className="font-semibold text-nowrap text-left p-2 px-4 hover:bg-gray-100"
        >
          On list
        </button>
        
        <button
          onClick={() => console.log("Show Vehicle Overview")}
          className="font-semibold text-nowrap text-left p-2 px-4 hover:bg-gray-100"
        >
          Off List
        </button>
        <button
          onClick={() => console.log("Show Vehicle Overview")}
          className="font-semibold text-nowrap text-left p-2 px-4 hover:bg-gray-100"
        >
          Show Vehicle Overview
        </button>
        <button
          onClick={() => console.log("Add Promotion")}
          className="font-semibold text-nowrap text-left p-2 px-4 hover:bg-gray-100"
        >
          Add Promotion
        </button>
        <button
          onClick={() => console.log("Add Banner")}
          className="font-semibold text-nowrap text-left p-2 px-4 hover:bg-gray-100"
        >
          Add Banner
        </button>
        <button
          onClick={() => console.log("Customer View")}
          className="font-semibold text-nowrap text-left p-2 px-4 hover:bg-gray-100"
        >
          Customer View
        </button>
      </div>
    </div>
  );
};

export default CardOptions;
