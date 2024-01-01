// CarModelList.js
import React, { useState, useEffect } from 'react';

const CarModelList = () => {
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
  }, []); // Empty dependency array to run once when the component mounts

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    userId: 1,
    CarId: 1,
    name: '',
    email: '',
    amount: 0,
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
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify(formData);

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch('http://127.0.0.1:8000/api/bidding/', requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        // You may want to handle the result or close the modal here
      })
      .catch((error) => console.log('error', error));
  };


  return (
    <div className="max-w-full mx-5  mt-8">
      <h2 className="text-2xl font-semibold mb-4">Car Models List</h2>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && carModels.length > 0 && (
      
            <table className="min-w-full bg-white border border-gray-300 rounded-md">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Model Name</th>
                  <th className="py-2 px-4 border-b">Buy Date</th>
                  <th className="py-2 px-4 border-b">RC</th>
                  <th className="py-2 px-4 border-b">Price</th>
                  <th className="py-2 px-4 border-b">Vehicle Type</th>
                  <th className="py-2 px-4 border-b">Insurance</th>
                  <th className="py-2 px-4 border-b">Ownership</th>
                  <th className="py-2 px-4 border-b">Start Time</th>
                  <th className="py-2 px-4 border-b">End Time</th>
                  <th className="py-2 px-4 border-b">RC Available</th>
                  
                </tr>
              </thead>
              <tbody>
                {carModels.map(carModel => (
                  <tr key={carModel.id}>
                    <td className="py-2 px-4 border-b">{carModel.model_name}</td>
                    <td className="py-2 px-4 border-b">{carModel.buy_date}</td>
                    <td className="py-2 px-4 border-b">{carModel.rc}</td>
                    <td className="py-2 px-4 border-b">{carModel.price}</td>
                    <td className="py-2 px-4 border-b">{carModel.vehicle_type}</td>
                    <td className="py-2 px-4 border-b">{carModel.insurance ? 'Yes' : 'No'}</td>
                    <td className="py-2 px-4 border-b">{carModel.ownership}</td>
                    <td className="py-2 px-4 border-b">{carModel.start_time}</td>
                    <td className="py-2 px-4 border-b">{carModel.end_time}</td>
                    <td className="py-2 px-4 border-b">{carModel.rc_available ? 'Yes' : 'No'}</td>
                    <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setIsModalOpen(true)}
      >
        Open Bidding
      </button>
                  </tr>
                ))}
              </tbody>
            </table>
       
      )}

<div className="max-w-md mx-auto mt-8">
      

      {isModalOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-auto max-w-3xl mx-auto my-6">
            <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
              {/* Header */}
              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-3xl font-semibold">Bidding Form</h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setIsModalOpen(false)}
                >
                  ×
                </button>
              </div>
              {/* Body */}
              <div className="relative p-6 flex-auto">
                {/* Form */}
                <form>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
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
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
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
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
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
    </div>

      {!loading && !error && carModels.length === 0 && (
        <p>No car models available.</p>
      )}
    </div>
  );
};

export default CarModelList;
