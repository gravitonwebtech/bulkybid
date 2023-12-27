import React from "react";
import banner from "../assets/images/Homepageimages/banner-travels-image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faInfoCircle,
  faPiggyBank,
  faCoins,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
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
          Services
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
              Vehicle Inspection
            </span>
          </h1>
          <p className="font-medium text-[#525252] mt-2">
            Provide professional vehicle inspection services to ensure the
            quality and condition of vehicles before they are listed for
            auction. This can include a comprehensive inspection report,
            including details of any mechanical, electrical, or cosmetic issues.
          </p>

          <h1 className="mt-4">
            <span className="text-[#2A89D8]">
              <FontAwesomeIcon icon={faCircleCheck} />
            </span>
            <span
              className="text-black font-semibold text-xl pl-2"
              style={{ fontFamily: "Poppins" }}
            >
              Auction Listing Services
            </span>
          </h1>
          <p className="font-medium text-[#525252] mt-2">
            Assist customers in creating compelling and detailed auction
            listings for their vehicles. This can include creating accurate
            descriptions, taking high-quality photos, and highlighting essential
            features to attract potential buyers.
          </p>

          <h1 className="mt-4">
            <span className="text-[#2A89D8]">
              <FontAwesomeIcon icon={faCircleCheck} />
            </span>
            <span
              className="text-black font-semibold text-xl pl-2"
              style={{ fontFamily: "Poppins" }}
            >
              Auction Platform
            </span>
          </h1>
          <p className="font-medium text-[#525252] mt-2">
            Offer a user-friendly online auction platform that allows customers
            to easily list their vehicles for sale and enables bidders to
            participate in auctions. Ensure the platform is secure, reliable,
            and provides real-time bidding updates.
          </p>

          <h1 className="mt-4">
            <span className="text-[#2A89D8]">
              <FontAwesomeIcon icon={faCircleCheck} />
            </span>
            <span
              className="text-black font-semibold text-xl pl-2"
              style={{ fontFamily: "Poppins" }}
            >
              Marketing and Promotion
            </span>
          </h1>
          <p className="font-medium text-[#525252] mt-2">
            Help promote the vehicle auctions through various marketing channels
            to attract a wide range of potential buyers. This can include social
            media campaigns, email marketing, targeted advertising, and
            collaborating with industry partners.
          </p>

          <h1 className="mt-4">
            <span className="text-[#2A89D8]">
              <FontAwesomeIcon icon={faCircleCheck} />
            </span>
            <span
              className="text-black font-semibold text-xl pl-2"
              style={{ fontFamily: "Poppins" }}
            >
              Customer Service
            </span>
          </h1>
          <p className="font-medium text-[#525252] mt-2">
            Provide excellent customer service to address any inquiries or
            concerns from both buyers and sellers. This can consist of a
            dedicated customer support team available via phone, email, or live
            chat, offering prompt responses and resolutions.
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
              Documentation and Title Processing
            </span>
          </h1>
          <p className="font-medium text-[#525252] mt-2">
            Assist clients with the documentation and title transfer process to
            ensure a smooth transaction for buyers and sellers. This includes
            ensuring all necessary paperwork is completed accurately and in a
            timely manner.
          </p>

          <h1 className="mt-4">
            <span className="text-[#2A89D8]">
              <FontAwesomeIcon icon={faCircleCheck} />
            </span>
            <span
              className="text-black font-semibold text-xl pl-2"
              style={{ fontFamily: "Poppins" }}
            >
              Logistics and Transportation
            </span>
          </h1>
          <p className="font-medium text-[#525252] mt-2">
            Arrange reliable and efficient transportation services for the
            delivery of vehicles to buyers. This can include organizing vehicle
            pickup, coordinating with transportation partners, and providing
            tracking and status updates.
          </p>

          <h1 className="mt-4">
            <span className="text-[#2A89D8]">
              <FontAwesomeIcon icon={faCircleCheck} />
            </span>
            <span
              className="text-black font-semibold text-xl pl-2"
              style={{ fontFamily: "Poppins" }}
            >
              Post-Sale Support
            </span>
          </h1>
          <p className="font-medium text-[#525252] mt-2">
            Offer support and assistance after the auction, including
            facilitating buyer-seller communication, handling any post-sale
            issues, and providing guidance on vehicle transfer and registration.
          </p>

          <h1 className="mt-4">
            <span className="text-[#2A89D8]">
              <FontAwesomeIcon icon={faCircleCheck} />
            </span>
            <span
              className="text-black font-semibold text-xl pl-2"
              style={{ fontFamily: "Poppins" }}
            >
              Dispute Resolution
            </span>
          </h1>
          <p className="font-medium text-[#525252] mt-2">
            Implement a fair and transparent dispute resolution process to
            handle any conflicts between buyers and sellers. This can include
            mediation, arbitration, or working with third-party resolution
            services to ensure a satisfactory outcome for all parties involved.
          </p>

          <h1 className="mt-4">
            <span className="text-[#2A89D8]">
              <FontAwesomeIcon icon={faCircleCheck} />
            </span>
            <span
              className="text-black font-semibold text-xl pl-2"
              style={{ fontFamily: "Poppins" }}
            >
              Regular Updates and Reporting
            </span>
          </h1>
          <p className="font-medium text-[#525252] mt-2">
            Provide regular reports and updates to clients to keep them informed
            of auction performance, sales trends, and customer satisfaction.
            This information can help improve the overall auction experience and
            guide future business strategies.
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;
