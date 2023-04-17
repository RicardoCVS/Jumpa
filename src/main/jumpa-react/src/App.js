import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { styled } from '@mui/system';
import { Favorite } from '@mui/icons-material';

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
  return (
    <StyledContainer>
      <Box>
        <Title variant="h2" color="primary">
          ¡Bienvenido a Jumpa!
        </Title>
        <Typography variant="h6">
          El Dani chupa una cantidad de guevo descomunal,
          Es un poco chinardo y tiene mas tetas que su novia
        </Typography>
        <StyledButton
          variant="contained"
          color="secondary"
          startIcon={<Favorite />}
        >
          Haz clic aquí
        </StyledButton>
      </Box>
    </StyledContainer>
  );
}

export default App;
