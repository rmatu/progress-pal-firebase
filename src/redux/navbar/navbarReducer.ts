import * as actions from './navbarTypes';
import { NavbarState, NavbarActionTypes } from './navbarTypes';

const navbarDefaultState: NavbarState = {
  open: false,
};

export default (state = navbarDefaultState, action: NavbarActionTypes) => {
  switch (action.type) {
    case actions.TOGGLE_NAVBAR:
      return {
        ...state,
        open: !state.open,
      };
    default:
      return state;
  }
};
