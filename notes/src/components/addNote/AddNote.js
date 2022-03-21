import React from "react";
import Note from "../note/Note";
import "./AddNote.scss";

const AddNote = () => {
  const notes = JSON.parse(localStorage.getItem("notes"));
  const add = (event) => {
    event.preventDefault();
    const notesInput = document.querySelector(".notesInput");
    const notesList = document.querySelector(".notes");

    if (notesInput.value !== "") {
      notesList.appendChild(Note(notesInput.value));
      const note = {
        note: notesInput.value,
        tag: []
      }
      notes.push(note);
      localStorage.setItem('notes', JSON.stringify(notes));
      notesInput.value = "";
    }
  };
  return (
    <form>
      <input
        className="notesInput"
        type="text"
        maxLength={20}
        placeholder="Add note"
      />
      <button className="addNotesButton" type="submit" onClick={add}>
        add
      </button>
    </form>
  );
};

export default AddNote;
