import React, { Fragment } from 'react';
import { Grid, Typography } from '@mui/material';
import viajesMock from '../../util/viajesMock';
import pageColors from '../../styles/pageColors';

export const GridTarifas: React.FC = () => {
  return (
    <Grid
      container
      rowSpacing={2}
      //columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      <Grid item xs={6} sx={{ backgroundColor: pageColors.darkBlue }}>
        <Typography
          sx={{
            fontSize: '18px',
            color: pageColors.white,
            textAlign: 'center',
            paddingBottom: '10px',
          }}
        >
          Viaje
        </Typography>
      </Grid>
      <Grid item xs={6} sx={{ backgroundColor: pageColors.darkBlue }}>
        <Typography
          sx={{
            fontSize: '18px',
            color: pageColors.white,
            textAlign: 'center',
            paddingBottom: '10px',
          }}
        >
          Costo
        </Typography>
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
              textAlign: 'center',
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
              textAlign: 'center',
            }}
          >
            <Typography>${tarifa}</Typography>
          </Grid>
        </Fragment>
      ))}
    </Grid>
  );
};
