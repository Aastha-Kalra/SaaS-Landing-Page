import React, { useState, useEffect } from "react";
import { Link } from 'react-scroll';
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  };

  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={`${showNavbar ? 'bg-[#22395d]' : 'bg-[#55769f]'}  fixed top-0 lg:flex
        
        justify-around
        lg:justify-center items-center h-16 w-full  duration-300 ease-in-out text-white z-50 order-1`}
      >
        <div className="flex justify-between items-center  w-full px-4 py-3 lg:hidden">
          <div className="font-bold text-white text-3xl text-left">
            SMART ENERGY
          </div>
          <div className="text-3xl pt-3" onClick={() => setOpen(!open)}>
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
        </div>

        <div>
          <ul
            className={`lg:gap-5 items-center lg:justify-center flex  bg-[#22395d] h-fit flex-col lg:flex-row w-full mt-[4px] gap-16 lg:py-10 py-12  absolute
          lg:static
          z-[-1] lg:z-10 lg:text-xl text-2xl  transition-all duration-500 ease-in lg:bg-inherit ${
            open ? "top-14" : "top-[-790px]"
          }`}
          >
            <Link
              to="home"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer hover:text-sky-600"
            >
              HOME
            </Link>
            <Link
              to="about"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer hover:text-sky-600"
            >
              ABOUT
            </Link>
            <Link
              to="features"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer hover:text-sky-600"
            >
             FEATURES
            </Link>
            <Link
              to="clients"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer hover:text-sky-600"
            >
              CLIENTS
            </Link>
            <Link
              to=""
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="bg-sky-500 text-2xl font-bold px-4 py-1 cursor-pointer  hover:bg-sky-600
              hidden lg:block
              "
            >
              SMART ENERGY
            </Link>
            <Link
              to="team"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer hover:text-sky-600"
            >
              TEAM
            </Link>
            <Link
              to="blogs"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer hover:text-sky-600"
            >
            BLOGS
            </Link>
            <Link
              to="contact"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer hover:text-sky-600"
            >
              CONTACT US
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
