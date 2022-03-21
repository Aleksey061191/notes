import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/data.json";

export const initialState = {
  notes: localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : data,
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote(state, action) {
      state.notes.push(action.payload);
    },
    removeNote(state, action) {
      state.notes = state.notes.filter((item) => item.note !== action.payload);
    },
    updateNote(state, action) {
      state.notes = action.payload;
    },
  },
});

export const { addNote, removeNote, updateNote } = notesSlice.actions;
export default notesSlice.reducer;
