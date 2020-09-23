import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { cleanUp } from '../../redux/navbar/navbarActions';

interface BodyPartsProps {}

const BodyParts: React.FC<BodyPartsProps> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(cleanUp());
    };
  }, [dispatch]);

  return (
    <>
      <div style={{ marginTop: '5rem' }}>
        This will be the BodyParts Wrapper
      </div>
    </>
  );
};

export default BodyParts;
