import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";

export default function CalendarInput({ setStartDate }) {
  function changeHandle(date) {
    setStartDate(dayjs(date));
  }

  return (
    <DatePicker
      // selected={startDate.format("DD-MM-YYYY hh:mm")}
      onChange={(date) => changeHandle(date)}
      showTimeSelect
      inline
      showYearDropdown
      dropdownMode="select"
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="time"
      dateFormat="dd-MM-yyyy hh:mm"
    />
  );
}
