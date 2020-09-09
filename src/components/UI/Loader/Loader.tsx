import React from 'react';
import { StyledLoader } from './Loader.styles';

interface LoaderProps {
  isWhite: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isWhite }) => {
  return (
    <StyledLoader isWhite={isWhite}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </StyledLoader>
  );
};

export default Loader;
