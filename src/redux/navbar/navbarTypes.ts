export const TOGGLE_NAVBAR = 'TOGGLE_NAVBAR';

export interface ToggleNavbarAction {
  type: typeof TOGGLE_NAVBAR;
}

export interface NavbarState {
  open: boolean;
}

export type NavbarActionTypes = ToggleNavbarAction;
