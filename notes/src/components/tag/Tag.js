import React from "react";
import "./Tag.scss";

const Tag = (value) => {
  const remove = (e) => {
    const notes = JSON.parse(localStorage.getItem("notes"));
    const title = document.querySelector("h2").textContent;
    notes.map((note) => {
      if (note.note == title) {
        note.tag = note.tag.filter((item) => item !== value);
      }
    });
    const tag = e.target.parentElement.parentElement;
    localStorage.setItem("notes", JSON.stringify(notes));
    tag.remove();
  };

  const tagLi = document.createElement("li");
  tagLi.classList.add("tag");

  const div = document.createElement("div");
  div.className = "tagContainer";

  const newTag = document.createElement("p");
  newTag.innerText = value;
  newTag.classList.add("tagTitle");
  div.append(newTag);

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "x";
  deleteBtn.classList.add("deleteTag");
  deleteBtn.addEventListener("click", remove);
  div.append(deleteBtn);
  tagLi.append(div);
  return tagLi;
};

export default Tag;
