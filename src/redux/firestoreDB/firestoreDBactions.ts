import { AppActions } from './../actions';
import { Dispatch } from 'redux';
import * as actions from './firestoreDBtypes';
import { AppState } from '../rootReducer';
import { v4 as uuidv4 } from 'uuid';
import { BodyPart } from '../../containers/BodyParts/BodyParts';
import { Exercise } from '../../containers/Exercises/Exercises';

export const addBodyPart = (bodyPartName: string) => async (
  dispatch: Dispatch<AppActions>,
  getState: () => AppState,
  { getFirestore }: any
) => {
  const firestore = getFirestore();
  const userId = getState().firebase.auth.uid;

  dispatch({ type: actions.ADD_DATA_START });

  try {
    const res = await firestore.collection('bodyParts').doc(userId).get();

    const newBodyPart: BodyPart = {
      id: uuidv4(),
      name: bodyPartName,
      exercises: [],
    };

    if (!res.data()) {
      firestore
        .collection('bodyParts')
        .doc(userId)
        .set({
          bodyParts: [newBodyPart],
        });
    } else {
      firestore
        .collection('bodyParts')
        .doc(userId)
        .update({
          bodyParts: [...res.data().bodyParts, newBodyPart],
        });
    }
    dispatch({ type: actions.ADD_DATA_SUCCESS });

    return true;
  } catch (err) {
    dispatch({ type: actions.ADD_DATA_FAIL, payload: err.message });
  }
};

export const addExercise = (exerciseName: string) => async (
  dispatch: Dispatch<AppActions>,
  getState: () => AppState,
  { getFirestore }: any
) => {
  const firestore = getFirestore();
  const userId = getState().firebase.auth.uid;
  const selectedBodyPart = getState().appData.bodyTypeName;

  dispatch({ type: actions.ADD_DATA_START });

  try {
    const res = await firestore.collection('bodyParts').doc(userId).get();
    const bodyParts = res.data().bodyParts;

    console.log({ bodyParts });

    const index = bodyParts.findIndex(
      (bodyPart: BodyPart) => bodyPart.name === selectedBodyPart
    );

    const newExercise = {
      id: uuidv4(),
      name: exerciseName,
    };

    bodyParts[index].exercises = [newExercise];

    await firestore.collection('bodyParts').doc(userId).update({
      bodyParts: bodyParts,
    });

    dispatch({ type: actions.ADD_DATA_SUCCESS });
    return true;
  } catch (err) {
    dispatch({ type: actions.ADD_DATA_FAIL, payload: err.message });
  }
};
