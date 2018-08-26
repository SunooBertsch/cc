import { UPDATE_INVENTORY } from "../actions/index";
import config from "../config";

export default function(state = config.initialInventory, action) {
  switch (action.type) {
    case UPDATE_INVENTORY:
      return action.payload;
    default:
      return state;
  }
}
