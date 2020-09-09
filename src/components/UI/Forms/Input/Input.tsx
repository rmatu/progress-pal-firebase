import React from 'react';
import { StyledInput, IconWrapper, Wrapper, Error } from './Input.styles';

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
      <Error show={errors[field.name] && touched[field.name]}>
        {errors[field.name]}
      </Error>
    </Wrapper>
  );
};

export default Input;
