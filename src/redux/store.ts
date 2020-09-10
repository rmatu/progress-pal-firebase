import { AppActions } from './actions';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { getFirebase } from 'react-redux-firebase';
import {
  getFirestore,
  reduxFirestore,
  createFirestoreInstance,
} from 'redux-firestore';
import firebase from '../Firebase/Firebase';

import rootReducer, { AppState } from './rootReducer';

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
  attachAuthIsReady: true, // attaches auth is ready promise to store
  enableClaims: true,
};

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
      compose
    : compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      thunk.withExtraArgument({ getFirebase, getFirestore }) as ThunkMiddleware<
        AppState,
        AppActions
      >
    ),
    reduxFirestore(firebase)
  )
);

export const rffProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

export default store;
