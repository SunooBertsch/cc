import axios from "axios";

export const GET_VALUES = "GET_VALUES";
export const CLOSE_POPUP = "CLOSE_POPUP";
export const SELECT_CELL = "SELECT_CELL";
export const UPDATE_RATES = "UPDATE_RATES";
export const UPDATE_BUY_SELL_AMOUNT = "UPDATE_BUY_SELL_AMOUNT";
export const UPDATE_INVENTORY = "UPDATE_INVENTORY";

export const getValues = () => async dispatch => {
  const res = await axios.get(
    "http://www.apilayer.net/api/live?access_key=b47d252d44af208794aafe0c9bb50aec"
  );
  const timestamp = Number(new Date());
  const date = new Date(timestamp);
  res.data.timestamp = date.toString();
  dispatch({
    type: GET_VALUES,
    payload: res.data
  });
};

export const closePopup = () => async dispatch => {
  const data = { popupOpen: false };
  dispatch({
    type: CLOSE_POPUP,
    payload: data
  });
};

export const selectCell = data => async dispatch => {
  dispatch({
    type: SELECT_CELL,
    payload: data
  });
};

export const updateRates = data => async dispatch => {
  dispatch({
    type: UPDATE_RATES,
    payload: data
  });
};

export const updateBuySellAmount = data => async dispatch => {
  dispatch({
    type: UPDATE_BUY_SELL_AMOUNT,
    payload: data
  });
};

export const updateInventory = data => async dispatch => {
  let inventory = data.currentInventory;
  const updatedCurrencyValue =
    data.transactionType === "sell"
      ? parseFloat(data.currentInventory[data.country]) -
        parseFloat(data.amount)
      : parseFloat(data.currentInventory[data.country]) +
        parseFloat(data.amount);
  inventory[data.country] = updatedCurrencyValue;
  inventory["USD"] =
    data.transactionType === "sell"
      ? parseFloat(inventory["USD"]) + parseFloat(data.subtotal)
      : parseFloat(inventory["USD"]) - parseFloat(data.subtotal);
  dispatch({
    type: UPDATE_INVENTORY,
    payload: inventory
  });
};
