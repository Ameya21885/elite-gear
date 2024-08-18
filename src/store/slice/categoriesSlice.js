// src/features/categories/categoriesSlice.js
import { createSlice } from '@reduxjs/toolkit';
import jsonData from '../../data/data.json';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    data: [],
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
      state.data = action.payload;
    },
    fetchCategoriesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchCategoriesStart, fetchCategoriesSuccess, fetchCategoriesFailure } = categoriesSlice.actions;

export const fetchCategories = () => (dispatch) => {
  try {
    dispatch(fetchCategoriesStart());
    const categories = jsonData.categories;
    dispatch(fetchCategoriesSuccess(categories));
  } catch (error) {
    dispatch(fetchCategoriesFailure('Failed to load categories.'));
  }
};

export default categoriesSlice.reducer;
