import React from 'react';
import { useDispatch } from 'react-redux';
import {
  setBodyTypeName,
  setBodyTypeId,
} from '../../../redux/appData/appDataActions';
import { checkIfAll } from '../../../utils';

import { Option } from './BodyPart.styles';
import { TiDelete, TiPencil } from 'react-icons/ti';

interface BodyPartProps {
  id: string;
  value: string;
  close: () => void;
}

const BodyPart: React.FC<BodyPartProps> = ({ id, value, close }) => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    if (checkIfAll(value)) {
      return;
    } else {
      dispatch(setBodyTypeName(value));
      dispatch(setBodyTypeId(id));
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
      <TiPencil onClick={() => console.log('renaming')} />
      <TiDelete onClick={() => console.log('Deleting')} />
    </Option>
  );
};

export default BodyPart;
