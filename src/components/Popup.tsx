import React, { ReactNode } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface PopupProps {
  content: ReactNode;
  isOpen: boolean;
  title?: string;
  customClass?: string;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({
  content,
  isOpen,
  title = "Title",
  customClass,
  onClose,
}) => {
  if (!isOpen) return null;

  const handleBackgroundClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-gray-800 backdrop-blur-sm bg-opacity-50 flex justify-center items-center z-[100]`}
      onClick={handleBackgroundClick}
    >
      <div
        className={`animate-slideUp bg-white p-8 md:p-12 py-8 rounded-lg shadow-lg relative min-w-96 ${customClass}`}
      >
        <div className="w-full flex items-center justify-between mb-4">
          <p className="text-2xl font-bold">{title}</p>

          {/* Close button */}
          <button
            className="text-lg bg-gray-100 hover:bg-gray-200 text-gray-800 p-1 rounded-full transition-all"
            onClick={onClose}
          >
            <AiOutlineClose />
          </button>
        </div>
        {/* Popup content */}
        <div>{content}</div>
      </div>
    </div>
  );
};

export default Popup;
