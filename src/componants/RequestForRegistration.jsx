import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RequestForRegistration = () => {
  const [userProfiles, setUserProfiles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://legal257.pythonanywhere.com/api/api/profiles/');
        setUserProfiles(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto ">
        <h1 className='font-bold text-2xl text-gray-600 pb-5 ml-5'>Request For Registration</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Username</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Phone</th>
            <th className="py-2 px-4 border-b">City</th>
            <th className="py-2 px-4 border-b">Gender</th>
            <th className="py-2 px-4 border-b">Interests</th>
          </tr>
        </thead>
        <tbody>
          {userProfiles.map((profile) => (
            <tr key={profile.id}>
              <td className="py-2 px-4 border-b">{profile.id}</td>
              <td className="py-2 px-4 border-b">{profile.username}</td>
              <td className="py-2 px-4 border-b">{profile.email}</td>
              <td className="py-2 px-4 border-b">{profile.phone}</td>
              <td className="py-2 px-4 border-b">{profile.city}</td>
              <td className="py-2 px-4 border-b">{profile.gender}</td>
              <td className="py-2 px-4 border-b">
                {profile.interest.map((interest) => (
                  <span key={interest} className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2">
                    {interest}
                  </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};



export default RequestForRegistration