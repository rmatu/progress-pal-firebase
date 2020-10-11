import { appDataState, AppDataActionTypes } from './appDataTypes';
import * as actions from './appDataTypes';
import { getDate } from '../../utils';

const date = getDate();

const initialState: appDataState = {
  bodyTypeName: 'Chest',
  exerciseName: 'All',
  bodyTypeId: '',
  exerciseId: '',
  targetName: '',
  renamingModalOpened: false,
  addDataModalOpened: false,
  currentDate: date,
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
    case actions.OPEN_ADD_DATA_MODAL:
      return {
        ...state,
        addDataModalOpened: true,
      };
    case actions.CLOSE_ADD_DATA_MODAL:
      return {
        ...state,
        addDataModalOpened: false,
      };

    default:
      return state;
  }
};
