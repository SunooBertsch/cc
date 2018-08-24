import { combineReducers } from "redux";
import currencyRatesReducer from "./currenciesReducer";
import siteReducer from "./siteReducer";
import adminReducer from "./adminReducer";
import inventoryReducer from "./inventoryReducer";

export default combineReducers({
  currencyRates: currencyRatesReducer,
  site: siteReducer,
  admin: adminReducer,
  inventory: inventoryReducer
});
