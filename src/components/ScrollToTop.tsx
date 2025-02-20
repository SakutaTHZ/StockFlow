import { useEffect } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { useLocation } from "react-router-dom";

interface ScrollToTopButtonProps {
  customClass?: string;
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({
  customClass,
}) => {
  const { pathname } = useLocation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed flex items-center justify-center text-lg z-50 w-10 h-10 bottom-4 right-4 bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200 ${customClass}`}
    >
      <IoMdArrowDropup />
    </button>
  );
};

export default ScrollToTopButton;
