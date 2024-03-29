import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, useMediaQuery } from "@mui/material";
import { useRouter } from "next/navigation";

export default function SingleCard({ product }) {
  const router = useRouter();

  const xsScreen = useMediaQuery("(max-width:600px)");

  const renderTitle = () => {
    if (xsScreen) {
      // If extra-small screen, limit the title to 20 characters
      return product.title.length > 20
        ? product.title.slice(0, 20) + "..."
        : product.title;
    } else {
      // If larger screen, render full title
      return product.title;
    }
  };

  const handleCardClick = () => {
    router.push(`/productdetails?product=${product.id}`);
  };

  return (
    <Card onClick={handleCardClick} sx={{ cursor: "pointer", maxWidth: 345 }}>
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
      <CardContent className="card-content">
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            minHeight: xsScreen ? '45px' : "100px",
            fontSize: { xs: "medium", sm: "large" }, // Adjust font size for mobile and larger screens
            fontWeight: "600",
            height: "auto",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
          }}
        >
          {renderTitle()}
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
          <Grid
            item
            xs={12}
            md={8}
            style={{ display: xsScreen ? "none" : "block" }}
          >
            <div
              style={{
                display: "inline-block",
                float: "right",
                textAlign: "right",
              }}
            >
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
