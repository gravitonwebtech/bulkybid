import React from "react";

const ProfileCard = () => {
  return (
    <div className="max-w-sm overflow-hidden shadow-lg mt-[150px] mx-auto border border-gray-300 rounded-[20px] bg-white p-6">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
          {/* Placeholder for profile image */}
          <span className="text-gray-500 text-2xl">Avatar</span>
        </div>
        <h1 className="text-xl font-bold mt-4">Najeeb Ahmad</h1>
      </div>
      <div className="mt-6">
        <div className="flex items-center mt-2">
          <span className="font-semibold">Email:</span>
          <span className="ml-2 text-gray-700">najeeb.ahmad@indusind.com</span>
        </div>
        <div className="flex items-center mt-2">
          <span className="font-semibold">Mobile No.:</span>
          <span className="ml-2 text-gray-700">+91-7845543906</span>
        </div>
        <div className="flex items-center mt-2">
          <span className="font-semibold">Participant Name:</span>
          <span className="ml-2 text-gray-700">Indusind Bank Ltd</span>
        </div>
        <div className="flex items-center mt-2">
          <span className="font-semibold">Registered on:</span>
          <span className="ml-2 text-gray-700">2023-08-02 18:27:59</span>
        </div>
        <div className="flex items-center mt-2">
          <span className="font-semibold">Address:</span>
          <span className="ml-2 text-gray-700">N/A</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
