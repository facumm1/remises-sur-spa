import { Button, Container, Typography } from '@mui/material';
import pageColors from '../styles/pageColors';

export const ContactoPage: React.FC = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        alignItems: 'center',
        backgroundColor: pageColors.white,
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      <Typography variant="h5" component="h3" sx={{ color: pageColors.darkBlue }}>
        Comunicate con nosotros
      </Typography>

      <Typography variant="h5" component="h3" sx={{ color: pageColors.darkBlue }}>
        11 5555-5555
      </Typography>

      <Button>Whatsapp</Button>
    </Container>
  );
};
