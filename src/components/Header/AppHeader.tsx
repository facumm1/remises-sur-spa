import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AppDrawer from '../Drawer/AppDrawer';
import useToggle from '../../hooks/useToggle';
import IconButtonMUI from '../Buttons/IconButtonMUI';

export const AppHeader: React.FC = () => {
  const { open, handleOpen } = useToggle();

  return (
    <AppBar position="fixed">
      <AppDrawer open={open} handleOpen={handleOpen} />

      <Toolbar sx={styles.toolbar}>
        <IconButtonMUI sx={styles.icon} handleClick={handleOpen}>
          <MenuIcon color="secondary" />
        </IconButtonMUI>

        <Typography color="secondary" component="h1" sx={styles.typography}>
          Remises Del Retiro SA
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

const styles = {
  toolbar: { display: 'flex', justifyContent: 'center' },
  icon: {
    position: 'absolute',
    left: 15,
    fontSize: '28px',
    paddingRight: '10px',
  },
  typography: {
    fontSize: '20px',
    textAlign: 'center',
  },
};
