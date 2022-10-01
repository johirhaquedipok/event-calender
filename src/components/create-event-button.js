import React from "react";

const CreateEventButton = () => {
  return (
    <div className="border p-2 flex items-center justify-center gap-4 text-center rounded-full shadow-md hover:shadow-2xl cursor-pointer w-32">
      <span className="material-symbols-outlined block">add</span>
      <span className=" block">create</span>
    </div>
  );
};

export default CreateEventButton;
