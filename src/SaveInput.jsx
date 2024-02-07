export default function SaveInput({ saveDate }) {
  function submitHandle(e) {
    e.preventDefault();
    saveDate(e.target[0].value);
    e.target[0].value = "";
  }

  return (
    <div>
      <form action="" onSubmit={(e) => submitHandle(e)} className="flex gap-5">
        <input type="text" className="w-30 px-2 rounded-md border-slate-100 shadow" />
        <input
          type="submit"
          value={"Save"}
          className="bg-slate-200 rounded-md px-10 hover:brightness-95 active:brightness-90"
        />
      </form>
    </div>
  );
}
