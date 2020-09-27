import styled from 'styled-components/macro';
import { Form } from 'formik';

export const StyledForm = styled(Form)`
  max-width: inherit;
`;

export const MessageWrapper = styled.div`
  position: absolute;
  width: 85%;
`;

export const AddBodyPartForm = styled(Form)`
  width: 90%;
`;

export const UpperContainer = styled.div`
  background-color: ${(props) => props.theme.colors.mainContentBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
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
