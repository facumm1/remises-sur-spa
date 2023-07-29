import { createTheme } from '@mui/material/styles';
import pageColors from './pageColors';

const theme = createTheme({
  palette: {
    primary: {
      main: pageColors.darkBlue,
    },
    secondary: {
      main: pageColors.white,
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    fontSize: 16,
  },
});

export default theme;
