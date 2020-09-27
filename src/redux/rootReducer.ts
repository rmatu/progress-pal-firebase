import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import authReducer from './auth/authReducer';
import navbarReducer from './navbar/navbarReducer';
import firestoreDbReducer from './firestoreDB/firestoreDBreducer';
import appDataReducer from './appData/appDataReducer';

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  auth: authReducer,
  navbar: navbarReducer,
  firestoreDB: firestoreDbReducer,
  appData: appDataReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
