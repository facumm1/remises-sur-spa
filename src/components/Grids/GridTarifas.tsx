import React, { Fragment } from 'react';
import { Grid, Typography } from '@mui/material';
import viajesMock from '../../util/viajesMock';
import pageColors from '../../styles/pageColors';

export const GridTarifas: React.FC = () => {
  return (
    <Grid
      container
      rowSpacing={1}
      //columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      <Grid item xs={6} sx={{ backgroundColor: pageColors.darkBlue }}>
        <Typography sx={{ color: pageColors.white }}>Viaje</Typography>
      </Grid>
      <Grid item xs={6} sx={{ backgroundColor: pageColors.darkBlue }}>
        <Typography sx={{ color: pageColors.white }}>Costo</Typography>
      </Grid>

      {viajesMock.map(({ destino, tarifa }, index) => (
        <Fragment key={index}>
          <Grid
            item
            xs={6}
            sx={{
              backgroundColor: index % 2 ? 'inherit' : pageColors.gridWhite,
              border: '.5px solid #000',
              padding: 0,
            }}
          >
            <Typography>{destino}</Typography>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              backgroundColor: index % 2 ? 'inherit' : pageColors.gridWhite,
              border: '.5px solid #000',
              padding: 0,
            }}
          >
            <Typography>${tarifa}</Typography>
          </Grid>
        </Fragment>
      ))}
    </Grid>
  );
};
