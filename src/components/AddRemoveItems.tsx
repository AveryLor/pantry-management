import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const AddRemoveItems: React.FC = () => {
  const [itemName, setItemName] = useState<string>('');
  const [quantity, setQuantity] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (itemName && quantity) {
      setItemName('');
      setQuantity('');
      alert('Item updated successfully');
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Add/Remove Items
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="itemName"
          label="Item Name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="quantity"
          label="Quantity"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          Update Item
        </Button>
      </Box>
    </Container>
  );
}

export default AddRemoveItems;
