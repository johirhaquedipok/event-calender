import React from "react";
import CreateEventButton from "./create-event-button";
import SmallCalender from "./small-calender";

const Sidebar = () => {
  return (
    <aside className="border p-5 w-64">
      <CreateEventButton />
      <SmallCalender />
    </aside>
  );
};

export default Sidebar;
