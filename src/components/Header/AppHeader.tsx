import React from 'react';
import { AppBar, Toolbar, Typography, useMediaQuery } from '@mui/material';

import { Navbar } from './Navbar';
import AppDrawer from '../Drawer/AppDrawer';
import useToggle from '../../hooks/useToggle';
import theme from '../../styles/theme';

export const AppHeader: React.FC = () => {
  const { open, handleOpen } = useToggle();
  const isDesktopView = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <AppBar position="fixed">
      <AppDrawer open={open} handleOpen={handleOpen} />

      <Toolbar
        sx={{
          ...styles.toolbar,
          justifyContent: isDesktopView ? 'space-between' : 'center',
        }}
      >
        {/* Title */}
        <Typography color="secondary" component="h1" sx={styles.typography}>
          Remises Del Retiro SA
        </Typography>

        {/* Navbar */}
        <Navbar isDesktopView={isDesktopView} handleOpen={handleOpen} />
      </Toolbar>
    </AppBar>
  );
};

const styles = {
  toolbar: { display: 'flex' },
  icon: {
    position: 'absolute',
    right: 15,
    fontSize: '28px',
    paddingRight: '10px',
  },
  typography: {
    fontSize: '20px',
    textAlign: 'center',
  },
};
