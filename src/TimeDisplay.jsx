export default function TimeDisplay({ seconds}) {
  var minutes = roundTime(seconds / 60);
  var hours = roundTime(minutes / 60);
  var days = roundTime(hours / 24);

  function roundTime(number) {
    return Math.round(number * 10) / 10;
  }

  return (
    <div>
      {/* <div>{startDate}</div> */}
      <div>{days}</div>
      <div>{hours}</div>
      <div>{minutes}</div>
      <div>{seconds}</div>
    </div>
  );
}
