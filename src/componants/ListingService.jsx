import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ListingService() {
  const [toggle, setToggle] = useState(1);

  function Toggle(id) {
    setToggle(id);
  }

  const auctionData = [
    {
      auctionName: "Auction 1",
      location: "Location 1",
      format: "Format 1",
      ending: "Ending 1",
      vehicleAvailable: "Vehicle 1",
    },
    {
      auctionName: "Auction 2",
      location: "Location 2",
      format: "Format 2",
      ending: "Ending 2",
      vehicleAvailable: "Vehicle 2",
    },

    {
      auctionName: "Auction 3",
      location: "Location 3",
      format: "Format 3",
      ending: "Ending 3",
      vehicleAvailable: "Vehicle 3",
    },

    {
      auctionName: "Auction 4",
      location: "Location 4",
      format: "Format 4",
      ending: "Ending 4",
      vehicleAvailable: "Vehicle 4",
    },
  ];

  const auctionData1 = [
    {
      auctionName: "Auction 1",
      location: "Location 1",
      format: "Format 1",
      ending: "Ending 1",
      vehicleAvailable: "Vehicle 1",
    },
    {
      auctionName: "Auction 2",
      location: "Location 2",
      format: "Format 2",
      ending: "Ending 2",
      vehicleAvailable: "Vehicle 2",
    },

    {
      auctionName: "Auction 3",
      location: "Location 3",
      format: "Format 3",
      ending: "Ending 3",
      vehicleAvailable: "Vehicle 3",
    },
  ];

  const navigate = useNavigate();

  const handleRowClick = (item) => {
    navigate("/auction", { state: { auctionData: item } });
  };

  // const navigate = useNavigate();
  // const { auctionId } = useParams();

  // const handleRowClick = (itemId) => {
  //   navigate(`/auction/${itemId}`);
  // };

  return (
    <>
      <div className="overflow-x-auto">
        <div className="mx-0 md:mx-20 lg:mx-28 xl:mx-40 mt-24 md:mt-32">
          {/* <div>
            <ul className="flex inline">
              <li
                className="text-lg md:text-xl text-[#F65F40] font-medium mx-5 md:mx-0"
                style={{ fontFamily: "Poppins" }}
              >
                LIVE AUCTIONS
              </li>
              <li
                className="text-lg md:text-xl text-[#F65F40] font-medium mx-5 md:mx-0 pl-5"
                style={{ fontFamily: "Poppins" }}
              >
                PAST AUCTIONS
              </li>
            </ul>
          </div> */}

          {/* <table className="min-w-full bg-white rounded border-2 shadow mt-5">
            <thead>
               <tr className="bg-gray-200 text-gray-700 text-left">
                <th colSpan="5" className="py-3 px-4 font-semibold">
                  <div className="flex space-x-2">
                    <select className="border p-1 bg-white border-2">
                      <option>LOCATION</option>
                    </select>
                    <select className="border p-1 bg-white border-2">
                      <option>VEHICLE TYPE</option>
                    </select>
                    <select className="border p-1 bg-white border-2">
                      <option>AUCTION TYPE</option>
                    </select>
                  </div>
                </th>
              </tr> 

              <tr className="bg-gray-100 text-gray-700 text-left">
                <th className="py-3 px-4 font-semibold">AUCTION NAME</th>
                <th className="py-3 px-4 font-semibold">LOCATION</th>
                <th className="py-3 px-4 font-semibold">FORMAT</th>
                <th className="py-3 px-4 font-semibold">ENDING</th>
                <th className="py-3 px-4 font-semibold">VEHICLE AVAILABLE</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {auctionData.map((item, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 font-semibold">
                    {item.auctionName}
                  </td>
                  <td className="py-2 px-4">{item.location}</td>
                  <td className="py-2 px-4">{item.format}</td>
                  <td className="py-2 px-4">{item.ending}</td>
                  <td className="py-2 px-4">{item.vehicleAvailable}</td>
                </tr>
              ))}
            </tbody>
          </table> */}

          <div>
            <ul className="flex inline mx-5 md:mx-0">
              <li
                className={`text-lg md:text-xl font-medium  ${
                  toggle === 1 ? "text-[#F65F40]" : "text-gray-700"
                }`}
                style={{ fontFamily: "Poppins", cursor: "pointer" }}
                onClick={() => Toggle(1)}
              >
                LIVE AUCTIONS
              </li>
              <li
                className={`text-lg md:text-xl font-medium pl-5 ${
                  toggle === 2 ? "text-[#F65F40]" : "text-gray-700"
                }`}
                style={{ fontFamily: "Poppins", cursor: "pointer" }}
                onClick={() => Toggle(2)}
              >
                PAST AUCTIONS
              </li>
            </ul>

            {toggle === 1 && (
              <table className="min-w-full bg-white rounded border-2 shadow mt-5">
                <thead>
                  <tr className="bg-gray-100 text-gray-700 text-left">
                    <th className="py-3 px-4 font-semibold">AUCTION NAME</th>
                    <th className="py-3 px-4 font-semibold">LOCATION</th>
                    <th className="py-3 px-4 font-semibold">FORMAT</th>
                    <th className="py-3 px-4 font-semibold">ENDING</th>
                    <th className="py-3 px-4 font-semibold">
                      VEHICLE AVAILABLE
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {auctionData.map((item, index) => (
                    <tr
                      key={index}
                      onClick={() => handleRowClick(item.id)}
                      style={{ cursor: "pointer" }}
                    >
                      <td className="py-3 px-4 font-semibold">
                        {item.auctionName}
                      </td>
                      <td className="py-3 px-4">{item.location}</td>
                      <td className="py-3 px-4">{item.format}</td>
                      <td className="py-3 px-4">{item.ending}</td>
                      <td className="py-3 px-4">{item.vehicleAvailable}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {toggle === 2 && (
              <table className="min-w-full bg-white rounded border-2 shadow mt-5">
                <thead>
                  <tr className="bg-gray-100 text-gray-700 text-left">
                    <th className="py-3 px-4 font-semibold">AUCTION NAME</th>
                    <th className="py-3 px-4 font-semibold">LOCATION</th>
                    <th className="py-3 px-4 font-semibold">FORMAT</th>
                    <th className="py-3 px-4 font-semibold">ENDING</th>
                    <th className="py-3 px-4 font-semibold">
                      VEHICLE AVAILABLE
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {auctionData1.map((item, index) => (
                    <tr key={index}>
                      <td className="py-3 px-4 font-semibold">
                        {item.auctionName}
                      </td>
                      <td className="py-3 px-4">{item.location}</td>
                      <td className="py-3 px-4">{item.format}</td>
                      <td className="py-3 px-4">{item.ending}</td>
                      <td className="py-3 px-4">{item.vehicleAvailable}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
