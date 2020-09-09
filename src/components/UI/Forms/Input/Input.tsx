import React from 'react';
import { StyledInput, IconWrapper, Wrapper } from './Input.styles';

interface InputProps {
  field: any;
  form: any;
  svg: any;
}

const Input: React.FC<InputProps> = ({
  field,
  form: { touched, errors },
  children,
  ...props
}) => {
  return (
    <Wrapper>
      <IconWrapper>{children}</IconWrapper>
      <StyledInput {...field} {...props} />
    </Wrapper>
  );
};

export default Input;
