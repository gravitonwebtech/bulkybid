import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import banner from "../assets/images/Homepageimages/banner-travels-image.png";
import UserLogin from "../assets/images/Homepageimages/user-icon.png";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faRoad,
  faTag,
  faMapPin,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import Car from "../assets/images/Homepageimages/car1.png";
import Bus from "../assets/images/Homepageimages/bus1.jfif";
import Jeep from "../assets/images/Homepageimages/jeep1.png";
import Auto from "../assets/images/Homepageimages/auto1.jfif";
import Bike from "../assets/images/Homepageimages/bike1.jfif";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import Icon1 from "../assets/images/Homepageimages/icon1.png";
import Icon2 from "../assets/images/Homepageimages/icon2.svg";
import Icon3 from "../assets/images/Homepageimages/icon3.svg";
import Icon4 from "../assets/images/Homepageimages/icon4.svg";
import Icon5 from "../assets/images/Homepageimages/icon5.svg";
import Icon6 from "../assets/images/Homepageimages/icon6.svg";
import Registration from "./Registration";

export default function Home() {
  const events = [
    {
      heading: "Event 1",
      paragraph: "Description for Event 1.",
      startDate: "24-Dec-23",
      endDate: "26-Dec-23",
      startTime: "10:00 AM",
      endTime: "12:00 PM",
    },
    {
      heading: "Event 2",
      paragraph: "Description for Event 2.",
      startDate: "25-Dec-23",
      endDate: "27-Dec-23",
      startTime: "2:00 PM",
      endTime: "4:00 PM",
    },
    {
      heading: "Event 3",
      paragraph: "Description for Event 3.",
      startDate: "26-Dec-23",
      endDate: "28-Dec-23",
      startTime: "3:00 PM",
      endTime: "7:00 PM",
    },

    {
      heading: "Event 4",
      paragraph: "Description for Event 4.",
      startDate: "27-Dec-23",
      endDate: "29-Dec-23",
      startTime: "5:00 PM",
      endTime: "9:00 PM",
    },
  ];

  const items = [
    {
      id: 1,
      image: Car,
      name: "MARUTI SWIFT",
      calendar: "2019",
    },

    {
      id: 2,
      image: Bus,
      name: "BUS",
      calendar: "2016",
    },

    {
      id: 3,
      image: Jeep,
      name: "JIMNY",
      calendar: "2020",
    },

    {
      id: 4,
      image: Auto,
      name: "AUTO",
      calendar: "2017",
    },

    {
      id: 5,
      image: Bike,
      name: "RX-100",
      calendar: "2021",
    },
  ];

  const [checkOtp, setCheckOtp] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    phone: "",
  });
  const [errors, setErrors] = useState({});

  const sendOtp = (e) => {
    e.preventDefault();

    // Perform validation before submitting
    const validationErrors = {};

    // Phone number validation
    if (!formData.phone) {
      validationErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      validationErrors.phone = "Invalid phone number (10 digits)";
    }

    if (Object.keys(validationErrors).length === 0) {
      // If there are no validation errors, proceed with sending OTP
      var formdata = new FormData();
      formdata.append("number", formData.phone);

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      fetch("https://legal257.pythonanywhere.com/api/sendOTP/", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);

          // Set checkOtp to true to render OTP verification section
          setCheckOtp(true);
        })
        .catch((error) => console.log("error", error));
    } else {
      // Update state with validation errors
      setErrors(validationErrors);
    }
  };

  const verifyOtp = (e) => {
    e.preventDefault();
    var formdata = new FormData();
    formdata.append("number", formData.phone);
    formdata.append("otp", otpValue);

    var requestOptions = {
      method: "PUT",
      body: formdata,
      redirect: "follow",
    };

    fetch("https://legal257.pythonanywhere.com/api/checkOTP/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status) {
          setTimeout(() => {
            navigate("/auctionlist");
          }, 3000);
        } else {
          alert("otp is wrong entered");
        }
      })
      .catch((error) => console.log("error", error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));

    // const { name, value } = e.target;
    // setFormData((prevData) => ({
    //   ...prevData,
    //   [name]: value,
    // }));
    // Clear validation errors when the user starts typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  const isSmallScreen1 = window.innerWidth <= 768;

  if (isSmallScreen1) {
    settings.slidesToShow = 1;
  }

  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const openRegistrationForm = () => {
    setShowRegistrationForm(true);
  };

  const closeRegistrationForm = () => {
    setShowRegistrationForm(false);
  };

  return (
    <>
      {/* <div className="mt-20">
        <img src={banner} className="w-full h-auto" alt="" />
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 mx-5 md:mx-20 lg:mx-28 xl:mx-40 mt-28">
        <div className="rounded shadow bg-white p-3">
          <div className="bg-[#fbb42b] text-center text-white p-3 rounded mb-2">
            <h3
              className="text-xl font-semibold"
              style={{ fontFamily: "Poppins" }}
            >
              LIVE EVENTS
            </h3>
          </div>
          <div className="events">
            {events.map((data, index) => (
              <div key={index}>
                <div className=" border-2 rounded p-3 mb-3">
                  <h3>{data.heading}</h3>
                  <p>{data.paragraph}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {/* Start At */}
                    <div>
                      <h1 className="mt-3" style={{ fontFamily: "Poppins" }}>
                        <b>Start At:</b>
                      </h1>
                      <span className="pr-2">{data.startDate}</span>
                      <span>{data.startTime}</span>
                    </div>

                    {/* End At */}
                    <div>
                      <h1 className="mt-3" style={{ fontFamily: "Poppins" }}>
                        <b>End At:</b>
                      </h1>
                      <span className="pr-2">{data.endDate}</span>
                      <span>{data.endTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded shadow bg-white p-3">
          <div className="bg-gray-200 text-center text-black p-3 rounded mb-2">
            <h3
              className="text-xl font-semibold"
              style={{ fontFamily: "Poppins" }}
            >
              UPCOMING EVENTS
            </h3>
          </div>
          <div className="events">
            {events.map((data, index) => (
              <div key={index}>
                <div className=" border-2 rounded p-3 mb-3">
                  <h3>{data.heading}</h3>
                  <p>{data.paragraph}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {/* Start At */}
                    <div>
                      <h1 className="mt-3" style={{ fontFamily: "Poppins" }}>
                        <b>Start At:</b>
                      </h1>
                      <span className="pr-2">{data.startDate}</span>
                      <span>{data.startTime}</span>
                    </div>

                    {/* End At */}
                    <div>
                      <h1 className="mt-3" style={{ fontFamily: "Poppins" }}>
                        <b>End At:</b>
                      </h1>
                      <span className="pr-2">{data.endDate}</span>
                      <span>{data.endTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {checkOtp ? (
          // OTP verification section
          <div className="mt-16 flex items-center justify-center">
            <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                OTP Verification
              </h2>
              <form onSubmit={verifyOtp}>
                <div className="mb-4">
                  <input
                    type="text"
                    id="number"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter your OTP"
                    value={otpValue}
                    onChange={(e) => setOtpValue(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <button
                    className="bg-[#2774AE] mt-8 w-full py-2 text-white text-lg font-semibold rounded-lg"
                    type="submit"
                  >
                    Verify OTP
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div className="rounded shadow bg-white p-3">
            <div className="bg-gray-200 text-center text-black p-3 rounded mb-2">
              <h3
                className="text-xl font-semibold"
                style={{ fontFamily: "Poppins" }}
              >
                LOGIN FORM
              </h3>
            </div>

            <div className="flex justify-center">
              <img src={UserLogin}></img>
            </div>

            <form onSubmit={sendOtp}>
              <div className="mt-4 mb-2">
                <input
                  type="text"
                  id="pnum"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`bg-transparent border-2 p-2 rounded-[4px] w-full text-black ${
                    errors.phone ? "border-red-500" : ""
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div className="mt-3">
                <button
                  type="submit"
                  className="bg-[#2a89d8] font-semibold w-full text-white px-4 py-2 rounded-[4px]"
                >
                  Submit
                </button>
              </div>
            </form>

            {showRegistrationForm && (
              <Registration onClose={closeRegistrationForm} />
            )}

            {/* ... (existing code) */}
            <div className="mt-3">
              <button
                onClick={openRegistrationForm}
                className="bg-[#2a89d8] font-semibold w-full text-white px-4 py-2 rounded-[4px]"
              >
                Register
              </button>
            </div>

            <h1 className="text-black text-lg mt-2 text-center font-semibold">
              OR
            </h1>
            <div className="grid grid-cols-2 gap-5 mt-2">
              <div className="border-2 p-1 rounded">
                <span>
                  <FontAwesomeIcon icon={faGoogle} className="text-[#DB4437]" />
                </span>
                <span className="pl-3" style={{ fontFamily: "Poppins" }}>
                  Google
                </span>
              </div>

              <div className=" border-2 p-1 rounded">
                <span>
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="text-[#1877F2]"
                  />
                </span>
                <span className="pl-3" style={{ fontFamily: "Poppins" }}>
                  Facebook
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="mx-5 md:mx-20 lg:mx-28 xl:mx-40 mt-14">
        <Slider {...settings}>
          {items.map((item) => (
            <div className="p-5">
              <div key={item.id} className="bg-white shadow">
                <div className="flex justify-center">
                  <img
                    src={item.image}
                    alt={`Item ${item.id}`}
                    className="w-3/4 h-[100px]"
                  />
                </div>
                <div className="bg-gray-100 mt-3 p-4">
                  <h3
                    className="font-semibold text-lg"
                    style={{ fontFamily: "Poppins" }}
                  >
                    {item.name}
                  </h3>
                  <p className="mt-3 font-semibold">
                    <FontAwesomeIcon
                      icon={faCalendar}
                      className="pr-3 text-[#2A89D8]"
                    />
                    {item.calendar}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="mt-5 md:mt-12 mx-5 md:mx-20 lg:mx-28 xl:mx-40">
        <h1
          className="text-2xl md:text-4xl font-bold"
          style={{ fontFamily: "Poppins" }}
        >
          Auctions
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 mx-5 md:mx-20 lg:mx-28 xl:mx-40 mt-5 md:mt-10">
        <div className="">
          <div>
            <img src={Icon1}></img>
          </div>
          <h1
            className="text-xl md:text-2xl font-bold mt-4"
            style={{ fontFamily: "Poppins" }}
          >
            Retailer
          </h1>
          <p className="mt-4 text-justify text-[#0000008A]">
            Retailers play a pivotal role in the marketplace, offering a diverse
            range of products and services. They bridge the gap between
            consumers and manufacturers, ensuring accessibility and
            satisfaction.
          </p>
        </div>

        <div className="">
          <div>
            <img src={Icon2}></img>
          </div>
          <h1
            className="text-xl md:text-2xl font-bold mt-4"
            style={{ fontFamily: "Poppins" }}
          >
            A Broad Variety Of Vehicles
          </h1>
          <p className="mt-4 text-justify text-[#0000008A]">
            An extensive and diverse fleet of vehicles awaits, offering choices
            ranging from sleek sedans and versatile SUVs to powerful trucks and
            efficient hybrids. The array includes options suitable for various
            preferences.
          </p>
        </div>

        <div className="">
          <div>
            <img src={Icon3}></img>
          </div>
          <h1
            className="text-xl md:text-2xl font-bold mt-4"
            style={{ fontFamily: "Poppins" }}
          >
            National Presence
          </h1>
          <p className="mt-4 text-justify text-[#0000008A]">
            With a robust national presence, our organization strategically
            extends its influence across diverse regions, delivering excellence
            in products and services connections with communities throughout the
            country.
          </p>
        </div>

        <div className="">
          <div>
            <img src={Icon4}></img>
          </div>
          <h1
            className="text-xl md:text-2xl font-bold mt-4"
            style={{ fontFamily: "Poppins" }}
          >
            Bidding
          </h1>
          <p className="mt-4 text-justify text-[#0000008A]">
            Engage effortlessly in our bidding platform, where simplicity meets
            sophistication. Navigate user-friendly interfaces, place bids with
            confidence, and experience seamless transactions.
          </p>
        </div>

        <div className="">
          <div>
            <img src={Icon5}></img>
          </div>
          <h1
            className="text-xl md:text-2xl font-bold mt-4"
            style={{ fontFamily: "Poppins" }}
          >
            Participant Friendly Feature
          </h1>
          <p className="mt-4 text-justify text-[#0000008A]">
            Discover a participant-friendly environment on our platform, where
            intuitive features simplify your experience. With user-centric
            design and streamlined processes, bidding becomes effortless, and
            accessible participation.
          </p>
        </div>

        <div className="">
          <div>
            <img src={Icon6}></img>
          </div>
          <h1
            className="text-xl md:text-2xl font-bold mt-4"
            style={{ fontFamily: "Poppins" }}
          >
            Quick Update & Feedback
          </h1>
          <p className="mt-4 text-justify text-[#0000008A]">
            Stay informed with prompt updates and ongoing feedback. Our dynamic
            communication system ensures quick notifications and continuous
            insights, and improvement throughout the process.
          </p>
        </div>
      </div>

      <div className="mt-5 md:mt-12 mx-5 md:mx-20 lg:mx-28 xl:mx-40">
        <h1
          className="text-2xl md:text-4xl font-bold"
          style={{ fontFamily: "Poppins" }}
        >
          Client Reviews
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 mx-5 md:mx-20 lg:mx-28 xl:mx-40 mt-5 md:mt-10">
        <div className="">
          <div className="p-4 rounded border">
            <p className=" text-justify">
              Efficiency and reliability define my experience with BulkyBID.
              I've bought multiple vehicles on the platform, and each
              transaction was smooth. The auction process is well-organized, and
              the responsive customer service adds an extra layer of confidence.
            </p>
            <div className="flex justify-end">
              <h1 className="font-bold">~Royal, Tractor Dealer</h1>
            </div>
          </div>
        </div>

        <div className="">
          <div className="p-4 rounded border">
            <p className="text-justify">
              I've been buying and selling cars for years, and BulkyBid is one
              of the best platforms I've come across. The customer support is
              excellent, and the website's features make it easy to manage my
              listings and bids. It's a valuable tool for anyone in the
              automotive market.
            </p>
            <div className="flex justify-end">
              <h1 className="font-bold">~Mohan Car Mall</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
