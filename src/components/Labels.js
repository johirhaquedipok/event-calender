import React, { useContext } from "react";
import GlobalContext from "../context/global-context";

const Labels = () => {
  const { labels, updateLabel } = useContext(GlobalContext);

  return (
    <>
      <p className="text-gray-500 font-bold mt-10">Label</p>
      {labels.map(({ label: lbl, checked }, idx) => (
        <label key={idx} className="item-center mt-3 block">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => updateLabel({ label: lbl, checked: !checked })}
            className={`form-checkbox h-5 text-${lbl}-400 rounded  focus:ring-0 cursor`}
          />
          <span className="ml-2 text-gray-700 capitalize ">
            {lbl ? lbl : "event"}
          </span>
        </label>
      ))}
    </>
  );
};

export default Labels;
