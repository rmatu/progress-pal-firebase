import React from 'react';

import { StyledButton, Wrapper } from './Button.styles';

interface ButtonProps {
  children: React.ReactNode[] | React.ReactNode;
  color: string;
  loading: boolean;
  disabled: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  color,
  loading,
  disabled = false,
  ...rest
}) => {
  return (
    <Wrapper>
      <StyledButton
        disabled={disabled}
        loading={loading}
        color={color}
        {...rest}
      >
        {loading ? loading : children}
      </StyledButton>
    </Wrapper>
  );
};

export default Button;
