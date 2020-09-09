import React from 'react';
import { MainWrapper } from './Layout.styles';
interface LayoutProps {
  children: React.ReactNode[] | React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <MainWrapper>{children}</MainWrapper>;
};

export default Layout;
