import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import Create from "./Create";

// function noteCard(i) {
//   return <Note key={i.key} title={i.title} content={i.content} />;
// }

function App() {
  let [dnotes, setDnotes] = React.useState([...notes]);

  function addNote(i) {
    dnotes.push(i);
    setDnotes([...dnotes]);
  }

  function deleteNote(id) {
    setDnotes((preVal) => {
      return preVal.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <Create onAdd={addNote} />

      {dnotes.map((noteCard, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteCard.title}
            content={noteCard.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
