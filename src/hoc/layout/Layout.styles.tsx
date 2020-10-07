import styled from 'styled-components/macro';

export const AuthWrapper = styled.main`
  width: 100%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.mainContentBackground};
  color: ${(props) => props.theme.colors.primaryTextColor};
`;

export const ContentWrapper = styled.main`
  width: 100%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  background-color: ${(props) => props.theme.colors.mainContentBackground};
  color: ${(props) => props.theme.colors.primaryTextColor};
  display: block;
  overflow: hidden;
`;

export const ToCloseNavbar = styled.div``;
