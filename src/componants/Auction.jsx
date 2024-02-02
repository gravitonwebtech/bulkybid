import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Auction() {
  const [carkey, setCarkey] = useState("");
  const [carModels, setCarModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { userId } = useParams();



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://legal257.pythonanywhere.com/api/bulkupload_excel/");
        const responseData = await response.json();

     
          setCarModels(responseData);
       
      } catch (error) {
        console.error("Error fetching car models:", error);
        setError("Error fetching data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  console.log(carModels)

 
  const handleAuction = (itemId) => {
    // Implement your logic for handling the auction button click here
    // You may use the itemId for further processing
    console.log("Auction button clicked for item ID:", itemId);
  };

  const filteredData = carModels.filter((item) => item.dealer_name === userId);
  return (
    <>
      <div className="mx-5 md:mx-20 lg:mx-28 xl:mx-40 mt-24 md:mt-32">
        <div className="bg-white shadow rounded border-2">
          {filteredData.map((item, index) => (
            <div key={index} className="border-b-2">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-10 p-5">
                <div className="md:col-span-2">
                  <img
                    src={`https://legal257.pythonanywhere.com/api/bulkupload_excel//${item.img}`}
                    alt={`Item ${item.id}`}
                    className="w-3/4 h-[100px]"
                  />
                </div>
                <div className="md:col-span-10">
                  <h1 className="text-lg">{item.model}</h1>
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
                        // onClick={() => handleAuction(item.id)}
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

   
    </>
  );
}

