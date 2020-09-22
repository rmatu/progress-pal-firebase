import React, { useEffect } from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../redux/rootReducer';
import * as authActions from '../../../redux/auth/authActions';

//UI imports
import { RiUserAddLine, RiLockPasswordLine, RiUserLine } from 'react-icons/ri';
import { AiOutlineMail } from 'react-icons/ai';
import { BsArrowLeft } from 'react-icons/bs';
import {
  FormWrapper,
  IconWrapper,
  ContentWrapper,
  TextWrapper,
  BottomTextWrapper,
  ArrowWrapper,
  SpanWrapper,
} from './SignUp.styles';
import Heading from '../../../components/UI/Headings/Heading';
import Input from '../../../components/UI/Forms/Input/Input';
import Button from '../../../components/UI/Button/Button';
import { StyledForm, MessageWrapper } from '../../../hoc/layout/elements';
import { AuthState } from '../../../redux/auth/authTypes';
import Message from '../../../components/UI/Message/Message';

const SignUpSchema = Yup.object().shape({
  nickname: Yup.string()
    .required('Your nickname is required.')
    .min(3, 'Too short.')
    .max(25, 'Too long.'),
  email: Yup.string()
    .email('Invalid email.')
    .required('The email is required.'),
  password: Yup.string()
    .required('The password is required.')
    .min(1, 'The password is to short'),
  confirmPassword: Yup.string()
    //Getting the reference to the password
    //@ts-ignore
    .oneOf([Yup.ref('password'), null], `Password doesn't match`)
    .required('Confirm your password.'),
});

export interface SignUpFormTypes {
  nickname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface SignUpProps {}
const SignUp: React.FC<SignUpProps> = () => {
  const dispatch = useDispatch();
  const signUp = (values: SignUpFormTypes) => {
    dispatch(authActions.signUp(values));
  };

  useEffect(() => {
    return () => {
      dispatch(authActions.cleanUp());
    };
  }, []);

  const { error, loading }: AuthState = useSelector(
    (state: AppState) => state.auth
  );

  return (
    <Formik
      initialValues={{
        nickname: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={SignUpSchema}
      onSubmit={async (values: SignUpFormTypes, { setSubmitting }) => {
        await signUp(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <FormWrapper
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
        >
          <NavLink exact to="/login">
            <ArrowWrapper>
              <BsArrowLeft />
            </ArrowWrapper>
          </NavLink>
          <IconWrapper>
            <RiUserAddLine />
          </IconWrapper>
          <ContentWrapper>
            <TextWrapper>
              <Heading color={'white'} weight={'700'} size={'2rem'}>
                Create Account
              </Heading>
              <p>Please fill the input below</p>
            </TextWrapper>

            <StyledForm>
              <Field
                type="text"
                name="nickname"
                placeholder="Nickname"
                component={Input}
              >
                <RiUserLine />
              </Field>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                component={Input}
              >
                <AiOutlineMail />
              </Field>
              <Field
                type="password"
                name="password"
                placeholder="Password"
                component={Input}
              >
                <RiLockPasswordLine />
              </Field>
              <Field
                type="password"
                name="confirmPassword"
                placeholder="Confrim Password"
                component={Input}
              >
                <RiLockPasswordLine />
              </Field>
              <Button
                color={'main'}
                loading={loading ? 'Signing up...' : null}
                disabled={!isValid || isSubmitting}
                type="submit"
              >
                Sign Up
              </Button>
              <MessageWrapper>
                <Message error={true} show={error}>
                  {error}
                </Message>
              </MessageWrapper>
            </StyledForm>
          </ContentWrapper>
          <BottomTextWrapper>
            <p>Already have an account? </p>
            <NavLink exact to="/login">
              <SpanWrapper>Sign in</SpanWrapper>
            </NavLink>
          </BottomTextWrapper>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default SignUp;
