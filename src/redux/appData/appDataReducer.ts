import { appDataState, AppDataActionTypes } from './appDataTypes';
import * as actions from './appDataTypes';

const initialState: appDataState = {
  bodyTypeName: 'Chest',
  exerciseName: 'All',
};

export default (state = initialState, action: AppDataActionTypes) => {
  switch (action.type) {
    case actions.SELECT_BODY_TYPE:
      return {
        ...state,
        bodyTypeName: action.payload,
      };
    default:
      return state;
  }
};
