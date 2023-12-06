import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";

const Team = () => {
  return (
    <>
      <div className="my-40" id="team">
        <div className="flex justify-center items-center text-sky-500 text-xl font-semibold">
          TEAM
        </div>
        <div className="flex justify-center items-center text-black/80 font-bold text-4xl sm:text-6xl my-4">
          Meet The Team
        </div>
        <div className="flex flex-col justify-center items-center my-4 gap-1">
          <p className="bg-sky-500 h-[3px] w-36"></p>
          <p className="bg-sky-500 h-[3px] w-28"></p>
        </div>

        <div className="px-6 sm:px-16 md:px-28  2xl:px-[136px] lg:px-[72px] mt-10 flex flex-col lg:gap-0 gap-10">
          <div className="flex  justify-start  2xl:px-24">
            <div className="flex bg-sky-50 sm:w-fit  sm:flex-row  w-full flex-col">
              <div className="w-full py-14 flex flex-col justify-center items-center">
                <div className="text-xl font-semibold text-black/80 flex justify-center items-center w-full">
                  ENGR. RANA MAHMOOD
                </div>
                <div className="text-xl font-semibold text-black/80 flex justify-center items-center  w-full">
                  ARSHAD NAEEM
                </div>
                <p className="text-[#818491] italic tracking-wider text-lg my-1">
                  CHAIRMAN
                </p>
                <p className="text-[#818491]  tracking-wider text-lg ">
                  PEC: CIVIL-9179
                </p>
                <div className="text-[#818491] tracking-wider text-lg flex justify-center items-center  w-full">
                  BSc. Civil Engineering
                </div>
              </div>

              <div className="w-full">
                <img
                  src="https://hashuudev-solar-site.netlify.app/img/team-333.jpg"
                  alt=""
                  className="sm:h-80"
                />
              </div>
            </div>
          </div>

          <div className="flex  justify-end lg:px-4 2xl:px-10">
            <div className="flex bg-sky-50 sm:w-fit sm:flex-row w-full flex-col">
              <div className="w-full">
                <img
                  src="https://hashuudev-solar-site.netlify.app/img/team-1.jpeg"
                  alt=""
                  className="sm:h-80 sm:w-80"
                />
              </div>
              <div className="w-full flex flex-col justify-center items-center px-1 py-4">
                <div className="text-xl font-semibold text-black/80">
                  ENGR. RANA SARMAD
                </div>
                <div className="text-xl font-semibold text-black/80">
                  MAHMOOD
                </div>
                <p className="text-[#818491] italic tracking-wide text-lg my-1">
                  CEO & Founder
                </p>
                <p className="text-[#818491]  tracking-wide text-lg ">
                  PEC: ELECTRO-21192
                </p>
                <p className="text-[#818491] tracking-wide text-lg">
                  BSc. Electronic Engineering
                </p>
                <p className="text-[#818491]  tracking-wide text-lg">
                  MSc. Electrical Engineering
                </p>
                <p className="text-[#818491]  tracking-wide text-lg">
                  PhD. Electrical Engineering
                </p>
                <p className="text-[#818491]  tracking-wide text-lg">
                  ( Cont. )
                </p>

                <div className="flex justify-center  items-center gap-2 mt-3">
                  <button className="text-sky-500 border-2 border-sky-500 w-10 h-10 flex justify-center items-center">
                    <AiOutlineTwitter size={28} />
                  </button>
                  <button className="text-sky-500 border-2 border-sky-500 w-10 h-10 flex justify-center items-center">
                    <BiLogoFacebook size={28} />
                  </button>
                  <button className="text-sky-500 border-2 border-sky-500 w-10 h-10 flex justify-center items-center">
                    <BiLogoLinkedin size={28} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            className="flex  justify-start
        
        2xl:px-24"
          >
            <div className="flex bg-sky-50 w-full  sm:w-fit sm:flex-row flex-col">
              <div className="w-full py-4 flex flex-col justify-center items-center">
                <div className="text-xl font-semibold text-black/80">
                  ENGR. RANA MAHMOOD
                </div>
                <div className="text-xl font-semibold text-black/80">
                  ARSHAD NAEEM
                </div>
                <p className="text-[#818491] italic tracking-wider text-lg my-1">
                  CHAIRMAN
                </p>
                <p className="text-[#818491]  tracking-wider text-lg ">
                  PEC: CIVIL-9179
                </p>
                <p className="text-[#818491] tracking-wider text-lg">
                  BSc. Civil Engineering
                </p>

                <div className="flex justify-center  items-center gap-2 mt-3">
                  <button className="text-sky-500 border-2 border-sky-500 w-10 h-10 flex justify-center items-center">
                    <BiLogoFacebook size={28} />
                  </button>
                </div>
              </div>

              <div className="w-full">
                <img
                  src="https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg"
                  alt=""
                  className="sm:h-80 sm:w-80"
                />
              </div>
            </div>
          </div>
          <div className="flex  justify-end 2xl:px-10">
            <div className="flex bg-sky-50 w-full sm:w-fit sm:flex-row flex-col">
              <div className="w-full">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/400px-Pierre-Person.jpg"
                  alt=""
                  className="sm:h-80 sm:w-80 w-full"
                />
              </div>
              <div className="w-full flex flex-col justify-center items-center px-3 py-4">
                <div className="text-xl font-semibold text-black/80">
                  ENGR. RANA SARMAD
                </div>
                <div className="text-xl font-semibold text-black/80">
                  MAHMOOD
                </div>
                <p className="text-[#818491] italic tracking-wide text-lg my-1">
                  CEO & Founder
                </p>
                <p className="text-[#818491]  tracking-wide text-lg ">
                  PEC: ELECTRO-21192
                </p>
                <p className="text-[#818491] tracking-wide text-lg">
                  BSc. Electronic Engineering
                </p>
                <p className="text-[#818491]  tracking-wide text-lg">
                  MSc. Electrical Engineering
                </p>
                <p className="text-[#818491]  tracking-wide text-lg">
                  PhD. Electrical Engineering
                </p>
                <p className="text-[#818491]  tracking-wide text-lg">
                  ( Cont. )
                </p>

                <div className="flex justify-center  items-center gap-2 mt-3">
                  <button className="text-sky-500 border-2 border-sky-500 w-10 h-10 flex justify-center items-center">
                    <BiLogoFacebook size={28} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
