import { useState } from "react";

export default function SavedDateButton({ item, loadDate, deleteData }) {
  const [hidden, setHidden] = useState(true);

  function clickHandle(e) {
    loadDate(e.target.value);
  }

  function deleteButtonClickHandle(e) {
    deleteData(e.target.value);
    delete e.target
  }

  function mouseHover() {
    setHidden(!hidden);
  }

  return (
    <div
      key={`${item}Row`}
      className="w-full flex gap-3 items-center"
      onMouseEnter={mouseHover}
      onMouseLeave={mouseHover}
    >
      <button
        onClick={(e) => deleteButtonClickHandle(e)}
        value={item}
        className={`transform-all duration-300 w-7 h-7 rounded-lg bg-red-200 ${
          hidden ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
        }`}
      >
        X
      </button>
      <button
        id={`savedDate${item}`}
        value={item}
        onClick={(e) => clickHandle(e)}
        className="h-10 w-[200px] rounded-xl bg-slate-200 hover:brightness-95 active:brightness-90"
      >
        {item}
      </button>
    </div>
  );
}
