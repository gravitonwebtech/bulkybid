import React from "react";
import "./BitPage.css";
import Navbar from "../Common/Navbar";
import Car1 from "../assets/images/Homepageimages/home-image1.png";
import Car2 from "../assets/images/Homepageimages/home-image2.png";

function BitPage() {
  const items = [
    {
      id: 1,
      image: Car1,
      rating: "4.8",
      rules: ["Up to 150%", "20,000/-", "T&Cs Apply"],
      rules1: ["25+ Spots", "Mobile App", "Great Support"],
    },
    {
      id: 2,
      image: Car2,
      rating: "4.4",
      rules: ["Up to 180%", "Deposit", "T&Cs Apply"],
      rules1: ["Welcome Offer", "Life Streaming", "Many Bonuses"],
    },
  ];

  return (
    <>
      <div className="about-banner-img flex flex-col items-center justify-center">
        {/* <Navbar /> */}
        <div className="text-center">
          <h1
            className="text-white font-bold text-2xl md:text-3xl lg:text-5xl"
            style={{ fontFamily: "Poppins" }}
          >
            BidPage
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 mt-5 mx-5 md:mx-20 lg:mx-28 xl:mx-32 mb-5">
        {items.map((item) => (
          <div
            key={items.type}
            className="bg-white shadow-2xl rounded-[4px] p-10 mt-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-10">
              <div className="md:col-span-2">
                <img src={item.image} alt={`Car ${item.id}`} />
              </div>
              <div className="md:col-span-2 my-5">
                <span className="text-xl font-medium bg-gray-200 p-3 rounded-[4px]">
                  &#8377;{item.rating}
                </span>
              </div>
              <div className="md:col-span-3">
                {item.rules.map((data) => (
                  <div className="" key={data}>
                    <ul>
                      <li className=" text-lg font-semibold">{data}</li>
                    </ul>
                  </div>
                ))}
              </div>
              <div className="md:col-span-3">
                {item.rules1.map((data1) => (
                  <div className="" key={data1}>
                    <div className="flex">
                      <div className="mt-2 pr-3">
                        <svg
                          width="14"
                          height="13"
                          viewBox="0 0 14 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.17697 6.00009L4.753 8.78388L12.28 0.432733C12.8435 -0.131524 13.729 0.470316 13.2863 1.10983L5.8801 11.6803C5.31656 12.3574 4.55184 12.4327 3.90778 11.7556L0.164462 7.58001C-0.560035 6.6019 1.29145 5.21023 2.17697 6.00008V6.00009Z"
                            fill="black"
                          />
                        </svg>
                      </div>
                      <div className=" text-lg font-semibold">{data1}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="md:col-span-2 my-5">
                <button className="bg-blue-800 px-4 py-1 text-white text-xl font-semibold rounded-[4px]">
                  Bid Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default BitPage;
