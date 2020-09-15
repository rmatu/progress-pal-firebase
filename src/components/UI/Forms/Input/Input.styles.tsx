import styled from 'styled-components';

export const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  width: 85%;
  margin-left: 3rem;
  color: ${(props) => props.theme.colors.primaryTextColor};
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;

  svg {
    height: 1.5rem;
    width: 1.5rem;
  }
`;

export const Wrapper = styled.div`
  margin-top: 2rem;
  width: 100%;
  background-color: ${(props) => props.theme.colors.inputBackground};
  border-radius: 2rem;
  padding: 1rem;
  font-weight: 700;
  position: relative;
  transition: all 0.1s ease;
`;

interface ErrorProps {
  show: string;
}

export const Error = styled.div<ErrorProps>`
  color: #ff5757;
  padding: 0rem 2rem;
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  opacity: ${({ show }) => (show ? '1' : '0')};
  transform: translateY(${({ show }) => (show ? '25px' : '10px')});
  transition: all 0.1s;
  position: absolute;
  bottom: 0;
  left: 0;
  font-weight: 700;
  font-size: 1rem;
`;
