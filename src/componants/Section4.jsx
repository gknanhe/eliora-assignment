import React from "react";
import product1 from "../assets/images/product1.png";
import product2 from "../assets/images/product2.png";
import product3 from "../assets/images/product3.png";

const Section4 = () => {
  return (
    <section className="w-screen h-full flex justify-center items-center my-20">
      <div className="container w-screen h-full  flex  justify-center items-center ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 flex justify-center items-center relative gap-6">
            <div className="relative w-full">
              <div className="rounded-3xl absolute bottom-0 left-[20px] bg-[#dce5e4] w-[80%] h-[80%] z-0"></div>
              <img src={product1} alt="item1" className="z-10 relative" />
            </div>
            <div className="flex flex-col items-start justify-start gap-3">
              <h3 className="font-bold text-black">Nordic Chair</h3>
              <p className="text-gray-400">
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              </p>
              <span className="text-gray-500">Read More</span>
            </div>
          </div>
          <div className="p-4 flex justify-center items-center relative gap-6">
            <div className="relative w-full">
              <div className="rounded-3xl absolute bottom-0 left-[20px] bg-[#dce5e4] w-[80%] h-[80%] z-0"></div>
              <img src={product2} alt="item1" className="z-10 relative" />
            </div>
            <div className="flex flex-col items-start justify-start gap-3">
              <h3 className="font-bold text-black">Nordic Chair</h3>
              <p className="text-gray-400">
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              </p>
              <span className="text-gray-500">Read More</span>
            </div>
          </div>
          <div className="p-4 flex justify-center items-center relative gap-6">
            <div className="relative w-full">
              <div className="rounded-3xl absolute bottom-0 left-[20px] bg-[#dce5e4] w-[80%] h-[80%] z-0"></div>
              <img src={product3} alt="item1" className="z-10 relative" />
            </div>
            <div className="flex flex-col items-start justify-start gap-3">
              <h3 className="font-bold text-black">Nordic Chair</h3>
              <p className="text-gray-400">
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              </p>
              <span className="text-gray-500">Read More</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
