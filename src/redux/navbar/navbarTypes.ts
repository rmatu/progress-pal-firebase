export const TOGGLE_NAVBAR = 'TOGGLE_NAVBAR';
export const CLEAN_UP_NAVBAR = 'CLEAN_UP_NAVBAR';

export interface ToggleNavbarAction {
  type: typeof TOGGLE_NAVBAR;
}

export interface CleanUpNavbarAction {
  type: typeof CLEAN_UP_NAVBAR;
}

export interface NavbarState {
  open: boolean;
}

export type NavbarActionTypes = ToggleNavbarAction | CleanUpNavbarAction;
