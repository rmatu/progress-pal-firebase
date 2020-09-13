import styled from 'styled-components';

export const EmailWrapper = styled.div`
  width: 30rem;
  min-height: 26rem;
  background-color: ${(props) => props.theme.modalBackground};
  border-radius: 1rem;
  -webkit-box-shadow: 10px 3px 19px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 3px 19px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 3px 19px 0px rgba(0, 0, 0, 0.75);
  position: relative;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 26rem;

  span {
    color: ${(props) => props.theme.specialTextColor};
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 100%;
  height: 5rem;
  width: 5rem;

  svg {
    height: 4rem;
    width: 4rem;
  }
`;

export const TextWrapper = styled.div``;

export const SecondaryTextWrapper = styled.p`
  margin-top: 0.4rem;
  width: 20rem;
  display: flex;
  justify-content: center;
  text-align: center;
  color: ${(props) => props.theme.secondaryTextColor};
`;

export const MessageWrapper = styled.div`
  position: absolute;
  top: 21.5rem;
  left: auto;
`;
