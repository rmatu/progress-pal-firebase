import React, { useEffect, useState } from 'react';
import {
  Wrapper,
  UpperContainer,
  LowerContainer,
  HomeWrapper,
} from './Home.styles';
import Header from '../../components/Navigation/Header/Header';
import { useDispatch } from 'react-redux';
import * as authActions from '../../redux/auth/authActions';

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(authActions.cleanUp());
    };
  }, []);

  return (
    <HomeWrapper
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -50, opacity: 0 }}
    >
      <Header />
      <Wrapper>
        <UpperContainer>x</UpperContainer>
        <LowerContainer>d</LowerContainer>
      </Wrapper>
    </HomeWrapper>
  );
};

export default Home;
