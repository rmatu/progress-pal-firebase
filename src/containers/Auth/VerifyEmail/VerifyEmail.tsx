import React from 'react';

import {
  EmailWrapper,
  IconWrapper,
  ContentWrapper,
  TextWrapper,
} from './VerifyEmail.styles';
import { HiOutlineMail } from 'react-icons/hi';

import { connect } from 'react-redux';
import { AppState } from '../../../redux/rootReducer';
import Heading from '../../../components/UI/Headings/Heading';
import Button from '../../../components/UI/Button/Button';
import * as authActions from '../../../redux/auth/authActions';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../../../redux/actions';

interface VerifyEmailProps {
  resendEmail?: () => void;
}

const VerifyEmail: React.FC<VerifyEmailProps> = ({ resendEmail }) => {
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
        <Button
          color={'main'}
          onClick={() => {
            //@ts-ignore
            return resendEmail();
          }}
        >
          Resend email
        </Button>
      </ContentWrapper>
    </EmailWrapper>
  );
};

const mapStateToProps = (state: AppState, ownProps: VerifyEmailProps) => ({});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>) => {
  return {
    resendEmail: () => dispatch(authActions.resendEmail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail);
