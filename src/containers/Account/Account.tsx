import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { cleanUp } from '../../redux/navbar/navbarActions';

interface AccountProps {}

const Account: React.FC<AccountProps> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(cleanUp());
    };
  }, [dispatch]);

  return (
    <>
      <div>This will be the Account Wrapper</div>
    </>
  );
};

export default Account;
