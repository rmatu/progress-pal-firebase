import React, { useEffect, useState } from 'react';
import { Wrapper, UpperContainer, LowerContainer } from './Home.styles';
import Header from '../../components/Navigation/Header/Header';
import { useDispatch } from 'react-redux';
import * as authActions from '../../redux/auth/authActions';

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(authActions.signOut());
  };

  useEffect(() => {
    return () => {
      dispatch(authActions.cleanUp());
    };
  }, []);

  return (
    <>
      <Header />
      <Wrapper>
        <UpperContainer>x</UpperContainer>
        <LowerContainer>d</LowerContainer>
      </Wrapper>
    </>
  );
};

export default Home;
