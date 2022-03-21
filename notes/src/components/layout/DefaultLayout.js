import React from "react";
import AddNote from "../addNote/AddNote";
import Header from "../header/Header";
import { useAppSelector } from "../../utils/helpers/appHooks";
import "./DefaultLayout.scss";
import Note from "../note/Note";

const DefaultLayout = () => {
  const notes = useAppSelector((state) => state.notes.notes);
  localStorage.setItem("notes", JSON.stringify(notes));
  const renderNotes = () => {
    const notesList = document.querySelector(".notes");
    notesList.innerHTML = "";
    if (notesList) {
      notes.map((note) => {
        notesList.append(Note(note.note));
      });
    }
  };
  if (notes.length > 0) {
    setTimeout(() => renderNotes(), 500);
  }
  return (
    <div className="app">
      <div className="header">
        <Header />
      </div>
      <div className="inputTag">
        <AddNote />
      </div>
      <div className="content">
        <div className="container"><div className="notes"></div></div>
        <div className="tags"></div>
      </div>
    </div>
  );
};

export { DefaultLayout };
