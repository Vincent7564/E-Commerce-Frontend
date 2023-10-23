import React from "react";
import imagenotfound from "../Image/404.jpg";
const Profile = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 gap-9">
        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex items-center mb-4">
            <img
              className="w-16 h-16 rounded-full mr-4"
              src={imagenotfound}
              alt="Profile"
            />
            
            <div>
              <h2 className="text-lg font-bold">username</h2>
              <p className="text-gray-500">username</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-lg font-bold">name</h2>
            <p className="text-gray-500">first name + last name</p>
          </div>
          
          <div className="border-t border-gray-300 pt-4">
            <h3 className="text-lg font-bold">email</h3>
            <p className="text-gray-500">example@gmail.cpm</p>
          </div>

          <div className="border-t border-gray-300 pt-4">
            <h3 className="text-lg font-bold">address</h3>
            <p className="text-gray-500">jalan lorem no 1</p>
          </div>

          <div className="border-t border-gray-300 pt-4">
            <h3 className="text-lg font-bold">phone</h3>
            <p className="text-gray-500">+62 000 0000 0000</p>
          </div>

          <div className="text-end mb-2 mt-4">
            &nbsp;&nbsp;<button className="rounded p-2 hover:bg-vnv-green-dark text-vnv-light bg-vnv-green-primary"><a href="/edit-profile">Edit</a></button>
            &nbsp;&nbsp;<button className="rounded p-2 hover:bg-red-800 text-vnv-light bg-red-500"><a href="/">Sign Out</a></button>
          </div>
        </div>

        <div className="rounded-lg p-4">
          <div className="bg-white shadow rounded-lg mb-4 p-4">
            <h2 className="text-lg font-bold">Saldo Anda</h2>
            <h2 className="text-lg font-bold text-gray-500">Rp. 1.000.000</h2>
            <div className="text-end ">
              <button className="mt-2 rounded p-2 hover:bg-vnv-green-dark text-vnv-light bg-vnv-green-primary"><a href="/">Lihat</a></button>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg mb-4 p-4">
            <h2 className="text-lg font-bold">Transaksi Anda</h2>
            <h2 className="text-lg font-bold text-gray-500">3 Transaksi</h2>
            <div className="text-end ">
              <button className="mt-2 rounded p-2 hover:bg-vnv-green-dark text-vnv-light bg-vnv-green-primary"><a href="/">Lihat</a></button>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg mb-4 p-4">
            <h2 className="text-lg font-bold">Keranjang Anda</h2>
            <h2 className="text-lg font-bold text-gray-500">5 barang</h2>
            <div className="text-end ">
              <button className="mt-2 rounded p-2 hover:bg-vnv-green-dark text-vnv-light bg-vnv-green-primary"><a href="/">Lihat</a></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
