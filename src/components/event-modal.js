import React, { useContext, useState } from "react";
import GlobalContext from "../context/global-context";
const labelsClass = ["indigo", "gray", "green", "bule", "red", "purple"];
const EventModal = () => {
  const [title, setTitle] = useState("");
  const { setShowEventModal, daySelected } = useContext(GlobalContext);
  const [description, setDescription] = useState("");
  const [selectedLabel, setSelectedLabel] = useState(labelsClass[0]);

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
          <div className="grid gap-y-7 grid-cols-5/1 items-end">
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

            <span className="material-symbols-outlined text-gray-400">
              segment
            </span>
            <input
              required
              className="pt-3 border-0 text-gray-600  pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring:0 focus:border-blue-500"
              type="text"
              name="description"
              placeholder="add description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <span className="material-symbols-outlined text-gray-400">
              bookmark_border
            </span>
            <div className="flex gap-x-2">
              {labelsClass.map((lblcls, i) => (
                <span
                  key={i}
                  onClick={() => setSelectedLabel(lblcls)}
                  className={`bg-${lblcls}-500 w-6 h-6 rounded-full grid place-items-center`}
                >
                  {selectedLabel === lblcls && (
                    <span className="material-symbols-outlined text-black text-sm">
                      check
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
        <footer className="flex justify-end border-t p-3 mt-5">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white"
          >
            save
          </button>
        </footer>
      </form>
    </div>
  );
};

export default EventModal;
