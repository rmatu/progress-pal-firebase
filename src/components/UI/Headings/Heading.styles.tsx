import styled from 'styled-components/macro';

interface Props {
  color: string;
  weight: string;
  uppercase: string;
  size: string;
}

export const StyledHeading = styled.div<Props>`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
  text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'none')};
  font-size: ${(props) => props.size};
  margin-top: 0;
`;
