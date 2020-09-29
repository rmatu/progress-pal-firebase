import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux/rootReducer';
import { cleanUp } from '../../redux/navbar/navbarActions';
import { useFirestoreConnect } from 'react-redux-firebase';
import { setBodyName } from '../../redux/appData/appDataActions';
import * as Yup from 'yup';
import * as ROUTES from '../../constants/routes';

import Heading from '../../components/UI/Headings/Heading';
import { HiPlusCircle, HiPlay } from 'react-icons/hi';
import {
  Wrapper,
  UpperContainer,
  LowerContainer,
  BackIcon,
  Split,
  SearchBodyPart,
  IconWrapper,
} from './Exercises.styles';
import Modal from '../../components/UI/Modal/Modal';
import { Field, Formik } from 'formik';
import { AddBodyPartForm } from '../../hoc/layout/elements';
import { RiBodyScanFill } from 'react-icons/ri';
import { ButtonsWrapper } from '../BodyParts/BodyParts.styles';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Forms/Input/Input';
import { addExercise } from '../../redux/firestoreDB/firestoreDBactions';

const ExerciseSchema = Yup.object().shape({
  name: Yup.string().required(`Your input is empty.`).min(1),
});

export interface Exercise {
  name: string;
  id: string;
}

interface ExercisesProps {}

const Exercises: React.FC<ExercisesProps> = ({}) => {
  const [modalOpened, setModalOpened] = useState<boolean>(false);
  const userId = useSelector((state: AppState) => state.firebase.auth.uid);
  const { bodyTypeName, exerciseName } = useSelector(
    (state: AppState) => state.appData
  );
  const dispatch = useDispatch();
  //syncing the data from firestore into redux
  useFirestoreConnect(`exercises/${userId}`);
  const exercises = useSelector(
    (state: AppState) => state.firestore.data.exercises
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

  if (exercises) {
    // content = exercises[userId].exercises
    //   .slice(0)
    //   .sort(function (a: Exercise, b: Exercise) {
    //     const textA = a.name.toUpperCase();
    //     const textB = b.name.toUpperCase();
    //     return textA < textB ? -1 : textA > textB ? 1 : 0;
    //   })
    //   .map((item: Exercise) => (
    //     <option key={item.id} value={item.name}>
    //       {item.name}
    //     </option>
    //   ));
  } else {
    content = (
      <option key={'loading'} value={'loading'}>
        Loading data...
      </option>
    );
  }

  return (
    <Wrapper>
      <UpperContainer>
        <Heading
          size={'1.5rem'}
          color={'#fff'}
          weight={'700'}
          marginBottom={'0rem'}
        >
          {bodyTypeName}
        </Heading>
        <Heading
          size={'1rem'}
          color={'#fff'}
          weight={'500'}
          marginBottom={'1rem'}
        >
          {exerciseName}
        </Heading>
        <Split>
          <BackIcon to={ROUTES.BODY_PARTS}>
            <HiPlay />
          </BackIcon>
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
          validationSchema={ExerciseSchema}
          onSubmit={({ name }, { setSubmitting, resetForm }) => {
            dispatch(addExercise(name));

            setSubmitting(false);
            resetForm();
            setModalOpened((modalOpened) => !modalOpened);
          }}
        >
          {({ isSubmitting, isValid, resetForm }) => (
            <>
              <Heading size={'1.5rem'} color={'#fff'} weight={'bold'}>
                Type in the name of the exercise
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

export default Exercises;
