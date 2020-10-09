import React, { useEffect } from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as authActions from '../../../redux/auth/authActions';
import * as ROUTES from '../../../constants/routes';

//UI imports
import { BsArrowLeft } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import {
  FormWrapper,
  ContentWrapper,
  TextWrapper,
  ArrowWrapper,
  MessageWrapper,
} from './ForgotPassword.styles';
import { StyledForm } from '../../../hoc/layout/elements';
import Heading from '../../../components/UI/Headings/Heading';
import Input from '../../../components/UI/Forms/Input/Input';
import Button from '../../../components/UI/Button/Button';
import { AppState } from '../../../redux/rootReducer';
import Message from '../../../components/UI/Message/Message';

interface ForgotPasswordSchema {}

export interface ForgotPasswordTypes {
  password: string;
}

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email.')
    .required('The email is required.'),
});

const ForgotPassword: React.FC<ForgotPasswordSchema> = () => {
  const { loading, error } = useSelector(
    (state: AppState) => state.auth.verifyEmail
  );
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(authActions.cleanUp());
    };
  }, [dispatch]);

  return (
    <Formik
      initialValues={{
        email: '',
      }}
      validationSchema={ForgotPasswordSchema}
      onSubmit={async ({ email }, { setSubmitting }) => {
        await dispatch(authActions.forgotPassword(email));
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <FormWrapper
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 50, opacity: 0 }}
        >
          <NavLink exact to={ROUTES.LOGIN}>
            <ArrowWrapper>
              <BsArrowLeft />
            </ArrowWrapper>
          </NavLink>

          <ContentWrapper>
            <TextWrapper>
              <Heading color={'white'} weight={'700'} size={'1.8rem'}>
                Forgot your password?
              </Heading>
              <p>
                Don't worry! just fill in your email and we'll send you a link
                to reset your password
              </p>
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

              <Button
                color={'main'}
                loading={loading ? 'Sending e-mail' : null}
                disabled={!isValid || isSubmitting}
                type="submit"
              >
                Submit
              </Button>
            </StyledForm>
            <MessageWrapper>
              <Message success show={error === false}>
                Reset email has been sent
              </Message>
            </MessageWrapper>
            <MessageWrapper>
              <Message error show={error !== null}>
                {error}
              </Message>
            </MessageWrapper>
          </ContentWrapper>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default ForgotPassword;
