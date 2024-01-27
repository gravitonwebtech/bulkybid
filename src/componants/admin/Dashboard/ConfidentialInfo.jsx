import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUpload,
  faTrash,
  faPhone,
  faVideo,
  faFaceSmile,
  faPlus,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import ContactImg from "../Dashboard/images/contactImg1.svg";
import Image1 from "../Dashboard/images/Image1.svg";
import { MdSend } from "react-icons/md";

export default function ConfidentialInfo() {
  const [percentage, setPercentage] = useState(0);
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  const handleUploadButtonClick = () => {
    // Trigger the file input click programmatically
    fileInputRef.current.click();
  };
  const countries = [
    "India",
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    // Add more countries as needed
  ];

  const births = [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
  ];

  useEffect(() => {
    setTimeout(() => {
      if (percentage < 75) {
        setPercentage(percentage + 1);
      }
    }, 50);
  }, [percentage]);

  const [selectedFileName, setSelectedFileName] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile && selectedFile.type === 'application/pdf') {
      setSelectedFileName(selectedFile.name);
      console.log('Selected PDF File:', selectedFile);
    } else {
      setSelectedFileName('');
      e.target.value = null;
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 ">
        <div className="md:col-span-8 ">
          <div className="border-2 rounded-[14px] bg-white shadow-xl">
            <h1 className="text-[#09A350] px-5 md:px-8 py-2 font-medium text-base">
              {" "}
              Confidential Information
            </h1>
            <div className="w-full border" />
            <p className="text-[#767676] text-sm px-5 md:px-8 font-regular mt-2">
              Your telephone number, your email address will be communicated to
              another person (host or guest) only in the case of an exchange.
              The other information will not be disclosed and will remain
              private.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5 md:px-8 mt-2">
              <div className="">
                <label className="text-base font-medium">Year of Birth</label>
                <p>
                  <select
                    id="birth"
                    name="birth"
                    className="border border-gray-300 mt-2 px-2 py-1 rounded w-full md:w-3/5"
                  >
                    <option value=" Select your country" disabled>
                      Select your country
                    </option>
                    {births.map((birth, index) => (
                      <option key={index} value={birth}>
                        {birth}
                      </option>
                    ))}
                  </select>
                </p>
              </div>

              <div>
                <label className="text-base font-medium">Contact No.</label>
                <p>
                  <input
                    type="text"
                    name="contact"
                    placeholder="987-786-1265"
                    className="border border-gray-300 mt-2 px-2 py-1 rounded w-full md:w-3/5"
                  />
                  <button className="bg-[#09A350] text-sm text-white rounded px-2 py-1 mt-3 md:mt-0 md:ml-3">
                    VERIFIED
                  </button>
                </p>
              </div>
            </div>

            <div className="px-5 md:px-8 mt-2">
              <label className="text-base font-medium">Email</label>
              <p>
                <input
                  type="email"
                  name="email"
                  placeholder="aaabc@gmail.com"
                  className="border border-gray-300 mt-2 px-2 py-1 rounded w-full md:w-4/5"
                />
              </p>
            </div>

            <div className="px-5 md:px-8 mt-2">
              <label className="text-base font-medium">Password</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="">
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    className="border border-gray-300 mt-2 px-2 py-1 rounded w-full md:w-4/5"
                  />
                </div>
                <div className="">
                  <input
                    type="password"
                    name="cnfmpassword"
                    placeholder="Confirm Password"
                    className="border border-gray-300 mt-2 px-2 py-1 rounded w-full md:w-4/5"
                  />
                </div>
              </div>
            </div>

            <div className="px-5 md:px-8 mt-2 mb-2">
              <label className="text-base font-medium">Upload Document</label>
              <p className="mt-3">
                <label
                  htmlFor="fileInput"
                  className="bg-[#09A350] text-sm text-white px-5 py-1 rounded cursor-pointer"
                >
                  Upload Your ID
                </label>
                <input
                  type="file"
                  id="fileInput"
                  onChange={handleFileChange}
                  accept=".pdf"
                  className="hidden"
                />
                {selectedFileName && (
                  <p className="mt-2 text-gray-500">{`Selected PDF File: ${selectedFileName}`}</p>
                )}
                
                <p className="text-sm text-gray-500 mt-3">
                  Kindly update in PDF format.
                </p>
              </p>
            </div>
          </div>
        </div>

        <div className="md:col-span-4">
          <div className="border-2 rounded-[14px] flex justify-center items-center h-full bg-white shadow-xl p-5 md:p-0">
            <div className="app">
              <h1 className="text-lg font-semibold">Complete profile in:</h1>
              <div className="mt-6 relative">
                <CircularProgressbar
                  value={percentage}
                  styles={buildStyles({
                    strokeLinecap: "round",
                    pathColor: "#09A350",
                    trailColor: "#F2F2F2",
                  })}
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <p className="text-xl md:text-4xl font-semibold text-[#09A350]">
                    {percentage}%
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                No. of visitors (This week): 850
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-2 rounded-[14px] bg-white shadow-xl mt-4">
        <h1 className="text-[#09A350] px-5 md:px-8 py-2 font-medium text-base">
          {" "}
          Recent Listing
        </h1>
        <div className="w-full border mb-3" />

        <div className="border rounded p-3 mx-5 md:mx-8 mt-5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            <div className="md:col-span-2">
              <img src={Image1}></img>
            </div>
            <div className="md:col-span-10">
              <h1 className="text-base font-semibold">
                Single Floor Farm House
              </h1>
              <p className="text-sm text-[#858585]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque,
                sunt molestias esse libero nesciunt deleniti assumenda,
                architecto dignissimos inventore totam quis. Iste molestiae
                maiores asperiores eius. Architecto rerum ad sequi.
              </p>
            </div>
          </div>
        </div>

        <div className="border rounded p-3 mx-5 md:mx-8 mt-2">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            <div className="md:col-span-2">
              <img src={Image1}></img>
            </div>
            <div className="md:col-span-10">
              <h1 className="text-base font-semibold">
                Single Floor Farm House
              </h1>
              <p className="text-sm text-[#858585]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Provident cumque nisi autem explicabo. Minus voluptatum veniam
                in cupiditate et! Repellat, aspernatur labore porro dolores aut
                debitis tempora eius minus distinctio!
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 mb-2">
          <h1 className="text-[#09A350] text-center text-base font-semibold">
            View More
          </h1>
        </div>
      </div>
    </>
  );
}
