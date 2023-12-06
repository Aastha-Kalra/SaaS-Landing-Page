import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <div className="mt-10" id="contact">
      <div className="bg-[#22395d] w-full h-full pt-10 text-white 2xl:px-12 pb-4">
        <div className="md:grid lg:grid-cols-3 md:grid-cols-2 bg-[#293f62] 2xl:px-14 px-5 py-5 mt-16 flex flex-col gap-5">
          <div className="w-full">
            <h1 className="text-xl tracking-widest text-sky-500 font-semibold">
              OUR OFFICE
            </h1>
            <p className="text-lg">
              Near Masjid Al Ghaffar, Near Green Land <br />
              Marquee (Sheikh Farooq Farm House) MPS <br /> Road Multan ,
              Multan, Pakistan
            </p>
          </div>

          <div className=" flex-col items-center lg:block md:hidden">
            <h1 className="text-xl tracking-widest text-sky-500 font-semibold">
              EMAIL US
            </h1>
            <p className="text-lg">unitedgroupofcompanies4@gmail.com</p>
          </div>
          <div className="flex flex-col justify-start md:items-center md:justify-center">
            <h1 className="text-xl tracking-widest text-sky-500 font-semibold">
              CALL US
            </h1>
            <p className="text-lg">
              +92-300-1304030 <br />
              +92-313-2497777 <br />
              +92-322-8782745
            </p>
          </div>
        </div>
        <div className="mt-16 flex lg:flex-row
        flex-col justify-between px-8 gap-9" >
         <div className="flex justify-around md:flex-row flex-col gap-9 xl:gap-24">
         <div>
            <div className="flex gap-3">
              <button className="border-2 px-2 py-2 hover:bg-white hover:text-[#22395d]">
                <AiOutlineTwitter size={28} />
              </button>
              <button className="border-2 px-2 py-2 hover:bg-white hover:text-[#22395d]">
                <BiLogoFacebook size={28} />
              </button>
              <button className="border-2 px-2 py-2 hover:bg-white hover:text-[#22395d]">
                <BiLogoLinkedin size={28} />
              </button>
              <button className="border-2 px-2 py-2 hover:bg-white hover:text-[#22395d]">
                <BsInstagram size={28} />
              </button>
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="text-xl tracking-widest text-sky-500 font-semibold">
              OUR PRODUCTS
            </h1>
            <div className="flex justify-start items-start flex-col mt-3 gap-2">
              <a href="/" className="flex justify-start items-center text-lg hover:underline">
                <IoIosArrowForward />
                Solar Energy
              </a>
              <a href="/" className="flex justify-start items-center text-lg hover:underline">
                <IoIosArrowForward />
                CCTV Installations
              </a>
              <a href="/" className="flex justify-start items-center text-lg hover:underline">
                <IoIosArrowForward />
                Networking
              </a>
              <a href="/" className="flex justify-start items-center text-lg hover:underline">
                <IoIosArrowForward />
                Solar Imports
              </a>
              <a href="/" className="flex justify-start items-center text-lg hover:underline">
                <IoIosArrowForward />
                Engineering
              </a>
            </div>
          </div>
         </div>

          <div className="">
            <h1 className="text-xl tracking-widest text-sky-500 font-semibold ">
              NEWSLETTER
            </h1>

            <p className="text-lg my-4 w-full">
              This newsletter is under maintenance, We'll notify you <br className="lg:block hidden"/> when
              it'll store responses.
            </p>

            <div className="flex">
              <input
                type="text"
                className="h-16 px-4 w-full text-slate-600 focus:border-2 border-sky-600 focus:outline-none text-xl"
                placeholder="Your Email"
              />
              <button className="bg-sky-500 w-52 h-16 text-xl">Sign Up</button>
            </div>
          </div>
        </div>


        <hr  className="mt-24"/>
        <div className="flex justify-center items-center my-4 px-5">
            <p className="text-xl">
            © <span className="text-sky-500">United Elite Group of Companies.</span> All Rights Reserved. Designed by <span className=" text-sky-500"> HashuuDev</span>
            </p>



        </div>
      </div>
    </div>
  );
};

export default Footer;
