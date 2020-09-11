import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
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
import { StyledForm } from '../../../hoc/layout/elements';

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
    .min(8, 'The password is to short'),
  confirmPassword: Yup.string()
    //Getting the reference to the password
    //@ts-ignore
    .oneOf([Yup.ref('password'), null], `Password doesn't match`)
    .required('You need to confirm your password.'),
});

export interface SignUpFormTypes {
  nickname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface SignUpProps {
  signUp: (data: SignUpFormTypes) => void;
}
const SignUp: React.FC<SignUpProps> = ({ signUp }) => {
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
        console.log('im here');
        await signUp(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <FormWrapper>
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
                disabled={!isValid || isSubmitting}
                type="submit"
              >
                Sign Up
              </Button>
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

const mapStateToProps = (state: AppState, ownProps: SignUpProps) => ({});

const mapDispatchToProps = {
  signUp: authActions.signUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
