import { Box, Typography, Grid, CircularProgress, Alert } from "@mui/material";
import CategoryItem from "./CategoryItem";
import headphone from "../../../assets/category/headphones.jpg";
import earpods from '../../../assets/category/wireless-earbds.jpg'
import speaker from '../../../assets/category/bluetooth-speaker.jpg'
import watch from '../../../assets/category/smart-watches.jpg'
import { useEffect, useState } from "react";
// import jsonData from "../../../data/data.json";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../../../store/slice/categorySlice";

const imageMap = {
  "headphones.jpg": headphone,
  "wireless-earbds.jpg": earpods,
  "bluetooth-speaker.jpg": speaker,
  "smart-watches.jpg": watch,
};

const Category = () => {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }
  // const [categories, setCategories] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   try {
  //     setCategories(jsonData.categories);
  //     setLoading(false);
  //   } catch (err) {
  //     setError("Failed to load categories.");
  //     setLoading(false);
  //   }
  // }, []);

  // if (loading) {
  //   return (
  //     <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
  //       <CircularProgress />
  //     </Box>
  //   );
  // }

  // if (error) {
  //   return (
  //     <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
  //       <Alert severity="error">{error}</Alert>
  //     </Box>
  //   );
  // }

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
        Category
      </Typography>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        {categories.map((category, index) => (
          <Grid item xs={6} sm={3} key={index}>
            <CategoryItem img={imageMap[category.image[0]]} heading={category.name} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Category;
