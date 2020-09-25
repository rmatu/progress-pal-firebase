import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cleanUp } from '../../redux/navbar/navbarActions';
import { addBodyPart } from '../../redux/firestoreDB/firestoreDBactions';
import { useFirestoreConnect } from 'react-redux-firebase';
import { AppState } from '../../redux/rootReducer';
import Loader from '../../components/UI/Loader/Loader';
import { HiPlusCircle } from 'react-icons/hi';

import {
  BodyPartsWrapper,
  NoContent,
  SearchBodyPart,
  AddNewBodyPart,
  IconWrapper,
} from './BodyParts.styles';
import Modal from '../../components/UI/Modal/Modal';

interface BodyPartsProps {}

export interface BodyPart {
  name: string;
  id: string;
}

const BodyParts: React.FC<BodyPartsProps> = () => {
  const [modalOpened, setModalOpened] = useState<boolean>(false);
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
  }

  return (
    <>
      <BodyPartsWrapper>
        <SearchBodyPart>{content}</SearchBodyPart>
        <AddNewBodyPart>
          <p>Add a specific body part or muscle</p>
          <IconWrapper onClick={() => setModalOpened(true)}>
            <HiPlusCircle />
          </IconWrapper>
        </AddNewBodyPart>
      </BodyPartsWrapper>

      <Modal opened={modalOpened} close={() => setModalOpened(false)}>
        xddd
      </Modal>
    </>
  );
};

export default BodyParts;
