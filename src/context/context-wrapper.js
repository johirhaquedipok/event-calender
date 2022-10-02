import dayjs from "dayjs";
import React, { useEffect, useReducer, useState } from "react";
import GlobalContext from "./global-context";

function savedEventsReducer(state, { type, payload }) {
  switch (type) {
    case "push":
      return [...state, payload];
      break;
    case "update":
      return state.map((evt) => (evt.id !== payload.id ? payload : evt));
      break;
    case "delete":
      return state.filter((evt) => evt.id !== payload.id);
      break;
    default:
      throw new Error("error coming from usereducer ");
      break;
  }
}

const ContextWrapper = ({ children }) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalenderMonth, setSmallCalenderMonth] = useState(null);
  const [daySelected, setDaySelected] = useState(dayjs());
  const [showEventModal, setShowEventModal] = useState(false);
  const [savedEvents, dispatchCallEvent] = useReducer(savedEventsReducer, [], );
  useEffect(() => {
    if (smallCalenderMonth !== null) {
      setMonthIndex(smallCalenderMonth);
    }
  }, [smallCalenderMonth]);

  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        smallCalenderMonth,
        setSmallCalenderMonth,
        daySelected,
        setDaySelected,
        showEventModal,
        setShowEventModal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;
