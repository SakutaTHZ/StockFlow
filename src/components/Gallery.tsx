import React, { useEffect, useRef, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import {
  MdClose,
  MdFullscreen,
  MdRestore,
  MdZoomIn,
  MdZoomOut,
} from "react-icons/md";
import screenfull from "screenfull";

interface GalleryProps {
  customClass?: string;
  optionClass?: string;
  buttonClass?: string;
  closeBox?: () => void;
}

const Gallery: React.FC<GalleryProps> = ({
  customClass,
  buttonClass,
  optionClass,
  closeBox,
}) => {
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const importImages = import.meta.glob(
      "/src/assets/images/stock/*.{jpg,jpeg,png,gif}"
    );

    const imagePaths: string[] = [];

    for (const path in importImages) {
      importImages[path]().then((module) => {
        const imageModule = module as { default: string };
        imagePaths.push(imageModule.default);
        setImages([...imagePaths]);
      });
    }
  }, []);

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (images.length > 0) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);


  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowLeft":
          setCurrentIndex(
            currentIndex - 1 == 0 ? images.length : currentIndex - 1
          );
          scrollToThumbnail(currentIndex - 1 == 0 ? images.length : currentIndex - 1);
          break;
        case "ArrowRight":
          setCurrentIndex(
            currentIndex + 1 > images.length ? 1 : currentIndex + 1
          );
          scrollToThumbnail(currentIndex + 1 > images.length ? 1 : currentIndex + 1);
          break;
        case "Escape":
          if (closeBox) closeBox();
          break;
        case "+":
          handleZoomIn();
          break;
        case "=":
          handleZoomIn();
          break;
        case "-":
          handleZoomOut();
          break;
        case "0":
          resetZoom();
          break;
        default:
          break;
      }
    };

    
    window.addEventListener("keydown", handleKeyDown);

    
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, images, closeBox]);

  const scrollBoxRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollBoxRef.current) return;

    setIsDragging(true);
    setStartX(e.pageX - scrollBoxRef.current.offsetLeft);
    setScrollLeft(scrollBoxRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollBoxRef.current) return;

    const x = e.pageX - scrollBoxRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    if (Math.abs(walk) > 5) {
      scrollBoxRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };
  const handleFullscreen = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle();
    }
  };
  const scrollToThumbnail = (index: number) => {
    const thumbnail = document.getElementById(`thumbnail-${index}`);
    console.log("index - " + index);
    if (thumbnail) {
      thumbnail.scrollIntoView({
        behavior: "smooth",
        inline: "center",
      });
    }
  };

  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });

  const handleZoomIn = () => {
    setScale((prevScale) => Math.min(prevScale + 0.5, 5));
  };

  const handleZoomOut = () => {
    setScale((prevScale) => Math.max(prevScale - 0.5, 1));
  };

  const resetZoom = () => {
    setScale(1);
    setTranslate({ x: 0, y: 0 });
  };

  const [isImageDragging, setIsImageDragging] = useState(false);
  const [startImageX, setStartImageX] = useState(0);
  const [startImageY, setStartImageY] = useState(0);

  const handleImageMouseDown = (e: React.MouseEvent) => {
    setIsImageDragging(true);
    setStartImageX(e.pageX - translate.x);
    setStartImageY(e.pageY - translate.y);
  };

  const handleImageMouseMove = (e: React.MouseEvent) => {
    if (!isImageDragging) return;

    const newX = e.pageX - startImageX;
    const newY = e.pageY - startImageY;

    setTranslate({ x: newX, y: newY });
  };

  const handleImageMouseUpOrLeave = () => {
    setIsImageDragging(false);
  };

  const [showscrollBox, setShowscrollBox] = useState(true);

  return (
    <>
      <div
        className={`gallery flex justify-center items-center fixed inset-0 w-screen h-screen z-[100] ${customClass}`}
      >
        <div className="absolute inset-0 overlay h-full w-full bg-black z-[101] bg-opacity-80 backdrop-blur-sm"></div>
        <div className="galleryOptions absolute flex justify-between items-center inset-0 w-full h-fit bg-black bg-opacity-40 p-2 px-8 z-[105] text-white">
          <p>
            {currentIndex}/{images.length}
          </p>
          <div className="flex items-center gap-2">
            <button
              className="flex justify-center items-center"
              onClick={handleFullscreen}
            >
              <MdFullscreen size={25} />
            </button>
            <button
              className="flex justify-center items-center"
              onClick={handleZoomIn}
            >
              <MdZoomIn size={25} />
            </button>
            <button
              className="flex justify-center items-center"
              onClick={handleZoomOut}
            >
              <MdZoomOut size={25} />
            </button>
            <button
              className="flex justify-center items-center"
              onClick={resetZoom}
            >
              <MdRestore size={25} />
            </button>
            <button
              className="flex justify-center items-center"
              onClick={closeBox}
            >
              <MdClose size={25} />
            </button>
          </div>
        </div>
        <div className="absolute flex justify-center items-center mainImage w-full h-full z-[104] text-white">
          <button
            className={`absolute left-5 ${buttonClass}`}
            onClick={() => {
              setCurrentIndex(
                currentIndex - 1 == 0 ? images.length : currentIndex - 1
              );
              scrollToThumbnail(
                currentIndex - 1 == 0 ? images.length : currentIndex - 1
              );
            }}
          >
            <FaArrowLeft
              size={40}
              className="p-2 rounded-md bg-transparent transition-all hover:bg-opacity-15 hover:bg-white"
            />
          </button>
          <button
            className={`absolute right-5 ${buttonClass}`}
            onClick={() => {
              setCurrentIndex(
                currentIndex + 1 > images.length ? 1 : currentIndex + 1
              );
              scrollToThumbnail(
                currentIndex + 1 > images.length ? 1 : currentIndex + 1
              );
            }}
          >
            <FaArrowRight
              size={40}
              className="p-2 rounded-md bg-transparent transition-all hover:bg-opacity-15 hover:bg-white"
            />
          </button>
          <img
            src={images[currentIndex - 1]}
            className={`mainImage w-1/2 ${animate ? "animate-slideLeft" : ""}`}
            style={{
              transform: `scale(${scale}) translate(${translate.x}px, ${translate.y}px)`,
              cursor: isImageDragging ? "grabbing" : "grab",
            }}
            alt="photo"
            onMouseDown={handleImageMouseDown}
            onMouseMove={handleImageMouseMove}
            onMouseUp={handleImageMouseUpOrLeave}
            onMouseLeave={handleImageMouseUpOrLeave}
            onDragStart={(e) => e.preventDefault()}
          />
        </div>
        <div
          className={`absolute flex justify-center bottom-0 py-2 z-[105] transition-all ${
            !showscrollBox && "translate-y-28"
          }`}
        >
          <button
            className={`absolute px-10 py-1 z-10 bg-white text-white bg-opacity-5 hover:bg-opacity-5 opacity-50 hover:opacity-100 transition-all rounded-md ${
              showscrollBox ? "top-[-20px]" : " top-[-30px]"
            }`}
            onClick={() => setShowscrollBox(() => !showscrollBox)}
          >
            <FaArrowDown
              className={`transition-all ${!showscrollBox && "rotate-180"}`}
            />
          </button>

          <div
            ref={scrollBoxRef}
            className={`scrollBox flex gap-1 px-5 py-2 overflow-x-auto ${optionClass} ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
          >
            {images.map((imgSrc, index) => (
              <img
                key={index}
                id={`thumbnail-${index}`}
                src={imgSrc}
                alt={`Gallery Image ${index + 1}`}
                className={`gallery-image h-20 origin-center shadow-md ${
                  currentIndex - 1 == index &&
                  "border-2 border-transparent ring ring-white scale-110 mx-2 rounded-md"
                }`}
                onClick={() => {
                  setCurrentIndex(index + 1);
                  scrollToThumbnail(index);
                }}
                onDragStart={(e) => e.preventDefault()}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
