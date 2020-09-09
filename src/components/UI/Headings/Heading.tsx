import React from 'react';

import { StyledHeading } from './Heading.styles';

interface HeadingProps {
  children: React.ReactNode[] | React.ReactNode;
  color: string;
  weight: string;
  size: string;
  uppercase?: string;
}

const Heading: React.FC<HeadingProps> = ({
  children,
  color,
  weight,
  size,
  uppercase = '',
}) => {
  return (
    <StyledHeading
      color={color}
      weight={weight}
      size={size}
      uppercase={uppercase}
    >
      {children}
    </StyledHeading>
  );
};

export default Heading;
