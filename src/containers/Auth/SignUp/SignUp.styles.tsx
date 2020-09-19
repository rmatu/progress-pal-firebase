import styled from 'styled-components/macro';

export const FormWrapper = styled.div`
  max-width: 30rem;
  width: 100%;
  min-height: 50rem;
  background-color: ${(props) => props.theme.colors.modalBackground};
  border-radius: 1rem;
  -webkit-box-shadow: 10px 3px 19px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 3px 19px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 3px 19px 0px rgba(0, 0, 0, 0.75);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 580px) {
    max-width: 40rem;
    height: 100vh;
    width: 100vw;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 100%;
  height: 5rem;
  width: 5rem;
  margin: 3rem auto 1rem auto;

  svg {
    height: 4rem;
    width: 4rem;
  }
`;

export const TextWrapper = styled.div`
  margin-left: 1.2rem;
`;

export const ContentWrapper = styled.div`
  margin: 0 2rem;
  p {
    color: ${(props) => props.theme.colors.secondaryTextColor};
  }
`;

export const BottomTextWrapper = styled.div`
  margin-top: 4rem;
  margin-bottom: 1rem;
  display: flex;
  width: 100%;
  justify-content: center;
  p {
    color: ${(props) => props.theme.colors.secondaryTextColor};
  }
`;

export const ArrowWrapper = styled.div`
  position: absolute;
  top: 3rem;
  left: 3rem;
  cursor: pointer;
  transition: all 0.15s;
  color: ${(props) => props.theme.colors.secondaryTextColor};
  &:hover {
    color: ${(props) => props.theme.colors.specialTextColor};
  }
  &:active {
    transform: translateY(2px);
  }
  svg {
    height: 2.5rem;
    width: 2.5rem;
  }
`;

export const SpanWrapper = styled.div`
  text-decoration: none;
  color: ${(props) => props.theme.colors.specialTextColor};
  font-weight: 700;
  margin-left: 0.5rem;
  transition: all 0.15s;
  cursor: pointer;
  &:active {
    transform: translateY(2px);
  }
`;
