import { AppActions } from './../actions';
import { Dispatch } from 'redux';
import * as actions from './firestoreDBtypes';
import { AppState } from '../rootReducer';
import { v4 as uuidv4 } from 'uuid';
import { BodyPart } from '../../containers/BodyParts/BodyParts';
import { Exercise } from '../../containers/Exercises/Exercises';
import * as appDataActions from '../appData/appDataTypes';

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

    const index = bodyParts.findIndex(
      (bodyPart: BodyPart) => bodyPart.name === selectedBodyPart
    );

    const newExercise = {
      id: uuidv4(),
      name: exerciseName,
    };

    bodyParts[index].exercises = [...bodyParts[index].exercises, newExercise];

    await firestore.collection('bodyParts').doc(userId).update({
      bodyParts: bodyParts,
    });

    await firestore
      .collection('exercises')
      .doc(newExercise.id)
      .set({
        ...newExercise,
        bodyPartId: bodyParts[index].id,
        data: [
          {
            date: '',
            weight: '',
          },
        ],
      });

    dispatch({ type: actions.ADD_DATA_SUCCESS });
  } catch (err) {
    dispatch({ type: actions.ADD_DATA_FAIL, payload: err.message });
  }
};

export const editBodyPartName = (changedName: string) => async (
  dispatch: Dispatch<AppActions>,
  getState: () => AppState,
  { getFirestore }: any
) => {
  const firestore = getFirestore();
  const userId = getState().firebase.auth.uid;

  //This is the name when you click on the pencil SVG
  const originalName = getState().appData.targetName;
  dispatch({ type: actions.ADD_DATA_START });

  try {
    const res = await firestore.collection('bodyParts').doc(userId).get();

    const bodyParts = res.data().bodyParts;

    const index = bodyParts.findIndex(
      (bodyPart: BodyPart) => bodyPart.name === originalName
    );

    bodyParts[index].name = changedName;

    await firestore.collection('bodyParts').doc(userId).update({
      bodyParts: bodyParts,
    });

    dispatch({ type: actions.ADD_DATA_SUCCESS });
    return true;
  } catch (err) {
    dispatch({ type: actions.ADD_DATA_FAIL, payload: err.message });
  }
};

export const editExerciseName = (changedName: string) => async (
  dispatch: Dispatch<AppActions>,
  getState: () => AppState,
  { getFirestore }: any
) => {
  const firestore = getFirestore();
  const userId = getState().firebase.auth.uid;
  const selectedBodyPart = getState().appData.bodyTypeName;
  const exerciseId = getState().appData.exerciseId;
  let bodyPartId = getState().appData.bodyTypeId;

  //This is the name when you click on the pencil SVG
  const originalName = getState().appData.targetName;
  dispatch({ type: actions.ADD_DATA_START });

  try {
    const res = await firestore.collection('bodyParts').doc(userId).get();

    const bodyParts = res.data().bodyParts;

    // Because the default state of bodyPartName in redux is 'Chest', so we need to set the bodyPartId
    if (!bodyPartId) {
      const tmpIndex = bodyParts.findIndex(
        (bodyPart: BodyPart) => bodyPart.name === 'Chest'
      );
      bodyPartId = bodyParts[tmpIndex].id;
    }

    const bodyPartIndex = bodyParts.findIndex(
      (bodyPart: BodyPart) => bodyPart.name === selectedBodyPart
    );

    const exerciseIndex = bodyParts[bodyPartIndex].exercises.findIndex(
      (exercise: Exercise) => exercise.name === originalName
    );

    bodyParts[bodyPartIndex].exercises[exerciseIndex].name = changedName;

    await firestore.collection('bodyParts').doc(userId).update({
      bodyParts: bodyParts,
    });

    let res2: Object = {};

    await firestore
      .collection('exercises')
      .where('bodyPartId', '==', bodyPartId)
      .get()
      .then((querySnapshot: any) => {
        querySnapshot.forEach((doc: any) => {
          res2 = doc.data();
        });
      })
      .catch((error: any) => {
        console.log('Error getting documents: ', error);
      });

    await firestore
      .collection('exercises')
      .doc(exerciseId)
      .update({
        ...res2,
        name: changedName,
      });

    dispatch({ type: actions.ADD_DATA_SUCCESS });
    return true;
  } catch (err) {
    dispatch({ type: actions.ADD_DATA_FAIL, payload: err.message });
  }
};

export const deleteBodyPart = (
  bodyPartId: string,
  bodyPartName: string
) => async (
  dispatch: Dispatch<AppActions>,
  getState: () => AppState,
  { getFirestore }: any
) => {
  const firestore = getFirestore();
  const userId = getState().firebase.auth.uid;
  const originalBodyTypeName = getState().appData.bodyTypeName;

  dispatch({ type: actions.ADD_DATA_START });
  try {
    dispatch({ type: actions.ADD_DATA_SUCCESS });

    // If we are deleting a body part, we also have to delete all the exercises
    await firestore
      .collection('exercises')
      .where('bodyPartId', '==', bodyPartId)
      .get()
      .then(function (querySnapshot: any) {
        var batch = firestore.batch();

        querySnapshot.forEach(function (doc: any) {
          batch.delete(doc.ref);
        });

        return batch.commit();
      });

    // Deleting the body part form the firestore map
    const res = await firestore.collection('bodyParts').doc(userId).get();
    const prevBodyParts = res.data().bodyParts;
    const newBodyParts = prevBodyParts.filter(
      (bodyPart: any) => bodyPart.id !== bodyPartId
    );

    await firestore.collection('bodyParts').doc(userId).update({
      bodyParts: newBodyParts,
    });

    // If user deletes the body part which was previously set, we have to change the selected body
    if (bodyPartName === originalBodyTypeName) {
      dispatch({
        type: appDataActions.SELECT_BODY_TYPE_NAME,
        payload: prevBodyParts[0].name,
      });
    }

    console.log(newBodyParts);

    if (newBodyParts.length === 0) {
      dispatch({
        type: appDataActions.SELECT_BODY_TYPE_NAME,
        payload: `Empty`,
      });
      dispatch({
        type: appDataActions.SELECT_EXERCISE_NAME,
        payload: ``,
      });
    }

    dispatch({ type: actions.ADD_DATA_START });
  } catch (err) {
    dispatch({ type: actions.ADD_DATA_FAIL, payload: err });
  }
};
