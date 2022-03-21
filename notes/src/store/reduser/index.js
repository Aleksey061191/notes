import { combineReducers } from "redux";
import noteReduser from "./noteReduser";

const rootReducer = combineReducers({
  notes: noteReduser,
});

export default rootReducer;
