import { UPDATE_RATES } from "../actions/index";

export default function(
  state = { commission: 1, surcharge: 1, minimalCommission: 1, margin: 1 },
  action
) {
  switch (action.type) {
    case SELECT_CELL:
      return (state = action.payload);
    default:
      return state;
  }
}
