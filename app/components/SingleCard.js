import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { useRouter } from "next/navigation";

export default function SingleCard({ product }) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/productdetails?product=${product.id}`);
  };

  return (
    <Card onClick={handleCardClick} sx={{cursor:"pointer", maxWidth: 345 }}>
      <CardMedia
        sx={{
          height: 200,
          padding: "10px",
          display: "flex",
          alignItems: "center",
        }}
        component="img"
        image={product.image}
        title={product.title}
        style={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            minHeight: "100px",
            fontSize: { xs: "medium", sm: "large" }, // Adjust font size for mobile and larger screens
            fontWeight: "600",
            height: "auto",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
          }}
        >
          {product.title}
        </Typography>
        <Grid container>
          <Grid item xs={12} md={4}>
            <Typography
              variant="body2"
              color="green"
              sx={{
                fontWeight: "bold",
                display: "inline-block",
                marginBottom: "8px", // Add margin to separate from buttons
              }}
            >
              Price: ${product.price}
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <div style={{ display: "inline-block", float: "right", textAlign:"right" }}>
              <Button
                variant="outlined"
                color="primary"
                size="small"
                sx={{
                  fontSize: "0.7rem",
                  marginBottom: "8px",
                  minWidth: "80px",
                  "&:hover": { backgroundColor: "#1565C0", color: "white" },
                }}
                style={{ marginLeft: "8px" }}
              >
                Add to Cart
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="small"
                sx={{
                  fontSize: "0.7rem",
                  marginBottom: "8px",
                  minWidth: "80px",
                  "&:hover": { backgroundColor: "#1565C0" },
                }}
                style={{ marginLeft: "8px" }}
              >
                Buy Now
              </Button>
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
