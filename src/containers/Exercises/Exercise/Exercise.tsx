import React from 'react';

interface ExerciseProps {
  id: string;
  value: string;
}

const Exercise: React.FC<ExerciseProps> = ({ id, value }) => {
  return (
    <option key={id} id={id} value={value}>
      {value}
    </option>
  );
};

export default Exercise;
