import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { carData } from "../data";

const Navbar = ({ setResult }) => {
  const handleChange = (e) => {
    const value = e.target.value;
    const res = carData.filter((item) => {
      return item && item.name && item.name.toLowerCase().includes(value);
    });
    setResult(res);
  };

  return (
    <div className=" flex items-center  bg-[#edf0f6] mx-5 h-14 rounded-xl shadow">
      <div className=" flex items-center px-4 bg-white w-fit ml-4 rounded-2xl overflow-hidden p-1  ">
        <input
          onChange={handleChange}
          className=" focus:outline-none  h-6  w-64 "
          type="search"
        />
        <BiSearch className=" text-gray-500 hover:text-black text-2xl" />
      </div>
      <select className=" bg-inherit mx-3 text-gray-700">
        <option value="">Relevance</option>
      </select>
      <select className=" bg-inherit mx-3 text-gray-700">
        <option value=""> All Brands</option>
      </select>
    </div>
  );
};

export default Navbar;
