import React, { useState } from "react";
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
import Image2 from "../assets/images/Homepageimages/home-image1.png";
import Google from "../assets/images/Homepageimages/goole image.png";
import Facebook from "../assets/images/Homepageimages/facebook_image.png";
import CountUp from "react-countup";
import Navbar from "../Common/Navbar";

const Home = () => {
  const [formData, setFormData] = useState({
    phone: "",
    otp: "",
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear validation errors when user starts typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation before submitting
    const validationErrors = {};

    // Phone number validation
    if (!formData.phone) {
      validationErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      validationErrors.phone = "Invalid phone number (10 digits)";
    }

    // OTP validation
    if (!formData.otp) {
      validationErrors.otp = "OTP is required";
    } else if (!/^\d{6}$/.test(formData.otp)) {
      validationErrors.otp = "Invalid OTP (6 digits)";
    }

    // If there are errors, prevent form submission
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // No validation errors, proceed with form submission
    setShowSuccessModal(true);
    console.log("Form Data:", formData);
    setFormData({ phone: "", otp: "" });
  };

  const closeModal = () => {
    // Close the success modal
    setShowSuccessModal(false);
  };

  return (
    <>
      <div className="home-banner-section">
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-5 sm:mx-10 md:mx-20 lg:mx-24 xl:mx-28 ">
          <div className="mt-24 lg:mt-32 xl:mt-44">
            <h1 className="text-xl font-bold text-[#f0bb3a]">
              Plan your trip now
            </h1>
            <h1 className="text-white font-bold  text-3xl md:text-4xl lg:text-5xl mt-5">
              Find Your Perfect Ride with Our Range of
              <span className="text-[#f0bb3a]"> Vehicles</span>.
            </h1>
            <p className="text-[#E8E8E8] text-2xl md:text-lg text-medium mt-5">
              Embark on unforgettable adventures and discover the world in
              unparalleled comfort and style with our fleet of exceptionally
              comfortable cars.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
              <div className="flex">
                <div className="pr-5">
                  <FontAwesomeIcon
                    icon={faTrophy}
                    className="bg-[#f0bb3a] lg:text-4xl p-3 text-white rounded-[4px]"
                  />
                </div>

                <div className="">
                  <h4 class="text-[#f0bb3a] font-semibold">
                    First Class Services
                  </h4>
                  <p className="mt-2 text-[#E8E8E8]">
                    Est dolore ut laboris eu enim eu veniam nostrud esse laborum
                    duis.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="pr-5">
                  <FontAwesomeIcon
                    icon={faRoad}
                    className="bg-[#f0bb3a] lg:text-4xl p-3 text-white rounded-[4px]"
                  />
                </div>

                <div className="">
                  <h4 class="text-[#f0bb3a] font-semibold">
                    24/7 Road Assistance
                  </h4>
                  <p className="mt-2 text-[#E8E8E8]">
                    Est dolore ut laboris eu enim eu veniam nostrud esse laborum
                    duis.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black bg-opacity-20 shadow-xl rounded-2xl p-5 mx-auto w-full min-h-64 sm:max-w-[30rem] mt-5 md:mt-28 lg:mt-36 xl:mt-44">
            <h1 class="font-semibold text-2xl text-white mb-4">
              Let's Connect
            </h1>

            <div>
              <form onSubmit={handleSubmit}>
                <label className="text-lg text-white">Phone Number</label>
                <div className="mt-2 mb-2">
                  <input
                    type="text"
                    id="pnum"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`bg-transparent border-2 p-2 rounded-[4px] w-full text-white ${
                      errors.phone ? "border-red-500" : ""
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                <label className="text-lg text-white">Enter OTP</label>
                <div className="mt-2 mb-2">
                  <input
                    type="text"
                    id="otp"
                    name="otp"
                    placeholder="Enter OTP"
                    value={formData.otp}
                    onChange={handleChange}
                    className={`bg-transparent border-2 p-2 rounded-[4px] w-full text-white ${
                      errors.otp ? "border-red-500" : ""
                    }`}
                  />
                  {errors.otp && (
                    <p className="text-red-500 text-sm mt-1">{errors.otp}</p>
                  )}
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="bg-[#f0bb3a] font-semibold w-full text-white px-4 py-2 rounded-[4px]"
                  >
                    Submit
                  </button>
                </div>
              </form>

              {/* Success Modal */}
              {showSuccessModal && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
                  <div
                    className="absolute w-full h-full bg-gray-900 opacity-50"
                    onClick={closeModal}
                  ></div>
                  <div className="bg-white p-8 rounded-lg z-10 relative">
                    {/* Cross icon to close the modal */}
                    <div
                      className="absolute top-2 right-2 cursor-pointer"
                      onClick={closeModal}
                    >
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="text-gray-500"
                      />
                    </div>
                    <div className="flex justify-center">
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        className="text-green-500 h-10 w-10"
                      />
                    </div>
                    <p className="mt-4 text-black text-xl font-semibold">
                      Form submitted successfully!
                    </p>
                  </div>
                </div>
              )}

              <h1 className="text-gray-400 mt-4 text-center">OR</h1>

              <div className="flex justify-center mt-4">
                <span className="pr-16">
                  <img src={Google} className="h-10 w-10" alt="Google Icon" />
                </span>

                <div className="border-r border-gray-400 h-8"></div>

                <span className="pl-10">
                  <img
                    src={Facebook}
                    className="h-10 w-15"
                    alt="Facebook Icon"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black pb-5 md:pb-12">
        <div className="pt-5 md:pt-12">
          <h1 className="text-center text-[#f0bb3a] font-bold text-lg">
            Why Choose Us
          </h1>
          <h2 className="text-center font-bold text-white text-2xl md:text-3xl mt-3">
            Our Features
          </h2>
          <p className="text-center text-md text-[#E8E8E8] mt-3 hidden md:block">
            Discover a world of convenience, safety, and customization, paving
            the<br></br>
            way for unforgettable adventures and seamless mobility solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mx-5 sm:mx-10 md:mx-20 lg:mx-24 xl:mx-28 mt-5 md:mt-20">
          <div className="lg:col-span-3">
            <div className="flex">
              <div className="pr-5">
                <FontAwesomeIcon
                  icon={faTrophy}
                  className="bg-[#f0bb3a]  p-3 text-white rounded-[4px] w-10 h-10"
                />
              </div>

              <div className="">
                <h4 class="text-[#f0bb3a] font-semibold">
                  First Class Services
                </h4>
                <p className="mt-2 text-[#E8E8E8]">
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
                <h4 class="text-[#f0bb3a] font-semibold">
                  24/7 Road Assistance
                </h4>
                <p className="mt-2 text-[#E8E8E8]">
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
                <h4 class="text-[#f0bb3a] font-semibold text-end">
                  Quality at Minimum Expense
                </h4>
                <p className="mt-2 text-[#E8E8E8] text-end">
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
                <h4 class="text-[#f0bb3a] font-semibold text-end">
                  Free Pick-Up & Drop-Off
                </h4>
                <p className="mt-2 text-[#E8E8E8] text-end">
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
      </div>

      <div className="home-middle-banner">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-5 sm:mx-10 md:mx-20 lg:mx-24 xl:mx-28 pt-10 md:pt-20">
          <div className="">
            <h1 className="text-white text-2xl md:text-4xl font-bold">
              We offer customers a wide range of
              <span className="text-[#f0bb3a]"> commercial cars </span>
              and <span className="text-[#f0bb3a]">luxury cars</span> for any
              occasion.
            </h1>
          </div>
          <div className="">
            <p className="text-[#acacac] text-md font-semibold">
              At our car rental agency, we believe that everyone deserves to
              experience the pleasure of driving a reliable and comfortable
              vehicle, regardless of their budget. We have curated a diverse
              fleet of well-maintained cars, ranging from sleek sedans to
              spacious SUVs, all at competitive prices. With our streamlined
              rental process, you can quickly and conveniently reserve your
              desired vehicle. Whether you need transportation for a business
              trip, family vacation, or simply want to enjoy a weekend getaway,
              we have flexible rental options to accommodate your schedule.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-5 md:mx-20 lg:mx-24 xl:mx-28 pt-10">
          <div className="bg-black bg-opacity-50 text-center pt-6 pb-6 rounded-[4px]">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-medium text-[#f0bb3a]">
              <CountUp start={0} end={15425} duration={10} />
            </h3>
            <p className="text-sm mt-3 text-white font-semibold">
              Completed Orders
            </p>
          </div>

          <div className="bg-black bg-opacity-50 text-center pt-6 pb-6 rounded-[4px]">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-medium text-[#f0bb3a]">
              <CountUp start={0} end={8754} duration={10} />
            </h3>
            <p className="text-sm mt-3 text-white font-semibold">
              Happy Customers
            </p>
          </div>

          <div className="bg-black bg-opacity-50 text-center pt-6 pb-6 rounded-[4px]">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-medium text-[#f0bb3a]">
              <CountUp start={0} end={235} duration={10} />
            </h3>
            <p className="text-sm mt-3 text-white font-semibold">
              Vehicles Fleet
            </p>
          </div>

          <div className="bg-black bg-opacity-50 text-center pt-6 pb-6 rounded-[4px]">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-medium text-[#f0bb3a]">
              <CountUp start={0} end={15} duration={10} />
            </h3>
            <p className="text-sm mt-3 text-white font-semibold">
              Years Experience
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
