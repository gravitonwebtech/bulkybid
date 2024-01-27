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
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialNetwork() {
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

  useEffect(() => {
    setTimeout(() => {
      if (percentage < 75) {
        setPercentage(percentage + 1);
      }
    }, 50);
  }, [percentage]);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 ">
        <div className="md:col-span-8 ">
          <div className="border-2 rounded-[14px] bg-white shadow-xl">
            <h1 className="text-[#09A350] px-5 md:px-8 py-2 font-medium text-base">
              {" "}
              Social & Network
            </h1>
            <div className="w-full border" />

            <div className="px-5 md:px-8 mt-5">
              <h1 className="text-base font-medium">Facebook</h1>

              <button className="bg-[#3B5998] rounded px-4 py-2 mt-5">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="text-white pr-3"
                />
                <span className="text-white text-md">
                  SIGN IN WITH FACEBOOK
                </span>
              </button>
            </div>

            <div className="px-5 md:px-8 mt-5">
              <h1 className="text-base font-medium">Twitter(X)</h1>

              <button className="bg-[#1DA1F2] rounded px-4 py-2 mt-5">
                <FontAwesomeIcon icon={faTwitter} className="text-white pr-5" />
                <span className="text-white text-md">SIGN IN WITH TWITTER</span>
              </button>
            </div>

            <div className="px-5 md:px-8 mt-5 mb-5 ">
              <h1 className="text-base font-medium">Instragram</h1>

              <button
                className="rounded px-4 py-2 mt-5"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
                }}
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-white pr-3"
                />
                <span className="text-white text-sm">
                  SIGN IN WITH INSTRAGRAM
                </span>
              </button>
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
