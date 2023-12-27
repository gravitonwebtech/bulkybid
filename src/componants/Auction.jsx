import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Car from "../assets/images/Homepageimages/car1.png";
import Bus from "../assets/images/Homepageimages/bus1.jfif";

export default function Auction() {
  const data = [
    {
      image: Car,
      title: "Tata LPT 1212 DCR 42 HSD BS VI",
      vehicleNumber: "TN83MB1939",
      year: "2022",
      status: "N/A",
      location: "Krishnagiri",
      rcStatus: "Not Available",
      rcExpirationDate: "N/A",
      rcDate: "18 Dec 2023",
      rcExpire: "N/A",
      loanNumber: "TAC00780L",
      loanDetails: {},
      timer: "02h 48m",
    },
    {
      image: Bus,
      title: "Mahindra BIG BOLERO PIK UP FB 1.3 PS BS6",
      vehicleNumber: "TN83MB1939",
      year: "2022",
      status: "N/A",
      location: "Krishnagiri",
      rcStatus: "Not Available",
      rcExpirationDate: "N/A",
      rcDate: "30 Nov 2023",
      rcExpire: "N/A",
      loanNumber: "TVA00562L",
      loanDetails: {},
      timer: "02h 31m",
    },
  ];

  const location = useLocation();
  const auctionData = location.state.auctionData;

  //   const location = useLocation();
  //   const auctionData = location.state.auctionData || {};
  //   const { auctionId } = useParams();

  return (
    <>
      <div className="mx-5 md:mx-20 lg:mx-28 xl:mx-40 mt-24 md:mt-32">
        <div className="bg-white shadow rounded border-2">
          {data.map((item, index) => (
            <div key={index} className="border-b-2">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-10 p-5">
                <div className="md:col-span-2">
                  <img
                    src={item.image}
                    alt={`Item ${item.id}`}
                    className="w-3/4 h-[100px]"
                  />
                </div>
                <div className="md:col-span-10">
                  <h1 className="text-lg">{item.title}</h1>
                  <div className="grid grid-cols-2 md:grid-cols-12 gap-5 md:gap-10 mt-3">
                    <div className="md:col-span-6">
                      <div className="grid grid-cols-1 md:grid-cols-12">
                        <div className="md:col-span-4">
                          <h1 className="text-md text-[#AF9684]">
                            {item.vehicleNumber}
                          </h1>
                        </div>
                        <div className="md:col-span-8">
                          <ul className="md:flex md:inline list-disc text-[#AF9684]">
                            <li className="mx-5">{item.year}</li>
                            <li className="mx-5">{item.status}</li>
                            <li className="mx-5">{item.location}</li>
                          </ul>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-12 mt-3">
                        <div className="md:col-span-4">
                          <h1 className="text-md text-[#AF9684]">
                            RC: {item.rcStatus}
                          </h1>
                        </div>
                        <div className="md:col-span-8">
                          <ul className="md:flex md:inline list-disc text-[#AF9684]">
                            <li className="mx-5">{item.rcExpirationDate}</li>
                            <li className="mx-5">{item.rcDate}</li>
                            <li className="mx-5">{item.rcExpire}</li>
                          </ul>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-12 mt-3">
                        <div className="md:col-span-4">
                          <h1 className="text-md text-[#AF9684]">
                            Loan No.: {item.loanNumber}
                          </h1>
                        </div>
                        <div className="md:col-span-8">
                          {/* Display loan details as needed */}
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <h1 className="text-md text-[#AF9684] text-center">
                        Ends in
                      </h1>
                      <h1 className="text-black font-semibold text-center">
                        {item.timer}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
