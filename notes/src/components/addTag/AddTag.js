import React from "react";
import Tag from "../tag/Tag";
import "./AddTag.scss";

const AddTag = (title) => {
  const notes = JSON.parse(localStorage.getItem("notes"));
  const tags = document.querySelector(".tags");
  tags.innerHTML = "";

  const renderTags = () => {
    const tagList = document.querySelector(".tagsList");
    tagList.innerHTML = "";
    if (tagList) {
      notes.map((note) => {
        if (note.note == title) {
          note.tag.map((tag) => tagList.append(Tag(tag)));
        }
      });
    }
  };
  if (notes.length > 0) {
    setTimeout(() => renderTags(), 100);
  }

  const add = (event) => {
    event.preventDefault();
    const tagsInput = document.querySelector(".tagsInput");
    const tagList = document.querySelector(".tagsList");

    if (tagsInput.value !== "") {
      tagList.appendChild(Tag(tagsInput.value));
      notes.map((note) => {
        if (note.note == title) {
          note.tag.push(tagsInput.value);
        }
      });
      localStorage.setItem('notes', JSON.stringify(notes));
      tagsInput.value = "";
    }
  };

  const h = document.createElement("h2");
  h.textContent = title;
  const form = document.createElement("form");
  const input = document.createElement("input");
  input.className = "tagsInput";
  input.type = "text";
  input.maxLength = 25;
  input.placeholder = "Add tag";
  const btn = document.createElement("button");
  btn.className = "addTagsButton";
  btn.type = "submit";
  btn.textContent = "add";
  btn.addEventListener("click", add);
  const ul = document.createElement("ul");
  ul.className = "tagsList";
  form.append(input, btn);
  tags.append(h, form, ul);
};

export default AddTag;
