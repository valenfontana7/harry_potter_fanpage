import { combineReducers } from "redux";
import characters from "./characters";
import staff from "./staff";

const rootReducer = combineReducers({
  characters,
  staff,
});

export default rootReducer;
