import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Grid, Typography } from '@mui/material';
import CategoriesItem from '../components/categories/CategoriesItem';
import Searchbar from '../components/searchbar/Searchbar';
import { fetchCategories } from '../store/slice/categoriesSlice';

const Categories = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>Error: {error}</Typography>;
  }

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { xs: '0.5rem', sm: '1rem' },
          marginBottom: '1rem',
          width: '97%',
          margin: 'auto',
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
            fontWeight: 'bold',
            color: 'black',
            textAlign: { xs: 'center', sm: 'left' },
            marginBottom: { xs: '0.5rem', sm: '0' },
          }}
        >
          Categories
        </Typography>
        <Box
          sx={{
            width: { xs: '100%', sm: 'auto' },
            display: 'flex',
            justifyContent: { xs: 'center', sm: 'flex-end' },
          }}
        >
          <Searchbar />
        </Box>
      </Box>

      <Box>
        {data.map((cate) => (
          <Box key={cate.id}>
            <Typography variant="h6">{cate.name}</Typography>

            <Grid container spacing={2} sx={{ padding: 2 }}>
              {cate.products.map((item) => (
                <Grid item xs={6} sm={3} key={item.id}>
                  <CategoriesItem
                    id={item.id}
                    rating={item.rating}
                    description={item.description}
                    fav={item.like}
                    img={item.images}
                    heading={item.name}
                    amount={item.price}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Categories;
