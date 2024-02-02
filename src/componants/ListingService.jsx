import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ListingService() {
  const [toggle, setToggle] = useState(1);
  const [carModels, setCarModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function Toggle(id) {
    setToggle(id);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://legal257.pythonanywhere.com/api/bulkupload_excel/");
        const responseData = await response.json();
        setCarModels(responseData);
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
    navigate(`/auction/${item}`);
  };

  const displayedCarModels = carModels.slice(0, 20); // Display the first 20 items

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
                {displayedCarModels.map((item, index) => (
                  <tr key={index} onClick={() => handleRowClick(item.dealer_name)}>
                    <td className="py-3 px-4 font-semibold">
                      {item.dealer_name}
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
