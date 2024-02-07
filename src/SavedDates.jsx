import SavedDateButton from "./components/SavedDateButton";

export default function SavedDates({ savedDates, loadDate, deleteData }) {
  return (
    <div className="flex flex-col gap-2">
      {savedDates.map((item) => (
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
