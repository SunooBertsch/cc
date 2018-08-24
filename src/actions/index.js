import axios from "axios";

export const GET_VALUES = "GET_VALUES";
export const CLOSE_POPUP = "CLOSE_POPUP";
export const SELECT_CELL = "SELECT_CELL";
export const UPDATE_RATES = "UPDATE_RATES";

export const getValues = () => async dispatch => {
  console.log("action dispatched");
  const res = await axios.get(
    "http://www.apilayer.net/api/live?access_key=b47d252d44af208794aafe0c9bb50aec"
  );
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
  console.log("cell selected");
  dispatch({
    type: CLOSE_POPUP,
    payload: data
  });
};

export const updateRates = data => async dispatch => {
  console.log("rates updated", data);
  dispatch({
    type: UPDATE_RATES,
    payload: data
  });
};
