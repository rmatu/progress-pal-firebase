import React from 'react';

import { StyledButton, Wrapper } from './Button.styles';

interface ButtonProps {
  children: React.ReactNode[] | React.ReactNode;
  color: string;
  contain?: string;
  marginTop?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  loading?: string | null;
}

const Button: React.FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, color, disabled, contain, marginTop, loading, ...rest }) => {
  return (
    <Wrapper marginTop={marginTop}>
      <StyledButton
        disabled={disabled}
        color={color}
        contain={contain}
        {...rest}
      >
        {loading ? loading : children}
      </StyledButton>
    </Wrapper>
  );
};

export default Button;
