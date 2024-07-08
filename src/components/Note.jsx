import React from "react";
import Lordicon from "./Lordicon";

function Note(props) {
  function handleChange() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleChange}>
        <Lordicon />
      </button>
    </div>
  );
}

export default Note;
