import React from 'react';
import { Outlet } from 'react-router-dom';

import MainHeader from '@/components/MainHeader';

const RootLayout: React.FC = () => (
  <>
    <MainHeader />
    <Outlet />
  </>
);

export default RootLayout;
