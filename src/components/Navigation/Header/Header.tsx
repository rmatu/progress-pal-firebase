import React from 'react';
import { FixedWrapper, LogoText } from './Header.styles';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <FixedWrapper>
      <LogoText>ProgressPal</LogoText>
    </FixedWrapper>
  );
};

export default Header;
