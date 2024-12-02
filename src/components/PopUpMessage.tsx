import React, { useState, useEffect } from "react";
import { MdOutlineFavorite } from "react-icons/md";

interface PopUpMessageProps {
  customClass?: string;
  message?:string;
}

const PopUpMessage: React.FC<PopUpMessageProps> = ({ customClass,message="This is a message" }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    setIsVisible(false);
  };
  if (!isVisible) return null;

  return (
    <div
      className={`animate-appear z-[100] w-full md:w-auto fixed top-16 md:top-28 right-0 md:right-16 lg:right-32 flex gap-2 items-center justify-center shadow-sm px-4 py-2 rounded-md bg-white cursor-pointer ${customClass}`}
      onClick={handleClick}
    >
      <MdOutlineFavorite size={20} className="flex-shrink-0 text-red-600" />
      <p>{message} </p>
    </div>
  );
};

export default PopUpMessage;
