import styled, { css } from 'styled-components';

interface Props {
  color: string;
  weight: string;
  uppercase: string;
  size: string;
}

// const baseStyle = css<Props>`
//   color: ${(props) => props.color};
//   font-weight: ${(props) => props.weight};
//   text-transform: ${(props) => props.uppercase};
//   margin-top: 0;
// `;

// export const Heading1 = styled.h1`
//   font-size: 2rem;
//   ${baseStyle};
// `;
// export const Heading2 = styled.h2`
//   font-size: 1.8rem;
//   ${baseStyle};
// `;
// export const Heading3 = styled.h3`
//   font-size: 1.5rem;
//   ${baseStyle};
// `;
// const Heading4 = styled.h4`
//   font-size: 1.3rem;
//   ${baseStyle};
// `;

export const StyledHeading = styled.div<Props>`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
  text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'none')};
  font-size: ${(props) => props.size};
  margin-top: 0;
`;
