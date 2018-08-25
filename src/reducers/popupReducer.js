import {
  CLOSE_POPUP,
  SELECT_CELL,
  UPDATE_BUY_SELL_AMOUNT
} from "../actions/index";

export default function(
  state = {
    popupConfig: {
      popupOpen: false,
      activeId: null,
      transactionType: "",
      exchangeRate: "",
      country: ""
    }
  },
  action
) {
  switch (action.type) {
    case CLOSE_POPUP:
      return (state = {
        ...state,
        popupConfig: action.payload,
        baseCurrencyInInventory: 0
      });
    case SELECT_CELL:
      return (state = { ...state, popupConfig: action.payload });
    case UPDATE_BUY_SELL_AMOUNT:
      return { ...state, baseCurrencyInInventory: action.payload };
    default:
      return state;
  }
}
