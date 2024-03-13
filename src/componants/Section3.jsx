import React from "react";

import dotsGreen from "../assets/images/dotsGreen.svg";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";

const Section3 = () => {
  return (
    <section className="text-black relative flex justify-center items-center flex-col md:flex-row w-full my-28">
      <div className="container w-full h-full flex  justify-center items-center flex-col gap-20 lg:flex-row lg:gap-20 px-7">
        <img
          src={dotsGreen}
          alt="dot-svg"
          className="absolute w-[200px] sm:w-fit top-[-50px] left-1 sm:left-6 sm:top-[-50px]"
        />
        <div className="    box-border w-full h-full     rounded-md  flex justify-start items-start  ">
          <div className="flex relative justify-between items-center  ">
            <div className="  w-[65%] pb-32  top-0 left-0">
              <img
                src={img1}
                alt="why-choose-us"
                className="rounded-3xl  z-10 w-full"
              />
            </div>
            <div className="  w-[30%]  absolute top-0 right-0">
              <img
                src={img2}
                alt="why-choose-us"
                className="rounded-3xl  z-10 w-full"
              />
            </div>

            <div className="  w-[46%]  absolute bottom-[50px] right-0">
              <img
                src={img3}
                alt="why-choose-us"
                className="rounded-3xl  z-10 w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-start items-start flex-col gap-6 w-2/3">
          <h2 className="text-black font-bold text-2xl sm:text-4xl">
            We Help You Make Modern Interior Design{" "}
          </h2>
          <p className="text-gray-400">
            Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis
            nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate
            velit imperdiet dolor tempor tristique. Pellentesque habitant morbi
            tristique senectus et netus et malesuada
          </p>
          <div className="grid grid-cols-2 grid-rows-2 gap-6 text-gray-400 relative">
            <div className="relative">
              <div className="circle p-4">
                Donec vitae odio quis nisl dapibus malesuada
              </div>
            </div>

            <div className="relative">
              <div className="circle p-4">
                Donec vitae odio quis nisl dapibus malesuada
              </div>
            </div>
            <div className="relative">
              <div className="circle p-4">
                Donec vitae odio quis nisl dapibus malesuada
              </div>
            </div>
            <div className="relative">
              <div className="circle p-4">
                Donec vitae odio quis nisl dapibus malesuada
              </div>
            </div>
          </div>
          <button className="px-7 w-auto py-3  rounded-full font-bold text-white bg-black">
            Explore
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section3;
