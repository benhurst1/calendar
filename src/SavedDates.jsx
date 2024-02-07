export default function SavedDates({ savedDates, loadDate }) {
  function clickHandle(e) {
    loadDate(e.target.value);
  }

  return (
    <div>
      {savedDates.map((item) => (
        <button key={item} value={item} onClick={(e) => clickHandle(e)}>
          {item}
        </button>
      ))}
    </div>
  );
}
