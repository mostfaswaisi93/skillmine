import React, { useState } from "react";
import { Footer, Navbar } from "../components";
import StarRatings from "react-star-ratings";

import { Link } from "react-router-dom";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import {
  RiArrowRightLine,
  RiArrowLeftLine,
} from "react-icons/ri";
import { FaTrashAlt } from "react-icons/fa";

import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import { FreeMode, Pagination, Navigation } from "swiper/modules";

const Categories = [];

const Cart = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-10">
      <h1 className="text-xl md:text-2xl font-bold mb-3 md:mb-6 text-gray-800">Shopping Cart</h1>
      <div className="grid grid-cols1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex flex-col md:flex-row items-start md:justify-between p-3 bg-white rounded-md">
            <div className="flex items-center gap-6">
              <img src="" className="w-34 h-30 object-cover rounded-md" alt="" />
              <div>
                <h1 className="text-lg font-semibold"></h1>
                <p className="text-gray-600 text-sm"></p>
                <p className="text-md font-semibold mt-1"></p>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <button className="bg-gray-200 p-2 rounded-md cursor-pointer">

              </button>
              <span className="text-md font-medium"></span>
              <button className="bg-gray-200 p-2 rounded-md cursor-pointer"></button>
              <button className="text-red-500 hover:text-red-700 cursor-pointer "></button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start md:justify-between p-3 bg-white rounded-md"></div>
          <div className="flex flex-col md:flex-row items-start md:justify-between p-3 bg-white rounded-md"></div>
          <div className="flex flex-col md:flex-row items-start md:justify-between p-3 bg-white rounded-md"></div>
        </div>
        <div className="bg-white rounded-md h-fit p-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between text-gray-700 mb-2">
              <span>Subtotal</span>
              <span></span>
            </div>
            <div className="flex justify-between text-gray-700 mb-2">
              <span>Discount</span>
              <span className="text-green-600"></span>
            </div>
            <div className="flex justify-between text-gray-700 mb-2">
              <span>VAT(5%)</span>
              <span></span>
            </div>
            <hr className="my-3" />
            <div className="flex justify-between text-lg semibold">
              <span>Total</span>
              <span></span>
            </div>
            <button className="mt-6 w-full bg-purple-600 text-white py-3 rounded-md text-lg font-medium hover:bg-purple-700 transition cursor-pointer">
              Proceed to Checkout
            </button>
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center gap-0 w-full mt-10 py-10">
          <h2 className="text-xl md:text-2xl font-bold mb-3 text-gray-800 text-start w-full">You also viewed</h2>
          <Swiper
          spaceBetween={20}
          freeMode={false}
          autoplay={{
              enabled: true,
              delay: 200,
              disabledOnInteraction: false,
          }}
          loop={true}
          navigation={{
              enabled: true,
              nextEl: ".next-btn",
              prevEl: ".prev-btn"
          }}
          modules={[FreeMode, Pagination, Navigation]}
          className="w-full p-5"
          breakpoints={{
          540: {slidesPerView: 1},
          768: {slidesPerView: 2},
          1024: {slidesPerView: 2},
          1280: {slidesPerView: 3},
          }}
          >
          {/* {viewed.map((view, index) => (
          <SwiperSlide key={index} className="flex mb-6">
              <div className="bg-white border border-gray-100 rounded-md p-4">
                  <img src={view.img} className="w-full h-32 object-cover rounded-md" alt="course" />
                  <h3 className="text-md font-medium mt-3">{view.title}</h3>
                  <p className="text-gray-600 text-sm mt-3">{view.tutorName}</p>
                  <p className="text-md font-medium mt-1">$29.99</p>
                  <button className="mt-3 w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-700 transition cursor-pointer">
                      Add to Cart
                  </button>
              </div>
          </SwiperSlide>
          ))} */}
          </Swiper>
          <div className="flex gap-10">
              <button className="prev-btn cursor-pointer bg-purple-500 rounded-full p-2">
                  <RiArrowLeftLine color="white" size={29} />
              </button>
              <button className="next-btn cursor-pointer bg-purple-500 rounded-full p-2">
                  <RiArrowRightLine color="white" size={29} />
              </button>
          </div>
      </div>
    </div>
  );
};

export default Cart;
