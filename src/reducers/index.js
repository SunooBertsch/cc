import { combineReducers } from "redux";
import currenciesReducer from "./currenciesReducer";
import siteReducer from "./siteReducer";

export default combineReducers({
  currencies: currenciesReducer,
  site: siteReducer
});
