import { v4 as uuidv4 } from 'uuid';
import { AppDate } from '../redux/appData/appDataTypes';

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

export const checkIfAll = (name: string) => {
  if (name === 'All' || name === 'No exercises...') {
    return true;
  } else {
    return false;
  }
};

export const getDate = (): AppDate => {
  const today = new Date();

  const date: AppDate = {
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    day: today.getDate(),
  };

  return date;
};
