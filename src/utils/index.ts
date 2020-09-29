import { v4 as uuidv4 } from 'uuid';

export const populateBodyParts = () => {
  return [
    {
      id: uuidv4(),
      name: 'Abs',
    },
    {
      id: uuidv4(),
      name: 'Back',
    },
    {
      id: uuidv4(),
      name: 'Biceps',
    },
    {
      id: uuidv4(),
      name: 'Calves',
    },
    {
      id: uuidv4(),
      name: 'Chest',
    },
    {
      id: uuidv4(),
      name: 'Glutes',
    },
    {
      id: uuidv4(),
      name: 'Hamstrings',
    },
    {
      id: uuidv4(),
      name: 'Quadriceps',
    },

    {
      id: uuidv4(),
      name: 'Triceps',
    },
  ];
};
