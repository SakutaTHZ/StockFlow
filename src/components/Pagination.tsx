import React, { useState } from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const [inputPage, setInputPage] = useState<string>("");

  const handlePageChange = (page: number) => {
    onPageChange(page);
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputPage(value);
  };

  const handleInputSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const page = parseInt(inputPage);
      if (page >= 1 && page <= totalPages) {
        onPageChange(page);
      }
      scrollToTop();
    }
  };

  const renderPagination = () => {
    const paginationItems = [];

    
    paginationItems.push(
      <button
        key={1}
        className={`px-3 py-1 border rounded-md hover:bg-gray-200 ${
          currentPage === 1 ? "bg-amber-100 hover:bg-yellow-200 font-semibold border-amber-400 text-amber-500" : ""
        }`}
        onClick={() => handlePageChange(1)}
      >
        1
      </button>
    );

    
    if (totalPages > 5) {
      if (currentPage > 3) {
        paginationItems.push(
          <span key="ellipsis-start" className="px-3">
            ...
          </span>
        );
      }
    }

    
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      paginationItems.push(
        <button
          key={i}
          className={`px-3 py-1 border rounded-md hover:bg-gray-200 ${
            i === currentPage ? "bg-amber-100 hover:bg-yellow-200 font-semibold border-amber-400 text-amber-500" : ""
          }`}
          onClick={() => handlePageChange(i)}
        >
          {Math.floor(i)}
        </button>
      );
    }

    
    if (totalPages > 5) {
      if (currentPage < totalPages - 2) {
        paginationItems.push(
          <span key="ellipsis-end" className="px-3">
            ...
          </span>
        );
      }
    }

    
    if (totalPages > 1) {
      paginationItems.push(
        <button
          key={totalPages}
          className={`px-3 py-1 border rounded-md hover:bg-gray-200 ${
            currentPage === totalPages ? "bg-amber-100 hover:bg-yellow-200 font-semibold border-yellow-400 text-yellow-500" : ""
          }`}
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    
    if (totalPages > 5) {
      paginationItems.push(
        <input
          key="page-input"
          type="number"
          min="1"
          max={totalPages}
          value={inputPage}
          onChange={handleInputChange}
          onKeyDown={handleInputSubmit}
          placeholder="Go to page"
          className="bg-white border rounded-md p-1 min-w-28 text-center mx-3"
        />
      );
    }

    return paginationItems;
  };

  return (
    <div className="flex items-center justify-center space-x-2 pb-8">
      {totalPages != 0 && renderPagination()}
    </div>
  );
};

export default Pagination;
