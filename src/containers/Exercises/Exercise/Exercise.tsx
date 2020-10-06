import React from 'react';
import { useDispatch } from 'react-redux';
import {
  setExerciseId,
  setExerciseName,
  openRenameModal,
} from '../../../redux/appData/appDataActions';
import { checkIfAll } from '../../../utils';

import { Option } from './Exercise.styles';
import { TiDelete, TiPencil } from 'react-icons/ti';
import { deleteExercise } from '../../../redux/firestoreDB/firestoreDBactions';

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
          <TiPencil
            onClick={(e) => {
              e.stopPropagation();
              dispatch(openRenameModal(value));
              dispatch(setExerciseId(id));
            }}
          />
          <TiDelete
            onClick={(e) => {
              e.stopPropagation();
              dispatch(deleteExercise(id, value));
            }}
          />
        </>
      )}
    </Option>
  );
};

export default Exercise;
