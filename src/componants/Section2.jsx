import React from "react";
import truck from "../assets/images/truck.svg";
import bag from "../assets/images/bag.svg";
import support from "../assets/images/support.svg";
import rtn from "../assets/images/rtn.svg";
import dotsYellow from "../assets/images/dotsYellow.svg";
import whyimg from "../assets/images/whyimg.jpg";

const Section2 = () => {
  return (
    <section className="text-black flex justify-center items-center flex-col md:flex-row w-full my-6">
      <div className="container flex  justify-center items-center flex-col gap-20 lg:flex-row lg:gap-20 px-7">
        <div className="flex justify-start items-start flex-col gap-6 w-2/3">
          <h2 className="text-black font-bold text-2xl sm:text-4xl">
            Why Choose Us
          </h2>
          <p className="text-gray-400">
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
            velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>
          {/* <div className=" flex flex-wrap  w-full gap-3 "> */}
          <div className="grid grid-cols-2 grid-rows-2 gap-6">
            <div className="flex justify-start items-start flex-col gap-2 text-sm  sm:text-base ">
              <div className=" relative w-14 h-14 flex justify-center items-center  ">
                <img src={truck} className="z-10" />
                <div className="bg-[#CBD5C1] w-8 h-8  absolute bottom-[5px] right-0  rounded-full"></div>
              </div>
              <span className="text-black">Fast & Free Shipping</span>
              <p className="text-gray-400">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
            <div className="flex justify-start items-start flex-col gap-2 text-sm sm:text-base ">
              <div className=" relative w-14 h-14 flex justify-center items-center  ">
                <img src={bag} className="z-10" />
                <div className="bg-[#CBD5C1] w-8 h-8  absolute bottom-[5px] right-0  rounded-full"></div>
              </div>
              <span className="text-black">Easy to Shop </span>
              <p className="text-gray-400">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
            <div className="flex justify-start items-start flex-col gap-2 text-sm  sm:text-base ">
              <div className=" relative w-14 h-14 flex justify-center items-center  ">
                <img src={support} className="z-10" />
                <div className="bg-[#CBD5C1] w-8 h-8  absolute bottom-[5px] right-0  rounded-full"></div>
              </div>
              <span className="text-black">24/7 Support</span>
              <p className="text-gray-400">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
            <div className="flex justify-start items-start flex-col gap-2 text-sm  sm:text-base ">
              <div className=" relative w-14 h-14 flex justify-center items-center  ">
                <img src={rtn} className="z-10" />
                <div className="bg-[#CBD5C1] w-8 h-8  absolute bottom-[5px] right-0  rounded-full"></div>
              </div>
              <span className="text-black">Hassle Free Returns</span>
              <p className="text-gray-400">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full px-7 box-border lg:w-2/3  relative flex justify-center items-center rounded-md  ">
          <div className="flex  justify-center items-center w-full mt-36">
            <img
              src={whyimg}
              alt="why-choose-us"
              className="rounded-3xl z-10"
            />
            <img
              src={dotsYellow}
              alt="dot-svg"
              className="absolute top-20 left-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
