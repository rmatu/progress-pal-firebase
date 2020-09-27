import styled from 'styled-components/macro';
import Heading from '../../components/UI/Headings/Heading';

export const Wrapper = styled.div`
  height: calc(100vh - 4.5rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
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
    height: 19px;
    width: 19px;
    transition: all 0.3s;

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
  background-color: ${(props) => props.theme.colors.mainContentBackground};
  display: flex;
  flex-direction: column;
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
