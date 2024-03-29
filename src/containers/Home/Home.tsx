import React, { useEffect } from 'react';
import { Wrapper, UpperContainer, LowerContainer } from './Home.styles';
import { useDispatch } from 'react-redux';
import * as authActions from '../../redux/auth/authActions';
import * as navbarActions from '../../redux/navbar/navbarActions';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(authActions.cleanUp());
      dispatch(navbarActions.cleanUp());
    };
  }, [dispatch]);

  return (
    <Wrapper  initial={{ x: -50, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 50, opacity: 0 }}>
      <UpperContainer>
        <div>Here will be the callendar</div>
        <div>Here will be the circles xd</div>
      </UpperContainer>
      <LowerContainer>The graph for all the exercises</LowerContainer>
    </Wrapper>
  );
};

export default Home;
