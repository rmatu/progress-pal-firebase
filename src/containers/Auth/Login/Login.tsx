import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';

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
} from './Login.styles';
import Heading from '../../../components/UI/Headings/Heading';
import Input from '../../../components/UI/Forms/Input/Input';
import Button from '../../../components/UI/Button/Button';

interface LoginProps {}

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email.')
    .required('The email is required.'),
  password: Yup.string()
    .required('The password is required.')
    .min(8, 'The password is to short'),
});

const Login: React.FC<LoginProps> = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, isValid }) => (
        //@ts-ignore
        <FormWrapper>
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

            <Field
              type="email"
              name="email"
              placeholder="Email"
              component={Input}
            >
              <AiOutlineMail />
            </Field>
            <Field
              type="text"
              name="password"
              placeholder="Password"
              component={Input}
            >
              <RiLockPasswordLine />
            </Field>
          </ContentWrapper>
          <Button color={'main'} disabled={false}>
            Login
          </Button>
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
