import React from 'react';

import { StyledButton, Wrapper } from './Button.styles';

interface ButtonProps {
  children: React.ReactNode[] | React.ReactNode;
  color: string;
  disabled: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  color,
  disabled,
  ...rest
}) => {
  return (
    <Wrapper>
      <StyledButton disabled={disabled} color={color} {...rest}>
        {children}
      </StyledButton>
    </Wrapper>
  );
};

export default Button;
