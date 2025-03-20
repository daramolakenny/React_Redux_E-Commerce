import { configureStore } from '@reduxjs/toolkit'
import sliderReducer from '../features/slicers/sliderslice';
import productSlice from '../features/slicers/productslice';
import cartslice  from '../features/slicers/cartslice';

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
    products: productSlice,
    cart: cartslice,
  },
})