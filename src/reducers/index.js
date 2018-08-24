import { combineReducers } from "redux";
import currenciesReducer from "./currenciesReducer";
import siteReducer from "./siteReducer";
import adminReducer from "./adminReducer";

export default combineReducers({
  currencies: currenciesReducer,
  site: siteReducer,
  admin: adminReducer
});
