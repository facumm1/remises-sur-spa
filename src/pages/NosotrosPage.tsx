import { Avatar, Container, Typography } from '@mui/material';
import React from 'react';
import pageColors from '../styles/pageColors';

export const NosotrosPage: React.FC = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: '100vh',
        backgroundColor: pageColors.darkBlue,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar
        src="https://fundeu.fiile.org.ar/library/timthumb/timthumb.php?src=/uploadsfotos/remis_02.jpg&w=720"
        sx={{ width: 300, height: 300, margin: '20px 0 20px 0' }}
      />

      <Typography variant="h5" component="h3" sx={{ color: pageColors.white }}>
        Acerca de nosotros
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: pageColors.white,
          margin: '20px 0 20px 0',
          textAlign: 'center',
        }}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
        quisquam a dicta corrupti! Dolorum eligendi nesciunt natus pariatur.
        Minima sit ut reiciendis nesciunt ullam aliquid nostrum non suscipit
        molestias asperiores. Asperiores error, magnam accusamus cupiditate
        recusandae nulla quidem minima vitae ad perspiciatis, sed voluptas eaque
        saepe voluptates eius veniam consequatur itaque explicabo velit, maiores
        ipsam suscipit at ut. Ipsum, blanditiis? Earum repellendus dolores totam
        nisi perspiciatis, voluptates perferendis optio cum dignissimos
        consequatur molestiae quia facilis dolorem voluptatem minus. Vitae
        aliquam repellendus, repudiandae commodi atque maxime iste maiores nulla
        similique ut.
      </Typography>
    </Container>
  );
};
