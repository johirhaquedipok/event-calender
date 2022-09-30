import React from "react";
import Day from "./day";

const Month = ({ month }) => {
  console.log(month);
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {month.map((row, i) => (
        <div key={i}>
          {row.map((day, idx) => (
            <Day key={idx} day={day} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Month;
