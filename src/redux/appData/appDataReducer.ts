import { appDataState, AppDataActionTypes } from './appDataTypes';
import * as actions from './appDataTypes';

const initialState: appDataState = {
  bodyTypeName: 'Chest',
  bodyTypeId: '',
  exerciseId: '',
  exerciseName: 'All',
  renamingModalOpened: false,
  targetName: '',
};

export default (state = initialState, action: AppDataActionTypes) => {
  switch (action.type) {
    case actions.SELECT_BODY_TYPE_NAME:
      return {
        ...state,
        bodyTypeName: action.payload,
      };
    case actions.SELECT_EXERCISE_NAME:
      return {
        ...state,
        exerciseName: action.payload,
      };
    case actions.SELECT_BODY_TYPE_ID:
      return {
        ...state,
        bodyTypeId: action.payload,
      };
    case actions.SELECT_EXERCISE_ID:
      return {
        ...state,
        exerciseId: action.payload,
      };
    case actions.OPEN_RENAME_MODAL:
      return {
        ...state,
        renamingModalOpened: true,
        targetName: action.payload,
      };
    case actions.CLOSE_RENAME_MODAL:
      return {
        ...state,
        renamingModalOpened: false,
        targetName: '',
      };

    default:
      return state;
  }
};
