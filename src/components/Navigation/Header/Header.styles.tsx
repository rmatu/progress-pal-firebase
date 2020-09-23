import styled from 'styled-components/macro';

export const FixedWrapper = styled.div`
  background-color: #21283e;
  padding: 0rem 2rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoText = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  z-index: 999;
`;

export const HamburgerWrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.1s;
  user-select: none;
  svg {
    height: 2rem;
    width: 2rem;
  }

  &:hover {
    color: ${(props) => props.theme.colors.specialTextColor};
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
`;
