import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Car from "../assets/images/Homepageimages/car1.png";
import Bus from "../assets/images/Homepageimages/bus1.jfif";

export default function Auction() {
  const [carkey, setCarkey] = useState("");
  // const data = [
  //   {
  //     image: Car,
  //     title: "Tata LPT 1212 DCR 42 HSD BS VI",
  //     vehicleNumber: "TN83MB1939",
  //     year: "2022",
  //     status: "N/A",
  //     location: "Krishnagiri",
  //     rcStatus: "Not Available",
  //     rcExpirationDate: "N/A",
  //     rcDate: "18 Dec 2023",
  //     rcExpire: "N/A",
  //     loanNumber: "TAC00780L",
  //     loanDetails: {},
  //     timer: "02h 48m",
  //   },
  //   {
  //     image: Bus,
  //     title: "Mahindra BIG BOLERO PIK UP FB 1.3 PS BS6",
  //     vehicleNumber: "TN83MB1939",
  //     year: "2022",
  //     status: "N/A",
  //     location: "Krishnagiri",
  //     rcStatus: "Not Available",
  //     rcExpirationDate: "N/A",
  //     rcDate: "30 Nov 2023",
  //     rcExpire: "N/A",
  //     loanNumber: "TVA00562L",
  //     loanDetails: {},
  //     timer: "02h 31m",
  //   },
  // ];

  // const location = useLocation();
  // const auctionData = location.state.auctionData;

  //   const location = useLocation();
  //   const auctionData = location.state.auctionData || {};
  //   const { auctionId } = useParams();
  const [pop, setPop] = useState(false);
  const handleAuction = (id) => {
    setCarkey(id);
    setPop(true);
    console.log(id);
  };

  const [carModels, setCarModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/carmodels/list/"
        );
        const responseData = await response.json();

        // Check if response has a 'data' property with an array
        if (
          responseData &&
          responseData.data &&
          Array.isArray(responseData.data)
        ) {
          // console.log(responseData.data);
          setCarModels(responseData.data);
        } else {
          console.error("Invalid data format:", responseData);
          setError("Error fetching data. Please try again later.");
        }
      } catch (error) {
        console.error("Error fetching car models:", error);
        setError("Error fetching data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const { userId } = useParams();
  const filteredData = carModels.filter((item) => item.Auction_type === userId);

  const [formData, setFormData] = useState({
    userId: 7,
    CarId: carkey && carkey,
    name: "",
    email: "",
    amount: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(formData);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8000/api/bidding/", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log("result: ", JSON.parse(result));
        // if (result)
        updateAmount();
        // You may want to handle the result or close the modal here
      })
      .catch((error) => console.log("error", error));
  };

  const [update, setUpdate] = useState("");
  const updateAmount = () => {
    var updateHeaders = new Headers();
    updateHeaders.append("Content-Type", "application/json");

    var updatedData = JSON.stringify({
      hightestBiddingPrice: formData.amount,
    });

    var updateOptions = {
      method: "PATCH",
      headers: updateHeaders,
      body: updatedData,
      redirect: "follow",
    };

    var updateUrl = `http://127.0.0.1:8000/api/carmodels/partial_update/${carkey}/`;

    fetch(updateUrl, updateOptions)
      .then((response) => response.text())
      .then((result) => {
        const data = JSON.parse(result);

        console.log(
          "updated: ",
          data.map((item) => item.hightestBiddingPrice)
        );

        // setUpdate(data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <>
      <div className="mx-5 md:mx-20 lg:mx-28 xl:mx-40 mt-24 md:mt-32">
        <div className="bg-white shadow rounded border-2">
          {filteredData.map((item, index) => (
            <div key={index} className="border-b-2">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-10 p-5">
                <div className="md:col-span-2">
                  <img
                    src={`http://127.0.0.1:8000/${item.img}`}
                    alt={`Item ${item.id}`}
                    className="w-3/4 h-[100px]"
                  />
                </div>
                <div className="md:col-span-10">
                  <h1 className="text-lg">{item.model_name}</h1>
                  <div className="grid grid-cols-2 md:grid-cols-12 gap-5 md:gap-10 mt-3">
                    <div className="md:col-span-6">
                      <div className="grid grid-cols-1 md:grid-cols-12">
                        <div className="md:col-span-4">
                          <h1 className="text-md text-[#AF9684]">
                            {item.vehicleNumber}
                          </h1>
                        </div>
                        <div className="md:col-span-8">
                          <ul className="md:flex md:inline list-none  text-[#AF9684]">
                            <li className="mx-5">{item.start_time}</li>
                            <li className="mx-5">{item.rc}</li>
                            <li className="mx-5">{item.location}</li>
                          </ul>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-12 mt-3">
                        <div className="md:col-span-4">
                          <h1 className="text-md text-[#AF9684]">
                            RC: {item.rc_available}
                          </h1>
                        </div>
                        <div className="md:col-span-8">
                          <ul className="md:flex md:inline  list-none text-[#AF9684]">
                            <li className="mx-5">{item.experyDate}</li>
                            <li className="mx-5">{item.buy_date}</li>
                            <li className="mx-5">{item.experyDate}</li>
                          </ul>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-12 mt-3">
                        <div className="md:col-span-4">
                          <h1 className="text-md text-[#AF9684]">
                            Loan No.: {}
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
                        {item.end_time}
                      </h1>
                    </div>

                    <div className="md:col-span-2">
                      <button
                        onClick={() => handleAuction(item.id)}
                        className="border m-2 rounded-md bg-blue-600 text-white hover:bg-red-600 border-red-800"
                      >
                        Auction Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {pop && (
        <div className="fixed bg-black bg-opacity-60 inset-0 z-10 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-auto max-w-3xl mx-auto my-6">
            <div className="relative flex flex-col w-full bg-white opacity-80 border-0 rounded-lg shadow-lg outline-none focus:outline-none">
              {/* Header */}
              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-xl font-semibold">Bidding Form</h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setPop(false)}
                >
                  ×
                </button>
              </div>
              {/* Body */}
              <div className="relative p-6 flex-auto">
                {/* Form */}
                <form>
                  <div className="mb-4">
                    <label
                      className="block text-white text-sm font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-white text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-white text-sm font-bold mb-2"
                      htmlFor="amount"
                    >
                      Amount
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="amount"
                      type="number"
                      placeholder="5000"
                      name="amount"
                      value={formData.amount}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flex items-center justify-end mt-6">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
