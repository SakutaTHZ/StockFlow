import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";

interface DropDownProps {
  noDropDown?: boolean;
  options: string[];
  customClass?: string;
  optionClass?: string;
  optionBoxClass?: string;
  buttonClass?: string;
  selected?: string;
  onSelectionChange?: (selectedItem: string) => void;
}

const DropDown: React.FC<DropDownProps> = ({
  noDropDown,
  selected,
  options,
  customClass,
  buttonClass,
  optionClass,
  optionBoxClass = "right-0",
  onSelectionChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    selected ? selected : options[0]
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onSelectionChange) {
      onSelectionChange(option);
    }
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className={`relative inline-block w-full text-left ${customClass}`}
    >
      <button
        onClick={toggleDropdown}
        className={`${
          noDropDown && "hidden"
        } inline-flex justify-between text-black gap-1 text-nowrap items-center w-full transition-all border border-gray-300 hover:border-gray-400 px-3 rounded-md shadow-sm focus:outline-none ${buttonClass}`}
      >
        {selectedOption}
        <FaChevronDown size={12} className="text-gray-400 flex-shrink-0" />
      </button>

      {(noDropDown || isOpen) && (
        <div
          className={`${
            noDropDown ? "block" : "absolute mt-2"
          } animate-dropDown origin-bottom-left w-full h-64 overflow-hidden overflow-y-auto custom-scrollbar rounded-md bg-white ring-1 ring-black ring-opacity-5 ${optionBoxClass}`}
        >
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleOptionClick(option)}
                className={`block text-nowrap px-4 py-2 text-left w-full text-gray-700 hover:bg-gray-100 ${optionClass}`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
