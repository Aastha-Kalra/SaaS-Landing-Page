import React, { useRef, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const Images = [
  {
    imageUrl: "https://www.observerdawn.com/assets/Corporate%20Office.jpg",
  },
  {
    imageUrl:
      "https://akm-img-a-in.tosshub.com/businesstoday/images/story/201911/vikram_solar_660_110319024126.jpg",
  },
  {
    imageUrl:
      "https://www.iamrenew.com/wp-content/uploads/2018/06/tata-power-solar-logo-1280x720.jpg",
  },
  {
    imageUrl:
      "https://www.theforage.com/blog/wp-content/uploads/2022/06/Deloitte.jpg",
  },
];
let count = 0;
const Clients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef();
  const handlePrev = () => {
    const productsLength = Images.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  const handleNext = () => {
    count = (count + 1) % Images.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  return (
    <div className="w-full h-full pb-4 mt-44 " id="clients">
      <div className="bg-gray-50 w-full py-20 h-full flex flex-col justify-center items-center gap-5  font-semibold lg:px-64">
        <div className="text-5xl font-extrabold text-black/80">Our Clients</div>
        <div className="flex flex-col justify-center items-center">
          <hr className="bg-sky-500 h-1 w-40" />
          <hr className="bg-sky-500 h-1 w-24 mt-[2px]" />
        </div>
        <div ref={slideRef} className="w-full h-full relative">
          <div className="">
            <img
              src={Images[currentIndex].imageUrl}
              alt=""
              className="w-full h-64 rounded-xl"
            />
          </div>
          <div className="absolute w-full top-1/2  flex justify-between">
            <button
              onClick={handlePrev}
              className="text-white font-bolder text-4xl px-4 py-4 bg-blue-500/40"
            >
              <IoIosArrowBack />
            </button>
            <button
              onClick={handleNext}
              className="text-white font-bolder text-4xl bg-blue-500/40 px-4 py-4"
            >
              {" "}
              <IoIosArrowForward />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
