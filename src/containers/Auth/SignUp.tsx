import React from 'react';
import { Formik, Field } from 'formik';

import * as Yup from 'yup';

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
} from './SignUp.styles';
import Heading from '../../components/UI/Headings/Heading';
import Input from '../../components/UI/Forms/Input/Input';
import Button from '../../components/UI/Button/Button';

interface SignUpProps {}

const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('Your first name is required.')
    .min(3, 'Too short.')
    .max(25, 'Too long.'),
  lastName: Yup.string()
    .required('Your last name is required.')
    .min(3, 'Too short.')
    .max(25, 'Too long.'),
  email: Yup.string()
    .email('Invalid email.')
    .required('The email is required.'),
  password: Yup.string()
    .required('The password is required.')
    .min(8, 'The password is to short'),
  confirmPassword: Yup.string()
    //Getting the reference to the password
    //@ts-ignore
    .oneOf([Yup.ref('password'), null], `Password doesn't match`)
    .required('You need to confirm your password.'),
});

const SignUp: React.FC<SignUpProps> = () => {
  return (
    <Formik
      initialValues={{
        nickname: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={SignUpSchema}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <FormWrapper>
          <ArrowWrapper>
            <BsArrowLeft />
          </ArrowWrapper>
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
            <Field
              type="text"
              name="nickName"
              placeholder="Nickname"
              component={Input}
            >
              <RiUserLine />
            </Field>
            <Field
              type="email"
              name="nickname"
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
            <Field
              type="text"
              name="password"
              placeholder="Confrim Password"
              component={Input}
            >
              <RiLockPasswordLine />
            </Field>
            <Button color={'main'} disabled={false} loading={false}>
              Sign Up
            </Button>
          </ContentWrapper>
          <BottomTextWrapper>
            <p>Already have an account? </p>
            <span>Sign in</span>
          </BottomTextWrapper>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default SignUp;
