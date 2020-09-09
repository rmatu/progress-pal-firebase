import styled from 'styled-components';

export const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  width: 85%;
  margin-left: 3rem;
  color: ${(props) => props.theme.primaryTextColor};
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
  background-color: #38304c;
  border-radius: 2rem;
  padding: 1rem;
  font-weight: 700;
  position: relative;
  transition: all 0.1s ease;
`;
