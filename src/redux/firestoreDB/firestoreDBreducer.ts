import { FirestoreDBstate, FirestoreDBactionTypes } from './firestoreDBtypes';
import * as actions from './firestoreDBtypes';

const initialState: FirestoreDBstate = {
  error: null,
  loading: false,
  bodyParts: [],
};

export default (state = initialState, action: FirestoreDBactionTypes) => {
  switch (action.type) {
    case actions.ADD_BODY_PART_SUCCESS:
      return {
        ...state,
        bodyParts: [...state.bodyParts],
        loading: true,
      };
    case actions.ADD_BODY_PART_START:
      return {
        ...state,
        bodyParts: [...state.bodyParts],
        loading: false,
      };
    case actions.ADD_BODY_PART_FAIL:
      return {
        ...state,
        bodyParts: [...state.bodyParts],
        error: action.payload,
      };
    default:
      return state;
  }
};
