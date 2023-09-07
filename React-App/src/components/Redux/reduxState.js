import { configureStore } from "@reduxjs/toolkit";
import showCartSlice from "./Slices/ShowCart";
import SelectedProductsSlice from "./Slices/SelectedProducts";

const CentralData = configureStore({
  reducer: {
    showCart: showCartSlice.reducer,
    selectedProducts: SelectedProductsSlice.reducer,
  }
});

export default CentralData;