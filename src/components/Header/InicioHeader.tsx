import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import DriveEtaIcon from '@mui/icons-material/DriveEta';

export const InicioHeader: React.FC = () => {
  return (
    <AppBar position="fixed">
      <Toolbar sx={styles.toolbar}>
        <DriveEtaIcon color="secondary" sx={styles.icon} />
        <Typography color="secondary" component="h1" sx={styles.typography}>
          Remises Del Sur
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

const styles = {
  toolbar: { display: 'flex', justifyContent: 'center' },
  icon: {
    fontSize: '28px',
    paddingRight: '10px',
  },
  typography: {
    fontSize: '28px',
    textAlign: 'center',
  },
};
