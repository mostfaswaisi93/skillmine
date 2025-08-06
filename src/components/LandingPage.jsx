import React, { useState } from "react";
import Navbar from "./Navbar";

import { Link } from "react-router-dom";
import { RiSearch2Line } from "react-icons/ri";
import heroBg from "../assets/school-bg.jpg";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div className="flex flex-col items-center justify-center relative min-h-[600px] sm:h-[100vh]">
          <img className="absolute w-full h-full z-10 object-cover" src={heroBg} alt="heroBg" />
          <div className="absolute z-10 w-full h-full bg-[#00000093]"></div>
          <div className="flex lg:flex-row flex-col items-center justify-center lg:justify-start gap-10 relative w-full h-full max-w-[1400px] p-3 sm:p-5 md:p-10">
            <div className="flex flex-col items-start text-start space-y-4 z-10">
              <p className="lg:text-3xl text-xl font-semibold text-white" style={{fontFamily: "poppins, sans-serif"}}>Join Us today to get</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold max-w-full lg:max-w-[800px] text-balance leading-[50px] md:leading-[80px]" style={{fontFamily: "poppins, sans-serif"}}>
                <span className="text-[#b958f5]">7,200+</span>
                 Courses Taught By
                <span className="text-[#b958f5]"> 720</span>
                 Top Instructors And Institutions
              </h1>
              <p className="md:text-2xl text-xl text-gray-50">Elevate your educational institution to new heights.</p>
              <form action="" className="flex lg:w-fit w-full relative mt-5">
                <input type="text" className="bg-white border border-gray-300 text-gray-700 outline-none w-full lg:min-w-[600px] pr-19 pl-4 py-5 rounded-[8px] placeholder:text-sm lg:placeholder:text-lg" placeholder="Search courses..." />
                <button className="absolute right-0 h-full bg-purple-600 px-5 rounded-tr-[8px] rounded-br-[8px] text-[1em] transition-ease-in-out duration-0.3s cursor-pointer">
                    <RiSearch2Line color="#fff" size={22} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
