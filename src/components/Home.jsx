import React, { useEffect, useRef, useState } from "react";
import {IoIosArrowBack} from 'react-icons/io'
import {IoIosArrowForward} from 'react-icons/io'
import {IoIosArrowDown} from 'react-icons/io'
const Images = [ 

    {
        imageUrl: 'https://hashuudev-solar-site.netlify.app/img/carousel-1.jpg',
        altText: 'Image 1',
        title1: 'UNITED ELITE SMART ENERGY',
        title2:'PVT-LTD',
        des1: ' We Impart Energy, Vitality and Spirit To Other People. We Act and Get',
        des2:'  The Things Done For Valuable Client.'
      },
      {
        imageUrl: 'https://hashuudev-solar-site.netlify.app/img/carousel-2.jpg',
        altText: 'Image 2',
        title1: 'UNITED ELITE SMART ENERGY',
        title2:'PVT-LTD',
        des1:'Let The Sun Work For Your Home'
      },
];
let count = 0;
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();
  const removeAnim = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnim);
    startSlider();
  });
  const startSlider = () => {
    setInterval(() => {
      handleNext();
      handlePrev();
    }, 8000);
  };
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
    <div className="w-full h-full pb-4" id="home">

  
    <div ref={slideRef}  className="w-full h-full relative" >
      <div  className="" >
        <img src={Images[currentIndex].imageUrl} alt="" className="w-full h-screen" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center"  >
        <div className="bg-black bg-opacity-50 p-4 rounded-lg text-white w-full h-full flex flex-col justify-center items-center" id="home">
          <h2 className="lg:text-6xl font-semibold 
          text-2xl sm:text-4xl md:text-5xl"> {Images[currentIndex].title1}  </h2>
          <h2 className=" text-3xl sm:text-5xl lg:text-6xl font-semibold my-2">   {Images[currentIndex].title2}  </h2>
          <p className="lg:text-[27px] font-semibold mt-4 text-xl md:text-2xl text-center">
          {Images[currentIndex].des1}  
          </p>
          <p className=" text-xl sm:text-3xl font-semibold ">
          {Images[currentIndex].des2}  
          </p>
          <button className="bg-white hover:bg-gray-100 text-black px-14 py-5 mt-10 text-xl">
            Get A Quote
          </button>

          <div className="absolute bottom-16 font-bold text-4xl arrow"><IoIosArrowDown/></div>
          
        </div>
      </div>

      <div className="absolute w-full top-1/2  flex justify-between">
        <button onClick={handlePrev} className="text-white font-bolder text-4xl px-4 py-4 bg-blue-500/40"><IoIosArrowBack/></button>
        <button onClick={handleNext} className="text-white font-bolder text-4xl bg-blue-500/40 px-4 py-4" > <IoIosArrowForward/> </button>
      </div>
    </div>
    </div>
  );
};

export default Carousel;
