import styled from 'styled-components/macro';

interface Props {
  color: string;
  contain?: string;
  disabled?: boolean;
}

interface WrapperProps {
  marginTop?: string;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  justify-content: center;
  margin-top: 4rem;

  @media (max-width: 660px) {
    margin-top: ${({ marginTop }) => (marginTop ? marginTop : '4rem')};
  }
`;

export const StyledButton = styled.button<Props>`
  user-select: none;
  outline: none;
  padding: 1.2rem 5rem;
  border-radius: 2rem;
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.mainContentBackground};
  font-weight: 700;
  -webkit-box-shadow: 0px 3px 19px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 3px 19px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 3px 19px 0px rgba(0, 0, 0, 0.75);
  border: none;
  cursor: pointer;
  width: ${({ contain }) => contain};

  background-color: ${(props) => {
    if (props.color === 'main') {
      return props.theme.colors.specialTextColor;
    } else if (props.color === 'error') {
      return props.theme.colors.errorTextColor;
    }
  }};

  transition: all 0.2s;
  &:hover {
    transform: translateY(-3px);
  }
  &:active {
    transform: translateY(2px);
  }
  &:disabled {
    cursor: not-allowed;
    background-color: #333;
  }
`;
