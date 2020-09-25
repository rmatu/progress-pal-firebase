export const ADD_BODY_PART_SUCCESS = 'ADD_BODY_PART_SUCCESS';
export const ADD_BODY_PART_START = 'ADD_BODY_PART_START';
export const ADD_BODY_PART_FAIL = 'ADD_BODY_PART_FAIL';

export interface addBodyPartSuccessAction {
  type: typeof ADD_BODY_PART_SUCCESS;
}

export interface addBodyPartStartAction {
  type: typeof ADD_BODY_PART_START;
}

export interface addBodyPartFailAction {
  type: typeof ADD_BODY_PART_FAIL;
  payload: string;
}

export interface FirestoreDBstate {
  error: string | boolean | null;
  loading: boolean;
}

export type FirestoreDBactionTypes =
  | addBodyPartSuccessAction
  | addBodyPartFailAction
  | addBodyPartStartAction;
