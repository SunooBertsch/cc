import { combineReducers } from "redux";
import currencyRatesReducer from "./currenciesReducer";
import popupReducer from "./popUpReducer";
import adminReducer from "./adminReducer";
import inventoryReducer from "./inventoryReducer";

export default combineReducers({
  currencyRates: currencyRatesReducer,
  popup: popupReducer,
  admin: adminReducer,
  inventory: inventoryReducer
});
