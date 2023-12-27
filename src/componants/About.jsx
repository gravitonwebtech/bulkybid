import React from "react";
import banner from "../assets/images/Homepageimages/banner-travels-image.png";
import AboutImg from "../assets/images/AboutImg/aboutusImg.png";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
  return (
    <>
      <div className="mt-20">
        <img src={banner} className="w-full h-auto" alt="" />
      </div>

      <div className="mt-5 md:mt-12 mx-5 md:mx-20 lg:mx-28 xl:mx-40">
        <h1
          className="text-2xl md:text-4xl font-bold"
          style={{ fontFamily: "Poppins" }}
        >
          About Us
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 mt-5 md:mt-10 xl:gap-20 mx-5 md:mx-20 lg:mx-28 xl:mx-40">
        <div className="">
          <p className="font-medium text-[#525252] text-justify">
            Welcome to BulkyBid, your premier vehicle auction platform for
            bulk/individual vehicle. We are a Upcoming leading online
            marketplace where you can buy and sell a wide range of vehicles at
            competitive prices. Whether you are an individual/Bilk looking for
            your Upcoming vehicles or a business interested in expanding your
            fleet, we have got you covered.As a vehicle auction platform, our
            primary focus is to connect buyers and sellers in an efficient and
            transparent manner. With our user-friendly interface, extensive
            selection of vehicles, and a secure online environment, we aim to
            make the buying and selling process as smooth as possible.
          </p>
        </div>
        <div className="">
          <p className="font-medium text-[#525252] text-justify">
            Here at BulkyBid, we understand the unique needs and challenges that
            come with bulk vehicle sales. We specialize in providing a platform
            where Individual, businesses, dealerships, rental companies, and
            other organizations can easily trade vehicles in large quantities.
            Our platform caters to various types of vehicles,2W,3W,
            Car,CV,SCV,LCV FE.& CE including cars, trucks, vans, motorcycles,
            Farm Equipment, Commercial Vehicles, Construction Equipment and
            more. What sets us apart from traditional vehicle auction platforms
            is our commitment to providing exceptional customer service. Our
            team of professionals is dedicated to assisting both buyers and
            sellers throughout the entire process.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-5 md:mt-12 mx-5 md:mx-20 lg:mx-28 xl:mx-40">
        <h1
          className="text-2xl md:text-3xl font-bold"
          style={{ fontFamily: "Poppins" }}
        >
          Key features of our vehicle auction platform include:
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 mx-5 md:mx-20 lg:mx-28 xl:mx-40 mt-5 md:mt-10">
        <div className="">
          <h1 className="">
            <span className="text-[#2A89D8]">
              <FontAwesomeIcon icon={faCircleCheck} />
            </span>
            <span
              className="text-black font-semibold text-xl pl-2"
              style={{ fontFamily: "Poppins" }}
            >
              Extensive Inventory
            </span>
          </h1>
          <p className="font-medium text-[#525252] mt-2">
            We offer a vast selection of vehicles from various makes, models,
            and years, ensuring that buyers can easily find what they need.
          </p>

          <h1 className="mt-4">
            <span className="text-[#2A89D8]">
              <FontAwesomeIcon icon={faCircleCheck} />
            </span>
            <span
              className="text-black font-semibold text-xl pl-2"
              style={{ fontFamily: "Poppins" }}
            >
              Competitive Pricing
            </span>
          </h1>
          <p className="font-medium text-[#525252] mt-2">
            Our auction system creates a dynamic bidding environment, where
            prices are determined based on market demand. This allows buyers to
            secure the best deal possible.
          </p>

          <h1 className="mt-4">
            <span className="text-[#2A89D8]">
              <FontAwesomeIcon icon={faCircleCheck} />
            </span>
            <span
              className="text-black font-semibold text-xl pl-2"
              style={{ fontFamily: "Poppins" }}
            >
              Transparency
            </span>
          </h1>
          <p className="font-medium text-[#525252] mt-2">
            We provide detailed vehicle information, including specifications,
            condition reports, and photographs, giving buyers confidence in
            their purchasing decisions.
          </p>
        </div>

        <div className="">
          <h1 className="">
            <span className="text-[#2A89D8]">
              <FontAwesomeIcon icon={faCircleCheck} />
            </span>
            <span
              className="text-black font-semibold text-xl pl-2"
              style={{ fontFamily: "Poppins" }}
            >
              Secure Transactions
            </span>
          </h1>
          <p className="font-medium text-[#525252] mt-2">
            Our platform utilizes secure payment gateways and ensures the
            privacy of all sensitive information, providing a safe environment
            for buyers and sellers.
          </p>

          <h1 className="mt-4">
            <span className="text-[#2A89D8]">
              <FontAwesomeIcon icon={faCircleCheck} />
            </span>
            <span
              className="text-black font-semibold text-xl pl-2"
              style={{ fontFamily: "Poppins" }}
            >
              Logistics Support
            </span>
          </h1>
          <p className="font-medium text-[#525252] mt-2">
            To simplify the process, we offer logistics solutions that assist in
            the transportation of purchased vehicles to their respective
            locations.
          </p>
        </div>
      </div>
    </>
  );
}
