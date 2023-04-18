import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { styled } from '@mui/system';
import { Favorite } from '@mui/icons-material';
import song from './assets/audio/song.mp3';

const StyledContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  backgroundColor: '#f5f5f5',
});

const Title = styled(Typography)({
  marginBottom: '1rem',
});

const StyledButton = styled(Button)({
  marginTop: '1rem',
});

function App() {
  const audioRef = React.useRef(null);

  const playSong = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <StyledContainer>
      <Box>
        <Title variant="h2" color="primary">
          ¡Bienvenido a Jumpa!
        </Title>
        <Typography variant="h6">
          Esta es una aplicación personalizada construida con React y Material-UI.
        </Typography>
        <StyledButton
          variant="contained"
          color="secondary"
          startIcon={<Favorite />}
          onClick={playSong}
        >
          Haz clic aquí
        </StyledButton>
      </Box>
      <audio ref={audioRef} src={song} />
    </StyledContainer>
  );
}

export default App;
