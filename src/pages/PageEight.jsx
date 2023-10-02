import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import Pagination from "../components/Pagination";
import { carData } from "../data";

const PageSeven = () => {
  const [result, setResult] = useState(null);
  console.log(result);
  return (
    <div className=" bg-[#edf0f6] h-[160vh]">
      <Navbar setResult={setResult} />

      <div className=" flex mx-16 gap-6  flex-wrap">
        {result
          ? result.slice(0, 6).map((item) => <Cards item={item} />)
          : carData.slice(42, 48).map((item) => <Cards item={item} />)}
      </div>
      <Pagination />
    </div>
  );
};

export default PageSeven;
