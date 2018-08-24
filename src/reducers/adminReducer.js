import { UPDATE_RATES } from "../actions/index";

export default function(
  state = {
    rates: {
      commissionPct: 0.01,
      surcharge: 1,
      minimalCommission: 1,
      margin: 1
    }
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
