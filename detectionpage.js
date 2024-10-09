import React, { useState } from 'react';
import FishDetection from '../components/FishDetection';
import MapComponent from '../components/MapComponent';
import { Container, Typography, Grid } from '@mui/material';

function DetectionPage() {
  const [fishData, setFishData] = useState(null);

  const handleDetection = (data) => {
    setFishData(data);
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: '3rem' }}>
      <Typography variant="h4" gutterBottom align="center">
        Fish Detection Dashboard
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        Upload a fish image to start detection and view the results on the map.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <FishDetection onDetection={handleDetection} />
        </Grid>
        <Grid item xs={12} md={6}>
          {fishData && <MapComponent fishData={fishData} />}
        </Grid>
      </Grid>
    </Container>
  );
}

export default DetectionPage;
