import { FirestoreDBstate, FirestoreDBactionTypes } from './firestoreDBtypes';
import * as actions from './firestoreDBtypes';

const initialState: FirestoreDBstate = {
  error: null,
  loading: false,
};

export default (state = initialState, action: FirestoreDBactionTypes) => {
  switch (action.type) {
    case actions.ADD_DATA_SUCCESS:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case actions.ADD_DATA_START:
      return {
        ...state,
        loading: false,
      };
    case actions.ADD_DATA_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
