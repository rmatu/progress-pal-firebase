export const SELECT_BODY_TYPE = 'SELECT_BODY_TYPE';

export interface selectBodyTypeAction {
  type: typeof SELECT_BODY_TYPE;
  payload: string;
}

export interface appDataState {
  bodyTypeName: string;
  exerciseName: string;
}

export type AppDataActionTypes = selectBodyTypeAction;
