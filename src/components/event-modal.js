import React, { useContext, useState } from "react";
import GlobalContext from "../context/global-context";
const labelsClass = [
  "bg-indigo-200",
  "bg-gray-200",
  "bg-green-200",
  "bg-blue-200",
  "bg-red-200",
  "bg-purple-200",
];
const EventModal = () => {
  const { setShowEventModal, daySelected, dispatchCallEvent, selectedEvent } =
    useContext(GlobalContext);
  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? labelsClass.find((lbl) => lbl === selectedEvent.lable)
      : labelsClass[0]
  );

  const handleSubmit = (e) => {
    console.log("event dispatched");
    e.preventDefault();
    const calenderEvent = {
      title,
      description,
      lable: selectedLabel,
      day: daySelected.valueOf(),
      id: Date.now(),
    };
    if (selectedEvent) {
      dispatchCallEvent({ type: "update", payload: calenderEvent });
    } else {
      dispatchCallEvent({ type: "push", payload: calenderEvent });
    }
    setShowEventModal(false);
  };

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
                <div
                  key={i}
                  onClick={() => setSelectedLabel(lblcls)}
                  className={`${lblcls} w-6 h-6 rounded-full grid place-items-center`}
                  // style={{ backgroundColor: `${lblcls}` }}
                >
                  {selectedLabel === lblcls && (
                    <span className="material-symbols-outlined text-white text-sm">
                      check
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <footer className="flex justify-end border-t p-3 mt-5">
          <button
            type="submit"
            onClick={handleSubmit}
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
