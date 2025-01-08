import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

interface SeriesDropDownProps {
  noDropDown?: boolean;
  options: string[];
  customClass?: string;
  optionClass?: string;
  optionBoxClass?: string;
  buttonClass?: string;
  selected?: string[];
  onSelectionChange?: (selectedItems: string[]) => void;
}

const SeriesDropDown: React.FC<SeriesDropDownProps> = ({
  noDropDown,
  selected = [],
  options,
  customClass,
  buttonClass,
  optionClass,
  optionBoxClass = "right-0",
  onSelectionChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>(selected);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Handle checkbox selection changes
  const handleOptionClick = (option: string) => {
    const updatedSelection = selectedOptions.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option];

    setSelectedOptions(updatedSelection);
    if (onSelectionChange) {
      onSelectionChange(updatedSelection);
    }
  };

  // Handle removal of selected options
  const removeSelectedOption = (option: string) => {
    const updatedSelection = selectedOptions.filter((item) => item !== option);
    setSelectedOptions(updatedSelection);
    if (onSelectionChange) {
      onSelectionChange(updatedSelection);
    }
  };

  // Render nothing if noDropDown is set
  if (noDropDown) return null;

  return (
    <div className={`relative inline-block w-full text-left ${customClass}`} title="Series">
      {/* Dropdown Button */}
      <div
        className={`flex gap-2 items-center w-full transition-all border border-gray-300 hover:border-gray-400 px-3 py-1.5 rounded-md shadow-sm focus:outline-none ${buttonClass}`}
        onClick={toggleDropdown}
        aria-expanded={isOpen}
      >
        {selectedOptions.length > 0 ? (
          selectedOptions.map((opt) => (
            <button
              key={opt}
              onClick={(e) => {
                e.stopPropagation();
                removeSelectedOption(opt);
              }}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-sm flex items-center gap-1 hover:bg-gray-200"
            >
              {opt}
              <IoClose size={16} className="text-gray-400"/>
            </button>
          ))
        ) : (
          <span className="text-gray-500 text-nowrap py-0.5">Choose Series</span>
        )}
        <FaChevronDown size={12} className="text-gray-400 flex-shrink-0 ml-auto" />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={`absolute mt-2 origin-top-right w-full rounded-md bg-white ring-1 ring-black ring-opacity-5 ${optionBoxClass}`}
        >
          <div className="py-1">
            {options.map((option, index) => (
              <div
                key={index}
                className="flex justify-start min-w-16 px-4 cursor-pointer transition-all hover:bg-gray-100"
              >
                <label
                  className={`flex items-center gap-2 cursor-pointer ${optionClass}`}
                >
                  <input
                    type="checkbox"
                    checked={selectedOptions.includes(option)}
                    onChange={() => handleOptionClick(option)}
                    className="form-checkbox h-3 w-3 cursor-pointer"
                  />
                  <span>{option}</span>
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SeriesDropDown;
