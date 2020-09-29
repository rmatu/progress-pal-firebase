export const ADD_DATA_SUCCESS = 'ADD_DATA_SUCCESS';
export const ADD_DATA_START = 'ADD_DATA_START';
export const ADD_DATA_FAIL = 'ADD_DATA_FAIL';

export interface addDataSuccessAction {
  type: typeof ADD_DATA_SUCCESS;
}

export interface addDataStartAction {
  type: typeof ADD_DATA_START;
}

export interface addDataFailAction {
  type: typeof ADD_DATA_FAIL;
  payload: string;
}

export interface FirestoreDBstate {
  error: string | boolean | null;
  loading: boolean;
}

export type FirestoreDBactionTypes =
  | addDataSuccessAction
  | addDataFailAction
  | addDataStartAction;
