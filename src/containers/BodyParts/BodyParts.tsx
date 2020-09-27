import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cleanUp } from '../../redux/navbar/navbarActions';
import { setBodyName } from '../../redux/appData/appDataActions';
import { addBodyPart } from '../../redux/firestoreDB/firestoreDBactions';
import { useFirestoreConnect } from 'react-redux-firebase';
import { AppState } from '../../redux/rootReducer';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import { HiPlusCircle } from 'react-icons/hi';
import { RiBodyScanFill } from 'react-icons/ri';

import {
  Wrapper,
  Split,
  SearchBodyPart,
  IconWrapper,
  ButtonsWrapper,
  LowerContainer,
  UpperContainer,
} from './BodyParts.styles';
import Modal from '../../components/UI/Modal/Modal';
import Heading from '../../components/UI/Headings/Heading';
import Input from '../../components/UI/Forms/Input/Input';
import Button from '../../components/UI/Button/Button';
import { AddBodyPartForm } from '../../hoc/layout/elements';

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
  const { bodyTypeName } = useSelector((state: AppState) => state.appData);
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

  const handleChange = (name: string) => {
    if (name) {
      dispatch(setBodyName(name));
    }
  };

  let content;

  if (bodyParts) {
    content = bodyParts[userId].bodyParts
      .slice(0)
      .sort(function (a: BodyPart, b: BodyPart) {
        const textA = a.name.toUpperCase();
        const textB = b.name.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      })
      .map((item: BodyPart) => (
        <option key={item.id} value={item.name}>
          {item.name}
        </option>
      ));
  }

  return (
    <Wrapper>
      <UpperContainer>
        <Heading
          size={'1.5rem'}
          color={'#fff'}
          weight={'700'}
          marginBottom={'1rem'}
        >
          {bodyTypeName}
        </Heading>
        <Split>
          <SearchBodyPart>
            <select onChange={(e) => handleChange(e.target.value)}>
              <option value="">Please choose an option</option>
              {content}
            </select>
          </SearchBodyPart>

          <IconWrapper onClick={() => setModalOpened(true)}>
            <HiPlusCircle />
          </IconWrapper>
        </Split>
      </UpperContainer>
      <LowerContainer>
        <p>The graph goes skraaaa</p>
      </LowerContainer>

      <Modal opened={modalOpened} close={() => setModalOpened(false)}>
        <Formik
          initialValues={{
            name: '',
          }}
          validationSchema={BodyPartSchema}
          onSubmit={({ name }, { setSubmitting, resetForm }) => {
            dispatch(addBodyPart(name));
            setSubmitting(false);
            resetForm();
            setModalOpened((modalOpened) => !modalOpened);
          }}
        >
          {({ isSubmitting, isValid, resetForm }) => (
            <>
              <Heading size={'1.5rem'} color={'#fff'} weight={'bold'}>
                Add a specific muscle or body part
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

                <ButtonsWrapper>
                  <Button
                    color={'main'}
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
              </AddBodyPartForm>
            </>
          )}
        </Formik>
      </Modal>
    </Wrapper>
  );
};

export default BodyParts;
