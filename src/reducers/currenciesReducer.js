import { GET_VALUES } from "../actions/index";

export default function({ ...state }, action) {
  switch (action.type) {
    case GET_VALUES:
      const result = compareValues(state.quotes, action.payload.quotes);
      console.log(result);
      console.log("before", action.payload.quotes);
      if (result === true) {
        for (let prop in action.payload.quotes) {
          action.payload.quotes[prop] =
            action.payload.quotes[prop] *
            (Math.random() * (1.02 - 0.98) + 0.98);
        }
      }
      console.log("after", action.payload);
      return action.payload;
    default:
      return state;
  }
}

function compareValues(state, payload) {
  for (let prop in state) {
    if (state[prop] != payload[prop]) return false;
  }
  return true;
}
