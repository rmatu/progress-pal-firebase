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

  dispatch({ type: actions.SIGN_UP_START });

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
  } catch (err) {
    dispatch({ type: actions.SIGN_UP_FAIL, payload: err.message });
  }
  dispatch({ type: actions.SIGN_UP_END });
};

export const resendEmail = () => async (
  dispatch: Dispatch<AppActions>,
  getState: () => AppState,
  { getFirebase, getFirestore }: any
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
