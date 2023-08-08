import React from 'react';
import Drawer from '@mui/material/Drawer';
import { HamburgerMenu } from './HamburgerMenu';
import { HookTypes } from '../../hooks/useToggle';

const AppDrawer: React.FC<HookTypes> = ({ open, handleOpen }) => {
  return (
    <Drawer anchor={'right'} open={open} onClose={handleOpen}>
      <HamburgerMenu handleOpen={handleOpen} />
    </Drawer>
  );
};

export default AppDrawer;
