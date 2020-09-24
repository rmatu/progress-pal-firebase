import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  height: calc(100vh - 4.5rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const UpperContainer = styled.div`
  background-color: ${(props) => props.theme.colors.mainContentBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid red;
  height: 80%;
  margin-top: 2em;
`;

export const LowerContainer = styled.div`
  background-color: ${(props) => props.theme.colors.mainContentBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120%;
`;
