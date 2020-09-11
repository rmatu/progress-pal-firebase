import styled from 'styled-components';

interface Props {
  error?: boolean | null;
  success?: boolean | null;
  show?: string | null;
}

export const MessageWrapper = styled.div<Props>`
  font-weight: 700;
  font-size: 1rem;
  position: relative;
  color: ${({
    error,
    success,
    theme: { errorTextColor, successTextColor, primaryTextColor },
  }) => {
    if (error) return errorTextColor;
    if (success) return successTextColor;
    else return primaryTextColor;
  }};
  opacity: ${({ show }) => (show ? '1' : '0')};
  transform: translateY(${({ show }) => (show ? '10px' : '0px')});
  background-size: contain;
  transition: all 0.2s;
  text-align: center;
`;
