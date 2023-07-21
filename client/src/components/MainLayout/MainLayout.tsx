import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
  return (
      <Outlet/>
  );
};

export default MainLayout;
