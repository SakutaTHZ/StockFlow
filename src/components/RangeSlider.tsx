import React, { useState, ChangeEvent, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

interface RangeSliderProps {
  boxName: string;
  min: number;
  max: number;
  customClass?: string;
  reset: boolean;
}

const RangeSlider: React.FC<RangeSliderProps> = ({
  boxName,
  min,
  max,
  customClass,
  reset,
}) => {
  // const halfPoint = Math.round((min + max) / 2);
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isEdited, setIsEdited] = useState(false);

  const checkOriginalValues = () => {
    return minValue != min && maxValue != max;
  }

  const handleMinChange = (e: ChangeEvent<HTMLInputElement>) => {
    // const value = Math.min(Number(e.target.value), maxValue - 1);
    const value = Number(e.target.value);
    setMinValue(value);
    setIsEdited(checkOriginalValues);
  };

  const handleMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
    // const value = Math.max(Number(e.target.value), minValue + 1);
    const value = Number(e.target.value);
    setMaxValue(value);
    setIsEdited(checkOriginalValues);
  };

  const handleMinSlider = (e: ChangeEvent<HTMLInputElement>) => {
    setMinValue(Number(e.target.value));
    setIsEdited(checkOriginalValues);
  };

  const handleMaxSlider = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxValue(Number(e.target.value));
    setIsEdited(checkOriginalValues);
  };

  useEffect(() => { 
    if (reset) {
      setMinValue(min);
      setMaxValue(max);
      setIsEdited(false); // Reset the edited state as well
    }
  }, [reset, min, max]);
  

  return (
    <div className={`px-4 py-2 bg-gray-50 ${customClass}`}>
      {/* Slider Label */}
      <div className="flex flex-col gap-2 cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        <label className="font-bold flex items-center justify-between cursor-pointer">
          <p className="flex gap-2 items-center">
            {boxName}
            {isEdited && (
              <span className="bg-yellow-400 h-2 w-2 rounded-full"></span>
            )}
          </p>
          <FaChevronDown
            size={14}
            className={`text-gray-400 cursor-pointer transition-all duration-500 ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
          />
        </label>

        {isDropdownOpen && (
          <div className="flex flex-col gap-1 mb-2">
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={minValue}
                onChange={handleMinChange}
                onClick={(e) => e.stopPropagation()}
                className="pl-2 pr-4 py-2 rounded-md w-full bg-gray-100 outline-none"
              />
              <span>to</span>
              <input
                type="number"
                value={maxValue}
                onChange={handleMaxChange}
                onClick={(e) => e.stopPropagation()}
                className="pl-2 pr-4 py-2 rounded-md w-full bg-gray-100 outline-none"
              />
            </div>

            <div className="relative mt-2 flex items-center gap-2">
              {/* Min Slider */}
              <input
                type="range"
                min={min}
                // max={halfPoint}
                max={max}
                step="1"
                value={minValue}
                onChange={handleMinSlider}
                onClick={(e) => e.stopPropagation()}
                className="rangeSlider rounded-lg w-full translate-x-1.5 appearance-none"
              />
              {/* Max Slider */}
              <input
                type="range"
                min={min}
                max={max}
                step="1"
                value={maxValue}
                onChange={handleMaxSlider}
                onClick={(e) => e.stopPropagation()}
                className="rangeSlider rounded-lg w-full -translate-x-1.5 appearance-none focus:outline-none"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RangeSlider;
