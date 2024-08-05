import React from 'react';
import { Container, Typography } from '@mui/material';

interface DashboardProps {
  searchTerm: string;
}

const Dashboard: React.FC<DashboardProps> = ({ searchTerm }) => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="body1">
        Search Term: {searchTerm}
      </Typography>
    </Container>
  );
}

export default Dashboard;
