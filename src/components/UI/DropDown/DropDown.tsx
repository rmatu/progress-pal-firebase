import React from 'react';
import { Option } from './DropDown.styles';

interface DropDownProps {
  children: React.ReactNode[] | React.ReactNode;
}

const DropDown: React.FC<DropDownProps> = ({ children }) => {
  return (
    <>
      {children}
      <Option>Select Video Category</Option>
    </>
  );
};

export default DropDown;
