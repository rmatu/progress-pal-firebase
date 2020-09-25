import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

export interface UlProps {
  open: boolean;
}

export const Li = styled(NavLink)`
  padding: 16px 10px;
  cursor: pointer;
  transition: all 0.1s;
  color: white;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: none;

  :not(:last-child) {
    margin-right: 2rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.specialTextColor};
  }

  svg {
    margin-right: 0.6rem;
  }

  @media (max-width: 764px) {
    border: none !important;
    margin-right: 0;
    width: 16rem;
    padding: 0 2em;
    padding-top: 18px;
    padding-bottom: 18px;
    border-bottom: none;

    :not(:last-child) {
      margin-right: 0;
    }

    :last-child {
      border-top: 1px solid white !important;
      margin-top: 2em;
    }

    :first-child {
      margin-top: 5rem;
    }

    svg {
      height: 100%;
      display: inline-block;
      margin-right: 0.4rem;
    }
  }
`;

export const Ul = styled.ul<UlProps>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  @media (max-width: 764px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column nowrap;
    background-color: #21283e;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateY(0%)' : 'translateY(-100%)')};
    top: 0;
    right: 0;
    height: 45vh;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    -webkit-box-shadow: 0px 3px 19px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 3px 19px 0px rgba(0, 0, 0, 0.75);
    box-shadow: ${({ open }) =>
      open ? '0px 3px 19px 0px rgba(0, 0, 0, 0.75)' : 'none'};
    z-index: 998;
    ${Li} {
      transition: opacity 0.5s ease-in-out;
      opacity: ${({ open }) => (open ? '1' : '0')};
    }
  }
`;
