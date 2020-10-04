import * as actions from './appDataTypes';

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
