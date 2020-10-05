import styled from 'styled-components/macro';

export const Option = styled.div`
  padding: 12px 24px;
  cursor: pointer;
  position: relative;

  :hover {
    background: #414b57;
  }

  svg {
    z-index: 100000;
    position: absolute;
    color: ${({ theme }) => theme.colors.errorTextColor};
    right: 10px;
    height: 19px;
    width: 19px;

    :first-child {
      right: 35px;
      color: white;
    }

    :hover {
      color: red;
    }
  }
`;
