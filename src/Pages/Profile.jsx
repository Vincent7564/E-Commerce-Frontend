import React from "react";
import imagenotfound from "../Image/404.jpg";
const Profile = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow rounded-lg p-4">
        <div className="flex items-center mb-4">
          <img
            className="w-16 h-16 rounded-full mr-4"
            src={imagenotfound}
            alt="Profile"
          />
          <div>
            <h2 className="text-lg font-bold">First Name + Last Name</h2>
            <p className="text-gray-500">Email</p>
          </div>
          <div className="flex justify-end bg-vnv-dark-grey rounded-xl text-white">
            <button className=" text-right">
              <h2 className="text-lg font-bold end text-end">Change Password</h2>
            </button>
          </div>
        </div>
        <div className="border-t border-gray-300 pt-4">
          <h3 className="text-lg font-bold mb-2">Address List</h3>
          <ul className="space-y-2">
            <li>Address</li>
          </ul>
        </div>
        <div className="border-t border-gray-300 pt-4">
          <h3 className="text-lg font-bold mb-2">Phone Number</h3>
          <p>No HP</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
