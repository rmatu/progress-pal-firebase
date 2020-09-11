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
    case actions.SIGN_UP_START:
      return {
        ...state,
        loading: true,
      };
    case actions.SIGN_UP_END:
      return {
        ...state,
        loading: false,
      };
    case actions.SIGN_UP_SUCCESS:
      return {
        ...state,
        error: false,
      };
    case actions.SIGN_UP_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
