import React from "react";

const About = () => {
  return (
    <div
      className="py-32 px-2  sm:px-16 2xl:px-40 flex lg:flex-row flex-col justify-center gap-7 mt-16"
      id="about"
    >
      <div className="">
        <img
          src="https://hashuudev-solar-site.netlify.app/img/about-us.jpeg"
          alt=""
          className="w-[50em]"
        />
      </div>
      <div className="w-full">
        <p className="text-xl text-sky-500 lg:-mt-16">ABOUT US</p>
        <h1 className="text-4xl xl:text-5xl 2xl:text-[52px] font-bold text-sky-500 my-2">
          9+ Years' Experience
          <span className="text-black/80"> In</span>
        </h1>
        <h1 className="text-5xl 2xl:text-[52px] font-bold text-black/80 mb-2 ">
          Solar Power Industry
        </h1>
        <p className=" text-justify text-slate-400 text-lg block 2xl:pr-24">
          United Elite Smart Energy (PVT.) LTD. (UESE) specializes in the
          manufacturing, modification, maintenance & Installation of Solar
          System, CCTV Setup, Data Communication and Networking. UESE takes
          pride to have a dedicated team of professionals, with a vast industry
          experience in the Solar Installation, CCTV Installation and Network
          Engineering. The UESE customer-oriented culture motivates our
          employees to do their best for our customers, and has eventually
          earned UESE, the acknowledgment appreciation, and above all the
          satisfaction of our valued customers. UESE holds an excellent design
          department, staffed with the qualified Engineers cooperating in
          excellent technical environment and highly skilled technicians. Our
          state-of-the-art manufacturing unit has resulted in the production of
          flawless products with complete guarantee and reliability.
        </p>
        <div className="mt-5 flex  sm:flex-row flex-col  gap-2 px-7 ">
          <button className="bg-sky-500 px-12 text-white py-4 hover:bg-sky-600 text-xl  font-semibold">
            Read More
          </button>
          <button className="bg-sky-500 px-12 text-white py-4 hover:bg-sky-600 text-xl  font-semibold">
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
