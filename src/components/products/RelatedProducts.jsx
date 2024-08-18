import { Box, Typography, Grid } from "@mui/material";
import "./relatedproducts.css";
import RelatedProductCarousel from "./RelatedProductCarousel";

const RelatedProducts = () => {
  return (
    <Box sx={{ padding: { xs: "1rem", sm: "2rem" }, marginBottom: "2rem" }}>
      <Typography
        variant="h5"
        sx={{
          fontSize: { xs: "1.5rem", sm: "2rem" },
          fontWeight: "100",
          marginBottom: "1.5rem",
        }}
      >
        Related Products
      </Typography>
      <Box>
        <RelatedProductCarousel />
      </Box>
    </Box>
  );
};

export default RelatedProducts;
