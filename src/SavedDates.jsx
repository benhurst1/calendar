import SavedDateButton from "./components/SavedDateButton";

export default function SavedDates({ savedDates, loadDate, deleteData }) {
  return (
    <div className="flex flex-col gap-2">
      {Object.entries(savedDates).map(([item, key]) => (
        <SavedDateButton
          key={item}
          item={item}
          loadDate={loadDate}
          deleteData={deleteData}
        />
      ))}
    </div>
  );
}
