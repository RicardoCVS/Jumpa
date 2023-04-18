import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import MainButton from './MainButton';
import song from './assets/audio/song.mp3';

const Title = styled(Typography)({
  marginBottom: '1rem',
});

function App() {
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
  };

  return (
    <Container sx={containerStyles}>
      <Box>
        <Title variant="h2" color="primary">
          ¡Bienvenido a Jumpa!
        </Title>
        <Typography variant="h6">
          Esta es una aplicación personalizada construida con React y Material-UI.
        </Typography>
        <MainButton songSrc={song} />
        <MainButton id="button2" songSrc={song} />
      </Box>
    </Container>
  );
}

export default App;
