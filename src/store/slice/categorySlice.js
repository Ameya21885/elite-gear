import { createSlice } from '@reduxjs/toolkit';
import jsonData from '../../data/data.json';

export const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categories: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchCategoriesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchCategoriesSuccess: (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    },
    fetchCategoriesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchCategoriesStart, fetchCategoriesSuccess, fetchCategoriesFailure } = categorySlice.actions;

export const fetchCategories = () => async (dispatch) => {
  try {
    dispatch(fetchCategoriesStart());
    // Simulate fetching data
    const categories = jsonData.categories;
    dispatch(fetchCategoriesSuccess(categories));
  } catch (error) {
    dispatch(fetchCategoriesFailure('Failed to load categories.'));
  }
};

export default categorySlice.reducer;
