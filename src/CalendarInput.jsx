import { useContext } from "react";
import { AppContext } from "./App";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";

export default function CalendarInput() {
  const { startDate, setStartDate, setViewName } = useContext(AppContext);

  function changeHandle(date) {
    setStartDate(dayjs(date));
    setViewName("Custom");
  }

  return (
    <div>
      <DatePicker
        selected={new Date(startDate)}
        onChange={(date) => changeHandle(date)}
        showTimeSelect
        inline
        fixedHeight
        showYearDropdown
        dropdownMode="select"
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="time"
        dateFormat="dd-MM-yyyy hh:mm"
      />
    </div>
  );
}
