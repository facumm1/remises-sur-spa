import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export const AppHeader: React.FC = () => {
  return (
    <AppBar position="fixed">
      <Toolbar sx={styles.toolbar}>
        <MenuIcon color="secondary" sx={styles.icon} />
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
