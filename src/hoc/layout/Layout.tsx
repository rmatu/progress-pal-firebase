import React from 'react';
import Header from '../../components/Navigation/Header/Header';
import { AuthWrapper, ContentWrapper } from './Layout.styles';
interface LayoutProps {
  children: React.ReactNode[] | React.ReactNode;
  authorized: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, authorized }) => {
  if (!authorized) {
    return <AuthWrapper>{children}</AuthWrapper>;
  } else
    return (
      <ContentWrapper>
        <Header />
        {children}
      </ContentWrapper>
    );
};

export default Layout;
