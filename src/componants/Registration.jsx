import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Registration({ onClose }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    city: "",
    gender: "",
    interest: [],
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    phone: "",
    city: "",
    gender: "",
    interest: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      // Handle checkbox for interests
      setFormData((prevFormData) => ({
        ...prevFormData,
        interest: checked
          ? [...prevFormData.interest, value]
          : prevFormData.interest.filter((item) => item !== value),
      }));
    } else {
      // Handle other input fields
      setFormData({
        ...formData,
        [name]: value,
      });
    }
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate username (non-empty)
    if (!formData.username.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: "Please Enter Name",
      }));
      return;
    }

    // Validate email (basic email format)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please Enter Email",
      }));
      return;
    }

    // Validate phone number (10 digits)
    if (formData.phone.length !== 10 || !/^\d+$/.test(formData.phone)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: "Please Enter Number (must be 10 digits)",
      }));
      return;
    }

    // Validate city (non-empty)
    if (!formData.city.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        city: "Please Enter City",
      }));
      return;
    }

    // Validate gender (non-empty)
    if (!formData.gender.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        gender: "Please select Options",
      }));
      return;
    }

    // Validate interests (at least one selected)
    if (
      formData.gender.trim() === "end User" &&
      formData.interest.length === 0
    ) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        interest: "Please select at least one interest",
      }));
      return;
    }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      name: formData.username,
      email: formData.email,
      mobile: formData.phone,
      city: formData.city,
      youAre: formData.gender,
      interests: formData.interest.join(", "),
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://legal257.pythonanywhere.com/api/request/", requestOptions)
      .then((response) => response.json()) // Assuming the response is in JSON format
      .then((result) => {
        toast.success("Form submitted successfully!", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });

        // Close the form after 10 seconds
        setTimeout(() => {
          onClose();
        }, 3000);
        console.log(result);
      })
      .catch((error) => console.log("error", error));

    // Handle form submission logic here
    console.log("Form data submitted:", formData);

    // Clear input fields
    setFormData({
      username: "",
      email: "",
      phone: "",
      city: "",
      gender: "",
      interest: [],
    });

    // After successful submission, close the form
    // onClose();
  };

  const closeRegistrationForm = () => {
    onClose();
  };

  const interestsOptions =
    formData.gender === "end User"
      ? ["Buying Vehicle", "Selling Vehicle", "Property Vehicle"]
      : formData.gender === "vehicle dealer"
      ? ["Bank Auction", "Insurance Auction", "Property Auction"]
      : [];

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-70 z-50">
        <div className="fixed inset-0 z-50 top-0 left-0 h-full w-4/5 md:w-1/3">
          <div className="bg-white shadow h-full p-5">
            <button
              onClick={closeRegistrationForm}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <h2 className="text-2xl font-semibold mb-10">Registration Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className={`w-full p-2 border-2 border-gray-200 rounded ${
                    errors.username && "border-red-500"
                  }`}
                  placeholder="Name"
                />
                {errors.username && (
                  <p className="text-red-500 text-lg mt-1">{errors.username}</p>
                )}
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-2 border-2 border-gray-200 rounded ${
                    errors.email && "border-red-500"
                  }`}
                  placeholder="Email"
                />
                {errors.email && (
                  <p className="text-red-500 text-lg mt-1">{errors.email}</p>
                )}
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full p-2 border-2 border-gray-200 rounded ${
                    errors.phone && "border-red-500"
                  }`}
                  placeholder="Phone Number"
                />
                {errors.phone && (
                  <p className="text-red-500 text-lg mt-1">{errors.phone}</p>
                )}
              </div>

              <div className="mb-5">
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`w-full p-2 border-2 border-gray-200 rounded ${
                    errors.city && "border-red-500"
                  }`}
                  placeholder="City"
                />
                {errors.city && (
                  <p className="text-red-500 text-lg mt-1">{errors.city}</p>
                )}
              </div>

              <div className="mb-5">
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className={`w-full p-2 border-2 border-gray-200 rounded ${
                    errors.gender && "border-red-500"
                  }`}
                >
                  <option value="">You Are</option>
                  <option value="end User">End User</option>
                  <option value="vehicle dealer">Vehicle Dealer</option>
                </select>
                {errors.gender && (
                  <p className="text-red-500 text-lg mt-1">{errors.gender}</p>
                )}
              </div>

              <div className="mb-5">
                <label className="block mb-2 text-lg">Interests:</label>
                {interestsOptions.map((interest, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id={`interest_${index}`}
                      name="interest"
                      value={interest}
                      checked={formData.interest.includes(interest)}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor={`interest_${index}`}>{interest}</label>
                  </div>
                ))}
                {errors.interest && (
                  <p className="text-red-500 text-lg mt-1">{errors.interest}</p>
                )}
              </div>

              <button
                type="submit"
                className="bg-[#fbb42b] text-white py-2 px-4 rounded w-full"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
