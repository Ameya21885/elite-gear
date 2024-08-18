import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './slice/categorySlice';
import categoriesReducer from './slice/categoriesSlice';
import cartReducer from './slice/cartSlice'

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    categories: categoriesReducer,
    cart: cartReducer,
  },
});

export default store;
