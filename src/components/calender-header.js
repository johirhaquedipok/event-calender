import React, { useContext } from "react";
import GlobalContext from "../context/global-context";

const CalenderHeader = () => {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1);
  };

  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  };

  return (
    <header className="px-4 py-2 item-center">
      {/* <img src="{logo}" alt="calender event logo" className="h-12 w-12 mr-2 " /> */}
      <h1 className="mr-10 text-xl tex-gray-500 font-bold">Calender</h1>
      <button className="border rounded py-2 px-4 mr-5">Today</button>
      <button>
        <span
          className="material-icons-outlined cursor-pointer text-gray-600 mx-2"
          onClick={handlePrevMonth}
        >
          chevron_left
        </span>
      </button>
      <button>
        <span
          className="material-icons-outlined cursor-pointer text-gray-600 mx-2"
          onClick={handleNextMonth}
        >
          chevron_right
        </span>
      </button>
    </header>
  );
};

export default CalenderHeader;
