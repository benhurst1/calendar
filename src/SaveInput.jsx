import { useContext, useState } from "react";
import { AppContext } from "./App";

export default function SaveInput() {
  const { saveDate } = useContext(AppContext);
  const [isError, setIsError] = useState(false);
  const [errorText, setErrorText] = useState("");

  function submitHandle(e) {
    e.preventDefault();
    if (!isError) {
      if (saveDate(e.target[0].value)) {
        e.target[0].value = "";
      } else {
        setIsError(true);
        setErrorText("Already exists, choose a different name.");
      }
    }
  }

  function changeText(e) {
    const max_char = 20;
    if (e.target.value.length > max_char) {
      setIsError(true);
      setErrorText(`${max_char} characters max`);
    } else {
      setIsError(false);
    }
  }

  return (
    <div>
      <form action="" onSubmit={(e) => submitHandle(e)} className="flex gap-5">
        <input
          type="text"
          className={`w-30 px-2 rounded-md shadow focus:outline-none focus:ring-1  ${
            isError ? "focus:ring-red-300" : "focus:ring-blue-300"
          }`}
          onChange={(e) => changeText(e)}
        />
        <input
          type="submit"
          value={"Save"}
          className="bg-slate-200 rounded-md px-10 hover:brightness-95 active:brightness-90"
        />
      </form>
      <p
        className={`text-red-400 h-1 transition-all duration-300 ${
          isError ? "opacity-100" : "opacity-0"
        }`}
      >
        {errorText}
      </p>
    </div>
  );
}
