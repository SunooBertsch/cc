import axios from "axios";

export const GET_VALUES = "GET_VALUES";

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
