import React from "react";
import product1 from "../assets/images/product1.png";
import product2 from "../assets/images/product2.png";
import product3 from "../assets/images/product3.png";

import cross from "../assets/images/cross.svg";

const Section1 = () => {
  return (
    <section className="text-black flex justify-center items-center flex-col md:flex-row w-full my-6">
      <div className="container w-full flex justify-center items-center gap-6 flex-wrap">
        <div className="w-full text-center  flex flex-wrap gap-6 justify-center items-center">
          <div className=" flex w-[300px] flex-col justify-center items-center gap-6">
            <h2 className="text-lg font-bold">
              Crafted with excellent material.
            </h2>
            <p className="text-sm">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <button className="px-7 w-auto py-3  rounded-full font-bold text-white bg-black">
              Explore
            </button>
          </div>

          <div className="w-[300px]">
            <a className="no-underline product-item">
              <img
                src={product1}
                className="product-thumbnail "
                style={{ width: "100%" }}
              />
              <h3 class="product-title">Nordic Chair</h3>
              <strong class="product-price">$50.00</strong>
            </a>
          </div>
          <div className="w-[300px]">
            <a className="no-underline product-item">
              <img
                src={product2}
                className="product-thumbnail imgwidth"
                style={{ width: "100%" }}
              />
              <h3 class="product-title">Nordic Chair</h3>
              <strong class="product-price">$50.00</strong>
            </a>
          </div>
          <div className="w-[300px]">
            <a className="no-underline product-item">
              <img
                src={product3}
                className="product-thumbnail"
                style={{ width: "100%" }}
              />
              <h3 class="product-title">Nordic Chair</h3>
              <strong class="product-price">$50.00</strong>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
