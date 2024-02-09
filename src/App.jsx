import CalendarInput from "./CalendarInput";
import TimeDisplay from "./TimeDisplay";
import SaveInput from "./SaveInput";
import { useEffect, useState, createContext } from "react";
import dayjs from "dayjs";
import SavedDates from "./SavedDates";

export const AppContext = createContext(null);

// Loading storage into state
function loadStorage() {
  const items = JSON.parse(localStorage.getItem("calendarData"));
  if (items == null) {
    return {};
  }
  return items;
}

function App() {
  const [startDate, setStartDate] = useState(dayjs());
  const [savedDates, setSavedDates] = useState(loadStorage());
  const [viewName, setViewName] = useState("Default");

  //Every second recalculates the time and refreshes the page

  function saveDate(saveText) {
    if (saveText in savedDates) {
      return false;
    }
    const newSavedDates = savedDates;
    newSavedDates[saveText] = startDate;
    setSavedDates(newSavedDates);
    localStorage.setItem("calendarData", JSON.stringify(savedDates));
    return true;
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

  return (
    <AppContext.Provider
      value={{
        startDate,
        setStartDate,
        viewName,
        setViewName,
        saveDate,
        savedDates,
        loadDate,
        deleteData,
      }}
    >
      <div id="mainBody" className="flex gap-20 justify-center">
        <SavedDates />
        <CalendarInput />
        <div id="timeDisplay" className="flex flex-col justify-between w-[33%]">
          <TimeDisplay />
          <SaveInput />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
