import React from 'react';
import { Container, Typography } from '@mui/material';

interface InventoryListProps {
  searchTerm: string;
}

const InventoryList: React.FC<InventoryListProps> = ({ searchTerm }) => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Inventory List
      </Typography>
      <Typography variant="body1">
        Search Term: {searchTerm}
      </Typography>
    </Container>
  );
}

export default InventoryList;
