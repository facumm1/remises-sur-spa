import React from 'react';
import { Avatar, Container, Typography } from '@mui/material';
import pageColors from '../styles/pageColors';
import imgMock from '../util/imgMock';

export const NosotrosPage: React.FC = () => {
  return (
    <Container maxWidth="sm" sx={styles.container}>
      <Avatar src={imgMock.nosotros} sx={styles.avatar} />

      <Typography variant="h5" component="h3" sx={styles.title}>
        Acerca de nosotros
      </Typography>

      <Typography variant="body1" sx={styles.bodyText}>
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

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: pageColors.white,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '30px 0 30px 0',
  },
  avatar: {
    width: 300,
    height: 300,
    margin: '20px 0 20px 0',
  },
  title: {
    color: pageColors.darkBlue,
  },
  bodyText: {
    color: pageColors.darkBlue,
    margin: '20px 0 20px 0',
    textAlign: 'center',
  },
};
