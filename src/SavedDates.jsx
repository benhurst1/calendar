export default function SavedDates({ savedDates, loadDate }) {
  function clickHandle(e) {
    loadDate(e.target.value);
  }

  return (
    <div className="flex flex-col gap-2 ">
      {savedDates.map((item) => (
        <button
          key={item}
          value={item}
          onClick={(e) => clickHandle(e)}
          className="h-10 w-[200px] rounded-xl bg-slate-200 hover:brightness-95 active:brightness-90"
        >
          {item}
        </button>
      ))}
    </div>
  );
}
