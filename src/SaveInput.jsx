export default function SaveInput({ saveDate }) {
  function submitHandle(e) {
    e.preventDefault();
    saveDate(e.target[0].value);
    e.target[0].value = "";
  }

  return (
    <div>
      <form action="" onSubmit={(e) => submitHandle(e)}>
        <input type="text" />
        <input type="submit" value={"Save"} />
      </form>
    </div>
  );
}
