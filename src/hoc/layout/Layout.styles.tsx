import styled from 'styled-components';

export const MainWrapper = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.mainContentBackground};
  color: ${(props) => props.theme.colors.primaryTextColor};
`;
