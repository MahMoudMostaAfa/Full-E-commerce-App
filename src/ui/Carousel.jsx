import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Carousel({ images }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    // console.log("Interval started");
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => {
      // console.log("Interval cleared");
      clearInterval(interval);
    };
  }, []);
  return (
    <div
      role="carousel"
      className="bg-slate-400 w-[80%] shadow-md  h-[20rem] relative overflow-hidden"
    >
      <div className="absolute capitalize flex justify-center flex-col z-50 top-0 left-0 text-white font-bold h-full w-[30%] gap-4 text-center  text-3xl">
        <h3>Up to 10% off Voucher</h3>
        <Link
          to="/products"
          className="text-white capitalize underline-offset-[10px] underline"
        >
          shop now
        </Link>
      </div>
      <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-black to-transparent z-30  "></div>
      {images.map((image, indx) => (
        <div
          key={indx}
          role="carousel-item"
          style={{
            left: `${-indx * 100}%`,
            transform: `translateX(${currentImage * 100}%)`,
          }}
          className={` 
       absolute top-0  w-full  transition-all duration-500  h-full 
       max-h-full bg-slate-500 overflow-hidden  grayscale-[80%] `}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="object-cover h-full w-full"
          />
        </div>
      ))}
      <div className="absolute bottom-[5px] z-50 left-1/2 translate-x-[-50%]  flex items-center gap-2 ">
        {images.map((image, indx) => (
          <button
            onClick={() => setCurrentImage(indx)}
            key={indx}
            className={` ${
              currentImage === indx
                ? "  border-white border-[2px] bg-Secondary2"
                : "bg-gray-600"
            }   h-4 w-4 rounded-full cursor-pointer transition-colors duration-500`}
          >
            {" "}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
