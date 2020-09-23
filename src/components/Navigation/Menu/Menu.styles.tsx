import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

export interface UlProps {
  open: boolean;
}

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
    height: 40vh;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;

export const Li = styled(NavLink)`
  padding: 16px 10px;
  cursor: pointer;
  transition: all 0.1s;
  color: white;
  font-size: 1.2rem;
  margin-right: 2rem;

  border-bottom: none;

  &:hover {
    color: ${({ theme }) => theme.colors.specialTextColor};
  }

  @media (max-width: 764px) {
    border: none !important;

    :last-child {
      border-top: 1px solid white !important;
      margin-top: 2rem;
    }
    :first-child {
      margin-top: 5rem;
    }
    padding: 0 2em;
    padding-top: 18px;
    padding-bottom: 18px;

    border-bottom: none;
  }
`;
