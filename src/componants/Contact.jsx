import React, { useState } from "react";
import banner from "../assets/images/Homepageimages/banner-travels-image.png";
import { Link } from "react-router-dom";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
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
      [e.target.name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validations
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Invalid phone number (10 digits)";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.message) newErrors.message = "Message is required";

    // If there are errors, prevent form submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If no errors, proceed with form submission
    console.log("Form Data:", formData);

    // Reset form data after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      city: "",
      message: "",
    });
    setErrors({});
  };

  const data = [
    { zone: "South", contactNumber: "9880860590" },
    { zone: "West", contactNumber: "8652359534" },
    { zone: "North", contactNumber: "9920502313" },
    { zone: "East", contactNumber: "9920502313" },
  ];

  return (
    <>
      <div className="mt-20">
        <img src={banner} className="w-full h-auto" alt="" />
      </div>

      {/* Contact */}

      <div className="overflow-x-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-5 md:gap-10 mx-5 sm:mx-10 md:mx-20 lg:mx-24 xl:mx-28 mt-5 md:mt-12">
          <div className="md:col-span-6 lg:col-span-6">
            <h1
              className="text-2xl md:text-4xl font-bold"
              style={{ fontFamily: "Poppins" }}
            >
              Let's Connect
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 mt-8">
                <p>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Your Name"
                    required
                    className="py-2 w-full font-semibold text-gray-500 border-2 border-[#f0bb3a] px-5"
                  />
                </p>
                <p>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Your Email"
                    required
                    className="py-2 w-full font-semibold text-gray-500 border-2 border-[#f0bb3a] px-5"
                  />
                </p>
                <p>
                  <input
                    type="text"
                    id="pnum"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    className="py-2 w-full font-semibold text-gray-500 border-2 border-[#f0bb3a] px-5"
                  />
                </p>
                <p>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                    required
                    className="py-2 w-full font-semibold text-gray-500 border-2 border-[#f0bb3a]  px-5"
                  />
                </p>
              </div>
              <textarea
                className=" py-2 w-full font-semibold border-2 border-[#f0bb3a] mt-5 px-5 tex-black"
                placeholder="Enter message here"
                value={formData.message}
                onChange={handleChange}
                name="message"
                rows="4"
                required
              ></textarea>

              <div className="flex justify-center mt-5">
                <button
                  type="submit"
                  className="bg-[#f0bb3a] font-semibold text-white px-4 py-2 rounded-[4px]"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="md:col-span-1 lg:col-span-1"></div>

          <div className="md:col-span-5 lg:col-span-5 bg-white p-10 md:px-14 md:py-20 shadow rounded">
            <div>
              <div className="flex">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-[#f0bb3a] text-lg font-semibold"
                />
                <h1 className=" font-bold pl-3">PHONE</h1>
              </div>

              <div className="border-t border-[#ADADAD] w-100 h-1 mt-2" />
              <p className="mt-3">+91-9920502313</p>
            </div>

            <div className="mt-5">
              <div className="flex">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-[#f0bb3a] text-lg font-semibold"
                />

                <h1 className="font-bold pl-3">E-MAIL</h1>
              </div>

              <div className="border-t border-[#ADADAD] w-100 h-1 mt-2" />
              <p className="mt-3">support@bulkybid.com</p>
            </div>

            <div className="mt-5">
              <div className="flex">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-[#f0bb3a] text-lg font-semibold "
                />

                <h1 className="font-bold pl-3">ADDRESS</h1>
              </div>

              <div className="border-t border-[#ADADAD] w-100 h-1 mt-2" />
              <p className="mt-3">
                Second Floor, 101, 2nd Block, 3rd stage, Near BDA Complex, P&T
                Colony, R T Nagar, Bengaluru, Bengaluru Urban, Karnataka, 560032
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 xl:gap-20 mx-5 sm:mx-10 md:mx-20 lg:mx-24 xl:mx-28 mt-5 md:mt-14">
        <div className="">
          <table className="w-full border-2">
            <thead>
              <tr>
                <th className="border p-2">Zone Name</th>
                <th className="border p-2">Contact Number</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="border p-2 text-center"><b>{item.zone}</b></td>
                  <td className="border p-2 text-center">{item.contactNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="">
        <h1
          className="text-xl md:text-2xl font-bold"
          style={{ fontFamily: "Poppins" }}
        >
          Products
        </h1>

        <ul className="mt-5 font-medium text-[#525252]">
          <li>1. Online Auction </li>
          <li>2. Direct Corporate Deals (Expert) </li>
          <li>3. Valuation/Inspection  </li>
          <li>4. Theft Investigation</li>
          <li>5. Repo Management  </li>
          <li>6. Property Auction  </li>
        </ul>
        </div>

        <div className="">
        <h1
          className="text-xl md:text-2xl font-bold"
          style={{ fontFamily: "Poppins" }}
        >
          Contact
        </h1>

        <ul className="mt-5 font-medium text-[#525252]">
          <li>1. Name </li>
          <li>2. Contact Number </li>
          <li>3. Resume</li>
          <li>4. Location</li>
          <li>5. Designation</li>
        </ul>
        </div>
      </div> */}
    </>
  );
};

export default Contact;
