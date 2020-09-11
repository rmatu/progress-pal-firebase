import React from 'react';

import { StyledButton, Wrapper } from './Button.styles';

interface ButtonProps {
  children: React.ReactNode[] | React.ReactNode;
  color: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  loading?: string | null;
}

const Button: React.FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, color, disabled, loading, ...rest }) => {
  return (
    <Wrapper>
      <StyledButton disabled={disabled} color={color} {...rest}>
        {loading ? loading : children}
      </StyledButton>
    </Wrapper>
  );
};

export default Button;
