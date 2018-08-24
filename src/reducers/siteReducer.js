import { CLOSE_POPUP, SELECT_CELL } from "../actions/index";

export default function(state = { ...state, popupStatus: false }, action) {
  switch (action.type) {
    case CLOSE_POPUP:
      return (state = { ...state, popupStatus: action.payload });
    case SELECT_CELL:
      return { ...state };
    default:
      return state;
  }
}
