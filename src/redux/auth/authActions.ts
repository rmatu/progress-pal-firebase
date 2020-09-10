import { Dispatch } from 'redux';
import { AppActions } from '../actions';
import { AppState } from '../rootReducer';
import * as actions from './authTypes';
import { SignUpFormTypes } from '../../containers/Auth/SignUp/SignUp';

export const signUp = (data: SignUpFormTypes) => async (
  dispatch: Dispatch<AppActions>,
  getState: () => AppState,
  { getFirebase, getFirestore }: any
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();

  console.log({ firebase: firebase, firestore: firestore });
  dispatch({ type: actions.SIGN_UP_START });

  try {
    // const res = await firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(data.email, data.password);
    // //Sending the verification email
    // const user = firebase.auth().currentUser;
    // await user.sendEmailVerification();
    // await firestore
  } catch (err) {
    dispatch({ type: actions.SIGN_UP_FAIL, payload: err.message });
  }

  dispatch({ type: actions.SIGN_UP_END });
};
