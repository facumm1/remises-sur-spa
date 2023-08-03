import React from 'react';
import { Avatar, Box, Button, Container, Typography } from '@mui/material';
import pageColors from '../styles/pageColors';
import imgMock from '../util/imgMock';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export const NosotrosPage: React.FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Container
      maxWidth="xl"
      sx={{ ...styles.container, flexDirection: matches ? 'row' : 'column' }}
    >
      <Avatar
        src={imgMock.nosotros}
        sx={{
          ...styles.avatar,
          width: matches ? 450 : 300,
          height: matches ? 450 : 300,
        }}
      />

      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Typography variant="h5" component="h3" sx={styles.title}>
          Acerca de nosotros
        </Typography>

        <Typography variant="body1" sx={styles.bodyText}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
          quisquam a dicta corrupti! Dolorum eligendi nesciunt natus pariatur.
          Minima sit ut reiciendis nesciunt ullam aliquid nostrum non suscipit
          molestias asperiores. Asperiores error, magnam accusamus cupiditate
          recusandae nulla quidem minima vitae ad perspiciatis, sed voluptas
          eaque saepe voluptates eius veniam consequatur itaque explicabo velit,
          maiores ipsam suscipit at ut. Ipsum, blanditiis? Earum repellendus
          dolores totam nisi perspiciatis, voluptates perferendis optio cum
          dignissimos consequatur molestiae quia facilis dolorem voluptatem
          minus. Vitae aliquam repellendus, repudiandae commodi atque maxime
          iste maiores nulla similique ut.
        </Typography>

        <Button sx={styles.button}>
          <Typography color="secondary">Reserva tu viaje</Typography>
        </Button>
      </Box>
    </Container>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: pageColors.darkBlue,
    display: 'flex',
    alignItems: 'center',
    padding: '30px 0',
    justifyContent: 'center',
  },
  avatar: {
    margin: '20px',
  },
  title: {
    color: pageColors.white,
    textAlign: 'center',
    margin: '20px 0',
  },
  bodyText: {
    color: pageColors.white,
    margin: '20px',
    textAlign: 'center',
    maxWidth: '850px',
  },
  button: {
    backgroundColor: pageColors.red,
    padding: '10px 40px 10px 40px',
    margin: '20px 0',
    '&:hover': {
      backgroundColor: pageColors.red,
    },
    '&:active': {
      backgroundColor: pageColors.red,
    },
  },
};
