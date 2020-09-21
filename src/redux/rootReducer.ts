import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import authReducer from './auth/authReducer';
import navbarReducer from './navbar/navbarReducer';
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  auth: authReducer,
  navbar: navbarReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
