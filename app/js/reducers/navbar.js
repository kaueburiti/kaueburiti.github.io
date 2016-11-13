import { NAVBAR_TOGGLE } from "actions/";

export const navbarIsExpanded = (state = false, action) => {
  switch (action.type) {
    case NAVBAR_TOGGLE:
      return !state;
      break;
    default:
      return state;
  }
};
