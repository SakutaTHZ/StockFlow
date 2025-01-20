import React, { useState, ChangeEvent } from "react";
import { FaChevronDown } from "react-icons/fa";
import { MdClose } from "react-icons/md";

interface ListDataItem {
  name: string;
  count: number;
}

interface FilterOptionDropDownProps {
  boxName?: string;
  listData: ListDataItem[];
  customClass?: string;
  placeholder?: string;
  onSelectionChange?: (selectedItems: string[]) => void;
}

const FilterOptionDropDown: React.FC<FilterOptionDropDownProps> = ({
  boxName = "Data",
  listData,
  customClass,
  placeholder = "Search here",
  onSelectionChange,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showAllChecked, setShowAllChecked] = useState(false);
  const [isEdited, setIsEdited] = useState(false);

  // Helper function to check if the component is edited
  const checkIfEdited = (currentCheckedItems: string[]) => {
    // Mark as edited if any items are selected
    setIsEdited(currentCheckedItems.length > 0);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCheckboxChange = (item: ListDataItem) => {
    setCheckedItems((prev) => {
      const newCheckedItems = prev.includes(item.name)
        ? prev.filter((checked) => checked !== item.name)
        : [...prev, item.name];

      checkIfEdited(newCheckedItems); // Check if the state is edited
      if (onSelectionChange) {
        onSelectionChange(newCheckedItems);
      }
      return newCheckedItems;
    });
  };

  const handleRemoveCheckedItem = (item: string) => {
    setCheckedItems((prev) => {
      const newCheckedItems = prev.filter((checked) => checked !== item);
      checkIfEdited(newCheckedItems); // Check if the state is edited
      return newCheckedItems;
    });
  };

  const filteredData = listData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleShowAllChecked = () => {
    setShowAllChecked(!showAllChecked);
  };

  return (
    <div className={`flex flex-col gap-1 px-4 py-2.5 ${customClass}`}>
      <div
        className="flex items-center justify-between w-full cursor-pointer"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <div className="flex items-center gap-2">
          <b>{boxName}</b>
          {isEdited && (
            <div className="bg-yellow-400 h-2 w-2 rounded-full"></div>
          )}
        </div>
        <FaChevronDown
          size={14}
          className={`text-gray-400 cursor-pointer transition-all duration-500 ${
            isDropdownOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {isDropdownOpen && (
        <div className="content flex flex-wrap gap-2">
          <input
            type="text"
            placeholder={placeholder}
            value={searchTerm}
            onChange={handleSearchChange}
            className="pl-2 pr-4 py-2 rounded-md w-full bg-gray-100 outline-none"
          />
          <div className="brand-list w-full">
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between cursor-pointer transition-all hover:bg-gray-100"
                  onClick={() => handleCheckboxChange(item)}
                >
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={checkedItems.includes(item.name)}
                      className="form-checkbox h-3 w-3 cursor-pointer"
                    />
                    <span onClick={() => handleCheckboxChange(item)}>
                      {item.name}
                    </span>
                  </label>
                  <span className="text-gray-500">{item.count}</span>
                </div>
              ))
            ) : (
              <p className="text-sm text-red-500">No results found</p>
            )}
          </div>
        </div>
      )}

      {/* Checked items box with "3 more..." and "Collapse" logic */}
      {!isDropdownOpen && checkedItems.length > 0 && (
        <div className="checked-box flex flex-wrap gap-1 mt-2">
          {checkedItems.slice(0, 3).map((item, index) => (
            <div
              key={index}
              onClick={() => handleRemoveCheckedItem(item)}
              className="flex gap-1 items-center bg-gray-100 w-fit px-2 rounded-full shadow-sm hover:bg-gray-200 cursor-pointer transition"
            >
              {item}
              <MdClose
                size={14}
                className="text-gray-600 hover:text-gray-800"
              />
            </div>
          ))}

          {/* Show '3 more' if there are more than 3 items */}
          {checkedItems.length > 3 && !showAllChecked && (
            <button
              onClick={toggleShowAllChecked}
              className="text-blue-500 bg-blue-100 px-2 rounded-full text-sm cursor-pointer"
            >
              {checkedItems.length - 3} more...
            </button>
          )}

          {/* Show remaining items and collapse button */}
          {showAllChecked && (
            <>
              {checkedItems.slice(3).map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleRemoveCheckedItem(item)}
                  className="flex gap-1 items-center bg-gray-100 w-fit px-2 rounded-full shadow-sm hover:bg-gray-200 cursor-pointer transition"
                >
                  {item}
                  <MdClose
                    size={14}
                    className="text-gray-600 hover:text-gray-800"
                  />
                </div>
              ))}
              <button
                onClick={toggleShowAllChecked}
                className="text-blue-500 text-sm cursor-pointer mt-1 bg-blue-100 px-2 rounded-full"
              >
                Collapse
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default FilterOptionDropDown;
