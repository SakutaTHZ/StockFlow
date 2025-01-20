import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { MdClose } from "react-icons/md";

interface ListDataItem {
  name: string;
  count: number;
}

interface FilterClearDropDownProps {
  customClass?: string;
  boxName?: string;
  listData: ListDataItem[];
  color?: boolean;
}

const FilterClearDropDown: React.FC<FilterClearDropDownProps> = ({
  customClass,
  boxName = "Data",
  listData,
  color,
}) => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showAllChecked, setShowAllChecked] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [isEdited, setIsEdited] = useState(false);

  // Helper function to check if there are changes
  const checkIfEdited = React.useCallback((currentCheckedItems: string[]) => {
    // Mark as edited if any items are selected
    setIsEdited(currentCheckedItems.length > 0);
  }, []);

  const handleCheckboxChange = (item: ListDataItem) => {
    const updatedCheckedItems = checkedItems.includes(item.name)
      ? checkedItems.filter((checked) => checked !== item.name)
      : [...checkedItems, item.name];

    setCheckedItems(updatedCheckedItems);
    setSelectAll(updatedCheckedItems.length === listData.length);
    checkIfEdited(updatedCheckedItems); // Check if the state is edited
  };

  const handleRemoveCheckedItem = (item: string) => {
    const updatedCheckedItems = checkedItems.filter(
      (checked) => checked !== item
    );
    setCheckedItems(updatedCheckedItems);
    setSelectAll(updatedCheckedItems.length === listData.length);
    checkIfEdited(updatedCheckedItems); // Check if the state is edited
  };

  const handleSelectAllChange = () => {
    const updatedCheckedItems = selectAll
      ? [] // Deselect all
      : listData.map((item) => item.name); // Select all

    setCheckedItems(updatedCheckedItems);
    setSelectAll(!selectAll);
    checkIfEdited(updatedCheckedItems); // Check if the state is edited
  };

  const toggleShowAllChecked = () => setShowAllChecked(!showAllChecked);

  useEffect(() => {
    // Ensure `isEdited` updates if `listData` changes
    checkIfEdited(checkedItems);
  }, [checkedItems, listData, checkIfEdited]);

  const filteredData = listData.filter((item) => item.name.toLowerCase());

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
        <div className="flex flex-wrap gap-2">
          <div className="w-full pt-2 flex justify-between">
            <p className="text-gray-600 font-semibold text-sm">All {boxName}</p>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={selectAll}
                className="sr-only peer"
                onChange={handleSelectAllChange}
              />
              <div className="relative w-9 h-5 bg-gray-200 rounded-full peer-checked:bg-yellow-500 peer-checked:after:translate-x-full peer-focus:outline-none after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all" />
            </label>
          </div>
          <div className="brand-list w-full">
            {filteredData.length ? (
              filteredData.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between cursor-pointer hover:bg-gray-100"
                >
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={checkedItems.includes(item.name)}
                      className="form-checkbox h-3 w-3 cursor-pointer"
                      onChange={() => handleCheckboxChange(item)}
                    />
                    {color ? (
                      <>
                        <div
                          className={`w-4 h-4 rounded-full`}
                          style={{
                            backgroundColor: `#${item.name.split("#")[1]}`,
                          }}
                        ></div>
                        <span className="pointer-events-none capitalize">
                          {item.name.split("#")[0]}
                        </span>
                      </>
                    ) : (
                      <span className="pointer-events-none capitalize">
                        {item.name}
                      </span>
                    )}
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

      {!isDropdownOpen && checkedItems.length > 0 && (
        <div className="checked-box flex flex-wrap gap-1 mt-2">
          {checkedItems.slice(0, 3).map((item, index) => (
            <div
              key={index}
              onClick={() => handleRemoveCheckedItem(item)}
              className="flex gap-1 items-center bg-gray-100 px-2 rounded-full shadow-sm cursor-pointer"
            >
              {color ? (
                <>
                  <div
                    className={`w-4 h-4 rounded-full`}
                    style={{
                      backgroundColor: `#${item.split("#")[1]}`,
                    }}
                  ></div>
                  <span className="pointer-events-none capitalize">
                    {item.split("#")[0]}
                  </span>
                </>
              ) : (
                <span className="pointer-events-none capitalize">{item}</span>
              )}
              <MdClose size={14} className="text-gray-600" />
            </div>
          ))}
          {checkedItems.length > 3 && !showAllChecked && (
            <button
              onClick={toggleShowAllChecked}
              className="text-blue-500 bg-blue-100 px-2 rounded-full text-sm"
            >
              {checkedItems.length - 3} more...
            </button>
          )}
          {showAllChecked && (
            <>
              {checkedItems.slice(3).map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleRemoveCheckedItem(item)}
                  className="flex gap-1 items-center bg-gray-100 px-2 rounded-full shadow-sm cursor-pointer"
                >
                  {color ? (
                    <>
                      <div
                        className={`w-4 h-4 rounded-full`}
                        style={{
                          backgroundColor: `#${item.split("#")[1]}`,
                        }}
                      ></div>
                      <span className="pointer-events-none capitalize">
                        {item.split("#")[0]}
                      </span>
                    </>
                  ) : (
                    <span className="pointer-events-none capitalize">
                      {item}
                    </span>
                  )}
                  <MdClose size={14} className="text-gray-600" />
                </div>
              ))}
              <button
                onClick={toggleShowAllChecked}
                className="text-blue-500 text-sm bg-blue-100 px-2 rounded-full"
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

export default FilterClearDropDown;
