import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import Create from "./Create";

import styled, { keyframes } from "styled-components";

// Define the animation keyframes
const fade = keyframes`
  from {
    background: #f1c40f;
  }
  to {
    background: #d35400;
  }
`;

// Styled-component for the animated rows
const Row = styled.div`
  background: #f1c40f;
  height: 10vh;
  width: 100%;
  position: absolute;
  animation: ${fade} 5s infinite alternate;
  &:nth-child(1) {
    top: 0;
  }
  &:nth-child(2) {
    top: 10vh;
    animation-delay: 0.5s;
  }
  &:nth-child(3) {
    top: 20vh;
    animation-delay: 1s;
  }
  &:nth-child(4) {
    top: 30vh;
    animation-delay: 1.5s;
  }
  &:nth-child(5) {
    top: 40vh;
    animation-delay: 2s;
  }
  &:nth-child(6) {
    top: 50vh;
    animation-delay: 2.5s;
  }
  &:nth-child(7) {
    top: 60vh;
    animation-delay: 3s;
  }
  &:nth-child(8) {
    top: 70vh;
    animation-delay: 3.5s;
  }
  &:nth-child(9) {
    top: 80vh;
    animation-delay: 4s;
  }
  &:nth-child(10) {
    top: 90vh;
    animation-delay: 4.5s;
  }
`;

// Styled-component for the rows container
const RowsContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1; /* Behind the main content */
`;

// Styled-component for the main content container
const ContentContainer = styled.div`
  position: relative;
  z-index: 1; /* On top of the animated rows */
`;

function App() {
  const [dnotes, setDnotes] = React.useState([...notes]);

  function addNote(note) {
    setDnotes((prevNotes) => [...prevNotes, note]);
  }

  function deleteNote(id) {
    setDnotes((prevNotes) => prevNotes.filter((note, index) => index !== id));
  }

  return (
    <div>
      {/* Animation rows container */}
      <RowsContainer>
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
      </RowsContainer>

      {/* Main content container */}
      <ContentContainer>
        <Header />
        <Create onAdd={addNote} />
        {dnotes.map((note, index) => (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        ))}
      </ContentContainer>
      <Footer />
    </div>
  );
}

export default App;
