import { useContext, useEffect, useState } from "react";
import CalenderHeader from "./components/calender-header";
import EventModal from "./components/event-modal";
import Month from "./components/month";
import SideBar from "./components/side-bar";
import GlobalContext from "./context/global-context";
import { getMonth } from "./utils";
function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <>
      {showEventModal && <EventModal />}
      <div className="h-screen flex flex-col">
        <CalenderHeader />
        <div className="flex flex-1">
          <SideBar />
          <Month month={currentMonth} />
        </div>
      </div>
    </>
  );
}

export default App;
