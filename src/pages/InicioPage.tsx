import React from 'react';

import { InicioContainer } from '../containers/InicioContainer';
import { TarifasContainer } from '../containers/TarifasContainer';
import { ReservaContainer } from '../containers/ReservaContainer';
import { PageWrapper } from '../components/Wrapper/PageWrapper';

export const InicioPage: React.FC = () => {
  return (
    <PageWrapper>
      <InicioContainer />
      <TarifasContainer />
      <ReservaContainer />
    </PageWrapper>
  );
};
