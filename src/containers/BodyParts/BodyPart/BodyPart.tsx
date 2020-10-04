import React from 'react';
import { useDispatch } from 'react-redux';
import {
  setBodyTypeName,
  setBodyTypeId,
} from '../../../redux/appData/appDataActions';

import { Option } from './BodyPart.styles';

interface BodyPartProps {
  id: string;
  value: string;
  close: () => void;
}

const BodyPart: React.FC<BodyPartProps> = ({ id, value, close }) => {
  const dispatch = useDispatch();

  return (
    <Option
      onClick={() => {
        close();
        dispatch(setBodyTypeName(value));
        dispatch(setBodyTypeId(id));
      }}
    >
      {value}
    </Option>
  );
};

export default BodyPart;
