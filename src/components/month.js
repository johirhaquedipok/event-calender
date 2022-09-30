import React from "react";
import Day from "./day";

const Month = ({ month }) => {
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <Day key={idx} day={day} rowIndx={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Month;
