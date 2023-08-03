import { ThemeProvider } from '@mui/material';

import theme from './styles/theme';
import { InicioPage } from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <InicioPage />
    </ThemeProvider>
  );
}

export default App;
