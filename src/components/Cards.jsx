import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { GiSteeringWheel } from "react-icons/gi";
import { BsSpeedometer2 } from "react-icons/bs";
import { BiGasPump } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";

const Cards = ({ item }) => {
  return (
    <>
      <div className=" flex flex-col border  w-[30%] p-2 shadow-2xl m-3 rounded-xl ">
        <img className=" rounded-xl h-56" src={item.image_link} alt="" />
        <section>
          <div className=" my-2 flex justify-between mx-2">
            <p className=" text-gray-700 font-semibold text-lg">{item.name}</p>
            <p className=" border border-cyan-500 rounded-lg p-1 px-2 text-sm font-semibold text-gray-700">
              {item.year}
            </p>
          </div>
          <div className=" justify-between  flex flex-col my-4 ml-1 mr-12 h-14">
            <div className="flex justify-between mr-28">
              <div className="flex   items-center gap-1 ">
                <FaUserFriends className=" text-cyan-600" />
                <p className=" text-gray-800 text-xs">
                  {item.no_of_people} People
                </p>
              </div>
              <div className="flex mr-[17px]  items-center gap-1">
                <BiGasPump className="  text-cyan-600" />
                <p className=" text-gray-800 text-xs ">{item.fuel_type}</p>
              </div>
            </div>
            <div className="flex justify-between mr-[94px] ">
              <div className="flex items-center gap-1">
                <BsSpeedometer2 className=" text-cyan-600" />

                <p className=" text-gray-800 text-xs"> {item.mileage}/miles</p>
              </div>
              <div className="flex   items-center gap-1 ">
                <GiSteeringWheel className=" text-cyan-600" />

                <p className=" text-gray-800 text-xs">Automatic</p>
              </div>
            </div>
          </div>
          <hr className=" w-4/5  bg-black ml-5" />
          <div className=" flex mx-1 items-center gap-1  justify-between my-2">
            <p className=" text-gray-700 font-semibold">${item.rent}/month</p>
            <div className=" flex items-center gap-2">
              <AiOutlineHeart className=" text-cyan-600 border bg-blue-200 h-6 w-6 p-1 rounded-lg" />
              <button className="bg-[#4999ec] text-white font-semibold py-2 px-2 rounded-lg text-xs ">
                Rent Now
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Cards;
