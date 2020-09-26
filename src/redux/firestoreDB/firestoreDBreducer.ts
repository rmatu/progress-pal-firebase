import { FirestoreDBstate, FirestoreDBactionTypes } from './firestoreDBtypes';
import * as actions from './firestoreDBtypes';

const initialState: FirestoreDBstate = {
  error: null,
  loading: false,
};

export default (state = initialState, action: FirestoreDBactionTypes) => {
  switch (action.type) {
    case actions.ADD_BODY_PART_SUCCESS:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case actions.ADD_BODY_PART_START:
      return {
        ...state,
        loading: false,
      };
    case actions.ADD_BODY_PART_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
