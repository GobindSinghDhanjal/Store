"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState, Suspense } from "react";
import {
  Box,
  CircularProgress,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Button,
  Rating,
} from "@mui/material";

const Page = () => {
  const searchParams = useSearchParams();
  const [product, setProduct] = useState(null);

  const id = searchParams.get("product");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  return (
    <div className="sub-container">
      <Suspense fallback={<CircularProgress />}>
        {product ? (
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Card sx={{ border: "none", boxShadow: "none" }}>
                <CardMedia
                  component="img"
                  height="auto"
                  image={product.image}
                  alt={product.title}
                  style={{ objectFit: "contain", height: "280px" ,marginTop:"25px" }}
                />
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="h4" gutterBottom>
                  {product.title}
                </Typography>
                <Box display="flex" alignItems="center" marginBottom={2}>
                  <Rating
                    name="rating"
                    value={product.rating.rate}
                    precision={0.5}
                    readOnly
                  />
                  <Typography>({product.rating.count} reviews)</Typography>
                </Box>
                <Typography mt={2} variant="body1" gutterBottom>
                  {product.description}
                </Typography>
                <Box display="flex" alignItems="center" marginBottom={2}>
                  <Typography variant="h6" marginRight={1}>
                    Price:
                  </Typography>
                  <Typography variant="h6">${product.price}</Typography>
                </Box>

                <Button variant="contained" color="primary" size="large">
                  Add to Cart
                </Button>
              </Box>
            </Grid>
          </Grid>
        ) : (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="300px"
          >
            <CircularProgress />
          </Box>
        )}
      </Suspense>
    </div>
  );
};

export default Page;
