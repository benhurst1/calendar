import CalendarInput from "./CalendarInput";
import TimeDisplay from "./TimeDisplay";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

function App() {
  const [startDate, setStartDate] = useState(new Date());
  const [seconds, setSeconds] = useState(0);
  let timeoutId;

  function calculateTime() {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const date = dayjs(startDate);

    var totalSeconds = date.diff(dayjs(), "second");
    timeoutId = setTimeout(calculateTime, 1000);
    setSeconds(totalSeconds);
  }

  useEffect(() => {
    calculateTime();
    return () => clearTimeout(timeoutId);
  }, [startDate]);

  return (
    <div id="mainBody">
      <div id="savedDates"> </div>
      <div id="calendarInput">
        <CalendarInput setStartDate={setStartDate} startDate={startDate} />
      </div>
      <div id="timeDisplay">
        <TimeDisplay seconds={seconds} startDate={startDate} />
      </div>
    </div>
  );
}

export default App;
