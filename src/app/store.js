import { configureStore } from '@reduxjs/toolkit'
import sliderReducer from '../features/slicers/sliderslice';
import productSlice from '../features/slicers/productslice';
import cartSlice from '../features/slicers/cartSlice';

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
    products: productSlice,
    cart: cartSlice,
  },
})