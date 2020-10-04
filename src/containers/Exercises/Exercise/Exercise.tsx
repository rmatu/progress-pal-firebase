import React from 'react';
import { useDispatch } from 'react-redux';
import {
  setExerciseId,
  setExerciseName,
} from '../../../redux/appData/appDataActions';

import { Option } from './Exercise.styles';

interface ExerciseProps {
  id: string;
  value: string;
  close: () => void;
}

const Exercise: React.FC<ExerciseProps> = ({ id, value, close }) => {
  const dispatch = useDispatch();

  return (
    <Option
      onClick={() => {
        close();
        dispatch(setExerciseName(value));
        dispatch(setExerciseId(id));
      }}
    >
      {value}
    </Option>
  );
};

export default Exercise;
