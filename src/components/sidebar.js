import React from "react";
import CreateEventButton from "./create-event-button";
import Labels from "./Labels";
import SmallCalender from "./small-calender";

const Sidebar = () => {
  return (
    <aside className="border p-5 w-64">
      <CreateEventButton />
      <SmallCalender />
      <Labels />
    </aside>
  );
};

export default Sidebar;
