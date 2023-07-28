import { Avatar, Box, Button, Container, Typography } from '@mui/material';
import pageColors from '../styles/pageColors';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const WhatsappPage: React.FC = () => {
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
      <Avatar
        src="https://www.altonivel.com.mx/wp-content/uploads/2021/12/whatsapp-screenshot.jpg"
        alt="Whatsapp"
        sx={{ width: 300, height: 300, margin: '20px 0 20px 0' }}
      />

      <Typography
        variant="h5"
        component="h3"
        sx={{
          color: pageColors.darkBlue,
          marginTop: '15px',
          marginBottom: '15px',
        }}
      >
        Comunicate con nosotros
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <Typography
          variant="h5"
          component="h3"
          sx={{ color: pageColors.darkBlue, marginRight: '10px' }}
        >
          11 5555-5555
        </Typography>

        <WhatsAppIcon />
      </Box>

      <Button
        endIcon={<WhatsAppIcon />}
        sx={{
          backgroundColor: pageColors.lightBlue,
          borderRadius: '10px',
          color: pageColors.white,
          width: '60%',
        }}
      >
        Whatsapp
      </Button>
    </Container>
  );
};
