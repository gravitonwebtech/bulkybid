import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";

const options = [
  { value: "BankAuctions", label: "Bank Auctions", amount: 8850 },
  { value: "ConsumerAuctions", label: "Consumer Auctions", amount: 6200 },
  { value: " InsuranceAuctions", label: " Insurance Auctions", amount: 11800 },
  // Add more options as needed
];

const paymentOptions = [
  { value: "", label: "Select Payment Option" },
  { value: "reg", label: "Registration" },
  { value: "ren", label: "Renewal" },
  { value: "sec", label: "Refundable Security Deposit" },
];

function PaymentDetails() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [selectedPaymentOption, setSelectedPaymentOption] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [registrationAmount, setRegistrationAmount] = useState(0);
  const [qr,setQr]=useState(false)

  const handlePaymentOptionChange = (event) => {
    const selectedOption = event.target.value;

    if (selectedOption === "reg") {
      setRegistrationAmount(10000);
      setTotalAmount(10000);
    } else if (selectedOption === "ren") {
      setRegistrationAmount(0);
      setTotalAmount(0);
    } else if (selectedOption === "sec") {
      setRegistrationAmount(10000);
      setTotalAmount(10000);
    } else {
      setRegistrationAmount(0);
    }

    setSelectedPaymentOption(selectedOption);
  };

  const handleSelectChange = (selectedOptions) => {
    setSelectedItems(selectedOptions);

    const total = selectedOptions.reduce(
      (acc, option) => acc + option.amount,
      0
    );
    setTotalAmount(total);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormPaymentData((data) => ({
      ...data,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formPaymentData);
    console.log("Selected Payment Option:", selectedPaymentOption);
    console.log("Selected Items:", selectedItems);
    console.log("Total Amount:", totalAmount);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "csrftoken=tZQ0YhIzvFexGiWzliaB4MH6PoHbq2eu");

    var raw = JSON.stringify({
      name: formPaymentData.name,
      user_phone_no: formPaymentData.userPhoneNo,
      contact_person: formPaymentData.contactPerson,
      email: formPaymentData.email,
      registered_id: formPaymentData.registeredId,
      payment_of: selectedPaymentOption,
      interested_items: selectedItems,
      total_amount: totalAmount,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8000/api/api/payment/", requestOptions)
      .then((response) => response.text())
      .then((result) =>{
        setQr(true)
        console.log(result) })
     
      
      
      .catch((error) => console.log("error", error));
  };

  const [formPaymentData, setFormPaymentData] = useState({
    name: "",
    userPhoneNo: "",
    contactPerson: "",
    email: "",
    registeredId: "",
    paymentOf: "",
    interested: "",
  });
  // const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const PaymentSubmit = () => {
    // Perform payment submission logic here

    // After payment submission, show the popup
    setShowPopup(true);

    // Automatically close the popup after 10 seconds
    setTimeout(() => {
      closePopup();
    }, 10000);
  };

  const closePopup = () => {
    // Close the popup
    setShowPopup(false);

    // Navigate to / after closing the popup
    navigate('/');
  };

  // Use useEffect to clear the timeout when the component unmounts
  useEffect(() => {
    return () => clearTimeout();
  }, []);

  return (
    <>
    {
      qr?(
        <div className="p-5 shadow-2xl ">
          
        <div className="container mx-auto mt-24 flex flex-col gap-4 justify-center items-center rounded-sm">
        <h1 className="text-2xl ">Pay: {totalAmount}</h1>
        <img src='https://th.bing.com/th/id/R.9dd022e39f1086913b3ac858dedfe814?rik=l57GDCnm5zamAg&riu=http%3a%2f%2fwww.windforging.com%2fuploads%2f201912611%2ferwei198189.jpg%3fsize%3d180x0&ehk=fMJijD4MDG62%2bi4BGnjwcdcae6zfUj2AUbGONikrM6E%3d&risl=&pid=ImgRaw&r=0' alt="" className="mb-5 border border-sky-600" />
        <div>
      
        <Link onClick={PaymentSubmit} className='bg-green-500 text-white font-semibold p-3'>Pay Premium</Link>

        </div>
        </div>
        </div>
      ):(

        <div className="container mx-auto md:mt-[110px] px-4">
        <div className="bg-gray-100 p-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/4 lg:w-1/4 px-4"></div>
            <div className="w-full md:w-2/4 500 lg:w-2/4 px-4 py-5">
              <div className="rounded shadow bg-white p-3">
                <div className="text-center p-3 rounded mb-2">
                  <h3
                    className="text-xl font-normal"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Enter the following details to make the respective payment
                  </h3>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="mt-4 mb-2">
                    <label>
                      Name<span className="text-[#ff2e08]">*</span>
                    </label>
                    <input
                      type="text"
                      className={`bg-transparent border-2 p-2 rounded-[4px] w-full text-black ${
                        errors.name ? "border-red-500" : ""
                      }`}
                      placeholder="Enter Name"
                      name="name"
                      value={formPaymentData.name}
                      onChange={handleChange}
                      required=""
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div className="mt-4 mb-2">
                    <label>
                      Mobile Number<span className="text-[#ff2e08]">*</span>
                    </label>
                    <input
                      type="text"
                      className={`bg-transparent border-2 p-2 rounded-[4px] w-full text-black ${
                        errors.userPhoneNo ? "border-red-500" : ""
                      }`}
                      value={formPaymentData.userPhoneNo}
                      onChange={handleChange}
                      placeholder="Enter your mobile number"
                      name="userPhoneNo"
                    />
                    {errors.userPhoneNo && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.userPhoneNo}
                      </p>
                    )}
                  </div>

                  <div className="mt-4 mb-2">
                    <label>CD Contact Person</label>
                    <input
                      type="text"
                      className={`bg-transparent border-2 p-2 rounded-[4px] w-full text-black ${
                        errors.contactPerson ? "border-red-500" : ""
                      }`}
                      value={formPaymentData.contactPerson}
                      onChange={handleChange}
                      placeholder="Enter Name"
                      name="contactPerson"
                    />
                    {errors.contactPerson && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.contactPerson}
                      </p>
                    )}
                  </div>

                  <div className="mt-4 mb-2">
                    <label>
                      Email<span className="text-[#ff2e08]">*</span>
                    </label>
                    <input
                      type="email"
                      className={`bg-transparent border-2 p-2 rounded-[4px] w-full text-black ${
                        errors.email ? "border-red-500" : ""
                      }`}
                      value={formPaymentData.email}
                      onChange={handleChange}
                      placeholder="abe@example.com"
                      name="email"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="mt-4 mb-2">
                    <label for="regdId">Registered ID</label>
                    <input
                      id="regdId"
                      placeholder="Enter ID"
                      className={`bg-transparent border-2 p-2 rounded-[4px] w-full text-black ${
                        errors.registeredId ? "border-red-500" : ""
                      }`}
                      value={formPaymentData.registeredId}
                      onChange={handleChange}
                      name="registeredId"
                    />
                    {errors.registeredId && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.registeredId}
                      </p>
                    )}
                  </div>

                  <div className="mt-4 mb-2">
                    <h2 className="text-xl  mb-4">
                      Payment Of <span className="text-[#ff2e08]">*</span>
                    </h2>
                    <select
                      value={selectedPaymentOption}
                      onChange={handlePaymentOptionChange}
                      className="p-2 border rounded w-full"
                    >
                      {paymentOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>

                    {selectedPaymentOption !== "" && (
                      <div className="mt-4">
                        {selectedPaymentOption === "sec" ? (
                          <div className="mt-4">
                            <h3 className="text-lg">
                              Refundable Security Deposit Amount: Rs 10000
                            </h3>
                          </div>
                        ) : (
                          <>
                            <h2 className="text-2xl mb-4">Intrested In</h2>
                            <Select
                              isMulti
                              options={options}
                              value={selectedItems}
                              onChange={handleSelectChange}
                            />

                            <div className="mt-4">
                              {/* <h3 className="text-lg">Selected Items:</h3> */}
                              <ul>
                                {selectedItems.map((item) => (
                                  <li key={item.value} className="ml-2">
                                    {item.label} - Rs {item.amount}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </>
                        )}

                        <div className="mt-4">
                          <h3 className="text-lg font-bold">
                            Total Amount: Rs {totalAmount}
                          </h3>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-3">
                    <button
                      type="submit"
                      className="bg-[#2a89d8] font-semibold w-full text-white px-4 py-2 rounded-[4px]"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/4 lg:w-1/4 px-4"></div>
        </div>
      </div>
      )
    }


{showPopup && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>

            {/* Modal */}
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    {/* Your icon or image can go here */}
                    <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Premium Submitted!</h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Your premium has been submitted. You can now proceed to bidding.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button onClick={closePopup} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

     
    </>
  );
}

export default PaymentDetails;
