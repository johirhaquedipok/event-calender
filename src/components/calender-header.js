import dayjs from "dayjs";
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

  const handleReset = () => {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  };

  return (
    <header className="px-4 py-2 flex item-center  ">
      {/* <img src="{logo}" alt="calender event logo" className="h-12 w-12 mr-2 " /> */}
      <h1 className="mr-10 text-xl tex-gray-500 font-bold">Calender</h1>
      <button className="border rounded py-2 px-4 mr-5" onClick={handleReset}>
        Today
      </button>
      <button onClick={handlePrevMonth}>
        <span className="material-symbols-outlined cursor-pointer text-gray-600 mx-2">
          arrow_back_ios
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className="material-symbols-outlined cursor-pointer text-gray-600 mx-2">
          arrow_forward_ios
        </span>
      </button>
      <h2 className="ml-4 text-xl text-gray-500 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </header>
  );
};

export default CalenderHeader;
