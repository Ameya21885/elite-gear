import React from "react";
import Hero from "../section/hero/Hero";
import NewsLetter from "../section/newsletter/NewsLetter";
import Category from "../section/hero/category/Category";
import Product from "../section/hero/product/Product";
import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <div>
      <Hero />
      <Box
        sx={{
          width: { xs: "100%", md: "70%" }, // 100% width on mobile, 70% on desktop and larger
          margin: { xs: "0", md: "auto" }, // No margin on mobile, auto margin on desktop and larger
        }}
      >
        <Category />
      </Box>
      <Product />
      Home
      <NewsLetter />
    </div>
  );
};

export default Home;
