import React from 'react';
import { addDays, subDays } from 'date-fns';

import {
  CallendarContainer,
  LeftArrow,
  RightArrow,
  Today,
  Tomorrow,
  Yesterday,
} from './AddDataModal.styles';
import { RiArrowDownSLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../redux/rootReducer';
import {
  setNextDay,
  setPreviousDay,
} from '../../../redux/appData/appDataActions';

interface AddDataModalProps {}

const AddDataModal: React.FC<AddDataModalProps> = () => {
  const { day, month, year } = useSelector(
    (state: AppState) => state.appData.currentDate
  );
  const dispatch = useDispatch();

  const today = `${day}/${month}/${year}`;

  const tmpYesterday = subDays(new Date(year, month, day), 1);
  const yesterday = `${tmpYesterday.getDate()}/${tmpYesterday.getMonth()}/${tmpYesterday.getFullYear()}`;

  const tmpTomorrow = addDays(new Date(year, month, day), 1);
  const tomorrow = `${tmpTomorrow.getDate()}/${tmpTomorrow.getMonth()}/${tmpTomorrow.getFullYear()}`;

  return (
    <CallendarContainer>
      <LeftArrow>
        <RiArrowDownSLine onClick={() => dispatch(setPreviousDay())} />
      </LeftArrow>
      <Yesterday onClick={() => dispatch(setPreviousDay())}>
        <h2>Yesterday</h2>
        <p>{yesterday}</p>
      </Yesterday>
      <Today>
        <h1>Today</h1>
        <p>{today}</p>
      </Today>
      <Tomorrow onClick={() => dispatch(setNextDay())}>
        <h2>Tomorrow</h2>
        <p>{tomorrow}</p>
      </Tomorrow>
      <RightArrow>
        <RiArrowDownSLine onClick={() => dispatch(setNextDay())} />
      </RightArrow>
    </CallendarContainer>
  );
};

export default AddDataModal;
