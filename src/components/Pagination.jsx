import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const Pagination = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const PageNo = Number(location.pathname.split("/")[2]);

  const handleOne = () => {
    navigate("/page/1");
  };

  const handleTwo = () => {
    navigate("/page/2");
  };

  const handleThree = () => {
    navigate("/page/3");
  };

  const handleFour = () => {
    navigate("/page/4");
  };
  const handleFive = () => {
    navigate("/page/5");
  };
  const handleSix = () => {
    navigate("/page/6");
  };
  const handleSeven = () => {
    navigate("/page/7");
  };
  const handleEight = () => {
    navigate("/page/8");
  };
  const handleNine = () => {
    navigate("/page/9");
  };
  const handleTen = () => {
    navigate("/page/10");
  };

  const handleBack = () => {
    navigate(`/page/${PageNo > 1 ? PageNo - 1 : PageNo}`);
  };

  const handleNext = () => {
    navigate(`/page/${PageNo < 10 ? PageNo + 1 : PageNo}`);
  };

  const handleHome = () => {
    navigate("/");
  };
  return (
    <div className=" justify-between  flex items-center  bg-inherit pr-10  border shadow-2xl  rounded-xl w-full h-12 fixed bottom-0 ">
      <div>
        <button
          onClick={handleHome}
          className=" ml-8 border rounded shadow-sm shadow-gray-600 bg-white p-2 px-3 text-xs"
        >
          Home
        </button>
      </div>
      <div className=" flex gap-1">
        <button
          onClick={handleBack}
          className=" border rounded shadow-sm shadow-gray-600 bg-white p-1 px-2 text-xs"
        >
          <AiOutlineArrowLeft />
        </button>
        <button
          onClick={handleOne}
          className=" border rounded  shadow-sm shadow-gray-600 bg-white p-1 px-2 text-xs"
        >
          1
        </button>
        <button
          onClick={handleTwo}
          className=" border rounded  shadow-sm shadow-gray-600 bg-white p-1 px-2 text-xs"
        >
          2
        </button>
        <button
          onClick={handleThree}
          className=" border rounded  shadow-sm shadow-gray-600 bg-white p-1 px-2 text-xs"
        >
          3
        </button>
        <button
          onClick={handleFour}
          className=" border rounded  shadow-sm shadow-gray-600 bg-white p-1 px-2 text-xs"
        >
          4
        </button>
        <button
          onClick={handleFive}
          className=" border rounded  shadow-sm shadow-gray-600 bg-white p-1 px-2 text-xs"
        >
          5
        </button>
        <button
          onClick={handleSix}
          className=" border rounded  shadow-sm shadow-gray-600 bg-white p-1 px-2 text-xs"
        >
          6
        </button>
        <button
          onClick={handleSeven}
          className=" border rounded  shadow-sm shadow-gray-600 bg-white p-1 px-2 text-xs"
        >
          7
        </button>
        <button
          onClick={handleEight}
          className=" border rounded  shadow-sm shadow-gray-600 bg-white p-1 px-2 text-xs"
        >
          8
        </button>
        <button
          onClick={handleNine}
          className=" border rounded  shadow-sm shadow-gray-600 bg-white p-1 px-2 text-xs"
        >
          9
        </button>
        <button
          onClick={handleTen}
          className=" border rounded  shadow-sm shadow-gray-600 bg-white p-1 px-2 text-xs"
        >
          10
        </button>
        <button
          onClick={handleNext}
          className=" border rounded  shadow-sm shadow-gray-600 bg-white p-1 px-2 text-xs"
        >
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
