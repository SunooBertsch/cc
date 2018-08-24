import axios from "axios";

export const GET_VALUES = "GET_VALUES";

export const getValues = () => async dispatch => {
  console.log("action dispatched");
  const res = await axios.get(
    "http://www.apilayer.net/api/live?access_key=d0f875e64cab9433b8db5d2526a33eda"
  );
  dispatch({
    type: GET_VALUES,
    payload: res.data
  });
};
