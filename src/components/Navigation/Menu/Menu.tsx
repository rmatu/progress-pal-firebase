import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../redux/rootReducer';
import { signOut } from '../../../redux/auth/authActions';

interface MenuProps {}

const Menu: React.FC<MenuProps> = ({}) => {
  const open = useSelector((state: AppState) => state.navbar.open);
  const dispatch = useDispatch();

  return <div onClick={() => dispatch(signOut())}>Logout</div>;
};

export default Menu;
