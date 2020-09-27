import * as actions from './appDataTypes';

export const setBodyName = (name: string) => ({
  type: actions.SELECT_BODY_TYPE,
  payload: name,
});
