export const SELECT_BODY_TYPE_NAME = 'SELECT_BODY_TYPE_NAME';
export const SELECT_EXERCISE_NAME = 'SELECT_EXERCISE_NAME';
export const SELECT_BODY_TYPE_ID = 'SELECT_BODY_TYPE_ID';
export const SELECT_EXERCISE_ID = 'SELECT_EXERCISE_ID';

export interface selectBodyTypeIdAction {
  type: typeof SELECT_BODY_TYPE_ID;
  payload: string;
}
export interface selectExerciseIdAction {
  type: typeof SELECT_EXERCISE_ID;
  payload: string;
}

export interface selectBodyTypeNameAction {
  type: typeof SELECT_BODY_TYPE_NAME;
  payload: string;
}

export interface selectExerciseNameAction {
  type: typeof SELECT_EXERCISE_NAME;
  payload: string;
}

export interface appDataState {
  bodyTypeName: string;
  exerciseName: string;
  bodyTypeId: string;
  exerciseId: string;
}

export type AppDataActionTypes =
  | selectBodyTypeNameAction
  | selectBodyTypeIdAction
  | selectExerciseIdAction
  | selectExerciseNameAction;
