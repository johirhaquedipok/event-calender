import dayjs from "dayjs";
import React from "react";
const Day = ({ day, rowIndx }) => {
  const getCurrentDayClass = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  };
  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        {rowIndx === 0 && (
          <div className="text-sm mt-1 text-center">
            {day.format("ddd").toUpperCase()}
          </div>
        )}
        <div className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
          <p>{day.format("DD")}</p>
        </div>
      </header>
    </div>
  );
};

export default Day;
