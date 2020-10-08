import styled from 'styled-components/macro';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  height: calc(100vh - 4.5rem);
  display: flex;
  width: 95%;
  margin: auto;
  flex-direction: column;
  align-items: center;
`;
