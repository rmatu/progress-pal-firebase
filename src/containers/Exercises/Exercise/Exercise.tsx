import React from 'react';
import { useDispatch } from 'react-redux';
import {
  setExerciseId,
  setExerciseName,
} from '../../../redux/appData/appDataActions';
import { checkIfAll } from '../../../utils';

import { Option } from './Exercise.styles';
import { TiDelete, TiPencil } from 'react-icons/ti';

interface ExerciseProps {
  id: string;
  value: string;
  close: () => void;
}

const Exercise: React.FC<ExerciseProps> = ({ id, value, close }) => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    if (checkIfAll(value)) {
      return;
    } else {
      dispatch(setExerciseName(value));
      dispatch(setExerciseId(id));
    }
  };

  return (
    <Option
      onClick={() => {
        close();
        handleOnClick();
      }}
    >
      {value}
      {checkIfAll(value) ? null : (
        <>
          <TiPencil onClick={() => console.log('renaming')} />
          <TiDelete onClick={() => console.log('Deleting')} />
        </>
      )}
    </Option>
  );
};

export default Exercise;
