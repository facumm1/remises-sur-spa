import React from 'react';
import { Container } from '@mui/material';

import { AppHeader } from '../Header/AppHeader';
import { AppFooter } from '../Footer/AppFooter';
import pageColors from '../../styles/pageColors';

type Props = {
  children: React.ReactNode;
};

export const PageWrapper: React.FC<Props> = ({ children }) => {
  return (
    <Container disableGutters maxWidth="xl" sx={styles.container}>
      {/* Header Fixed */}
      <AppHeader />

      {children}

      {/* Footer */}
      <AppFooter />
    </Container>
  );
};

const styles = {
  container: {
    backgroundColor: pageColors.white,
    margin: 0,
    padding: 0,
  },
};
