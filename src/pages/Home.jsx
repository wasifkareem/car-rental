import React from "react";
import carpic from "../pic/carimg.png";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/page/1");
  };
  return (
    <div className=" flex justify-center flex-col text-center">
      <Navbar />
      <p className="font-extrabold text-transparent text-5xl my-6 bg-clip-text bg-gradient-to-r from-red-400 to-gray-600 ">
        Welcome to Stazi Technologies
      </p>
      <p className=" text-xl mb-2">Revolutionizing car rental space in India</p>
      <div className=" flex justify-center ">
        <img className=" bg-white w-1/2" src={carpic} alt="" />
      </div>
      <div>
        <button
          onClick={handleExplore}
          className=" border-2 border-l-black border-b-black border-t-gray-600 border-r-gray-600 px-32  shadow shadow-black text-2xl py-5 text-black font-semibold  w-fit"
        >
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default Home;
