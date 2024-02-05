import React, { useState } from 'react';
import { servieUrl } from '../../env/env';

const AddRegistrations = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    fullname: '',
    email: '',
    phone_number: '',
    address: '',
    role: 3,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear validation error on change
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validation for username (10 digits with a combination of alphabets and numbers)
    const usernameRegex = /^[a-zA-Z0-9]{10}$/;
    if (!usernameRegex.test(formData.username)) {
      newErrors.username = 'Username must be 10 characters long and contain a combination of alphabets and numbers.';
      isValid = false;
    }

    // Basic validation for other fields (you can enhance as needed)
    if (!formData.password) {
      newErrors.password = 'Password is required.';
      isValid = false;
    }

    if (!formData.fullname) {
      newErrors.fullname = 'Full Name is required.';
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Email is required.';
      isValid = false;
    }

    if (!formData.phone_number) {
      newErrors.phone_number = 'Phone Number is required.';
      isValid = false;
    }

    if (!formData.address) {
      newErrors.address = 'Address is required.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Cookie': 'csrftoken=tZQ0YhIzvFexGiWzliaB4MH6PoHbq2eu',
        },
        body: JSON.stringify(formData),
        redirect: 'follow',
      };

      fetch(servieUrl.url + "api/accounts/", requestOptions)
        .then(response => response.text())
        .then(result =>{ console.log(result)
          emailSending()
         } )
        .catch(error => console.log('error', error));
    }
  };

  const emailSending =()=>{
    var formdata = new FormData();
formdata.append("to", formData.email);
formdata.append("userid", formData.username);
formdata.append("password",formData.password)
var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

fetch(servieUrl.url + "api/emailNewRegistratinos/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  }

  return (
    <div className="container mx-auto ">
      <form className="max-w-md mx-auto bg-white p-8 border rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Registration Form</h2>

        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-medium mb-2">Username:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} className={`w-full border-2 border-gray-400 rounded-md p-2 ${errors.username ? 'border-red-500' : ''}`} pattern="[a-zA-Z0-9]{10}" required />
          {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className={`w-full border-2 border-gray-400 rounded-md p-2 ${errors.password ? 'border-red-500' : ''}`} required />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="fullname" className="block text-gray-700 font-medium mb-2">Full Name:</label>
          <input type="text" id="fullname" name="fullname" value={formData.fullname} onChange={handleChange} className={`w-full border-2 border-gray-400 rounded-md p-2 ${errors.fullname ? 'border-red-500' : ''}`} required />
          {errors.fullname && <p className="text-red-500 text-sm mt-1">{errors.fullname}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`w-full border-2 border-gray-400 rounded-md p-2 ${errors.email ? 'border-red-500' : ''}`} required />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="phone_number" className="block text-gray-700 font-medium mb-2">Phone Number:</label>
          <input type="tel" id="phone_number" name="phone_number" value={formData.phone_number} onChange={handleChange} className={`w-full border-2 border-gray-400 rounded-md p-2 ${errors.phone_number ? 'border-red-500' : ''}`} required />
          {errors.phone_number && <p className="text-red-500 text-sm mt-1">{errors.phone_number}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 font-medium mb-2">Address:</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} className={`w-full border-2 border-gray-400 rounded-md p-2 ${errors.address ? 'border-red-500' : ''}`} required />
          {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
        </div>

        <div className="mb-4">
          <button type="submit" onClick={handleSubmit} className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">Register</button>
        </div>
      </form>
    </div>
  );
};




export default AddRegistrations