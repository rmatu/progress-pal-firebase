import React from 'react';
import { Wrapper } from './Home.styles';
import Header from '../../components/Navigation/Header/Header';

interface MainsProps {}

const Home: React.FC<MainsProps> = ({}) => {
  return (
    <Wrapper>
      <Header />
      <div>csada</div>
    </Wrapper>
  );
};

export default Home;
