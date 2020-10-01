import React, { useEffect } from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AuthState } from '../../../redux/auth/authTypes';
import * as authActions from '../../../redux/auth/authActions';

//UI imports
import { RiUserFollowLine, RiLockPasswordLine } from 'react-icons/ri';
import { AiOutlineMail } from 'react-icons/ai';
import {
  FormWrapper,
  IconWrapper,
  ContentWrapper,
  TextWrapper,
  BottomTextWrapper,
  SpanWrapper,
  ForgotPasswordWrapper,
  MessageWrapper,
} from './Login.styles';
import { StyledForm } from '../../../hoc/layout/elements';
import Heading from '../../../components/UI/Headings/Heading';
import Input from '../../../components/UI/Forms/Input/Input';
import Button from '../../../components/UI/Button/Button';
import { AppState } from '../../../redux/rootReducer';
import Message from '../../../components/UI/Message/Message';

interface LoginProps {}

export interface LoginFormTypes {
  email: string;
  password: string;
}

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email.')
    .required('The email is required.'),
  password: Yup.string()
    .required('The password is required.')
    .min(8, 'The password is to short'),
});

const Login: React.FC<LoginProps> = () => {
  const { loading, error }: AuthState = useSelector(
    (state: AppState) => state.auth
  );
  const dispatch = useDispatch();

  const signIn = (data: LoginFormTypes) => {
    dispatch(authActions.signIn(data));
  };

  useEffect(() => {
    return () => {
      dispatch(authActions.cleanUp());
    };
  }, [dispatch]);

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await signIn(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <FormWrapper
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 50, opacity: 0 }}
        >
          <IconWrapper>
            <RiUserFollowLine />
          </IconWrapper>
          <ContentWrapper>
            <TextWrapper>
              <Heading color={'white'} weight={'700'} size={'2rem'}>
                Login
              </Heading>
              <p>Please sign in to continue</p>
            </TextWrapper>

            <StyledForm>
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
              <Button
                color={'main'}
                loading={loading ? 'Logging in...' : null}
                disabled={!isValid || isSubmitting}
                type="submit"
              >
                Login
              </Button>
            </StyledForm>
            <MessageWrapper>
              <Message error={true} show={error}>
                {error}
              </Message>
            </MessageWrapper>
          </ContentWrapper>

          <ForgotPasswordWrapper>
            <SpanWrapper center>Forgot Password?</SpanWrapper>
          </ForgotPasswordWrapper>

          <BottomTextWrapper>
            <p>Don't have an account? </p>
            <NavLink exact to="/signup">
              <SpanWrapper bold>Sign up</SpanWrapper>
            </NavLink>
          </BottomTextWrapper>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default Login;
