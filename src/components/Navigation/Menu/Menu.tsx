import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../redux/rootReducer';
import { signOut } from '../../../redux/auth/authActions';
import { toggleNavbar } from '../../../redux/navbar/navbarActions';
import * as ROUTES from '../../../constants/routes';

import { Ul, Li } from './Menu.styles';
import { CgLogOut } from 'react-icons/cg';

interface MenuProps {}

const Menu: React.FC<MenuProps> = () => {
  const open = useSelector((state: AppState) => state.navbar.open);
  const dispatch = useDispatch();

  return (
    <Ul open={open}>
      <Li
        onClick={() => dispatch(toggleNavbar())}
        to={ROUTES.HOME}
        activeStyle={{ borderBottom: '1px solid white' }}
      >
        Home
      </Li>
      <Li
        onClick={() => dispatch(toggleNavbar())}
        to={ROUTES.BODY_PARTS}
        activeStyle={{ borderBottom: '1px solid white' }}
      >
        Body Parts
      </Li>
      <Li
        onClick={() => dispatch(toggleNavbar())}
        to={ROUTES.ACCOUNT}
        activeStyle={{ borderBottom: '1px solid white' }}
      >
        Account
      </Li>
      <Li to={ROUTES.LOGIN} onClick={() => dispatch(signOut())}>
        <CgLogOut />
        Logout
      </Li>
    </Ul>
  );
};

export default Menu;
