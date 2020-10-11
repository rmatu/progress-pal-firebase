import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cleanUp } from '../../redux/navbar/navbarActions';
import { closeRenameModal } from '../../redux/appData/appDataActions';
import {
  addBodyPart,
  editBodyPartName,
} from '../../redux/firestoreDB/firestoreDBactions';
import { useFirestoreConnect } from 'react-redux-firebase';
import { AppState } from '../../redux/rootReducer';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import * as ROUTES from '../../constants/routes';

import { HiPlusCircle, HiPlay } from 'react-icons/hi';
import { RiBodyScanFill, RiArrowDownSLine } from 'react-icons/ri';
import {
  Wrapper,
  Split,
  FirstSelected,
  LinkIconWrapper,
  SearchBodyPart,
  IconWrapper,
  ButtonsWrapper,
  OptionsContainer,
  LowerContainer,
  UpperContainer,
} from './BodyParts.styles';
import Modal from '../../components/UI/Modal/Modal';
import Heading from '../../components/UI/Headings/Heading';
import Input from '../../components/UI/Forms/Input/Input';
import Button from '../../components/UI/Button/Button';
import { AddBodyPartForm } from '../../hoc/layout/elements';
import { Exercise } from '../Exercises/Exercises';
import BarGraph from '../../components/UI/Graphs/BarGraph/BarGraph';
import BodyPart from './BodyPart/BodyPart';
import Loader from '../../components/UI/Loader/Loader';

const BodyPartSchema = Yup.object().shape({
  name: Yup.string().required(`Your input is empty.`).min(1),
});

interface BodyPartsProps {}

export interface BodyPart {
  name: string;
  id: string;
  exercises: Exercise[];
}

const BodyParts: React.FC<BodyPartsProps> = () => {
  const [modalOpened, setModalOpened] = useState<boolean>(false);
  const [isActiveDropdown, setIsActiveDropdown] = useState<boolean>(false);
  const [isActiveSelected, setIsActiveSelected] = useState<boolean>(false);
  const userId = useSelector((state: AppState) => state.firebase.auth.uid);
  const { bodyTypeName, exerciseName, renamingModalOpened } = useSelector(
    (state: AppState) => state.appData
  );
  const dispatch = useDispatch();

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

  if (bodyParts) {
    if (bodyParts[userId].bodyParts.length > 0) {
      content = bodyParts[userId].bodyParts
        .slice(0)
        .sort(function (a: BodyPart, b: BodyPart) {
          const textA = a.name.toUpperCase();
          const textB = b.name.toUpperCase();
          return textA < textB ? -1 : textA > textB ? 1 : 0;
        })
        .map((item: BodyPart) => (
          <BodyPart
            key={item.id}
            id={item.id}
            value={item.name}
            close={() => {
              setIsActiveDropdown(!isActiveDropdown);
              setIsActiveSelected(!isActiveSelected);
            }}
          />
        ));
    } else {
      content = (
        <BodyPart
          key={'0dksa-dkas--a0ksd'}
          id={'0dksa-dkas--a0ksd'}
          value={'No exercises...'}
          close={() => {
            setIsActiveDropdown(!isActiveDropdown);
            setIsActiveSelected(!isActiveSelected);
          }}
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
          <IconWrapper onClick={() => setModalOpened(true)}>
            <HiPlusCircle />
          </IconWrapper>

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
              Select Body Category
              <RiArrowDownSLine />
            </FirstSelected>
          </SearchBodyPart>

          <LinkIconWrapper to={ROUTES.EXERCISES}>
            <HiPlay />
          </LinkIconWrapper>
        </Split>
      </UpperContainer>
      <LowerContainer>
        <BarGraph title={`Progress on ${bodyTypeName.toLowerCase()}`} />
        <div>The graph for all the exercises of {bodyTypeName}</div>
      </LowerContainer>

      <Modal
        opened={renamingModalOpened}
        close={() => dispatch(closeRenameModal())}
      >
        <Formik
          initialValues={{
            name: '',
          }}
          validationSchema={BodyPartSchema}
          onSubmit={({ name }, { setSubmitting, resetForm }) => {
            dispatch(editBodyPartName(name));
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
