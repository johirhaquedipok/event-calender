import React, { useContext } from "react";
import GlobalContext from "../context/global-context";

const CreateEventButton = () => {
  const { setShowEventModal } = useContext(GlobalContext);
  return (
    <button
      className="border p-2 flex items-center justify-center gap-4 text-center rounded-full shadow-md hover:shadow-md cursor-pointer w-32"
      onClick={() => setShowEventModal(true)}
    >
      <span className="material-symbols-outlined block">add</span>
      <span className=" block">create</span>
    </button>
  );
};

export default CreateEventButton;
