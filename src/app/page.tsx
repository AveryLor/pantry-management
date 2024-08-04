'use client'

import React, { useState } from 'react';
import { Box, Typography, Button, TextField, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material';

const Home: React.FC = () => {
  const [inventory, setInventory] = useState([
    { name: 'Apples', quantity: 10, price: 2.5, lastUpdated: new Date() },
    { name: 'Bananas', quantity: 5, price: 1.2, lastUpdated: new Date() }
  ]);
  const [open, setOpen] = useState(false);
  const [itemName, setItemName] = useState('');
  const [error, setError] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddItem = () => {
    if (!itemName || itemName.trim() === '') {
      setError('Invalid item name');
      return;
    }
    setInventory((prevInventory) => [
      ...prevInventory,
      { name: itemName, quantity: 1, price: 1.0, lastUpdated: new Date() }
    ]);
    setItemName('');
    handleClose();
  };

  const removeAllItems = () => {
    setInventory([]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 py-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <Typography variant="h4" component="h1" className="text-center text-teal-600 font-bold mb-6">
          🛒 Pantry Management 🛒
        </Typography>
        <div className="flex justify-between mb-4">
          <div>
            <Button
              variant="contained"
              color="primary"
              onClick={handleOpen}
              startIcon={<AddIcon />}
            >
              New Item
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={removeAllItems}
              startIcon={<DeleteIcon />}
              className="ml-2"
            >
              Remove All
            </Button>
          </div>
        </div>
        <TableContainer component={Paper} className="mb-4">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="bg-teal-600 text-white font-bold">Item</TableCell>
                <TableCell align="right" className="bg-teal-600 text-white font-bold">Quantity (lbs)</TableCell>
                <TableCell align="right" className="bg-teal-600 text-white font-bold">Price</TableCell>
                <TableCell align="right" className="bg-teal-600 text-white font-bold">Last Updated</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {inventory.length > 0 ? (
                inventory.map((item, index) => (
                  <TableRow key={index} className="odd:bg-teal-50">
                    <TableCell>{item.name}</TableCell>
                    <TableCell align="right">{item.quantity}</TableCell>
                    <TableCell align="right">${item.price.toFixed(2)}</TableCell>
                    <TableCell align="right">{item.lastUpdated.toLocaleString()}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} align="center">
                    <Typography>No items in inventory</Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        {error && <Typography color="error" className="text-center mb-4">{error}</Typography>}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <Typography id="modal-title" variant="h6" component="h2" className="text-teal-600">
            Add Item
          </Typography>
          <div className="flex flex-col mt-4">
            <TextField
              id="item-name"
              label="Item"
              variant="outlined"
              fullWidth
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              className="mb-4"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddItem}
            >
              Add
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Home;
