import { NavbarActionTypes } from './navbar/navbarTypes';
import { AuthActionTypes } from './auth/authTypes';
import { FirestoreDBactionTypes } from './firestoreDB/firestoreDBtypes';

export type AppActions =
  | FirestoreDBactionTypes
  | AuthActionTypes
  | NavbarActionTypes;
