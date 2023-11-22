import { Tooltip } from 'react-tooltip';
import ProfileTooltip from './ProfileTooltip';

import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoginButton from "./LoginButton";
import { useSelector } from "react-redux";
const Navbar = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (event) => {
    event.preventDefault();
    window.location.href = `/search/${search}`;
  };

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <div className="flex flex-wrap mb-10">
        <section className="w-full">
          {/* <!-- navbar --> */}
          <nav className="flex justify-between bg-vnv-green-accent text-white">
            <div className="px-5 py-2 flex w-full items-center">
              <a className="" href="/">
                <img
                  src={require("../Image/logo.png")}
                  className="h-[48px] [w-72px] overflow-hidden"
                  alt=""
                />
              </a>
              {/* <!-- Nav Links --> */}
              <ul className="hidden md:flex mx-auto">
                <form onSubmit={handleSearch} className="m-0 p-0">
                  <input
                    type="text"
                    className="rounded w-[35rem] h-[2rem] px-1 text-vnv-black"
                    placeholder="Apa Yang Sedang Kamu Cari?"
                    name="search"
                    id="search"
                    value={search}
                    onChange={handleInputChange}
                  />
                  &nbsp;&nbsp;
                  <button className="rounded bg-vnv-green-dark text-vnv-light px-2 hover:bg-vnv-green-dark-hover">
                    Cari!
                  </button>
                </form>
                &nbsp;&nbsp;
                <button className="rounded bg-vnv-green-dark text-vnv-light px-2 hover:bg-vnv-green-dark-hover">
                  <a href="/register">Daftar</a>
                </button>
                &nbsp;&nbsp;
                <button className="rounded bg-slate-800 text-vnv-light px-2 hover:bg-slate-500">
                  <a href="/add-product">Add Product</a>
                </button>
              </ul>
              {/* <!-- Header Icons --> */}
              <div className="hidden xl:flex items-center space-x-5">
                <a className="flex items-center" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 stroke-vnv-green-dark hover:stroke-vnv-light"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="flex absolute -mt-5 ml-4">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                  </span>
                </a>
                
                {localStorage.username !== null ? (
                  <div>
                    {localStorage.username ? (
                      <a id="clickable">
                        <div className='flex'>
                          <span className='pe-2'>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 stroke-vnv-green-dark hover:stroke-vnv-light"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          </span>
                          <span>
                          {localStorage.username}
                          </span>
                          <Tooltip className="bg-vnv-light p-0" opacity={1} style={{ backgroundColor: "rgb(255, 255, 255)", color: "#255", zIndex: "100" }}  anchorSelect="#clickable" clickable>
                              <ProfileTooltip></ProfileTooltip>
                          </Tooltip>
                        </div>
                      </a>
                    ) : (
                      <div>No username found in user object</div>
                    )}
                  </div>
                ) : (
                  <LoginButton />
                )}

                <a className="flex items-center" href="">
                  
                </a>
              </div>
            </div>
            {/* <!-- Responsive navbar --> */}
            <a className="xl:hidden flex mr-6 items-center" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-vnv-light-grey"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="flex absolute -mt-5 ml-4">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
              </span>
            </a>
            <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-vnv-light-grey"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </a>
            
          </nav>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
