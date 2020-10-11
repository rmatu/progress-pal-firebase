import React, { useState } from 'react';
import { addDays, subDays } from 'date-fns';

import {
  CallendarContainer,
  SearchBodyPart,
  DataContainer,
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
import Heading from '../../../components/UI/Headings/Heading';
import { FirstSelected, OptionsContainer } from '../Exercises.styles';
import { getDayName } from '../../../utils';

interface AddDataModalProps {
  content: React.ReactNode | React.ReactNode[];
}

const AddDataModal: React.FC<AddDataModalProps> = ({ content }) => {
  const [isActiveDropdown, setIsActiveDropdown] = useState<boolean>(false);
  const [isActiveSelected, setIsActiveSelected] = useState<boolean>(false);
  const { day, month, year } = useSelector(
    (state: AppState) => state.appData.currentDate
  );

  const dispatch = useDispatch();

  const today = `${day}/${month + 1}/${year}`;

  const todayName = getDayName(new Date(year, month, day));

  const tmpYesterday = subDays(new Date(year, month, day), 1);
  const yesterday = `${tmpYesterday.getDate()}/${
    tmpYesterday.getMonth() + 1
  }/${tmpYesterday.getFullYear()}`;
  const yesterdayName = getDayName(new Date(tmpYesterday));

  const tmpTomorrow = addDays(new Date(year, month, day), 1);
  const tomorrow = `${tmpTomorrow.getDate()}/${
    tmpTomorrow.getMonth() + 1
  }/${tmpTomorrow.getFullYear()}`;
  const tomorrowName = getDayName(new Date(tmpTomorrow));

  return (
    <>
      <CallendarContainer>
        <LeftArrow>
          <RiArrowDownSLine onClick={() => dispatch(setPreviousDay())} />
        </LeftArrow>
        <Yesterday onClick={() => dispatch(setPreviousDay())}>
          <h2>{yesterdayName}</h2>
          <p>{yesterday}</p>
        </Yesterday>
        <Today>
          <h1>{todayName}</h1>
          <p>{today}</p>
        </Today>
        <Tomorrow onClick={() => dispatch(setNextDay())}>
          <h2>{tomorrowName}</h2>
          <p>{tomorrow}</p>
        </Tomorrow>
        <RightArrow>
          <RiArrowDownSLine onClick={() => dispatch(setNextDay())} />
        </RightArrow>
      </CallendarContainer>

      <DataContainer>
        <Heading color={'white'} weight={'700'} size={'1.6rem'}>
          Selected Body Part
        </Heading>

        <SearchBodyPart>
          <OptionsContainer isActive={isActiveDropdown}>
            {content}
          </OptionsContainer>
          <FirstSelected
            isActive={isActiveSelected}
            onClick={() => {
              setIsActiveDropdown(!isActiveDropdown);
              setIsActiveSelected(!isActiveSelected);
            }}
          >
            Select Exercise
            <RiArrowDownSLine />
          </FirstSelected>
        </SearchBodyPart>
      </DataContainer>
    </>
  );
};

export default AddDataModal;
