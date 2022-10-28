import React from "react";
import CreateEventButton from "./create-event-button";
import Label from "./labels";
import SmallCalender from "./small-calender";

const SideBar = () => {
  return (
    <div className="border p-5 w-64">
      <CreateEventButton />
      <SmallCalender />
      <Label />
    </div>
  );
};

export default SideBar;
