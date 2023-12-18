import React from "react";
import "./About.css";
import Navbar from "../Common/Navbar";
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faRoad,
  faTag,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons";
import Image2 from "../assets/images/Homepageimages/home-image1.png";

const About = () => {
  return (
    <>
      <div className="about-banner-img flex flex-col items-center justify-center">
        <Navbar />
        <div className="text-center">
          <h1 className="text-white font-bold text-2xl md:text-3xl lg:text-5xl" style={{ fontFamily: "Poppins" }}>
            About Us
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 mx-5 sm:mx-10 md:mx-20 lg:mx-24 xl:mx-28 mt-10 md:mt-16">
        <div className="">
          <h1 className="text-white text-2xl md:text-4xl font-bold text-[#031B4E] text-justify">
            We offer customers a wide range of
            <span className="text-[#f0bb3a]"> commercial cars </span>
            and <span className="text-[#f0bb3a]">luxury cars </span> for any
            occasion.
          </h1>
        </div>
        <div className="">
          <p className="text-[#4D5B7C] text-md">
            At Rentaly, we are dedicated to providing exceptional car rental
            services to our valued customers. With a commitment to quality,
            convenience, and customer satisfaction, we strive to make every
            rental experience a seamless and enjoyable one. We understand that
            every customer has unique needs and preferences when it comes to
            renting a car. That's why we maintain a diverse fleet of
            well-maintained vehicles to cater to various requirements. From
            compact cars for solo travelers to spacious SUVs for families, we
            have a wide range of options to choose from.
          </p>
        </div>

       
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-5 md:mx-20 lg:mx-24 xl:mx-28 mt-10">
        <div className="bg-[#F5F5F5] text-center pt-6 pb-6 rounded-[4px]">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-medium text-[#f0bb3a]">
            <CountUp start={0} end={15425} duration={10} />
          </h3>
          <p className="text-sm mt-3 text-black font-semibold" style={{ fontFamily: "Poppins" }}>
          Completed Orders
          </p>
        </div>

        <div className="bg-[#F5F5F5] text-center pt-6 pb-6 rounded-[4px]">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-medium text-[#f0bb3a]">
            <CountUp start={0} end={8754} duration={10} />
          </h3>
          <p className="text-sm mt-3 text-black font-semibold" style={{ fontFamily: "Poppins" }}>
          Happy Customers
          </p>
        </div>

        <div className="bg-[#F5F5F5] text-center pt-6 pb-6 rounded-[4px]">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-medium text-[#f0bb3a]">
            <CountUp start={0} end={235} duration={10} />
          </h3>
          <p className="text-sm mt-2 text-black font-semibold" style={{ fontFamily: "Poppins" }}>
          Vehicles Fleet
          </p>
        </div>

        <div className="bg-[#F5F5F5] text-center pt-6 pb-6 rounded-[4px]">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-medium text-[#f0bb3a]">
            <CountUp start={0} end={15} duration={10} />
          </h3>
          <p className="text-sm mt-2 text-black font-semibold" style={{ fontFamily: "Poppins" }}>
          Years Experience
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mx-5 sm:mx-10 md:mx-20 lg:mx-24 xl:mx-28 mt-10 mb-10 md:mt-20 md:mb-20">
        <div className="lg:col-span-3">
          <div className="flex">
            <div className="pr-5">
              <FontAwesomeIcon
                icon={faTrophy}
                className="bg-[#f0bb3a]  p-3 text-white rounded-[4px] w-10 h-10"
              />
            </div>

            <div className="">
              <h4 class="text-black font-bold">
                First Class Services
              </h4>
              <p className="mt-2 text-[#4D5B7C]">
                Where luxury meets exceptional care, creating unforgettable
                moments and exceeding your every expectation.
              </p>
            </div>
          </div>

          <div className="flex mt-5">
            <div className="pr-5">
              <FontAwesomeIcon
                icon={faRoad}
                className="bg-[#f0bb3a]  p-3 text-white rounded-[4px]  w-10 h-10"
              />
            </div>

            <div className="">
              <h4 class="text-black font-bold">
                24/7 Road Assistance
              </h4>
              <p className="mt-2  text-[#4D5B7C]">
                Reliable support when you need it most, keeping you on the
                move with confidence and peace of mind.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <img src={Image2} alt="" />
        </div>

        <div className="lg:col-span-3">
          <div className="flex">
            <div className="">
              <h4 class="text-black font-bold text-end">
                Quality at Minimum Expense
              </h4>
              <p className="mt-2  text-[#4D5B7C] text-end">
                Unlocking affordable brilliance with elevating quality while
                minimizing costs for maximum value.
              </p>
            </div>
            <div className="pl-5">
              <FontAwesomeIcon
                icon={faTag}
                className="bg-[#f0bb3a] p-3 text-white rounded-[4px]  w-10 h-10"
              />
            </div>
          </div>

          <div className="flex mt-5">
            <div className="">
              <h4 class="text-black font-bold text-end">
                Free Pick-Up & Drop-Off
              </h4>
              <p className="mt-2  text-[#4D5B7C] text-end">
                Enjoy free pickup and drop-off services, adding an extra layer
                of ease to your car rental experience.
              </p>
            </div>
            <div className="pl-5">
              <FontAwesomeIcon
                icon={faMapPin}
                className="bg-[#f0bb3a]  p-3 text-white rounded-[4px]  w-10 h-10"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
