import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function MakePayment() {
  const [checkOtp, setCheckOtp] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const sendOtp = (e) => {
    e.preventDefault();

    // Perform validation before submitting
    const validationErrors = {};

    // Phone number validation
    if (!formData.phone) {
      validationErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      validationErrors.phone = "Invalid phone number (10 digits)";
    }

    if (Object.keys(validationErrors).length === 0) {
      // If there are no validation errors, proceed with sending OTP
      var formdata = new FormData();
      formdata.append("number", formData.phone);

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      fetch("https://legal257.pythonanywhere.com/api/sendOTP/", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);

          // Set checkOtp to true to render OTP verification section
          setCheckOtp(true);
          console.log("dasdas", checkOtp);
        })
        .catch((error) => console.log("error", error));
    } else {
      // Update state with validation errors
      setErrors(validationErrors);
    }
  };

  const dealsString =
    '[{"model": "myApi.deal", "pk": 1, "fields": {"deal_no": "12345", "brand": "suraj", "model": "XYZ-123", "new_state": "bokaro", "location": "Location1", "deal_date": "2024-01-01", "customer_name": "John Doe", "registration_no": "jho9bb7654", "rc_available": "Yes ", "repo_date": "2024-01-05", "segment": "nan", "parked_at": "nan", "yard_city": "nan", "valuation_amount": 50000.0, "valuation_report_link": "http://ggogle.com", "manufacturing_year": 2018, "base_rate": 100.0}}, {"model": "myApi.deal", "pk": 2, "fields": {"deal_no": "12345123", "brand": "suraj", "model": "XYZ-123", "new_state": "bokaro", "location": "Location1", "deal_date": "2024-01-01", "customer_name": "John Doe", "registration_no": "jho9bb7654", "rc_available": "Yes ", "repo_date": "2024-01-05", "segment": "nan", "parked_at": "nan", "yard_city": "nan", "valuation_amount": 50000.0, "valuation_report_link": "http://ggogle.com", "manufacturing_year": 2018, "base_rate": 100.0}}]';

  const parsedDeals = JSON.parse(dealsString);
  console.log("parsedDeals", parsedDeals);

  const verifyOtp = (e) => {
    e.preventDefault();
    var formdata = new FormData();
    formdata.append("number", formData.phone);
    formdata.append("otp", otpValue);

    var requestOptions = {
      method: "PUT",
      body: formdata,
      redirect: "follow",
    };

    fetch("https://legal257.pythonanywhere.com/api/checkOTP/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status) {
          setTimeout(() => {
            navigate("/payment-details");
          }, 3000);
        } else {
          alert("otp is wrong entered");
        }
      })
      .catch((error) => console.log("error", error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));
  };

  return (
    <>
      <div className="container mx-auto md:mt-[110px] px-4">
        {/* Container - Set maximum width and center the content */}
        <div className="bg-gray-100 p-4">
          {/* Row - Flex container for columns */}
          <div className="flex flex-wrap -mx-4">
            {/* Column 1 (lg: for larger screens, md: for medium screens, sm: for small screens, etc.) */}
            <div className="w-full md:w-1/4 lg:w-1/4 px-4"></div>
            <div className="w-full md:w-2/4 500 lg:w-2/4 px-4 py-5">
              {checkOtp ? (
                // OTP verification section
                <div className="flex items-center justify-center">
                  <div className="w-full p-6 bg-white rounded-md shadow-md">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                      OTP Verification
                    </h2>
                    <form onSubmit={verifyOtp}>
                      <div className="">
                        <input
                          type="text"
                          id="number"
                          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                          placeholder="Enter your OTP"
                          value={otpValue}
                          onChange={(e) => setOtpValue(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <button
                          className="bg-[#2774AE] mt-8 w-full py-2 text-white text-lg font-semibold rounded-lg"
                          type="submit"
                        >
                          Verify OTP
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              ) : (
                <div className="rounded shadow bg-white p-3">
                  <div className="text-center p-3 rounded mb-2">
                    <h3
                      className="text-xl font-normal"
                      style={{ fontFamily: "Poppins" }}
                    >
                      Enter your mobile number to get started with payment
                      process
                    </h3>
                  </div>

                  <form onSubmit={sendOtp}>
                    <div className="mt-4 mb-2">
                      <input
                        type="text"
                        id="pnum"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`bg-transparent border-2 p-2 rounded-[4px] w-full text-black ${
                          errors.phone ? "border-red-500" : ""
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.phone}
                        </p>
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
              )}
            </div>
            <div className="w-full md:w-1/4 lg:w-1/4 px-4"></div>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default MakePayment;
