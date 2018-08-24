import {
  CLOSE_POPUP,
  SELECT_CELL,
  UPDATE_BUY_SELL_AMOUNT
} from "../actions/index";

export default function(state = { ...state, popupStatus: false }, action) {
  switch (action.type) {
    case CLOSE_POPUP:
      return (state = { ...state, popupStatus: action.payload, amountUsd: 0 });
    case SELECT_CELL:
      return (state = { ...state, popupStatus: action.payload });
    case UPDATE_BUY_SELL_AMOUNT:
      return { ...state, amountUsd: action.payload };
    default:
      return state;
  }
}
