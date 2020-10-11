import * as actions from './appDataTypes';
import { Dispatch } from 'redux';
import { AppActions } from '../actions';
import { AppState } from '../rootReducer';

import { addDays, subDays } from 'date-fns';

export const setBodyTypeName = (name: string) => ({
  type: actions.SELECT_BODY_TYPE_NAME,
  payload: name,
});

export const setExerciseName = (name: string) => ({
  type: actions.SELECT_EXERCISE_NAME,
  payload: name,
});

export const setExerciseId = (name: string) => ({
  type: actions.SELECT_EXERCISE_ID,
  payload: name,
});

export const setBodyTypeId = (name: string) => ({
  type: actions.SELECT_BODY_TYPE_ID,
  payload: name,
});

export const openRenameModal = (targetName: string) => ({
  type: actions.OPEN_RENAME_MODAL,
  payload: targetName,
});

export const closeRenameModal = () => ({
  type: actions.CLOSE_RENAME_MODAL,
});

export const openAddDataModal = () => ({
  type: actions.OPEN_ADD_DATA_MODAL,
});

export const closeAddDataModal = () => ({
  type: actions.CLOSE_ADD_DATA_MODAL,
});

export const setNextDay = () => async (
  dispatch: Dispatch<AppActions>,
  getState: () => AppState
) => {
  const { day, month, year } = getState().appData.currentDate;

  const result = addDays(new Date(year, month, day), 1);

  const newDate: actions.AppDate = {
    day: result.getDate(),
    month: result.getMonth(),
    year: result.getFullYear(),
  };

  dispatch({
    type: actions.SET_NEXT_DAY,
    payload: newDate,
  });
};

export const setPreviousDay = () => async (
  dispatch: Dispatch<AppActions>,
  getState: () => AppState
) => {
  const { day, month, year } = getState().appData.currentDate;

  const result = subDays(new Date(year, month, day), 1);

  const newDate: actions.AppDate = {
    day: result.getDate(),
    month: result.getMonth(),
    year: result.getFullYear(),
  };

  dispatch({
    type: actions.SET_PREVIOUS_DAY,
    payload: newDate,
  });
};
