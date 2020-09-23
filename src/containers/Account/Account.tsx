import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as navbarActions from '../../redux/navbar/navbarActions';

interface AccountProps {}

const Account: React.FC<AccountProps> = ({}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(navbarActions.cleanUp());
    };
  }, [dispatch]);

  return <p>This will be the Account Component</p>;
};

export default Account;
