import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CategoriesItem from "../components/categories/CategoriesItem";
import jsonData from "../data/data.json";

const Favourites = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Combine all products from all categories into a single array
    const allProducts = jsonData.categories.flatMap(
      (category) => category.products
    );

    // Filter products where like is true
    const favouriteProducts = allProducts.filter((product) => product.like);

    setData(favouriteProducts);
  }, []);

  return (
    <Box>
      <Typography
        sx={{
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
          fontWeight: "bold",
          color: "black",
          textAlign: "center",
          marginBottom: "1rem",
        }}
      >
        Favourites
      </Typography>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        {data.map(({ id, like, rating, images, name, price }) => (
          <Grid item xs={6} sm={3} key={id}>
            <CategoriesItem
              id={id}
              fav={like}
              rating={rating}
              img={images[0]}
              heading={name}
              amount={price}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Favourites;
