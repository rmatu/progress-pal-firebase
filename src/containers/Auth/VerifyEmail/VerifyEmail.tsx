import React, { useEffect } from 'react';

import {
  EmailWrapper,
  IconWrapper,
  ContentWrapper,
  TextWrapper,
} from './VerifyEmail.styles';
import { HiOutlineMail } from 'react-icons/hi';

import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../redux/rootReducer';
import Heading from '../../../components/UI/Headings/Heading';
import Button from '../../../components/UI/Button/Button';
import * as authActions from '../../../redux/auth/authActions';
import { AuthState } from '../../../redux/auth/authTypes';

interface VerifyEmailProps {}

const VerifyEmail: React.FC<VerifyEmailProps> = () => {
  const dispatch = useDispatch();
  const { loading }: AuthState = useSelector((state: AppState) => state.auth);

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
        <Button color={'main'} onClick={() => resendEmail()}>
          Resend email
        </Button>
      </ContentWrapper>
    </EmailWrapper>
  );
};

export default VerifyEmail;
