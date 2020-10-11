import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  margin: auto;
  width: 95%;
`;

export const NoContent = styled.div`
  width: 6rem;
  height: 6rem;
`;

export const SearchBodyPart = styled.div`
  display: flex;
  width: 400px;
  flex-direction: column;
`;

export const AddNewBodyPart = styled.div`
  text-align: center;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 12rem;
  width: 12rem;
  background-color: ${({ theme }) => theme.colors.headerBackground};
  border-radius: 1rem;
  -webkit-box-shadow: 0px 3px 19px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 3px 19px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 3px 19px 0px rgba(0, 0, 0, 0.75);

  p {
    padding: 1.5rem 1.5rem 1rem 1.5rem;
    font-weight: bolder;
  }
`;

export const IconWrapper = styled.div`
  cursor: pointer;
  height: 19px;

  svg {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    height: 19px;
    width: 19px;
    transition: all 0.3s;

    :hover {
      color: ${({ theme }) => theme.colors.specialTextColor};
    }
  }
`;

export const BackIcon = styled(NavLink)`
  cursor: pointer;
  height: 19px;
  transform: rotate(180deg);
  color: #fff;

  svg {
    margin-left: 0.5rem;
    height: 19px;
    width: 19px;
    transition: all 0.3s;

    :hover {
      color: ${({ theme }) => theme.colors.specialTextColor};
    }
  }
`;

export const LinkIconWrapper = styled(NavLink)`
  cursor: pointer;
  height: 19px;

  svg {
    margin-left: 0.5rem;
    height: 19px;
    width: 19px;
    transition: all 0.3s;
    color: #fff;

    :hover {
      color: ${({ theme }) => theme.colors.specialTextColor};
    }
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  @media (max-width: 660px) {
    flex-direction: column;
  }
`;

export const FieldWrapper = styled.div`
  width: 50%;
`;

export const Split = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UpperContainer = styled.div`
  display: flex;
  height: 30rem;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayBackground};
  margin-top: 2rem;
  overflow: hidden;
`;

export const LowerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FirstSelected = styled.div<{ isActive: boolean }>`
  padding: 12px 24px;
  cursor: pointer;
  background: #2f3640;
  border-radius: 8px;
  margin-bottom: 8px;
  color: #f5f6fa;
  position: relative;
  text-align: center;

  order: 0;

  svg {
    position: absolute;
    height: 100%;
    width: 32px;
    right: 5px;
    top: 0px;

    transform: ${({ isActive }) =>
      isActive ? `rotateX(180deg)` : `rorateX(0deg)`};

    transition: all 0.4s;
  }
`;

export const AddDataButton = styled.button`
  padding: 12px 24px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.specialTextColor};
  border-radius: 8px;
  border: 0;
  color: ${({ theme }) => theme.colors.mainContentBackground};
  font-weight: bolder;
  margin-top: 1rem;
  text-align: center;
`;

export const OptionsContainer = styled.div<{ isActive: boolean }>`
  z-index: 10;
  background: #2f3640;
  color: #f5f6fa;
  max-height: 0;
  width: 100%;
  opacity: ${({ isActive }) => (isActive ? '1' : '0')};
  transition: all 0.4s;
  border-radius: 8px;
  overflow-y: ${({ isActive }) => (isActive ? 'scroll' : 'hidden')};
  max-height: ${({ isActive }) => (isActive ? '220px' : '0')};

  order: 1;

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
