export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAIL = 'SIGN_UP_FAIL';
export const SIGN_UP_END = 'SIGN_UP_END';
export const SIGN_UP_START = 'SIGN_UP_START';
export const AUTH_CLEAN_UP = 'SIGN_UP_CLEAN_UP';

export const RESEND_EMAIL_START = 'RESEND_EMAIL_START';
export const RESEND_EMAIL_SUCCESS = 'RESEND_EMAIL_SUCCESS';
export const RESEND_EMAIL_FAIL = 'RESEND_EMAIL_FAIL';

export interface ResendEmailStartAction {
  type: typeof RESEND_EMAIL_START;
}
export interface ResendEmailSuccessAction {
  type: typeof RESEND_EMAIL_SUCCESS;
}
export interface ResendEmailFailAction {
  type: typeof RESEND_EMAIL_FAIL;
  payload: string;
}

export interface AuthCleanUpAction {
  type: typeof AUTH_CLEAN_UP;
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
  verifyEmail: {
    error: string | null;
    loading: boolean;
  };
}

export type AuthActionTypes =
  | SignUpSuccesAction
  | SignUpFailAction
  | SignUpEndAction
  | SignUpStartAction
  | ResendEmailStartAction
  | ResendEmailFailAction
  | ResendEmailSuccessAction
  | AuthCleanUpAction;
