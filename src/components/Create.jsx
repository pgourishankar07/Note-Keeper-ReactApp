import React from "react";
import addIcon from "./Animation - 1720412150645.gif";

function Create(props) {
  let [note, setNote] = React.useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    let { value, name } = event.target;
    setNote((preValue) => ({ ...preValue, [name]: value }));
  }

  function submitNote(event) {
    event.preventDefault();
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          value={note.content}
          rows="3"
        />
        <button onClick={submitNote}>
          <img src={addIcon} width={36} height={36} />
        </button>
      </form>
    </div>
  );
}

export default Create;
