import { createTheme } from '@mui/material/styles';
import pageColors from './pageColors';
import '../styles/fonts.css';

const theme = createTheme({
  palette: {
    primary: {
      main: pageColors.darkBlue,
    },
    secondary: {
      main: pageColors.white,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: 'Lato, sans-serif',
  },
});

export default theme;
