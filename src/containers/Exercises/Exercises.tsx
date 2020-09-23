import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as navbarActions from '../../redux/navbar/navbarActions';

interface ExercisesProps {}

const Exercises: React.FC<ExercisesProps> = ({}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(navbarActions.cleanUp());
    };
  }, [dispatch]);

  return <p>This will be the Exercises Wrapper</p>;
};

export default Exercises;
