import styled from 'styled-components/macro';

export const BodyPartsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 2rem;
  height: 100%;
`;

export const NoContent = styled.div`
  width: 6rem;
  height: 6rem;
`;

export const SearchBodyPart = styled.div``;

export const AddNewBodyPart = styled.div`
  text-align: center;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 15rem;
  width: 15rem;
  background-color: ${({ theme }) => theme.colors.headerBackground};
  border-radius: 1rem;
  -webkit-box-shadow: 0px 3px 19px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 3px 19px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 3px 19px 0px rgba(0, 0, 0, 0.75);

  p {
    padding: 1.5rem 1rem 1.5rem 1rem;
    font-weight: bolder;
  }
`;

export const IconWrapper = styled.div`
  cursor: pointer;

  svg {
    height: 64px;
    width: 64px;
    transition: all 0.3s;

    :hover {
      color: ${({ theme }) => theme.colors.specialTextColor};
    }
  }
`;
