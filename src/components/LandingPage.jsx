import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { RiSearch2Line } from "react-icons/ri";
import "@fontsource/poppins";
import "@fontsource/poppins/700.css";
import heroBg from "../assets/school-bg.jpg";

import skillImg1 from "../assets/icons/essential-skills.png";
import skillImg2 from "../assets/icons/certificate.png";
import skillImg3 from "../assets/icons/career-upgrade.png";
import skillImg4 from "../assets/icons/career-master.png";

import category1 from "../assets/icons/art.png";
import category2 from "../assets/icons/graphic-design.png";
import category3 from "../assets/icons/marketing.png";
import category4 from "../assets/icons/programming.png";
import category5 from "../assets/icons/photography.png";
import category6 from "../assets/icons/music.png";
import category7 from "../assets/icons/data.png";
import category8 from "../assets/icons/budget.png";
import category9 from "../assets/icons/portfolio.png";
import category10 from "../assets/icons/dumbbell.png";
import category11 from "../assets/icons/fashion-design.png";
import category12 from "../assets/icons/science.png";

// import course1 from "../assets/courses/course1.png";
// import course2 from "../assets/courses/course2.png";
// import course3 from "../assets/courses/course3.png";
// import course4 from "../assets/courses/course4.webp";
// import course5 from "../assets/courses/course5.webp";
// import course6 from "../assets/courses/course6.png";
// import course7 from "../assets/courses/course1.png";
// import course8 from "../assets/courses/course2.png";
// import course9 from "../assets/courses/course3.png";

// import avatar1 from "../assets/avatar/course1.png";
// import avatar2 from "../assets/avatar/2.jpg";
// import avatar3 from "../assets/avatar/3.jpg";

const requirements = [
  {
    img: skillImg1,
    title: "Learn The Essential Skills"
  },
  {
    img: skillImg2,
    title: "Earn Certificates And Degrees"
  },
  {
    img: skillImg3,
    title: "Get Ready for the Next Career"
  },
  {
    img: skillImg4,
    title: "Master Different Areas"
  },
]

const categories = [
  {
    img: category1,
    title: "Art & Design"
  },
  {
    img: category2,
    title: "Graphic Design"
  },
  {
    img: category3,
    title: "Marketing"
  },
  {
    img: category4,
    title: "Developement"
  },
  {
    img: category5,
    title: "Photography"
  },
  {
    img: category6,
    title: "Music"
  },
  {
    img: category7,
    title: "Data Analysis"
  },
  {
    img: category8,
    title: "Finance"
  },
  {
    img: category9,
    title: "Buisness"
  },
  {
    img: category10,
    title: "Health & Fitness"
  },
  {
    img: category11,
    title: "Fashion"
  },
  {
    img: category12,
    title: "Science & Technology"
  },
]

// const courses = [
//   {
//     img: course8,
//     tutorAvatar: avatar1,
//     level: "pro",
//     title: "How to Build a Responsive Website Using React and Tailwind CSS",
//     price: "$19.00",
//     tutorName: "James Maximus",
//     tutorImg: avatar1,
//     canceledPrice: "$25.19",
//     courseInfo: "Arts & Design",
//     courseDiscount: "-10%",
//     rating: 4,
//     description: ""
//   },
//   {
//     img: course8,
//     tutorAvatar: avatar1,
//     level: "pro",
//     title: "How to Build a Responsive Website Using React and Tailwind CSS",
//     price: "$19.00",
//     tutorName: "James Maximus",
//     tutorImg: avatar1,
//     canceledPrice: "$25.19",
//     courseInfo: "Arts & Design",
//     courseDiscount: "-10%",
//     rating: 4,
//     description: ""
//   },
//   {
//     img: course8,
//     tutorAvatar: avatar1,
//     level: "pro",
//     title: "How to Build a Responsive Website Using React and Tailwind CSS",
//     price: "$19.00",
//     tutorName: "James Maximus",
//     tutorImg: avatar1,
//     canceledPrice: "$25.19",
//     courseInfo: "Arts & Design",
//     courseDiscount: "-10%",
//     rating: 4,
//     description: ""
//   },
//   {
//     img: course8,
//     tutorAvatar: avatar1,
//     level: "pro",
//     title: "How to Build a Responsive Website Using React and Tailwind CSS",
//     price: "$19.00",
//     tutorName: "James Maximus",
//     tutorImg: avatar1,
//     canceledPrice: "$25.19",
//     courseInfo: "Arts & Design",
//     courseDiscount: "-10%",
//     rating: 4,
//     description: ""
//   },
//   {
//     img: course8,
//     tutorAvatar: avatar1,
//     level: "pro",
//     title: "How to Build a Responsive Website Using React and Tailwind CSS",
//     price: "$19.00",
//     tutorName: "James Maximus",
//     tutorImg: avatar1,
//     canceledPrice: "$25.19",
//     courseInfo: "Arts & Design",
//     courseDiscount: "-10%",
//     rating: 4,
//     description: ""
//   },
//   {
//     img: course8,
//     tutorAvatar: avatar1,
//     level: "pro",
//     title: "How to Build a Responsive Website Using React and Tailwind CSS",
//     price: "$19.00",
//     tutorName: "James Maximus",
//     tutorImg: avatar1,
//     canceledPrice: "$25.19",
//     courseInfo: "Arts & Design",
//     courseDiscount: "-10%",
//     rating: 4,
//     description: ""
//   },
//   {
//     img: course8,
//     tutorAvatar: avatar1,
//     level: "pro",
//     title: "How to Build a Responsive Website Using React and Tailwind CSS",
//     price: "$19.00",
//     tutorName: "James Maximus",
//     tutorImg: avatar1,
//     canceledPrice: "$25.19",
//     courseInfo: "Arts & Design",
//     courseDiscount: "-10%",
//     rating: 4,
//     description: ""
//   },
//   {
//     img: course8,
//     tutorAvatar: avatar1,
//     level: "pro",
//     title: "How to Build a Responsive Website Using React and Tailwind CSS",
//     price: "$19.00",
//     tutorName: "James Maximus",
//     tutorImg: avatar1,
//     canceledPrice: "$25.19",
//     courseInfo: "Arts & Design",
//     courseDiscount: "-10%",
//     rating: 4,
//     description: ""
//   },
//   {
//     img: course8,
//     tutorAvatar: avatar1,
//     level: "pro",
//     title: "How to Build a Responsive Website Using React and Tailwind CSS",
//     price: "$19.00",
//     tutorName: "James Maximus",
//     tutorImg: avatar1,
//     canceledPrice: "$25.19",
//     courseInfo: "Arts & Design",
//     courseDiscount: "-10%",
//     rating: 4,
//     description: ""
//   },
// ]

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div className="flex flex-col items-center justify-center relative min-h-[600px] sm:h-[100vh]">
          <img
            className="absolute w-full h-full z-10 object-cover"
            src={heroBg}
            alt="heroBg"
          />
          <div className="absolute z-10 w-full h-full bg-[#00000093]"></div>
          <div className="flex lg:flex-row flex-col items-center justify-center lg:justify-start gap-10 relative w-full h-full max-w-[1400px] p-3 sm:p-5 md:p-10">
            <div className="flex flex-col items-start text-start space-y-4 z-10">
              <p
                className="lg:text-3xl text-xl font-semibold text-white"
                style={{ fontFamily: "poppins, sans-serif" }}
              >
                Join us today and get
              </p>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl text-white font-bold max-w-full lg:max-w-[800px] text-balance leading-[50px] md:leading-[80px]"
                style={{ fontFamily: "poppins, sans-serif" }}
              >
                <span className="text-[#b958f5]">7,200+</span> Courses Taught By{""}
                <span className="text-[#b958f5]"> 720</span> Top Instructors And Institutions
              </h1>
              <p className="md:text-2xl text-xl text-gray-50">
                Elevate your educational institution to new heights.
              </p>
              <form action="" className="flex lg:w-fit w-full relative mt-5">
                <input
                  type="text"
                  className="bg-white border border-gray-300 text-gray-700 outline-none w-full lg:min-w-[600px] pr-19 pl-4 py-5 rounded-[8px] placeholder:text-sm lg:placeholder:text-lg"
                  placeholder="Search courses..."
                />
                <button className="absolute right-0 h-full bg-purple-600 px-5 rounded-tr-[8px] rounded-br-[8px] text-[1em] transition-ease-in-out duration-0.3s cursor-pointer">
                  <RiSearch2Line color="white" size={25} />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="flex items-start justify-start w-full h-full bg-purple-600 p-10">
          <span className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  justify-start gap-10 md:gap-20 max-w-[1400px] mx-auto w-full ">
              {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <img className="w-[60px] brightness-0 invert" src={requirement.img} alt="image" />
                    <p className="text-white">{requirement.title}</p>
                  </div>
              ))}
          </span>
        </div>

        <div className="flex flex-col items-center justify-center w-full gap-10 mt-30">
          <div className="max-w-[1400px] w-full p-5 md:p-10">
            <h1 className="text-3xl text-gray-700 font-semibold text-center">Top Categories</h1>
            <span className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-7 w-full my-8">
              {categories.map((category, index) => (
                <Link to="/" key={index} className="group flex md:flex-col items-center w-full gap-4 cursor-pointer hover:bg-purple-500 hover:text-white transition-ease duration-[0.3s] md:px-10 px-4 p-3 md:py-4 rounded-lg border border-gray-200 ">
                    <img className="w-[50px] group-hover:brightness-0 group-hover:invert" src={category.img} alt="image" />
                    <p>{category.title}</p>
                </Link>
              ))}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full gap-10 mt-10">
          <div className="flex flex-col items-center justify-center w-full max-w-[1400px] p-5 md:p-10">
            <h1 className="text-3xl text-gray-700 font-semibold text-center">Most Popular Courses</h1>
            <div className="flex w-full items-start md:item-center md:justify-center gap-2 mt-5 whitespace-nowrap overflow-x-auto">
              <button className="px-4 py-2 rounded-lg cursor-pointer hover:bg-purple-500 hover:text-white bg-purple-600 text-white">All</button>
              <button className="px-4 py-2 rounded-lg cursor-pointer hover:bg-purple-500 hover:text-white bg-purple-600">Trending</button>
              <button className="px-4 py-2 rounded-lg cursor-pointer hover:bg-purple-500 hover:text-white bg-purple-600">Popular</button>
              <button className="px-4 py-2 rounded-lg cursor-pointer hover:bg-purple-500 hover:text-white bg-purple-600">Featured</button>
              <button className="px-4 py-2 rounded-lg cursor-pointer hover:bg-purple-500 hover:text-white bg-purple-600">Arts & Design</button>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 w-full mt-10">
              <Link className="group flex flex-col items-start gap-2 relative border border-gray-200 transition-ease duration-[0.3s] p-[8px] rounded-lg overflow-hidden">
              </Link>
            </div>
            <button className="mt-20 bg-purple-600 hover:bg-purple-700 w-[250px] p-4 rounded-xl text-lg font-semibold text-white border-3 border-purple-300 cursor-pointer transition-ease-in-out duration-0.3s">
              View More Courses
            </button>
          </div>
        </div>


        {/* <div className="flex md:flex-row flex-col-reverse h-[100vh] mt-20 overflow-hidden">
          <div className="flex md:w-[50%] relative items-center md:justify-end p-5 md:mx-auto z-0">
            <div className="md:p-10">
              <h1 className="font-semibold text-3xl lg:text-4xl">Becom An Instructor</h1>
              <p className="text-[15px] md:text-md text-gray-600 mt-2 max-w-[600px]">
                Top instructors from across the globe educate millions of students on SkillMine. Renowned experts from various fields share their knowledge, empowering learners worldwide.
              </p>
              <ul className="space-y-4 mt-5 text-[15px] md:text-md">
                {CourseCategories.map((category, index) => (
                  <li key={index} className="flex items-center gap-2">
                  </li>
                ))}
              </ul>
              <button className="flex items-center bg-purple-500 text-white text-lg font-semibold px-6 md:py-4 p-3 rounded-lg cursor-pointer mt-10">
                Start teaching today
              </button>
            </div>
          </div>
          <img src={heroBg} alt="" className="md:w-[50%] md:h-full h-[200px] object-cover" />
        </div> */}

        {/* <div className="flex md:flex-row flex-col items-center justify-center px-0 h-[100vh] md:mt-0 mt-20">
            <img src={heroBg} alt="" className="md:w-[50%] md:h-full h-[200px] object-cover" />

            <div className="md:p-10 p-5 w-full">
              <h1 className="font-semibold text-2xl lg:text-4xl text-balance">Transform Access to Education</h1>
              <p className="text-[15px] md:text-md text-gray-600 mt-2 max-w-[600px]">Create an account to receive our newsletter, course recommendations and promotions. Create an account to receive our newsletter,</p>
                <ul className="space-y-4 mt-5 text-[15px] md:text-md">
                {CourseCategories.map((category, index) => (
                  <li key={index} className="flex items-center gap-2">
                  </li>
                ))}
              </ul>
              <button className="flex items-center bg-purple-500 text-white text-lg font-semibold px-6 md:py-4 p-3 rounded-lg cursor-pointer mt-10">
                Register for free
              </button>
            </div>
        </div> */}
        {/* <div className="mt-10 md:mt-20">
          <div className="relative flex flex-col items-center justify-center gap-0 w-full h-full max-w-[1400px] mx-auto p-5 md:p-10">
            <header className="text-center mb-8">
              <h1 className="text-3xl text-gray-700 font-semibold text-center">Testimonials</h1>
              <p className="text-gray-800 max-w-[600px] mt-2">The ultimate platform for eLearning centers and online courses. Users choose SkillMine for its simplicity in building their websites effortlessly.</p>

            </header>
            <div className="swiper swiper-initialized swiper-horizontal w-full p-5 swiper-backface-hidden">
              <div className="swiper-wrapper">
                <div className="swiper-slide swiper-slide-active flex mb-6"></div>
              </div>
            </div>
            <div className="flex gap-10">
              <button className="prev-btn cursor-pointer bg-purple-500 rounded-full p-2">
                
              </button>
              <button className="next-btn cursor-pointer bg-purple-500 rounded-full p-2">

              </button>
            </div>
          </div>
        </div> */}
        {/* <div className="bg-gray-50 mt-20 py-20">
          <div className="relative w-full h-full">
            <h1 className="text-3xl text-gray-700 font-semibold text-center">Our Partners</h1>
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-10 max-w-[1400px] mx-auto p-5 md:p-10 whitespace-nowrap mt-5">
              <img src="" alt="partener-img" className="w-[90px] md:w-[120px] h-auto object-cover mx-auto" />
            </div>
          </div>
        </div> */}
        {/* <footer className="bg-gray-50 flex flex-col items-center justify-center h-full w-full mt-10 px-0">
          <div className="text-start w-full max-w-[1400px] mx-auto p-5 md:p-10">
            <ul className="flex flex-row flex-wrap justify-between gap-20 w-full mt-2 py-5">
              <li className="flex flex-col gap-5 w-full md:w-fit justify-start"></li>
              <li className="flex flex-col"></li>
            </ul>
          </div>
          <p className="w-full text-center text-[13px] font-medium mt-4 border-t border-gray-300 py-5">
            Copyright © 2025 SkillMine. All rights reserved
          </p>
        </footer> */}
      </main>
    </div>
  );
};

export default LandingPage;
