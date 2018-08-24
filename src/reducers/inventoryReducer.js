import { UPDATE_RATES } from "../actions/index";

export default function(
  state = {
    currencies: {
      GBP: 500,
      INR: 1000,
      CAD: 300,
      EUR: 750,
      CNY: 200,
      USD: 3000
    }
  },
  action
) {
  switch (action.type) {
    case UPDATE_RATES:
      return action.payload;
    default:
      return state;
  }
}
