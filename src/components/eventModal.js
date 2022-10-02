import React, { useContext, useState } from "react";
import GlobalContext from "../context/global-context";

const EventModal = () => {
  const [title, setTitle] = useState("");
  const { setShowEventModal, daySelected } = useContext(GlobalContext);

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="material-symbols-outlined text-gray-400">
            drag_handle
          </span>
          <button onClick={() => setShowEventModal(false)}>
            <span className="material-symbols-outlined text-gray-400">
              close
            </span>
          </button>
        </header>
        <div className="p-3">
          <div className="grid gap-y-7 grid-cols-1/5 items-end">
            <div></div>
            <input
              required
              className="pt-3 border-0 text-gray-600 text-3xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring:0 focus:border-blue-500"
              type="text"
              name="title"
              placeholder="add title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <span className="material-symbols-outlined text-gray-400">
              schedule
            </span>
            <p>{daySelected.format("ddddd, MMMM, DD")}</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EventModal;
