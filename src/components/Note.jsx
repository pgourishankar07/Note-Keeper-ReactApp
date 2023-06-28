import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  function handleChange() {
    props.onDelete(props.id);
  }

  return (
    <div class="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleChange}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
