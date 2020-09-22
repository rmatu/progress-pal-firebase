import styled from 'styled-components/macro';

interface Props {
  color: string;
  disabled?: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;

export const StyledButton = styled.button<Props>`
  user-select: none;
  outline: none;
  padding: 1.2rem 5rem;
  border-radius: 2rem;
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.mainContentBackground};
  font-weight: 700;
  box-shadow: 0rem 0.5rem 3.5rem ${(props) => props.theme.colors.shadow};
  border: none;
  cursor: pointer;

  background-color: ${(props) => {
    if (props.color === 'main') {
      return props.theme.colors.specialTextColor;
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
