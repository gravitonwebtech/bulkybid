import React, { useState } from "react";
import Navbar from "../Common/Navbar";
import "./Contact.css";
import { Link } from "react-router-dom";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear the error for the current field when the user starts typing
    setErrors({
      ...errors,
      [e.target.name]: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validations
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Invalid phone number (10 digits)';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.message) newErrors.message = 'Message is required';

    // If there are errors, prevent form submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If no errors, proceed with form submission
    console.log('Form Data:', formData);

    // Reset form data after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      city: '',
      message: '',
    });
    setErrors({});
  };

  return (
    <>
      <div className="about-banner-img flex flex-col items-center justify-center">
        <Navbar />
        <div className="text-center">
          <h1
            className="text-white font-bold text-2xl md:text-3xl lg:text-5xl"
            style={{ fontFamily: "Poppins" }}
          >
            Contact Us
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-10 lg:gap-20 mx-5 sm:mx-10 md:mx-20 lg:mx-24 xl:mx-28 mt-10 mb-10 md:mb-16 md:mt-16">
        <div className="md:col-span-7">
          <h2
            className="font-bold text-2xl md:text-4xl"
            style={{ fontFamily: "Poppins" }}
          >
            Do you have any question?
          </h2>
          <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        <div className="mt-2">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            className="bg-transparent border-2 p-2 rounded-[4px] w-full"
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>

        <div className="mt-2">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            className="bg-transparent border-2 p-2 rounded-[4px] w-full"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>

        <div className="">
          <input
            type="text"
            id="pnum"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="bg-transparent border-2 p-2 rounded-[4px] w-full"
          />
          {errors.phone && <p className="text-red-500">{errors.phone}</p>}
        </div>

        <div className="">
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            className="bg-transparent border-2 p-2 rounded-[4px] w-full"
          />
          {errors.city && <p className="text-red-500">{errors.city}</p>}
        </div>
      </div>
      <div className="mt-5">
        <textarea
          value={formData.message}
          onChange={handleChange}
          className="bg-transparent border-2 p-2 rounded-[4px] w-full"
          rows="4"
          name="message"
          placeholder="Your Message"
        ></textarea>
        {errors.message && <p className="text-red-500">{errors.message}</p>}
      </div>

      <div className="mt-5">
        <button
          type="submit"
          className="bg-[#f0bb3a] font-semibold text-white px-4 py-2 rounded-[4px]"
        >
          Send Message
        </button>
      </div>
    </form>
        </div>
        <div className="md:col-span-5">
          <div className="bg-white shadow border border-gray-200 p-5 md:p-10 h-full rounded-[4px]">
            <h1
              className="text-xl md:text-2xl font-bold text-[#031B4E]"
              style={{ fontFamily: "Poppins" }}
            >
              Contact Detail
            </h1>
            <ul className="mt-5">
              <li>
                <Link href="#" className="text-lg">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className=" pr-4 text-[#f0bb3a]"
                  />
                  info@bulkybid.com
                </Link>
              </li>

              <li className=" mt-2">
                <Link href="#" className="text-lg">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className=" pr-4 text-[#f0bb3a]"
                  />
                  +91-1234567890
                </Link>
              </li>

              <li className="mt-2">
                <Link href="#" className="text-lg">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className=" pr-4 text-[#f0bb3a]"
                  />
                  abc
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
