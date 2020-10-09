import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Navigation/Header/Header';
import {
  AuthWrapper,
  ContentWrapper,
  ToCloseNavbar,
  HeaderWrapper,
} from './Layout.styles';
import { cleanUp } from '../../redux/navbar/navbarActions';
import { AppState } from '../../redux/rootReducer';

interface LayoutProps {
  children: React.ReactNode[] | React.ReactNode;
  authorized: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, authorized }) => {
  const dispatch = useDispatch();
  const open = useSelector((state: AppState) => state.navbar.open);

  const handleCleanUp = () => {
    if (open) {
      dispatch(cleanUp());
    }
  };

  if (!authorized) {
    return <AuthWrapper>{children}</AuthWrapper>;
  } else
    return (
      <ContentWrapper>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <ToCloseNavbar onClick={() => handleCleanUp()}>
          {children}
        </ToCloseNavbar>
      </ContentWrapper>
    );
};

export default Layout;
