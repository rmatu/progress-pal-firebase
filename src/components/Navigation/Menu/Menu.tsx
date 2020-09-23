import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../redux/rootReducer';
import { signOut } from '../../../redux/auth/authActions';
import { Ul, Li } from './Menu.styles';
import * as ROUTES from '../../../constants/routes';

interface MenuProps {}

const Menu: React.FC<MenuProps> = () => {
  const open = useSelector((state: AppState) => state.navbar.open);
  const dispatch = useDispatch();

  return (
    <Ul open={open}>
      <Li to={ROUTES.HOME} activeStyle={{ borderBottom: '1px solid white' }}>
        Home
      </Li>
      <Li
        to={ROUTES.EXERCISES}
        activeStyle={{ borderBottom: '1px solid white' }}
      >
        Exercises
      </Li>
      <Li to={ROUTES.ACCOUNT} activeStyle={{ borderBottom: '1px solid white' }}>
        Account
      </Li>
      <Li to={ROUTES.LOGIN} onClick={() => dispatch(signOut())}>
        Logout
      </Li>
    </Ul>
  );
};

export default Menu;
