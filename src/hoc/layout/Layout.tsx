import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Navigation/Header/Header';
import { AuthWrapper, ContentWrapper, ToCloseNavbar } from './Layout.styles';
import { cleanUp } from '../../redux/navbar/navbarActions';
import { AppState } from '../../redux/rootReducer';

interface LayoutProps {
  children: React.ReactNode[] | React.ReactNode;
  authorized: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, authorized }) => {
  const dispatch = useDispatch();
  const open = useSelector((state: AppState) => state.navbar.open);

  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  // We listen to the resize event
  window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

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
        <Header />
        <ToCloseNavbar onClick={() => handleCleanUp()}>
          {children}
        </ToCloseNavbar>
      </ContentWrapper>
    );
};

export default Layout;
