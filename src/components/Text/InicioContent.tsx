import React from 'react';
import { Box, Typography } from '@mui/material';

export const InicioContent: React.FC = () => {
  return (
    <Box sx={styles.container}>
      <Typography variant="body1" sx={styles.title}>
        Remises del Sur
      </Typography>

      <Typography variant="body1" sx={styles.subtitle}>
        Parque Comercial Avellaneda
      </Typography>

      <Typography variant="body1" sx={styles.text}>
        Servicio De Remises en Avellaneda y Alrededores
      </Typography>
    </Box>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    color: 'primary',
    fontSize: '32px',
    textAlign: 'center',
  },
  subtitle: {
    color: 'primary',
    fontSize: '24px',
    textAlign: 'center',
  },
  text: {
    color: 'inherit',
    fontSize: '16px',
    textAlign: 'center',
  },
};
