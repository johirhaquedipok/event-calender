import dayjs from "dayjs";
import React, { useEffect, useReducer, useState } from "react";
import GlobalContext from "./global-context";

function savedEventsReducer(state, { type, payload }) {
  switch (type) {
    case "push":
      return [...state, payload];

    case "update":
      return state.map((evt) => (evt.id !== payload.id ? payload : evt));

    case "delete":
      return state.filter((evt) => evt.id !== payload.id);

    default:
      throw new Error("error coming from usereducer ");
  }
}

function initEvents() {
  const storageEvents = localStorage.getItem("savedEvents");
  const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
  return parsedEvents;
}

const ContextWrapper = ({ children }) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalenderMonth, setSmallCalenderMonth] = useState(null);
  const [daySelected, setDaySelected] = useState(dayjs());
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [savedEvents, dispatchCallEvent] = useReducer(
    savedEventsReducer,
    [],
    initEvents
  );

  useEffect(() => {
    localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
  }, [savedEvents]);

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
        dispatchCallEvent,
        savedEvents,
        selectedEvent,
        setSelectedEvent,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;
