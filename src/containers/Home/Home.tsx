import React, { useEffect } from 'react';
import { Wrapper } from './Home.styles';
import Header from '../../components/Navigation/Header/Header';
import { useDispatch } from 'react-redux';
import * as authActions from '../../redux/auth/authActions';

interface MainsProps {}

const Home: React.FC<MainsProps> = ({}) => {
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
    <Wrapper>
      <Header />
      <button onClick={() => signOut()}>LogOut hehe xd</button>
    </Wrapper>
  );
};

export default Home;
