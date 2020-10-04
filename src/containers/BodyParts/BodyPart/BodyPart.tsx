import React from 'react';

interface BodyPartProps {
  id: string;
  value: string;
}

const BodyPart: React.FC<BodyPartProps> = ({ id, value }) => {
  return (
    <option key={id} id={id} value={value}>
      {value}
    </option>
  );
};

export default BodyPart;
