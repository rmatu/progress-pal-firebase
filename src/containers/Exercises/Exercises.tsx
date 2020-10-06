import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../redux/rootReducer';
import { cleanUp } from '../../redux/navbar/navbarActions';
import { closeRenameModal } from '../../redux/appData/appDataActions';
import { useFirestoreConnect } from 'react-redux-firebase';
import * as Yup from 'yup';
import * as ROUTES from '../../constants/routes';
import {
  addExercise,
  editExerciseName,
} from '../../redux/firestoreDB/firestoreDBactions';
import { BodyPart } from '../BodyParts/BodyParts';
import { setExerciseName } from '../../redux/appData/appDataActions';

import Heading from '../../components/UI/Headings/Heading';
import { HiPlusCircle, HiPlay } from 'react-icons/hi';
import {
  Wrapper,
  UpperContainer,
  LowerContainer,
  FirstSelected,
  BackIcon,
  OptionsContainer,
  Split,
  SearchBodyPart,
  IconWrapper,
} from './Exercises.styles';
import Modal from '../../components/UI/Modal/Modal';
import { Field, Formik } from 'formik';
import { AddBodyPartForm } from '../../hoc/layout/elements';
import { RiBodyScanFill, RiArrowDownSLine } from 'react-icons/ri';
import { ButtonsWrapper } from '../BodyParts/BodyParts.styles';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Forms/Input/Input';
import BarGraph from '../../components/UI/Graphs/BarGraph/BarGraph';
import { checkIfAll } from '../../utils';
import LineGraph from '../../components/UI/Graphs/LineGraph/LineGraph';
import Exercise from './Exercise/Exercise';
import Loader from '../../components/UI/Loader/Loader';

const ExerciseSchema = Yup.object().shape({
  name: Yup.string().required(`Your input is empty.`).min(1),
});

export interface Exercise {
  name: string;
  id: string;
}

interface ExercisesProps {}

const Exercises: React.FC<ExercisesProps> = () => {
  const [modalOpened, setModalOpened] = useState<boolean>(false);
  const [isActiveDropdown, setIsActiveDropdown] = useState<boolean>(false);
  const [isActiveSelected, setIsActiveSelected] = useState<boolean>(false);
  const userId = useSelector((state: AppState) => state.firebase.auth.uid);
  const { bodyTypeName, exerciseName, renamingModalOpened } = useSelector(
    (state: AppState) => state.appData
  );

  const dispatch = useDispatch();

  useFirestoreConnect([
    {
      collection: 'bodyParts',
      doc: `${userId}`,
    },
    {
      collection: 'test',
      where: [['id', '==', '1']],
      storeAs: 'test',
    },
  ]);

  const bodyParts = useSelector(
    (state: AppState) => state.firestore.data.bodyParts
  );

  useEffect(() => {
    return () => {
      dispatch(cleanUp());
    };
  }, [dispatch]);

  let content;

  if (bodyParts) {
    const index = bodyParts[userId].bodyParts.findIndex(
      (bodyPart: BodyPart) => bodyPart.name === bodyTypeName
    );

    if (bodyParts[userId].bodyParts[index].exercises.length > 0) {
      content = bodyParts[userId].bodyParts[index].exercises
        .slice(0)
        .sort(function (a: Exercise, b: Exercise) {
          const textA = a.name.toUpperCase();
          const textB = b.name.toUpperCase();
          return textA < textB ? -1 : textA > textB ? 1 : 0;
        })
        .map((item: Exercise) => (
          <Exercise
            key={item.id}
            id={item.id}
            value={item.name}
            close={() => setIsActiveDropdown(!isActiveDropdown)}
          />
        ));
    } else {
      content = (
        <Exercise
          key={'0dksa-dkas--a0ksd'}
          id={'0dksa-dkas--a0ksd'}
          value={'No exercises...'}
          close={() => setIsActiveDropdown(!isActiveDropdown)}
        />
      );
    }
  } else {
    content = <Loader isWhite />;
  }

  return (
    <Wrapper
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 50, opacity: 0 }}
    >
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
          <BackIcon
            to={ROUTES.BODY_PARTS}
            onClick={() => dispatch(setExerciseName('All'))}
          >
            <HiPlay />
          </BackIcon>
          <SearchBodyPart>
            <OptionsContainer isActive={isActiveDropdown}>
              {content}
            </OptionsContainer>
            <FirstSelected
              isActive={isActiveSelected}
              onClick={() => {
                setIsActiveDropdown(!isActiveDropdown);
                setIsActiveSelected(!isActiveSelected);
              }}
            >
              Select Exercise
              <RiArrowDownSLine />
            </FirstSelected>
          </SearchBodyPart>

          <IconWrapper onClick={() => setModalOpened(true)}>
            <HiPlusCircle />
          </IconWrapper>
        </Split>
      </UpperContainer>
      <LowerContainer>
        {checkIfAll(exerciseName) ? (
          <BarGraph title={`Progress on ${bodyTypeName.toLowerCase()}`} />
        ) : (
          <LineGraph title={`Progress on ${exerciseName}`} />
        )}
      </LowerContainer>
      <div>The graph for all the exercises of {exerciseName}</div>

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

      <Modal
        opened={renamingModalOpened}
        close={() => dispatch(closeRenameModal())}
      >
        <Formik
          initialValues={{
            name: '',
          }}
          validationSchema={ExerciseSchema}
          onSubmit={({ name }, { setSubmitting, resetForm }) => {
            dispatch(editExerciseName(name));
            setSubmitting(false);
            resetForm();
            dispatch(closeRenameModal());
          }}
        >
          {({ isSubmitting, isValid, resetForm }) => (
            <>
              <Heading size={'1.5rem'} color={'#fff'} weight={'bold'}>
                Change the name
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
                      dispatch(closeRenameModal());
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
