import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cleanUp } from '../../redux/navbar/navbarActions';
import { addBodyPart } from '../../redux/firestoreDB/firestoreDBactions';
import { useFirestoreConnect } from 'react-redux-firebase';
import { AppState } from '../../redux/rootReducer';

import { BodyPartsWrapper, NoContent } from './BodyParts.styles';
import Loader from '../../components/UI/Loader/Loader';

interface BodyPartsProps {}

export interface BodyPart {
  name: string;
  id: string;
}

const BodyParts: React.FC<BodyPartsProps> = () => {
  const userId = useSelector((state: AppState) => state.firebase.auth.uid);
  const dispatch = useDispatch();
  //syncing the data from firestore into redux
  useFirestoreConnect(`bodyParts/${userId}`);
  const bodyParts = useSelector(
    (state: AppState) => state.firestore.data.bodyParts
  );

  useEffect(() => {
    return () => {
      dispatch(cleanUp());
    };
  }, [dispatch]);

  let content;

  if (!bodyParts) {
    content = (
      <NoContent>
        <Loader isWhite />
      </NoContent>
    );
  } else {
    content = <p>Here will be the body parts where you can select</p>;
  }

  return <BodyPartsWrapper>{content}</BodyPartsWrapper>;
};

export default BodyParts;
