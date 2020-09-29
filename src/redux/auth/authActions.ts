import { Dispatch } from 'redux';
import { AppActions } from '../actions';
import { AppState } from '../rootReducer';
import * as actions from './authTypes';
import { SignUpFormTypes } from '../../containers/Auth/SignUp/SignUp';
import { LoginFormTypes } from '../../containers/Auth/Login/Login';
import { populateBodyParts } from './../../utils/index';

export const signUp = (data: SignUpFormTypes) => async (
  dispatch: Dispatch<AppActions>,
  getState: () => AppState,
  { getFirebase, getFirestore }: any
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();

  dispatch({ type: actions.AUTH_START });

  try {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password);

    //Sending the verification email
    const user = firebase.auth().currentUser;
    await user.sendEmailVerification();
    await firestore
      .collection('users')
      .doc(res.user.uid)
      .set({ nickname: data.nickname, email: data.email });

    const populate = populateBodyParts();
    await firestore
      .collection('bodyParts')
      .doc(res.user.uid)
      .set({
        bodyParts: [...populate],
        exercises: [],
      });
  } catch (err) {
    dispatch({ type: actions.AUTH_FAIL, payload: err.message });
  }
  dispatch({ type: actions.AUTH_END });
};

export const resendEmail = () => async (
  dispatch: Dispatch<AppActions>,
  getState: () => AppState,
  { getFirebase }: any
) => {
  const firebase = getFirebase();
  dispatch({ type: actions.RESEND_EMAIL_START });
  const user = firebase.auth().currentUser;
  await user.sendEmailVerification();
  try {
  } catch (err) {
    dispatch({ type: actions.RESEND_EMAIL_FAIL, payload: err.message });
  }
  dispatch({ type: actions.RESEND_EMAIL_SUCCESS });
};

export const cleanUp = () => ({
  type: actions.AUTH_CLEAN_UP,
});

export const signIn = (data: LoginFormTypes) => async (
  dispatch: Dispatch<AppActions>,
  getState: () => AppState,
  { getFirebase }: any
) => {
  const firebase = getFirebase();
  dispatch({ type: actions.AUTH_START });
  try {
    await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
    dispatch({ type: actions.AUTH_SUCCESS });
  } catch (err) {
    dispatch({ type: actions.AUTH_FAIL, payload: err.message });
  }
};

export const signOut = () => async (
  dispatch: Dispatch<AppActions>,
  getState: () => AppState,
  { getFirebase }: any
) => {
  const firebase = getFirebase();
  try {
    await firebase.auth().signOut();
  } catch (err) {
    console.log(err.message);
  }
};
