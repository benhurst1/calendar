import CalendarInput from "./CalendarInput";
import TimeDisplay from "./TimeDisplay";
import SaveInput from "./SaveInput";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import SavedDates from "./SavedDates";

// Loading storage into state
function loadStorage() {
  const items = { ...localStorage };
  const keys = [];
  for (const key in items) {
    keys.push(key);
  }
  return keys;
}

function App() {
  const [startDate, setStartDate] = useState(dayjs());
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [savedDates, setSavedDates] = useState(loadStorage());
  const [viewName, setViewName] = useState("Default");

  let timeoutId;
  function calculateTime() {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const now = dayjs();
    var time = startDate.diff(now, "second");
    timeoutId = setTimeout(calculateTime, 1000);
    setTotalSeconds(time);
  }

  function saveDate(saveText) {
    setSavedDates([...savedDates, saveText]);
    localStorage.setItem(saveText, JSON.stringify(startDate));
  }

  function loadDate(key) {
    const value = JSON.parse(localStorage.getItem(key));
    setStartDate(dayjs(value));
    setViewName(key);
  }

  useEffect(() => {
    calculateTime();
    return () => clearTimeout(timeoutId);
  }, [startDate]);

  return (
    <div id="mainBody" className="flex gap-10 justify-center">
      <SavedDates savedDates={savedDates} loadDate={loadDate} />
      <CalendarInput
        setStartDate={setStartDate}
        startDate={startDate}
        setViewName={setViewName}
      />
      <div
        id="timeDisplay"
        className="flex flex-col justify-between"
      >
        <TimeDisplay
          totalSeconds={totalSeconds}
          startDate={startDate}
          viewName={viewName}
        />
        <SaveInput saveDate={saveDate} />
      </div>
    </div>
  );
}

export default App;
