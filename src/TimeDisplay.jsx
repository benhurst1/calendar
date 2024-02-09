import { useContext, useEffect, useState } from "react";
import App, { AppContext } from "./App";
import dayjs from "dayjs";
export default function TimeDisplay() {
  const { viewName, startDate } = useContext(AppContext);
  const [totalSeconds, setTotalSeconds] = useState(0);

  let timeoutId;
  function calculateTime() {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(calculateTime, 1000);
    setTotalSeconds(startDate.diff(dayjs(), "second"));
  }
  useEffect(() => {
    calculateTime();
    return () => clearTimeout(timeoutId);
  }, [startDate]);

  const items = [
    { id: 3, label: "seconds", time: roundTime(totalSeconds) },
    { id: 2, label: "minutes", time: roundTime(totalSeconds / 60) },
    { id: 1, label: "hours", time: roundTime(totalSeconds / 60 / 60) },
    { id: 0, label: "days", time: roundTime(totalSeconds / 24 / 60 / 60) },
  ];

  function roundTime(number) {
    return Math.round(Math.abs(number) * 10) / 10;
  }

  return (
    <div className="flex flex-col justify-around h-full">
      <div>
        <div>Viewing: {viewName}</div>
        <div>Date: {startDate.format("DD-MM-YYYY HH:mm")}</div>
      </div>
      <div>
        <div className="text-center">
          {totalSeconds > 0 ? "Future" : "Past"}
        </div>
        <div className="flex flex-col-reverse">
          {items.map((item) => (
            <div key={item.id} className="flex gap-3">
              <div className=" w-[50%] text-right">{item.time}</div>
              <div className="w-[50%]  text-left">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
