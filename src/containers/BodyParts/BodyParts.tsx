import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cleanUp } from '../../redux/navbar/navbarActions';
import { addBodyPart } from '../../redux/firestoreDB/firestoreDBactions';
import { useFirestoreConnect } from 'react-redux-firebase';
import { AppState } from '../../redux/rootReducer';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import { HiPlusCircle } from 'react-icons/hi';
import { RiBodyScanFill } from 'react-icons/ri';
import Loader from '../../components/UI/Loader/Loader';
import {
  BodyPartsWrapper,
  NoContent,
  SearchBodyPart,
  AddNewBodyPart,
  IconWrapper,
  ButtonsWrapper,
} from './BodyParts.styles';
import Modal from '../../components/UI/Modal/Modal';
import Heading from '../../components/UI/Headings/Heading';
import Input from '../../components/UI/Forms/Input/Input';
import Message from '../../components/UI/Message/Message';
import Button from '../../components/UI/Button/Button';
import { AddBodyPartForm } from '../../hoc/layout/elements';
import { MessageWrapper } from '../Auth/Login/Login.styles';

const BodyPartSchema = Yup.object().shape({
  name: Yup.string().required(`Your input is empty.`).min(1),
});

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

  const { error, loading } = useSelector(
    (state: AppState) => state.firestoreDB
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
        <Formik
          initialValues={{
            name: '',
          }}
          validationSchema={BodyPartSchema}
          onSubmit={({ name }, { setSubmitting }) => {
            dispatch(addBodyPart(name));
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, isValid, resetForm }) => (
            <>
              <Heading size={'1.5rem'} color={'#fff'} weight={'bold'}>
                What is the muscle/body part name?
              </Heading>
              <AddBodyPartForm>
                <Field
                  type="text"
                  name="name"
                  placeholder="Pass the name"
                  component={Input}
                >
                  <RiBodyScanFill />
                </Field>

                <Message success show={error === false}>
                  {console.log('from bodyparts')}
                  {console.log({ error, loading })}
                  Added successfully
                </Message>

                <ButtonsWrapper>
                  <Button
                    color={'main'}
                    loading={loading ? 'Adding...' : null}
                    disabled={!isValid || isSubmitting}
                    type="submit"
                    contain={'100%'}
                  >
                    Add
                  </Button>
                  <Button
                    color={'error'}
                    type="button"
                    contain={'100%'}
                    marginTop={'1rem'}
                    onClick={() => {
                      setModalOpened((modalOpened) => !modalOpened);
                      setTimeout(() => resetForm(), 500);
                    }}
                  >
                    Cancel
                  </Button>
                </ButtonsWrapper>
                <MessageWrapper>
                  <Message error={true} show={error}>
                    {error}
                  </Message>
                </MessageWrapper>
              </AddBodyPartForm>
            </>
          )}
        </Formik>
      </Modal>
    </>
  );
};

export default BodyParts;
