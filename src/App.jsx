import CalendarInput from "./CalendarInput";
import TimeDisplay from "./TimeDisplay";
import SaveInput from "./SaveInput";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import SavedDates from "./SavedDates";

// Loading storage into state
function loadStorage() {
  return JSON.parse(localStorage.getItem("calendarData"));
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
    timeoutId = setTimeout(calculateTime, 500);
    setTotalSeconds(time);
  }

  function saveDate(saveText) {
    const newSavedDates = savedDates;
    newSavedDates[saveText] = startDate;
    setSavedDates(newSavedDates);
    localStorage.setItem("calendarData", JSON.stringify(savedDates));
  }

  function loadDate(key) {
    setStartDate(dayjs(savedDates[key]));
    setViewName(key);
  }

  function deleteData(key) {
    const newSavedDates = savedDates;
    delete newSavedDates[key];
    setSavedDates(newSavedDates);
    localStorage.setItem("calendarData", JSON.stringify(savedDates));
  }

  useEffect(() => {
    calculateTime();
    return () => clearTimeout(timeoutId);
  }, [startDate]);

  return (
    <div id="mainBody" className="flex gap-10 justify-center">
      <SavedDates
        savedDates={savedDates}
        loadDate={loadDate}
        deleteData={deleteData}
      />
      <CalendarInput
        setStartDate={setStartDate}
        startDate={startDate}
        setViewName={setViewName}
      />
      <div id="timeDisplay" className="flex flex-col justify-between w-[33%]">
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
