import dayjs from "dayjs";
import React, { useContext } from "react";
import GlobalContext from "../context/global-context";
const Day = ({ day, rowIndx }) => {
  const getCurrentDayClass = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  };

  const { setDaySelected, setShowEventModal } = useContext(GlobalContext);
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
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
      ></div>
    </div>
  );
};

export default Day;
