import styled from 'styled-components/macro';

interface WrappedModalProps {
  opened: boolean;
}

export const WrappedModal = styled.div<WrappedModalProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: ${({ opened }) =>
    opened ? 'translate(-50%, -50%)' : 'translate(-50%, -150%)'};
  z-index: 1500;
  width: 90%;
  max-width: 50rem;
  display: flex;
  opacity: ${({ opened }) => (opened ? '1' : '0')};
  visibility: ${({ opened }) => (opened ? 'visible' : 'hidden')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0.5rem 3.5rem var(--shadow);
  border-radius: 1rem;
  padding: 4rem 3rem;
  background: #21283e;
  transition: all 0.1s;
  color: ${({ theme }) => theme.colors.primaryTextColor};
`;
