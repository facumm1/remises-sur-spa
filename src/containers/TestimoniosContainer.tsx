import { Container, useMediaQuery } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { TextIconButton } from '../components/Buttons/TextIconButton';
import AvatarImage from '../components/Image/AvatarImage';
import { WhatsappContent } from '../components/Text/WhatsappContent';
import pageColors from '../styles/pageColors';
import imgMock from '../util/imgMock';
import { useTheme } from '@mui/material/styles';

export const TestimoniosPage: React.FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Container maxWidth="xl" sx={styles.container}>
      <AvatarImage
        imgSrc={imgMock.whatsapp}
        imgAlt="Whatsapp"
        sx={styles.image}
      />

      <WhatsappContent />

      <TextIconButton
        Icon={<WhatsAppIcon />}
        text="Whatsapp"
        sx={styles.enviarBtn}
      />
    </Container>
  );
};

const styles = {
  container: {
    alignItems: 'center',
    backgroundColor: pageColors.darkBlue,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  image: { width: 300, height: 300, margin: '20px 0 20px 0' },
  enviarBtn: {
    backgroundColor: pageColors.red,
    borderRadius: '10px',
    color: pageColors.white,
    width: '60%',
  },
};
