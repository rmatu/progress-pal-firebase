import React from 'react';

import {
  EmailWrapper,
  IconWrapper,
  ContentWrapper,
  TextWrapper,
  SecondaryTextWrapper,
  MessageWrapper,
} from './VerifyEmail.styles';
import { HiOutlineMail } from 'react-icons/hi';

import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../redux/rootReducer';
import Heading from '../../../components/UI/Headings/Heading';
import Button from '../../../components/UI/Button/Button';
import * as authActions from '../../../redux/auth/authActions';
import { AuthState } from '../../../redux/auth/authTypes';
import Message from '../../../components/UI/Message/Message';

interface VerifyEmailProps {}

const VerifyEmail: React.FC<VerifyEmailProps> = () => {
  const dispatch = useDispatch();
  const {
    verifyEmail: { error },
  }: AuthState = useSelector((state: AppState) => state.auth);
  const email = useSelector((state: AppState) => state.firebase.auth.email);

  const resendEmail = () => {
    dispatch(authActions.resendEmail());
  };

  return (
    <EmailWrapper>
      <ContentWrapper>
        <IconWrapper>
          <HiOutlineMail />
        </IconWrapper>
        <TextWrapper>
          <Heading color={'white'} weight={'500'} size={'1.3rem'}>
            Verify your email address
          </Heading>
        </TextWrapper>
        <SecondaryTextWrapper>
          We've sent an email message to the specified email: {email}
        </SecondaryTextWrapper>
        <Button color={'main'} onClick={() => resendEmail()}>
          Resend email
        </Button>
        <MessageWrapper>
          <Message success show={error === false}>
            Email has been resent
          </Message>
        </MessageWrapper>
      </ContentWrapper>
    </EmailWrapper>
  );
};

export default VerifyEmail;
