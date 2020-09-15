export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAIL = 'AUTH_UP_FAIL';
export const AUTH_END = 'AUTH_UP_END';
export const AUTH_START = 'AUTH_UP_START';
export const AUTH_CLEAN_UP = 'AUTH_CLEAN_UP';

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

export interface AuthSuccesAction {
  type: typeof AUTH_SUCCESS;
}

export interface AuthFailAction {
  type: typeof AUTH_FAIL;
  payload: string;
}

export interface AuthEndAction {
  type: typeof AUTH_END;
}

export interface AuthStartAction {
  type: typeof AUTH_START;
}

export interface AuthState {
  error: string | boolean | null;
  loading: boolean;
  verifyEmail: {
    error: string | boolean | null;
    loading: boolean;
  };
}

export type AuthActionTypes =
  | AuthSuccesAction
  | AuthFailAction
  | AuthEndAction
  | AuthStartAction
  | ResendEmailStartAction
  | ResendEmailFailAction
  | ResendEmailSuccessAction
  | AuthCleanUpAction;
