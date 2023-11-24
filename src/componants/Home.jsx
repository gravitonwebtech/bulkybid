import React, { useEffect } from "react";
import "./Home.css";
import Navbar from "../Common/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  useEffect(() => {
    const parallax = document.getElementById("home-banner-parallax");
    const parallax2 = document.getElementById("second-banner-parallax");

    const handleScroll = () => {
      let offset = window.pageYOffset;
      parallax.style.backgroundPositionY = offset * -0.4 + "px";
      parallax2.style.backgroundPositionY = `${50 + offset * 0.1}%`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* banner */}

      <div className="home-banner-section" id="home-banner-parallax">
        <Navbar />
        <div className="text-white pt-36 md:pt-40 px-5  md:px-10 lg:px-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-White leading-[60px]">
            Looking for a <span className="text-[#0071B3]">vehicle?</span>{" "}
            You're at the right place.
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-10 ">
          <div></div>

          <div>
            <div className="max-w-md mx-auto mt-10 md:mt-14">
                
              <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <h1 className="text-center text-black text-xl md:text-3xl font-semibold">Get in Touch</h1>
                <div className="mb-4 mt-3">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder=" username"
                  />
                </div>
                <div className="mb-6">
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder=" password"
                  />
                </div>
                <div className="mb-6">
                  <label className="flex items-center">
                    <input className="mr-2 leading-tight" type="checkbox" />
                    <span className="text-sm">Remember me</span>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Login
                  </button>
                  <button
                    className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Register
                  </button>
                </div>
                <div className="mt-4 text-center">
                  <a
                    href="#"
                    className="text-sm text-blue-500 hover:text-blue-700"
                  >
                    Forgot Password?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* second-section */}

      <div className="second-banner-section" id="second-banner-parallax">
        <div className="text-white pt-14 md:pt-28 px-5  md:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 mx-10">
          <div>
          
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-White  ">
              We offer customers a wide range of commercial cars and luxury cars
              for any occasion.
            </h1>
          </div>

          <div>
            <p>
              At our car rental agency, we believe that everyone deserves to
              experience the pleasure of driving a reliable and comfortable
              vehicle, regardless of their budget. We have curated a diverse
              fleet of well-maintained cars, ranging from sleek sedans to
              spacious SUVs, all at competitive prices.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5  mx-5 md:mx-20 lg:mx-30 mt-10 md:mt-14">
          <div className="rounded-lg p-8 bg-black text-center">
            <h2 className="text-[#0071B3] text-2xl  md:text-3xl font-semibold">1524</h2>

            <div className="flex  justify-center mt-2 text-xl ">
              <p className="text-white ">Completed Orders</p>
            </div>
          </div>

          <div className="rounded-lg p-8 bg-black text-center">
            <h2 className="text-[#0071B3] text-2xl  md:text-3xl font-semibold">8745</h2>

            <div className="flex  justify-center mt-2 text-xl">
              <p className="text-white ">Happy Customers</p>
            </div>
          </div>

          <div className="rounded-lg p-8 bg-black text-center">
            <h2 className="text-[#0071B3] text-2xl  md:text-3xl font-semibold">235</h2>

            <div className="flex  justify-center mt-2 text-xl">
              <p className="text-white">Vehicles Fleet</p>
            </div>
          </div>

          <div className="rounded-lg p-8 bg-black text-center">
            <h2 className="text-[#0071B3] text-2xl  md:text-3xl font-semibold">15</h2>

            <div className="flex  justify-center mt-2 text-xl">
              <p className="text-white ">Years Experience</p>
            </div>
          </div>


        </div>
      </div>

      {/* next-section */}

      <div className="  grid grid-cols-1 md:grid-cols-2  bg-[#0071B3] text-white  xl:px-40  ">
        <div className="flex  justify-center items-center  h-[400px] ">
          <div className="">
            <h1 className="text-lg font-medium ">
              Call us for further information
            </h1>
            <h1 className="text-2xl md:text-5xl font-semibold  ">
              Bulkybid customer care <br />
              is here to help you <br />
              anytime.
            </h1>
          </div>
        </div>

        <div className="flex justify-center items-center h-[400px]">
          <div className="text-center">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-white text-4xl "
            />
            <h1 className="text-lg font-normal mt-3">CALL US NOW</h1>
            <h1 className="text-xl md:text-4xl font-semibold">123 456 789</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
