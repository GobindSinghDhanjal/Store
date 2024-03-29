import { Box, Typography, Link, Grid, Divider } from "@mui/material";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box sx={{ bgcolor: "primary.main",marginTop:"180px", color: "white", py: 4 }}>
      <Box textAlign={"center"} mb={2}>
        <Typography variant="h6">STORE</Typography>
        <Typography variant="body1">
          DESIGNED BY GOBIND SINGH
        </Typography>
      </Box>
     
      <Divider sx={{ borderColor: "white", my: 2 }} />
      <Typography variant="body2" align="center">
        &copy; {currentYear} Your Company Name. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
