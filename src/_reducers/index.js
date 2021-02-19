import { combineReducers } from "redux";
import { geoReducer } from "./geo_reducer";

const rootReducer = combineReducers({
  geoReducer,
});

export default rootReducer;
