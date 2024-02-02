import React, { useState, useRef } from "react";
import PersonalInfo from "./PersonalInfo";
import ConfidentialInfo from "./ConfidentialInfo";
import SocialNetwork from "./SocialNetwork";
import Personal from "../Dashboard/images/Personal.svg";
import Confidential from "../Dashboard/images/Confidential.svg";
import Social from "../Dashboard/images/Network.svg";
import ContactImg from "../Dashboard/images/contactImg1.svg";
import Logout from "../Dashboard/images/logout.svg";
import AddRegistrations from "../AddRegistrations";
import RequestForRegistration from "../../RequestForRegistration";

export default function UserDashboard() {
  const [image, setImage] = useState(null);
  const [toggle, setToggle] = useState(1);
  const fileInputRef = useRef(null);

  const handleToggle = (value) => {
    setToggle(value);
  };

  // mobile device

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState(1);

  const handleDrawerToggle = (section) => {
    setSelectedSection(section);
    setIsDrawerOpen(false);
  };

  const handleDrawerIconClick = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <div className=" p-3 mt-20">
        <div className="block xl:hidden ">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:mx-10">
            <div className="relative">
              <button
                onClick={handleDrawerIconClick}
                className="fixed top-10 left-0 m-4 p-2 text-white bg-[#09A350] rounded-full z-50"
              >
                Sidebar
              </button>

              {isDrawerOpen && (
                <div className="fixed inset-0 z-50">
                  <div className="w-full bg-white fixed right-0 h-full overflow-y-auto p-8 ">
                    <div className="md:col-span-2 border-2 p-3 rounded-[14px] bg-white shadow">
                      <div
                        onClick={handleCloseDrawer}
                        className="pl-3 font-medium text-[#F13E3E] cursor-pointer flex justify-end"
                      >
                        <h1>Close</h1>
                      </div>

                      <div className="mt-8 px-5">
                        <div
                          className={`flex mt-4 ${
                            selectedSection === 1 && "font-bold"
                          }`}
                          onClick={() => handleDrawerToggle(1)}
                          style={{ cursor: "pointer" }}
                        >
                          <div>
                            <img
                              src={Personal}
                              alt="Personal"
                              className="mt-1"
                            />
                          </div>
                          <div className="pl-3 font-medium">
                            <h1>Add Registration</h1>
                          </div>
                        </div>

                        <div
                          className={`flex mt-4 ${
                            selectedSection === 2 && "font-bold"
                          }`}
                          onClick={() => handleDrawerToggle(2)}
                          style={{ cursor: "pointer" }}
                        >
                          <div>
                            <img
                              src={Confidential}
                              alt="Confidential"
                              className="mt-1"
                            />
                          </div>
                          <div className="pl-3 font-medium ">
                            <h1>Request For Registration</h1>
                          </div>
                        </div>

                        <div
                          className={`flex mt-4 ${
                            selectedSection === 3 && "font-bold"
                          }`}
                          onClick={() => handleDrawerToggle(3)}
                          style={{ cursor: "pointer" }}
                        >
                          <div>
                            <img
                              src={Social}
                              alt="Social"
                              className="mt-1 text-black"
                            />
                          </div>
                          <div className="pl-3 font-medium">
                            <h1>Bidding</h1>
                          </div>
                        </div>
                      </div>

                      <div className="flex mt-5 md:mt-[150px] ">
                        <div>
                          <img src={Logout} alt="Logout" className="mt-1" />
                        </div>

                        <div className="pl-3 font-medium text-[#F13E3E]">
                          <h1>Logout</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="md:col-span-12 mt-10 md:mt-0">
              {selectedSection === 1 && <AddRegistrations />}
              {selectedSection === 2 && <RequestForRegistration />}
              {selectedSection === 3 && <SocialNetwork />}
            </div>
          </div>
        </div>

        <div className="hidden xl:block">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:mx-10">
            <div className="relative md:col-span-2 border-2 p-3 rounded-[14px] bg-white shadow">
              <h1 className="font-bold text-[#09A350] text-center text-lg mt-2">
                Hello
              </h1>

              <div className="mt-8 px-5">
                <h1 className="text-lg font-semibold text-gray-600">PROFILE</h1>

                <div
                  className="flex mt-4"
                  onClick={() => handleToggle(1)}
                  style={{ cursor: "pointer" }}
                >
                  <div>
                    <img src={Personal} alt="image" className="mt-1" />
                  </div>

                  <div className="pl-3 font-medium">
                    <h1>Add Registration</h1>
                  </div>
                </div>

                <div
                  className="flex mt-4"
                  onClick={() => handleToggle(2)}
                  style={{ cursor: "pointer" }}
                >
                  <div>
                    <img src={Confidential} alt="image" className="mt-1" />
                  </div>
                  <div className="pl-3 font-medium ">
                    <h1>Request For Registration</h1>
                  </div>
                </div>

                <div
                  className="flex mt-4 mb-8"
                  onClick={() => handleToggle(3)}
                  style={{ cursor: "pointer" }}
                >
                  <div>
                    <img src={Social} alt="image" className="mt-1 text-black" />
                  </div>
                  <div className="pl-3 font-medium">
                    <h1>Bidding</h1>
                  </div>
                </div>
              </div>

              <div className="flex pl-5 absolute bottom-0 left-0  right-0 ">
                <div>
                  <img src={Logout} alt="image" className="mt-1" />
                </div>
                <div className="pl-3 font-medium text-[#F13E3E]">
                  <h1>Logout</h1>
                </div>
              </div>
            </div>

            <div className="md:col-span-10">
              {toggle === 1 && <AddRegistrations />}
              {toggle === 2 && <RequestForRegistration />}
              {toggle === 3 && <SocialNetwork />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
