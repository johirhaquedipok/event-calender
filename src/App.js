import { useContext, useEffect, useState } from "react";
import CalenderHeader from "./components/calender-header";
import Month from "./components/month";
import Sidebar from "./components/sidebar";
import GlobalContext from "./context/global-context";
import { getMonth } from "./util";

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(monthIndex);
  }, [monthIndex]);

  return (
    <div className="container mx-auto p-1 font-sans">
      <h1 className="text-3xl font-bold text-center">Hello Event Manager</h1>
      <div className="h-screen flex flex-col">
        <CalenderHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </div>
  );
}

export default App;
