export default function TimeDisplay({ totalSeconds, startDate }) {
  const seconds = roundTime(totalSeconds);
  const minutes = roundTime(seconds / 60);
  const hours = roundTime(minutes / 60);
  const days = roundTime(hours / 24);

  function roundTime(number) {
    return Math.round(Math.abs(number) * 10) / 10;
  }

  return (
    <div>
      <div>Date selected: {startDate.format("DD-MM-YYYY HH:mm")}</div>
      <div>{totalSeconds > 0 ? "in the future" : "Since"}</div>
      <div className="flex gap-10">
        <p>{days}</p>
        <p>Days</p>
      </div>
      <div className="flex gap-10">
        <p>{hours}</p>
        <p>Hours</p>
      </div>
      <div className="flex gap-10">
        <p>{minutes}</p>
        <p>Minutes</p>
      </div>
      <div className="flex gap-10">
        <p>{seconds}</p>
        <p>Seconds</p>
      </div>
    </div>
  );
}
