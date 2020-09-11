import React from 'react';

import { StyledButton, Wrapper } from './Button.styles';

interface ButtonProps {
  children: React.ReactNode[] | React.ReactNode;
  color: string;
  disabled: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, color, disabled, ...rest }) => {
  return (
    <Wrapper>
      <StyledButton disabled={disabled} color={color} {...rest}>
        {children}
      </StyledButton>
    </Wrapper>
  );
};

export default Button;
