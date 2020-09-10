import styled from 'styled-components';

export const FormWrapper = styled.div`
  min-width: 30rem;
  min-height: 50rem;
  background-color: #201a30;
  border-radius: 1rem;
  -webkit-box-shadow: 10px 3px 19px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 3px 19px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 3px 19px 0px rgba(0, 0, 0, 0.75);
  position: relative;
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
  margin: 3rem 2rem 4rem 2rem;
  p {
    color: ${(props) => props.theme.secondaryTextColor};
  }
`;

export const BottomTextWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 2rem;
  width: 100%;
  p {
    color: ${(props) => props.theme.secondaryTextColor};
  }
`;

export const ArrowWrapper = styled.div`
  position: absolute;
  top: 3rem;
  left: 3rem;
  cursor: pointer;
  transition: all 0.15s;
  color: ${(props) => props.theme.secondaryTextColor};
  &:hover {
    color: ${(props) => props.theme.specialTextColor};
  }
  &:active {
    transform: translateY(2px);
  }
  svg {
    height: 2.5rem;
    width: 2.5rem;
  }
`;

export const SpanWrapper = styled.div<{ bold?: any; center?: any }>`
  color: ${(props) => props.theme.specialTextColor};
  font-weight: ${(props) => (props.bold ? 700 : 500)};
  margin-left: 0.5rem;
  transition: all 0.15s;
  cursor: pointer;
  &:active {
    transform: translateY(2px);
  }
  text-decoration: none;
`;

export const ForgotPasswordWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.4rem;
`;