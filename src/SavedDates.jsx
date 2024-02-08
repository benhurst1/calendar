import SavedDateButton from "./components/SavedDateButton";
import { useContext } from "react";
import { AppContext } from "./App";

export default function SavedDates() {
  const { savedDates } = useContext(AppContext);

  return (
    <div className="flex flex-col gap-2">
      {Object.entries(savedDates).map(([item, key]) => (
        <SavedDateButton key={item} item={item} />
      ))}
    </div>
  );
}
