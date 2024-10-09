import React from 'react';
import HomePage from './components/HomePage';  // Corrected path
import { Button, Typography, Grid, Card, CardContent, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" style={{ marginTop: '3rem' }}>
      <Typography variant="h2" align="center" gutterBottom>
        Welcome to the Fish Detection App
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        Discover fish species and locate them in real-time on the map.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Card elevation={3} style={{ borderRadius: '12px', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Detect Fish
              </Typography>
              <Typography variant="body1">
                Upload a fish image, and our AI will identify the species instantly.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: '1.5rem' }}
                onClick={() => navigate('/detection')}
              >
                Start Detecting
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card elevation={3} style={{ borderRadius: '12px', textAlign: 'center' }}>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Location Services
              </Typography>
              <Typography variant="body1">
                Pinpoint the fish detection on a global map using precise GPS data.
              </Typography>
              <Button
                variant="outlined"
                color="secondary"
                style={{ marginTop: '1.5rem' }}
                onClick={() => navigate('/detection')}
              >
                Explore Maps
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePage;
