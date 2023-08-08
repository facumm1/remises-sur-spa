import { Box, Button, Typography } from '@mui/material';
import React from 'react';

const pages: string[] = ['Inicio', 'Acerca de nosotros', 'Novedades'];

export const DesktopMenu: React.FC = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      {pages.map(page => (
        <Button key={page} sx={{ my: 2, mx: 1.5, color: 'white' }}>
          <Typography>{page}</Typography>
        </Button>
      ))}
    </Box>
  );
};
