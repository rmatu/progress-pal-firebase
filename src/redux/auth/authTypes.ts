export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAIL = 'SIGN_UP_FAIL';
export const SIGN_UP_END = 'SIGN_UP_END';
export const SIGN_UP_START = 'SIGN_UP_START';
export const SIGN_UP_CLEAN_UP = 'SIGN_UP_CLEAN_UP';

export interface SignUpCleanUp {
  type: typeof SIGN_UP_CLEAN_UP;
}

export interface SignUpSuccesAction {
  type: typeof SIGN_UP_SUCCESS;
}

export interface SignUpFailAction {
  type: typeof SIGN_UP_FAIL;
  payload: string;
}

export interface SignUpEndAction {
  type: typeof SIGN_UP_END;
}

export interface SignUpStartAction {
  type: typeof SIGN_UP_START;
}

export interface AuthState {
  error: string | null;
  loading: boolean;
}

export type AuthActionTypes =
  | SignUpSuccesAction
  | SignUpFailAction
  | SignUpEndAction
  | SignUpStartAction
  | SignUpCleanUp;
