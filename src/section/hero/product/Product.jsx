import { Box, Typography } from "@mui/material";
import ProductItems from "./ProductItems";
import pod1 from "../../../assets/product/prod-1.jpg";


const PopularProductList = [
  { image: pod1, heading: "Heading 1", amount: "3999" },
  { image: pod1, heading: "Heading 2", amount: "3999" },
  { image: pod1, heading: "Heading 3", amount: "3999" },
  { image: pod1, heading: "Heading 4", amount: "3999" },
  { image: pod1, heading: "Heading 5", amount: "3999" },
  { image: pod1, heading: "Heading 6", amount: "3999" },
  { image: pod1, heading: "Heading 7", amount: "3999" },
  { image: pod1, heading: "Heading 8", amount: "3999" },
  { image: pod1, heading: "Heading 9", amount: "3999" },
  { image: pod1, heading: "Heading 10", amount: "3999" },
  { image: pod1, heading: "Heading 11", amount: "3999" },
  { image: pod1, heading: "Heading 12", amount: "3999" },
];

const Product = () => {
  return (
    <Box
      sx={{
        // border: "2px solid black",
        padding: { xs: "0rem", sm: "2rem", md: "2rem" },
        width: { xs: "100%", md: "70%" }, // Full width on mobile, 70% on desktop
        margin: { xs: "0", md: "auto" }, // No margin on mobile, auto on desktop
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" }, // Responsive font size
          fontWeight: "bold", // Apply font weight
          color: "black", // Text color
          textAlign: "center", // Center text
          marginBottom: "1rem", // Space below the heading
        }}
      >
        Popular Products
      </Typography>
      <ProductItems data={PopularProductList} />
    </Box>
  );
};

export default Product;
