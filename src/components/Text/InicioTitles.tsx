import React from 'react';
import { Box, Typography } from '@mui/material';

export const InicioTitles: React.FC = () => {
  return (
    <Box sx={styles.container}>
      <Typography variant="body1" sx={styles.title}>
        Remises del Retiro SA
      </Typography>

      <Typography variant="body1" sx={styles.subtitle}>
        Servicio de remises en CABA y alrededores
      </Typography>

      <Typography variant="body1" sx={styles.text}>
        Abierto 24hrs
      </Typography>
    </Box>
  );
};

const styles = {
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '50px',
  },
  title: {
    color: 'primary',
    fontSize: '28px',
    fontWeight: '300',
    marginBottom: '16px',
    textAlign: 'center',
  },
  subtitle: {
    color: 'primary',
    fontSize: '18px',
    fontWeight:'100',
    textAlign: 'center',
  },
  text: {
    color: 'inherit',
    fontSize: '16px',
    fontWeight: '100',
    textAlign: 'center',
  },
};
