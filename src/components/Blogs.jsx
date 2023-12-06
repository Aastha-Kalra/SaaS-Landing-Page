import React from "react";

const Blogs = () => {
  return (
    <div id="blogs" className="pb-44">
      <div className="bg-gray-50 w-full py-20 h-full flex flex-col justify-center items-center lg:px-10 gap-5  font-semibold ">
        <div className="text-5xl font-extrabold text-black/80">
          Our Latest Blogs
        </div>
        <div className="flex flex-col justify-center items-center">
          <hr className="bg-sky-500 h-1 w-40" />
          <hr className="bg-sky-500 h-1 w-24 mt-[2px]" />
        </div>

        <div className="grid  grid-cols-1 lg:grid-cols-3 gap-32  lg:gap-5 px-10 mt-10 ">
          {/* 1 */}
          <div className="relative">
            <img
              src="https://www.jakson.com/wp-content/uploads/2023/11/blog_banner_inverter-1536x890.png"
              alt=""
              className="rounded w-full h-64"
            />

            <div className="bg-white py-10 px-5 flex flex-col justify-center items-center absolute top-44 rounded-md mx-5  shadow-lg">
              <h1 className="text-xl">Government Incentives for Solar Rooftops in India</h1>
              <button className="px-8 py-3 mt-3 rounded border-2 border-sky-500 text-xl text-sky-500 font-normal hover:bg-indigo-900 hover:text-white">
                Read More
              </button>
            </div>
          </div>

          {/* 2 */}
          <div className="relative mb-10">
            <img
              src="https://www.jakson.com/wp-content/uploads/2023/08/Genset-pic.png"
              alt=""
              className="rounded w-full h-64 "
            />

            <div className="bg-white py-10 px-5 flex flex-col justify-center items-center absolute top-44 rounded-md mx-5  shadow-lg">
              <h1 className="text-xl">How CPCB IV+ emission standards will overhaul the Genset industry</h1>
             
              <button className="px-8 py-3 rounded border-2 border-sky-500 text-xl text-sky-500 font-normal mt-3 hover:bg-indigo-900 hover:text-white">
                Read More
              </button>
            </div>
          </div>
          {/* 3 */}
          <div className="relative">
            <img
              src="https://www.jakson.com/wp-content/uploads/2023/08/India-Energy-Vision-1140x660-1.jpeg"
              alt=""
              className="rounded w-full h-64"
            />

            <div className="bg-white py-10 px-5 flex flex-col justify-center items-center absolute top-44 rounded-md mx-5  shadow-lg">
              <h1 className="text-xl">India’s Renewable Energy Vision of 2030</h1>
             
              <button className="px-8 py-3 mt-3 rounded border-2 border-sky-500 text-xl text-sky-500 font-normal hover:bg-indigo-900 hover:text-white">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;