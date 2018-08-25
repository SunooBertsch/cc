import { UPDATE_RATES } from "../actions/index";
import config from "../config";

export default function(
  state = {
    rates: config.rates
  },
  action
) {
  console.log(action.payload);
  switch (action.type) {
    case UPDATE_RATES:
      return {
        ...state,
        rates: action.payload
      };
    default:
      return state;
  }
}
