import React, { useEffect } from 'react';
import { Wrapper, UpperContainer, LowerContainer } from './Home.styles';
import { useDispatch } from 'react-redux';
import * as authActions from '../../redux/auth/authActions';
import * as navbarActions from '../../redux/navbar/navbarActions';

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(authActions.cleanUp());
      dispatch(navbarActions.cleanUp());
    };
  }, [dispatch]);

  return (
    <Wrapper>
      <UpperContainer>x</UpperContainer>
      <LowerContainer>d</LowerContainer>
    </Wrapper>
  );
};

export default Home;
