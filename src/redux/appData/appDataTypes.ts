export const SELECT_BODY_TYPE_NAME = 'SELECT_BODY_TYPE_NAME';
export const SELECT_EXERCISE_NAME = 'SELECT_EXERCISE_NAME';
export const SELECT_BODY_TYPE_ID = 'SELECT_BODY_TYPE_ID';
export const SELECT_EXERCISE_ID = 'SELECT_EXERCISE_ID';

export const OPEN_RENAME_MODAL = 'OPEN_RENAME_MODAL';
export const CLOSE_RENAME_MODAL = 'CLOSE_RENAME_MODAL';

export const CLOSE_ADD_DATA_MODAL = 'CLOSE_ADD_DATA_MODAL';
export const OPEN_ADD_DATA_MODAL = 'OPEN_ADD_DATA_MODAL';

export interface openAddDataModalAction {
  type: typeof OPEN_ADD_DATA_MODAL;
}
export interface closeAddDataModalAction {
  type: typeof CLOSE_ADD_DATA_MODAL;
}

export interface openRenameModalAction {
  type: typeof OPEN_RENAME_MODAL;
  payload: string;
}

export interface closeRenameModalAction {
  type: typeof CLOSE_RENAME_MODAL;
}

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
  targetName: string;
  renamingModalOpened: boolean;
  addDataModalOpened: boolean;
  currentDate: AppDate;
}

export interface AppDate {
  year: number;
  month: number;
  day: number;
}

export type AppDataActionTypes =
  | openRenameModalAction
  | closeRenameModalAction
  | openAddDataModalAction
  | closeAddDataModalAction
  | selectBodyTypeNameAction
  | selectBodyTypeIdAction
  | selectExerciseIdAction
  | selectExerciseNameAction;
