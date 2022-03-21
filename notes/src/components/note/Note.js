import React from "react";
import AddTag from "../addTag/AddTag";
import "./Note.scss";

const Note = (value) => {
  const remove = (e) => {
    let notes = JSON.parse(localStorage.getItem("notes"));
    notes = notes.filter((note) => note.note !== value);
    localStorage.setItem("notes", JSON.stringify(notes));
    const tag = e.target.parentElement.parentElement;
    if (tag.classList.contains("active")) {
      const tags = document.querySelector(".tags");
      tags.innerHTML = "";
    }
    tag.remove();
  };

  const save = (e) => {
    let notes = JSON.parse(localStorage.getItem("notes"));
    const el = e.target.parentElement.parentElement;
    const input = el.querySelector('.inputEdit');
    const title = el.querySelector(".noteTitle");
    notes.map((note) => {
      if (note.note == value) {
        note.note = input.value;
      }
    });
    localStorage.setItem('notes', JSON.stringify(notes));
    title.textContent = input.value;
    value = input.value;
    input.remove();
    const btn = el.querySelector('.edit');
    btn.removeEventListener("click", save);
    btn.addEventListener('click', edit)
  }

  const edit = (e) => {
    const el = e.target.parentElement.parentElement;
    const btn = el.querySelector('.edit');
    btn.removeEventListener("click", edit);
    btn.addEventListener('click', save);
    const title = el.querySelector(".noteTitle");
    const input = document.createElement("input");
    input.type = "text";
    input.classList.add("inputEdit");
    title.textContent = "";
    input.value = value;
    el.prepend(input);
  };

  const active = (e) => {
    if (
      !e.target.classList.contains("delete") &&
      !e.target.classList.contains("edit") &&
      !e.target.classList.contains("inputEdit")
    ) {
      const allNotes = document.querySelectorAll(".note");
      allNotes.forEach((item) => {
        item.classList.remove("active");
      });
      e.currentTarget.classList.add("active");
      const title = e.currentTarget.querySelector(".noteTitle").textContent;
      const tags = document.querySelector(".tags");
      tags.innerHTML = "";
      AddTag(title);
    }
  };

  const tagDiv = document.createElement("div");
  tagDiv.classList.add("note");
  tagDiv.addEventListener("click", active);

  const newTag = document.createElement("p");
  newTag.innerText = value;
  newTag.classList.add("noteTitle");
  tagDiv.appendChild(newTag);

  const btnsContainer = document.createElement("div");
  btnsContainer.classList.add("btnsContainer");
  const editBtn = document.createElement("button");
  editBtn.innerHTML = "edit";
  editBtn.classList.add("edit");
  editBtn.addEventListener("click", edit);
  btnsContainer.appendChild(editBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "x";
  deleteBtn.classList.add("delete");
  deleteBtn.addEventListener("click", remove);
  btnsContainer.appendChild(deleteBtn);
  tagDiv.appendChild(btnsContainer);

  return tagDiv;
};

export default Note;
