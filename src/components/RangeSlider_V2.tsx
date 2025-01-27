import React, { useEffect, useRef, useState } from "react";
import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";
import { FaChevronDown } from "react-icons/fa";

interface RangeSliderProps {
  boxName: string;
  min: number;
  max: number;
  customClass?: string;
}

const RangeSlider_V2: React.FC<RangeSliderProps> = ({
  boxName,
  min,
  max,
  customClass,
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [values, setValues] = useState<[number, number]>([min, max]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isEdited, setIsEdited] = useState(false);

  const handleInputChange = (index: 0 | 1, value: string) => {
    const numericValue = parseFloat(value);
    if (!isNaN(numericValue)) {
      const newValues = [...values] as [number, number];
      newValues[index] = numericValue;
      sliderRef.current?.noUiSlider?.set(newValues);
      setValues(newValues);
    }
    setIsEdited(true);
  };

  useEffect(() => {
    if (sliderRef.current) {
      const slider = sliderRef.current;

      sliderRef.current.style.backgroundColor = "#f0f0f0";
      sliderRef.current.style.borderRadius = "10px";
      sliderRef.current.style.height = "12px";

      noUiSlider.create(slider, {
        start: [min, max],
        connect: true,
        step: 5,
        range: {
          min,
          max,
        },
        format: {
          to: (value) => Math.round(value),
          from: (value) => Math.round(parseFloat(value)),
        },
      });

      const handleSliderUpdate = (newValues: string[]) => {
        const parsedValues: [number, number] = [
          parseFloat(newValues[0]),
          parseFloat(newValues[1]),
        ];
        setValues((prevValues) =>
          prevValues[0] !== parsedValues[0] || prevValues[1] !== parsedValues[1]
            ? parsedValues
            : prevValues
        );
      };

      slider.noUiSlider?.on("update", handleSliderUpdate);

      return () => {
        slider.noUiSlider?.destroy();
      };
    }
  }, [min, max]); // Run only when min or max changes

  return (
    <div className={`px-4 py-2 bg-gray-50 ${customClass}`}>
      {/* Slider Label */}
      <div
        className="flex flex-col gap-2 cursor-pointer"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
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
      </div>
      <div
        className={`flex flex-wrap mt-3 justify-between w-full ${customClass} ${
          isDropdownOpen ? "flex" : "hidden"
        }`}
      >
        <div className="flex gap-2">
          <label className="relative cursor-pointer">
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
              From
            </span>
            <input
              type="text"
              value={values[0]}
              onChange={(e) => handleInputChange(0, e.target.value)}
              className="w-full h-9 border-2 rounded-md pl-10 pr-2 text-sm"
            />
          </label>  
          <label className="relative cursor-pointer">
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
              To
            </span>
            <input
              type="text"
              value={values[1]}
              onChange={(e) => handleInputChange(1, e.target.value)}
              className="w-full h-9 border-2 rounded-md pl-10 pr-2 text-sm"
            />
          </label>
        </div>
        <div ref={sliderRef} className="w-full mt-3 custom-slider"></div>
      </div>
    </div>
  );
};

export default RangeSlider_V2;
