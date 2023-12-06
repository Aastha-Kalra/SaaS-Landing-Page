import React from "react";

const Feature = () => {
  return (
    <div id="features" className="pb-44">
      <div className="bg-gray-50 w-full py-20 h-full flex flex-col justify-center items-center lg:px-10 gap-5  font-semibold ">
        <div className="text-5xl font-extrabold text-black/80">
          Why Choose Us
        </div>
        <div className="flex justify-center items-center text-black/50 text-xl w-2/3 text-center">
          Overall,We stands out with its comprehensive range of services, a
          skilled team, customer-centric approach, and a commitment to
          delivering high-quality products and services.
        </div>
        <div className="flex flex-col justify-center items-center">
          <hr className="bg-sky-500 h-1 w-40" />
          <hr className="bg-sky-500 h-1 w-24 mt-[2px]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-80  lg:gap-5 lg:px-10 mt-10 ">
          {/* 1 */}
          <div className="relative">
            <img
              src="https://bluebirdsolar.com/cdn/shop/articles/poly-panel-phase-out-min.jpg?v=1698670718"
              alt=""
              className="rounded w-full h-64"
            />

            <div className="bg-white py-10 px-5 flex flex-col justify-center items-center absolute top-44 rounded-md mx-5  shadow-lg">
              <h1 className="text-4xl">Solar System</h1>
              <p className="py-8 text-xl text-center font-normal text-black/60">
                Expertise in designing, manufacturing, and installing solar
                energy systems. Utilizes cutting-edge technology for efficient
                and reliable solar solutions.
              </p>
              <button className="px-8 py-3 rounded border-2 border-sky-500 text-xl text-sky-500 font-normal hover:bg-indigo-900 hover:text-white">
                Read More
              </button>
            </div>
          </div>

          {/* 2 */}
          <div className="relative">
            <img
              src="https://m.media-amazon.com/images/I/417NEIQeM-L._SX300_SY300_QL70_FMwebp_.jpg"
              alt=""
              className="rounded w-full h-64"
            />

            <div className="bg-white py-10 px-5 flex flex-col justify-center items-center absolute top-44 rounded-md mx-5  shadow-lg">
              <h1 className="text-4xl">CCTV Setup</h1>
              <p className="py-8 text-xl text-center font-normal text-black/60">
                Specialization in the installation and maintenance of CCTV
                systems. Experienced professionals ensure effective surveillance
                solutions.
              </p>
              <button className="px-8 py-3 rounded border-2 border-sky-500 text-xl text-sky-500 font-normal hover:bg-indigo-900 hover:text-white">
                Read More
              </button>
            </div>
          </div>
          {/* 3 */}
          <div className="relative">
            <img
              src="https://www.theforage.com/blog/wp-content/uploads/2022/07/Depositphotos_4368723_L-1024x724.jpg"
              alt=""
              className="rounded w-full h-64"
            />

            <div className="bg-white py-10 px-5 flex flex-col justify-center items-center absolute top-44 rounded-md mx-5  shadow-lg">
              <h1 className="text-4xl">Networking</h1>
              <p className="py-8 text-xl text-center font-normal text-black/60">
                Proficiency in data communication and networking solutions.
                Skilled network engineering team for design, installation, and
                maintenance.
              </p>
              <button className="px-8 py-3 rounded border-2 border-sky-500 text-xl text-sky-500 font-normal hover:bg-indigo-900 hover:text-white">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
