"use client";
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SingleCard from './SingleCard';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, Skeleton } from '@mui/material';

export default function CardGrid() {
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching products
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleSortChange = (event) => {
    const selectedSortBy = event.target.value;
    let sortedProducts = [...products];
    if (selectedSortBy === 'title') {
      sortedProducts = sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (selectedSortBy === 'price') {
      sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
    }
    setProducts(sortedProducts);
    setSortBy(selectedSortBy);
  };

  const handleSortReset = () => {
    setProducts(products.sort((a, b) => a.id - b.id));
    setSortBy(null);
  };

  return (
    <Box sx={{ marginTop: "80px", flexGrow: 1 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
        <FormControl sx={{ minWidth: 120 }}>
          <Select
            value={sortBy || ''}
            onChange={handleSortChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Sort By' }}
          >
            <MenuItem value="" disabled>
              Sort By
            </MenuItem>
            <MenuItem value="title">Title</MenuItem>
            <MenuItem value="price">Price</MenuItem>
          </Select>
        </FormControl>
        {sortBy && (
          <Button variant="outlined" onClick={handleSortReset} style={{ marginLeft: '10px' }}>
            Reset Sorting
          </Button>
        )}
      </Box>
      <Grid container rowSpacing={5} columnSpacing={2}>
        {loading ? (
          // Show skeleton while loading
          Array.from({ length: 6 }).map((_, index) => (
            <Grid key={index} item xs={6} md={4}>
              <Skeleton variant="rectangular" height={300} />
            </Grid>
          ))
        ) : (
          // Show products
          products.map(product => (
            <Grid key={product.id} item xs={6} md={4}>
              <SingleCard product={product} />
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
}
