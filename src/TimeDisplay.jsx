export default function TimeDisplay({ totalSeconds, startDate, viewName }) {
  const seconds = roundTime(totalSeconds);
  const minutes = roundTime(seconds / 60);
  const hours = roundTime(minutes / 60);
  const days = roundTime(hours / 24);

  const items = [
    { id: 0, label: "days", time: days },
    { id: 1, label: "hours", time: hours },
    { id: 2, label: "minutes", time: minutes },
    { id: 3, label: "seconds", time: seconds },
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
        <div className="flex flex-col">
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
