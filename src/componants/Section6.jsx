import React from "react";
import post1 from "../assets/images/post1.jpg";
import post2 from "../assets/images/post2.jpg";
import post3 from "../assets/images/post3.jpg";

const Section6 = () => {
  return (
    <section className="pt-5 pb-10 px-5 sm:px-8 w-full flex justify-center items-center my-20">
      <div className="container flex justify-center items-center text-black flex-col gap-12">
        <div className="flex justify-between items-center text-black flex-col gap-3 md:flex-row w-full file:">
          <span className="text-2xl font-bold text-black">Recent Blog</span>
          <a className="text-black font-bold underline cursor-pointer">
            View All Posts
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-7">
          <div className="flex flex-col justify-center items-center gap-2 cursor-pointer">
            <img src={post1} className="rounded-xl" alt="img" />
            <h3 className="font-semibold text-lg text-gray-700">
              First Time Home Owner Ideas
            </h3>
            <p className="text-gray-500 text-sm">
              by <strong className=" text-gray-700  ">Kristin Watson</strong> on{" "}
              <strong className="text-gray-700 ">Dec 19, 2021</strong>
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 cursor-pointer">
            <img src={post2} className="rounded-xl" alt="img" />
            <h3 className="font-semibold text-lg text-gray-700">
              How To Keep Your Furniture Clean{" "}
            </h3>
            <p className="text-gray-500 text-sm">
              by <strong className=" text-gray-700  ">Robert Fox</strong> on{" "}
              <strong className="text-gray-700 ">Dec 15, 2021</strong>
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 cursor-pointer ">
            <img src={post3} className="rounded-lg" alt="img" />
            <h3 className="font-semibold text-lg text-gray-700">
              Small Space Furniture Apartment Ideas{" "}
            </h3>
            <p className="text-gray-500 text-sm ">
              by <strong className=" text-gray-700  ">Kristin Watson</strong> on{" "}
              <strong className="text-gray-700 ">Dec 12, 2021</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
