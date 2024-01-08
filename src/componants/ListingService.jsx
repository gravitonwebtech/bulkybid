import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ListingService() {
  const [toggle, setToggle] = useState(1);

  function Toggle(id) {
    setToggle(id);
  }


  const [carModels, setCarModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/carmodels/list/");
        const responseData = await response.json();

        // Check if response has a 'data' property with an array
        if (responseData && responseData.data && Array.isArray(responseData.data)) {
          console.log(responseData.data)
          setCarModels(responseData.data);
        } else {
          console.error('Invalid data format:', responseData);
          setError('Error fetching data. Please try again later.');
        }
      } catch (error) {
        console.error('Error fetching car models:', error);
        setError('Error fetching data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  
  const navigate = useNavigate();

  const handleRowClick = (item) => {
    console.log(item)
    navigate(`/auction/${item}`);
  };



  return (
    <>
      <div className="overflow-x-auto">
        <div className="mx-0 md:mx-20 lg:mx-28 xl:mx-40 mt-24 md:mt-32">
         
          <div>
            <ul className="flex  mx-5 md:mx-0">
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
                  {carModels.map((item, index) => (
                    <tr key={index} onClick={ ()=>handleRowClick(item.Auction_type) } >
                      <td className="py-3 px-4 font-semibold">
                        {item.Auction_type}
                      </td>
                      <td className="py-3 px-4">{item.location}</td>
                      <td className="py-3 px-4">{item.format}</td>
                      <td className="py-3 px-4">{item.end_time}</td>
                      <td className="py-3 px-4">{item.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
         
          </div>
        </div>
      </div>
    </>
  );
}
