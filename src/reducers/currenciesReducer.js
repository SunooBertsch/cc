import { GET_VALUES } from "../actions/index";

export default function(state = { ...state }, action) {
  switch (action.type) {
    case GET_VALUES:
      return action.payload;
    default:
      return state;
  }
}
