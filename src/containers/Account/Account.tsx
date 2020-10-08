import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { cleanUp } from '../../redux/navbar/navbarActions';
import { Wrapper } from './Account.styles';

interface AccountProps {}

const Account: React.FC<AccountProps> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(cleanUp());
    };
  }, [dispatch]);

  return (
    <Wrapper>
      <div>This will be the Account Wrapper</div>
    </Wrapper>
  );
};

export default Account;
