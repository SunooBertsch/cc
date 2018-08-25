import { UPDATE_INVENTORY } from "../actions/index";

export default function(
  state = {
    GBP: 500,
    INR: 1000,
    CAD: 300,
    EUR: 750,
    CNY: 200,
    USD: 3000
  },
  action
) {
  switch (action.type) {
    case UPDATE_INVENTORY:
      return action.payload;
    default:
      return state;
  }
}
