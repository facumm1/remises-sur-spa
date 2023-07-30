import { Box, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import pageColors from '../../styles/pageColors';

export const WhatsappContent: React.FC = () => {
  return (
    <>
      <Box sx={styles.header}>
        <Typography variant="h5" component="h3" sx={styles.title}>
          Consultanos por tarifas
        </Typography>

        <Typography variant="h5" component="h3" sx={styles.subTitle}>
          Horario de atención: 9:00 a 21:00hrs
        </Typography>
      </Box>

      <Box sx={styles.contact}>
        <Typography variant="h5" component="h3" sx={styles.phoneNumber}>
          11 5555-5555
        </Typography>

        <WhatsAppIcon sx={styles.icon} />
      </Box>
    </>
  );
};

const styles = {
  header: {
    margin: '20px 0 25px 0',
  },
  title: {
    color: pageColors.white,
    marginBottom: '15px',
  },
  subTitle: {
    color: pageColors.white,
    fontSize: '16px',
  },
  contact: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  phoneNumber: {
    color: pageColors.white,
    marginRight: '10px',
  },
  icon: {
    color: pageColors.white,
  },
};
