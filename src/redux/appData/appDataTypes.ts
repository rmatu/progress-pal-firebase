export const SELECT_BODY_TYPE_NAME = 'SELECT_BODY_TYPE_NAME';
export const SELECT_EXERCISE_NAME = 'SELECT_EXERCISE_NAME';

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
}

export type AppDataActionTypes =
  | selectBodyTypeNameAction
  | selectExerciseNameAction;
