import React from "react";
import sofa from "../assets/images/sofa.png";
import mail from "../assets/images/mail.svg";
import send from "../assets/images/send.svg";

const Section7 = () => {
  return (
    <section className="py-36 relative box-border px-7 lg:px-7 bg-white  w-full text-[#3B5D50] flex justify-center items-center ">
      <img
        src={sofa}
        alt="sofa"
        className="w-[350px]  absolute right-[10%] top-[-10%] sm:top-[-15%] md:top-[-15%] lg:top-[-16%] xl:top-[-19%]"
      />
      <div className="container relative w-full flex justify-start items-start flex-col gap-5 divide-y ">
        {/* <div className="absolute right-0 top-0 "> */}

        {/* </div> */}
        <div className="flex justify-start items-start flex-col gap-6 z-10">
          <div className="flex justify-start items-start flex-col gap-6 z-10">
            <p className="flex justify-start items-center gap-3 text-xl">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-mail fill-[#3b5d50]"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                {/* <img src={mail} alt="mail" /> */}
              </span>
              Subscribe to Newsletter
            </p>
            <div className="flex justify-center items-start gap-4 flex-col md:flex-row">
              <div className="px-4 py-3 border border-gray-400 text-sm rounded-lg ">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="outline-none w-60 placeholder-[#3B5D50]"
                />
              </div>
              <div className="px-4 py-3 border border-gray-400 text-sm rounded-lg ">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="outline-none w-60 placeholder-[#3B5D50]"
                />
              </div>
              <button className="px-7 py-3 bg-[#3B5D50] rounded-lg ">
                {" "}
                <svg
                  classname="fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-send"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
                {/* <img src={send} className="fill-white" alt="send" /> */}
              </button>
            </div>
          </div>
          <div className="flex justify-start items-start flex-col text-gray-700 gap-9">
            <h2 className="text-[#3b5d50] text-3xl font-semibold">Furni</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2  gap-10 sm:gap-7">
              <div className="flex flex-col justify-start items-start gap-7 ">
                <p className="text-gray-700">
                  Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                  odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                  Aliquam vulputate velit imperdiet dolor tempor tristique.
                  Pellentesque habitant
                </p>
                <div className="flex justify-start items-start gap-6">
                  <div className="p-3 bg-[#dce5e4] rounded-full">
                    <svg
                      className="fill-[#3b5d50]"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z"></path>
                    </svg>
                  </div>
                  <div className="p-3 bg-[#dce5e4] rounded-full">
                    <svg
                      className="fill-[#3b5d50]"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z"></path>
                    </svg>
                  </div>
                  <div className="p-3 bg-[#dce5e4] rounded-full">
                    <svg
                      className="fill-[#3b5d50]"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
                    </svg>
                  </div>
                  <div className="p-3 bg-[#dce5e4] rounded-full">
                    <svg
                      className="fill-[#3b5d50]"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div>About us</div>
                <div>Support</div>
                <div>Jobs</div>
                <div>Nordic Chair</div>
                <div>Services</div>
                <div>Knowledge base</div>
                <div>Our team</div>
                <div>Kruzo Aero</div>
                <div>Blog</div>
                <div>Live chat</div>
                <div>Leadership</div>
                <div>Ergonomic Chair</div>
                <div>col1</div>
                <div>Contact us</div>
                <div>Privacy Policy</div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 py-8 w-full justify-center items-center">
          <div className="text-gray-600 text-center">
            Copyright ©2024. All Rights Reserved. — Designed with love by
            Untree.co
          </div>
          <div className="flex justify-center items-center gap-6 text-center">
            {" "}
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
