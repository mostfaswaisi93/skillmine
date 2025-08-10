import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import StarRatings from "react-star-ratings";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import { FreeMode, Pagination, Navigation } from "swiper/modules";

import { Link } from "react-router-dom";
import {
  RiSearch2Line,
  RiCheckLine,
  RiArrowLeftLine,
  RiArrowRightLine,
} from "react-icons/ri";
import "@fontsource/poppins";
import "@fontsource/poppins/700.css";

import heroBg from "../assets/school-bg.jpg";
import instructorImg from "../assets/instructorBg2.webp";
import classroomImg from "../assets/classroomImg.jpg";

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

import course1 from "../assets/courses/course6.webp";
import course2 from "../assets/courses/course2.webp";
import course3 from "../assets/courses/course3.png";
import course4 from "../assets/courses/course4.webp";
import course5 from "../assets/courses/course5.png";
import course6 from "../assets/courses/course6.webp";
import course7 from "../assets/courses/course1.webp";
import course8 from "../assets/courses/course2.webp";
import course9 from "../assets/courses/course3.webp";

import avatar1 from "../assets/avatar/1.jpg";
import avatar2 from "../assets/avatar/2.jpg";
import avatar3 from "../assets/avatar/3.jpg";

import reviewImg1 from "../assets/reviews/1.jpg";
import reviewImg2 from "../assets/reviews/2.jpg";
import reviewImg3 from "../assets/reviews/3.jpg";
import reviewImg4 from "../assets/reviews/4.png";

import Partner1 from "../assets/partners/1.png";
import Partner2 from "../assets/partners/2.png";
import Partner3 from "../assets/partners/3.png";
import Partner4 from "../assets/partners/4.png";
import Partner5 from "../assets/partners/5.png";
import Partner6 from "../assets/partners/6.png";

const requirements = [
  {
    img: skillImg1,
    title: "Learn The Essential Skills",
  },
  {
    img: skillImg2,
    title: "Earn Certificates And Degrees",
  },
  {
    img: skillImg3,
    title: "Get Ready for the Next Career",
  },
  {
    img: skillImg4,
    title: "Master Different Areas",
  },
];

const categories = [
  {
    img: category1,
    title: "Art & Design",
  },
  {
    img: category2,
    title: "Graphic Design",
  },
  {
    img: category3,
    title: "Marketing",
  },
  {
    img: category4,
    title: "Developement",
  },
  {
    img: category5,
    title: "Photography",
  },
  {
    img: category6,
    title: "Music",
  },
  {
    img: category7,
    title: "Data Analysis",
  },
  {
    img: category8,
    title: "Finance",
  },
  {
    img: category9,
    title: "Business",
  },
  {
    img: category10,
    title: "Health & Fitness",
  },
  {
    img: category11,
    title: "Fashion",
  },
  {
    img: category12,
    title: "Science & Technology",
  },
];

const courses = [
  {
    img: course8,
    tutorAvatar: avatar1,
    level: "Pro",
    title: "How to Build a Responsive Website Using React and Tailwind CSS",
    price: "$19.00",
    tutorName: "James Maximus",
    tutorImg: avatar1,
    canceledPrice: "$25.19",
    courseInfo: "Arts & Design",
    courseDiscount: "-10%",
    rating: 4,
    description:
      "Take this negotiation course today and you’ll learn to negotiate masterfully, giving yourself a considerably better chance of personal and financial success. Just check out the reviews to see what a difference successful negotiation can make to your life.",
  },
  {
    img: course9,
    tutorAvatar: avatar3,
    level: "Expert",
    title: "How to Build a Responsive Website Using React and Tailwind CSS",
    price: "$39.00",
    tutorName: "Rodney Mark",
    tutorImg: avatar2,
    canceledPrice: "$45.19",
    courseInfo: "Popular",
    courseDiscount: "-20%",
    rating: 5,
    description:
      "Take this negotiation course today and you’ll learn to negotiate masterfully, giving yourself a considerably better chance of personal and financial success. Just check out the reviews to see what a difference successful negotiation can make to your life.",
  },
  {
    img: course7,
    tutorAvatar: avatar1,
    level: "Expert",
    title: "How to Build a Responsive Website Using React and Tailwind CSS",
    price: "$10.00",
    tutorName: "John Tyler",
    tutorImg: avatar1,
    canceledPrice: "$25.19",
    courseInfo: "Featured",
    courseDiscount: "-15%",
    rating: 4.5,
    description:
      "Take this negotiation course today and you’ll learn to negotiate masterfully, giving yourself a considerably better chance of personal and financial success. Just check out the reviews to see what a difference successful negotiation can make to your life.",
  },
  {
    img: course6,
    tutorAvatar: avatar2,
    level: "Beginner",
    title: "How to Build a Responsive Website Using React and Tailwind CSS",
    price: "Free",
    tutorName: "Mark Daniels",
    tutorImg: avatar1,
    canceledPrice: "",
    courseInfo: "Popular",
    courseDiscount: "",
    rating: 3,
    description:
      "Take this negotiation course today and you’ll learn to negotiate masterfully, giving yourself a considerably better chance of personal and financial success. Just check out the reviews to see what a difference successful negotiation can make to your life.",
  },
  {
    img: course8,
    tutorAvatar: avatar1,
    level: "Pro",
    title: "How to Build a Responsive Website Using React and Tailwind CSS",
    price: "$9.00",
    tutorName: "Kate Davids",
    tutorImg: avatar1,
    canceledPrice: "$35.19",
    courseInfo: "Popular",
    courseDiscount: "-19%",
    rating: 4.6,
    description:
      "Take this negotiation course today and you’ll learn to negotiate masterfully, giving yourself a considerably better chance of personal and financial success. Just check out the reviews to see what a difference successful negotiation can make to your life.",
  },
  {
    img: course3,
    tutorAvatar: avatar3,
    level: "Beginner",
    title: "How to Build a Responsive Website Using React and Tailwind CSS",
    price: "Free",
    tutorName: "Michael Smith",
    tutorImg: avatar1,
    canceledPrice: "",
    courseInfo: "Trending",
    courseDiscount: "",
    rating: 5,
    description:
      "Take this negotiation course today and you’ll learn to negotiate masterfully, giving yourself a considerably better chance of personal and financial success. Just check out the reviews to see what a difference successful negotiation can make to your life.",
  },
  {
    img: course1,
    tutorAvatar: avatar1,
    level: "Expert",
    title: "How to Build a Responsive Website Using React and Tailwind CSS",
    price: "$29.00",
    tutorName: "Travis Wills",
    tutorImg: avatar1,
    canceledPrice: "$35.19",
    courseInfo: "Featured",
    courseDiscount: "-20%",
    rating: 4.5,
    description:
      "Take this negotiation course today and you’ll learn to negotiate masterfully, giving yourself a considerably better chance of personal and financial success. Just check out the reviews to see what a difference successful negotiation can make to your life.",
  },
  {
    img: course4,
    tutorAvatar: avatar2,
    level: "Pro",
    title: "How to Build a Responsive Website Using React and Tailwind CSS",
    price: "Free",
    tutorName: "Josh Damian",
    tutorImg: avatar2,
    canceledPrice: "",
    courseInfo: "Trending",
    courseDiscount: "",
    rating: 4.5,
    description:
      "Take this negotiation course today and you’ll learn to negotiate masterfully, giving yourself a considerably better chance of personal and financial success. Just check out the reviews to see what a difference successful negotiation can make to your life.",
  },
];

const review = [
  {
    review:
      "SkillMine is an incridible learning platform! The courses are high quality and easy to follow",
    img: reviewImg1,
    work: "Web Developer",
    name: "William Davids",
    ratings: 3,
  },
  {
    review:
      "SkillMine is an incridible learning platform! The courses are high quality and easy to follow",
    img: reviewImg2,
    work: "Web Developer",
    name: "Steve Davids",
    ratings: 4.5,
  },
  {
    review:
      "SkillMine is an incridible learning platform! The courses are high quality and easy to follow",
    img: reviewImg3,
    work: "Web Developer",
    name: "Mike Davids",
    ratings: 5,
  },
  {
    review:
      "SkillMine is an incridible learning platform! The courses are high quality and easy to follow",
    img: reviewImg4,
    work: "Web Developer",
    name: "John Davids",
    ratings: 4,
  },
];

const partners = [
  {
    img: Partner1,
  },
  {
    img: Partner2,
  },
  {
    img: Partner3,
  },
  {
    img: Partner4,
  },
  {
    img: Partner5,
  },
  {
    img: Partner6,
  },
];

const LandingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((course) => course.courseInfo === selectedCategory);
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
                <span className="text-[#b958f5]">7,200+</span> Courses Taught By
                <span className="text-[#b958f5]"> 720</span> Top Instructors And
                Institutions
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
                <img
                  className="w-[60px] brightness-0 invert"
                  src={requirement.img}
                  alt="image"
                />
                <p className="text-white">{requirement.title}</p>
              </div>
            ))}
          </span>
        </div>

        <div className="flex flex-col items-center justify-center w-full gap-10 mt-[30px]">
          <div className="max-w-[1400px] w-full p-5 md:p-10">
            <h1 className="text-3xl text-gray-700 font-semibold text-center">
              Top Categories
            </h1>
            <span className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-7 w-full my-8">
              {categories.map((category, index) => (
                <Link
                  to="/"
                  key={index}
                  className="group flex md:flex-col items-center w-full gap-4 cursor-pointer hover:bg-purple-500 hover:text-white transition-ease duration-[0.3s] md:px-10 px-4 p-3 md:py-4 rounded-lg border border-gray-200 "
                >
                  <img
                    className="w-[50px] group-hover:brightness-0 group-hover:invert"
                    src={category.img}
                    alt="image"
                  />
                  <p>{category.title}</p>
                </Link>
              ))}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full gap-10 mt-10">
          <div className="flex flex-col items-center justify-center w-full max-w-[1400px] p-5 md:p-10">
            <h1 className="text-3xl text-gray-700 font-semibold text-center">
              Most Popular Courses
            </h1>
            <div className="flex w-full items-start md:items-center md:justify-center gap-2 mt-5 whitespace-nowrap overflow-x-auto">
              {["All", "Trending", "Popular", "Featured", "Arts & Design"].map(
                (category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-lg cursor-pointer hover:bg-purple-500 hover:text-white ${
                      selectedCategory === category
                        ? "bg-purple-600 text-white"
                        : "bg-gray-100"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                )
              )}
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 w-full mt-10">
              {filteredCourses.map((course, index) => (
                <Link
                  key={course.id || index}
                  to={`/ItemDetails/${course.id}`}
                  state={{ course }}
                  className="group flex flex-col items-start gap-2 relative border border-gray-200 transition-ease duration-[0.3s] p-[8px] rounded-lg overflow-hidden"
                >
                  <div className="overflow-hidden w-full">
                    <img
                      src={course.img}
                      className="w-full h-[180px] rounded-lg object-cover group-hover:scale-130 transition-ease duration-[0.4s] opacity-80"
                      alt="image"
                    />
                  </div>
                  <span className="flex items-center gap-3 absolute top-5 left-5">
                    <p className="bg-purple-600 text-white text-sm px-3 rounded-full">
                      {course.courseInfo}
                    </p>
                    {course.courseDiscount && (
                      <p className="bg-green-500 text-white text-sm px-3 rounded-full">
                        {course.courseDiscount}
                      </p>
                    )}
                  </span>
                  <p className="bg-purple-500 text-purple-50 text-sm px-3 rounded-full">
                    {course.level}
                  </p>
                  <div className="mt-2">
                    <p className="font-semibold text-md">{course.tutorName}</p>
                    <p className="font-medium text-[15px] mt-1">
                      {course.title}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <StarRatings
                      rating={course.rating}
                      starRatedColor="orange"
                      starEmptyColor="gray"
                      starHoverColor="orange"
                      numberOfStars={5}
                      name="rating"
                      starDimension="15px"
                      starSpacing="1px"
                    />
                    <p className="text-[13px] text-gray-700">{course.rating}</p>
                  </div>
                  <span className="flex gap-2 mt-2">
                    <p className="font-semibold text-lg text-purple-900">
                      {course.price}
                    </p>
                    {course.canceledPrice && (
                      <p className="text-gray-400 text-md line-through">
                        {course.canceledPrice}
                      </p>
                    )}
                  </span>
                </Link>
              ))}
            </div>
            <button className="mt-20 bg-purple-600 hover:bg-purple-700 w-[250px] p-4 rounded-xl text-lg font-semibold text-white border-3 border-purple-300 cursor-pointer transition-ease-in-out duration-0.3s">
              View More Courses
            </button>
          </div>
        </div>

        <div className="flex md:flex-row flex-col-reverse h-[100vh] mt-20 overflow-hidden">
          <div className="flex md:w-[50%] relative items-center md:justify-end p-5 md:mx-auto z-0">
            <div className="md:p-10">
              <h1 className="font-semibold text-3xl lg:text-4xl">
                Becom An Instructor
              </h1>
              <p className="text-[15px] md:text-md text-gray-600 mt-2 max-w-[600px]">
                Top instructors from across the globe educate millions of
                students on SkillMine. Renowned experts from various fields
                share their knowledge, empowering learners worldwide.
              </p>
              <ul className="space-y-4 mt-5 text-[15px] md:text-md">
                <li className="flex items-center gap-2">
                  <RiSearch2Line
                    color="white"
                    size={19}
                    className="bg-purple-500 rounded-full"
                  />
                  70% Pay from every course
                </li>
                <li className="flex items-center gap-2">
                  <RiSearch2Line
                    color="white"
                    size={19}
                    className="bg-purple-500 rounded-full"
                  />
                  70% Pay from every course
                </li>
                <li className="flex items-center gap-2">
                  <RiSearch2Line
                    color="white"
                    size={19}
                    className="bg-purple-500 rounded-full"
                  />
                  70% Pay from every course
                </li>
                <li className="flex items-center gap-2">
                  <RiSearch2Line
                    color="white"
                    size={19}
                    className="bg-purple-500 rounded-full"
                  />
                  70% Pay from every course
                </li>
                <li className="flex items-center gap-2">
                  <RiSearch2Line
                    color="white"
                    size={19}
                    className="bg-purple-500 rounded-full"
                  />
                  70% Pay from every course
                </li>
                <li className="flex items-center gap-2">
                  <RiSearch2Line
                    color="white"
                    size={19}
                    className="bg-purple-500 rounded-full"
                  />
                  70% Pay from every course
                </li>
              </ul>
              <button className="flex items-center bg-purple-500 text-white text-lg font-semibold px-6 md:py-4 p-3 rounded-lg cursor-pointer mt-10">
                Start teaching today
              </button>
            </div>
          </div>
          <img
            src={instructorImg}
            alt=""
            className="md:w-[50%] md:h-full h-[200px] object-cover"
          />
        </div>

        <div className="flex md:flex-row flex-col items-center justify-center px-0 h-[100vh] md:mt-0 mt-20">
          <img
            src={classroomImg}
            alt=""
            className="md:w-[50%] md:h-full h-[200px] object-cover"
          />

          <div className="md:p-10 p-5 w-full">
            <h1 className="font-semibold text-2xl lg:text-4xl text-balance">
              Transform Access to Education
            </h1>
            <p className="text-[15px] md:text-md text-gray-600 mt-2 max-w-[600px]">
              Create an account to receive our newsletter, course
              recommendations and promotions. Create an account to receive our
              newsletter,
            </p>
            <ul className="space-y-4 mt-5 text-[15px] md:text-md">
              <li className="flex items-center gap-2">
                <RiSearch2Line
                  color="white"
                  size={19}
                  className="bg-purple-500 rounded-full"
                />
                70% Pay from every course
              </li>
              <li className="flex items-center gap-2">
                <RiSearch2Line
                  color="white"
                  size={19}
                  className="bg-purple-500 rounded-full"
                />
                70% Pay from every course
              </li>
              <li className="flex items-center gap-2">
                <RiSearch2Line
                  color="white"
                  size={19}
                  className="bg-purple-500 rounded-full"
                />
                70% Pay from every course
              </li>
              <li className="flex items-center gap-2">
                <RiSearch2Line
                  color="white"
                  size={19}
                  className="bg-purple-500 rounded-full"
                />
                70% Pay from every course
              </li>
              <li className="flex items-center gap-2">
                <RiSearch2Line
                  color="white"
                  size={19}
                  className="bg-purple-500 rounded-full"
                />
                70% Pay from every course
              </li>
              <li className="flex items-center gap-2">
                <RiSearch2Line
                  color="white"
                  size={19}
                  className="bg-purple-500 rounded-full"
                />
                70% Pay from every course
              </li>
            </ul>
            <button className="flex items-center bg-purple-500 text-white text-lg font-semibold px-6 md:py-4 p-3 rounded-lg cursor-pointer mt-10">
              Register for free
            </button>
          </div>
        </div>
        <div className="mt-10 md:mt-20">
          <div className="relative flex flex-col items-center justify-center gap-0 w-full h-full max-w-[1400px] mx-auto p-5 md:p-10">
            <header className="text-center mb-8">
              <h1 className="text-3xl text-gray-700 font-semibold text-center">
                Testimonials
              </h1>
              <p className="text-gray-800 max-w-[600px] mt-2">
                The ultimate platform for eLearning centers and online courses.
                Users choose SkillMine for its simplicity in building their
                websites effortlessly.
              </p>
            </header>
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
                prevEl: ".prev-btn",
              }}
              modules={[FreeMode, Pagination, Navigation]}
              className="w-full p-5"
              breakpoints={{
                540: { slidesPerView: 2 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
            >
              {review.map((review, index) => (
                <SwiperSlide key={index} className="flex mb-6">
                  <div className="flex flex-col items-center justify-center text-center gap-3 w-full border border-gray-200 transition-ease duration-[0.3s] p-5 md:p-10 rounded-lg py-6">
                    <div className="border border-4 border-purple-100 rounded-full p-1">
                      <img
                        src={review.img}
                        className="w-[160px] h-[160px] rounded-full object-cover"
                        alt="review-image"
                      />
                    </div>
                    <div className="mt-2">
                      <p className="text-xl font-semibold">{review.name}</p>
                      <p className="text-md text-gray-700">{review.work}</p>
                      <StarRatings
                        rating={review?.ratings}
                        starRatedColor="orange"
                        starEmptyColor="gray"
                        starHoverColor="orange"
                        changeRating={(newRating) => console.log(newRating)}
                        numberOfStars={5}
                        name="rating"
                        starDimension="17px"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <p className="text-gray-700 mt-2">{review.review}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
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
        <div className="bg-gray-50 mt-20 py-20">
          <div className="relative w-full h-full">
            <h1 className="text-3xl text-gray-700 font-semibold text-center">
              Our Partners
            </h1>
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-10 max-w-[1400px] mx-auto p-5 md:p-10 whitespace-nowrap mt-5">
              {partners.map((partner, index) => (
                <img
                  src={partner.img}
                  key={index}
                  alt="partener-img"
                  className="w-[90px] md:w-[120px] h-auto object-cover mx-auto"
                />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default LandingPage;
