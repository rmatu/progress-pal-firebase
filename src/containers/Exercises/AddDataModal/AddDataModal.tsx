import React from 'react';

import {
  CallendarContainer,
  LeftArrow,
  RightArrow,
  Today,
  Tomorrow,
  Yesterday,
} from './AddDataModal.styles';
import { RiArrowDownSLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { AppState } from '../../../redux/rootReducer';

interface AddDataModalProps {}

const AddDataModal: React.FC<AddDataModalProps> = ({}) => {
  const { currentDate } = useSelector((state: AppState) => state.appData);

  const today = `${currentDate.day}/${currentDate.month}/${currentDate.year}`;
  const yesterday = `${currentDate.day - 1}/${currentDate.month}/${
    currentDate.year
  }`;
  const tomorrow = `${currentDate.day + 1}/${currentDate.month}/${
    currentDate.year
  }`;

  return (
    <CallendarContainer>
      <LeftArrow>
        <RiArrowDownSLine />
      </LeftArrow>
      <Yesterday>
        <h2>Yesterday</h2>
        <p>{yesterday}</p>
      </Yesterday>
      <Today>
        <h1>Today</h1>
        <p>{today}</p>
      </Today>
      <Tomorrow>
        <h2>Tomorrow</h2>
        <p>{tomorrow}</p>
      </Tomorrow>
      <RightArrow>
        <RiArrowDownSLine />
      </RightArrow>
    </CallendarContainer>
  );
};

export default AddDataModal;
