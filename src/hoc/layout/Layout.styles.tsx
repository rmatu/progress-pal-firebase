import styled from 'styled-components/macro';

export const AuthWrapper = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.mainContentBackground};
  color: ${(props) => props.theme.colors.primaryTextColor};

  @media (max-width: 660px) {
    width: 100vw;
  }
`;

export const ContentWrapper = styled.main`
  width: 100%;
  background-color: ${(props) => props.theme.colors.mainContentBackground};
  color: ${(props) => props.theme.colors.primaryTextColor};
  display: block;

  ::-webkit-scrollbar {
    width: 8px;
    background: #0d141f;
    border-radius: 0 8px 8px 0;
  }

  ::-webkit-scrollbar-thumb {
    background: #525861;
    border-radius: 0 8px 8px 0;
  }
`;

export const HeaderWrapper = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
`;

export const ToCloseNavbar = styled.div``;
