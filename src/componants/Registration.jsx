import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import { servieUrl } from "../env/env";

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
  const [open, setopen] = useState(true);
  const OpenLogin = () => {
    setopen(false);
  };
  const OpenRegistation = () => {
    setopen(true);
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
      username: formData.username,
      email: formData.email,
      phone: formData.phone,
      city: formData.city,
      gender: formData.gender,
      interest: formData.interest,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://legal257.pythonanywhere.com/api/api/profiles/",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        toast.success("Form submitted successfully!", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });

        console.log(result);
      })
      .catch((error) => console.log("error", error));

    // Close the form after 10 seconds

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

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(null); // Store the user's role
  const [error, setError] = useState(null); // Store login error message
  const navigate = useNavigate(); // Access the navigation function

  const handleLogin = async () => {
    try {
      // Make a fetch request to the login API
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Cookie", "csrftoken=tZQ0YhIzvFexGiWzliaB4MH6PoHbq2eu");

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
          username: username,
          password: password,
        }),
        redirect: "follow",
      };

      const response = await fetch(
        servieUrl.url + "api/login/",
        requestOptions
      );
      const result = await response.json();

      localStorage.setItem("LoginuserData", username);
      setRole(result.role);
    } catch (error) {
      console.error("Login failed", error);
      setError("Login failed");
    }
  };

  useEffect(() => {
    if (role === "Admin") {
      localStorage.setItem("login", "admin");
      navigate("/dashboard");
      window.location.reload();
    } else if (role === "User") {
      localStorage.setItem("login", "user");
      navigate("/auctionlist");
      window.location.reload();
    }
  }, [role, navigate]);

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-70 z-50">
        <div className="fixed inset-0 z-50 top-0 left-0 h-full w-4/5 md:w-1/3">
          {open ? (
            <div className="bg-white shadow h-full p-5">
              <button
                onClick={closeRegistrationForm}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
              <h2 className="text-2xl font-semibold mb-10">
                Inquery Form
              </h2>
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
                    <p className="text-red-500 text-lg mt-1">
                      {errors.username}
                    </p>
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
                    <p className="text-red-500 text-lg mt-1">
                      {errors.interest}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="bg-[#fbb42b] text-white py-2 px-4 rounded w-full"
                >
                  Submit
                </button>
                <button
                  type="submit"
                  onClick={OpenLogin}
                  className="bg-[#5820c8] mt-3 text-white py-2 px-4 rounded w-full"
                >
                  Login
                </button>
              </form>
            </div>
          ) : (
            <div className="bg-white shadow h-full p-5">
              <button
                onClick={closeRegistrationForm}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
              <h2 className="text-2xl font-semibold mb-10">
                Log In
              </h2>

              <form>
                <p className="mt-10">
                  <label className="font-bold text-xl">Username</label>

                  <input
                    type="email"
                    className="w-full p-2 border-2 mt-3"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </p>

                <p className="mt-5">
                  <label className="font-bold text-xl">Password</label>

                  <input
                    type="password"
                    className="w-full p-2 border-2 mt-3"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </p>

                {/* <Link to="/forget">
                  <h1 className="text-[#64666C] text-lg font-semibold hover:underline mt-3">
                    Forgot Password
                  </h1>
                </Link> */}

                {error && (
                  <div className="text-red-600 text-sm mb-4">{error}</div>
                )}

                <p className="mt-1">
                  <Link to="">
                    <button
                      onClick={() => {
                        handleLogin();
                      }}
                      className="bg-[#142bac] text-white py-2 px-4 rounded w-full"
                    >
                      Login
                    </button>
                  </Link>

                  <Link>
                    <button
                      onClick={OpenRegistation}
                      className="bg-[#4ee637] mt-3 text-white py-2 px-4 rounded w-full"
                    >
                      Register
                    </button>
                  </Link>
                </p>
              </form>
            </div>
          )}
        </div>
      </div>

      <ToastContainer />
    </>
  );
}
