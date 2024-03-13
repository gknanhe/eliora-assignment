import React from "react";
import { FiUser } from "react-icons/fi";
import sofa from "../assets/images/couch.png";
import dotsGreen from "../assets/images/dotsGreen.svg";

import Navbar from "./Navbar.jsx";
const Hero = () => {
  return (
    <div className=" flex flex-wrap justify-center items-center h-full gap-14 bg-[#3B5D50] ">
      <Navbar />
      <header className="flex  px-5 py-5 sm:px-14 sm:py-14 w-full justify-center items-center  z-[20] ">
        <div className="container relative flex justify-center items-center  flex-col lg:flex-row ">
          <div className="flex   z-20 justify-center flex-wrap items-start gap-6 md:gap-12 flex-col">
            <div className="font-bold text-3xl  text-wrap text-center sm:text-2xl md:text-4xl lg:text-6xl">
              Modern Interior Design Studio
            </div>
            <div className="text-md text-gray-200">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptate excepturi et aut laudantium reprehenderit, quas
              voluptatem necessitatibus! Culpa, minima autem!
            </div>
            <div className="flex justify-start items-center gap-5">
              <button className="px-8 py-3 rounded-full bg-[#F9BF29] text-sm text-black ">
                Shop now
              </button>
              <button className="px-8 py-3 rounded-full border hover:bg-[#F9BF29] hover:text-black text-sm hover:border-none ">
                Explore
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center  w-full">
            <div className=" absolute top-0 right-0 sm:w-auto hidden lg:block w-full">
              <img src={dotsGreen} />
            </div>
            <div className="z-10 xl:absolute xl:top-[-50px]  right-0 xl:w-1/2">
              <img src={sofa} />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Hero;
