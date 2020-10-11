import styled from 'styled-components/macro';

export const CallendarContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  h1 {
    color: ${({ theme }) => theme.colors.primaryTextColor};
    text-align: center;
    user-select: none;
  }

  h2 {
    color: ${({ theme }) => theme.colors.secondaryTextColor};
    transition: all 0.2s;
    text-align: center;
    user-select: none;

    :hover {
      color: ${({ theme }) => theme.colors.primaryTextColor};
    }
  }

  p {
    text-align: center;
    color: ${({ theme }) => theme.colors.secondaryTextColor};
    user-select: none;
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 1.4rem;
    }

    h2 {
      font-size: 1rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
`;

export const Today = styled.div`
  padding: 1rem 2rem;

  p {
    color: ${({ theme }) => theme.colors.primaryTextColor};
  }

  @media (max-width: 500px) {
    padding: 1rem;
    p {
      font-size: 1rem;
    }
  }
`;

export const Tomorrow = styled.div`
  padding: 1rem 2rem;
  cursor: pointer;
  @media (max-width: 500px) {
    padding: 1rem;
  }
`;

export const Yesterday = styled.div`
  padding: 1rem 2rem;
  cursor: pointer;
  @media (max-width: 500px) {
    padding: 1rem;
  }
`;

export const LeftArrow = styled.div`
  transform: rotate(90deg);

  svg {
    height: 32px;
    width: 32px;
    cursor: pointer;
  }
`;

export const RightArrow = styled.div`
  transform: rotate(270deg);

  svg {
    height: 32px;
    width: 32px;
    cursor: pointer;
  }
`;

export const DataContainer = styled.div`
  margin-top: 2rem;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  height: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchBodyPart = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;

  @media (max-width: 375px) {
    width: 250px;
  }
`;
