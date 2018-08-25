import { UPDATE_RATES } from "../actions/index";
import config from "../config";

export default function(
  state = {
    rates: config.rates
  },
  action
) {
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
