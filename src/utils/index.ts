import { v4 as uuidv4 } from 'uuid';

export const populateBodyParts = () => {
  return [
    {
      id: uuidv4(),
      name: 'Abs',
      exercises: [],
    },
    {
      id: uuidv4(),
      name: 'Back',
      exercises: [],
    },
    {
      id: uuidv4(),
      name: 'Biceps',
      exercises: [],
    },
    {
      id: uuidv4(),
      name: 'Calves',
      exercises: [],
    },
    {
      id: uuidv4(),
      name: 'Chest',
      exercises: [],
    },
    {
      id: uuidv4(),
      name: 'Glutes',
      exercises: [],
    },
    {
      id: uuidv4(),
      name: 'Hamstrings',
      exercises: [],
    },
    {
      id: uuidv4(),
      name: 'Quadriceps',
      exercises: [],
    },

    {
      id: uuidv4(),
      name: 'Triceps',
      exercises: [],
    },
  ];
};
