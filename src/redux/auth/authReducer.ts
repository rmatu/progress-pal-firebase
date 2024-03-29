import { AuthState, AuthActionTypes } from './authTypes';
import * as actions from './authTypes';

const authDefaultState: AuthState = {
  error: null,
  loading: false,
  verifyEmail: {
    error: null,
    loading: false,
  },
};

export default (state = authDefaultState, action: AuthActionTypes) => {
  switch (action.type) {
    case actions.AUTH_CLEAN_UP:
      return {
        ...state,
        error: null,
        loading: false,
        verifyEmail: {
          ...state.verifyEmail,
          loading: false,
          error: null,
        },
      };
    case actions.AUTH_START:
      return {
        ...state,
        loading: true,
      };
    case actions.AUTH_END:
      return {
        ...state,
        loading: false,
      };
    case actions.AUTH_SUCCESS:
      return {
        ...state,
        error: false,
      };
    case actions.AUTH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actions.RESEND_EMAIL_START:
      return {
        ...state,
        verifyEmail: {
          ...state.verifyEmail,
          loading: true,
        },
      };
    case actions.RESEND_EMAIL_FAIL:
      return {
        ...state,
        verifyEmail: {
          ...state.verifyEmail,
          loading: false,
          error: action.payload,
        },
      };
    case actions.RESEND_EMAIL_SUCCESS:
      return {
        ...state,
        verifyEmail: {
          ...state.verifyEmail,
          loading: false,
          error: false,
        },
      };

    default:
      return state;
  }
};
