import { createSlice } from "@reduxjs/toolkit";

const SelectedProductsSlice = createSlice({
  name: "Product_Slice",
  initialState:{
    TotalAmount: 0,
    SelectedProducts: [],
  },
  reducers: {
    remove(state,action){
      const idx = state.SelectedProducts.findIndex((ele)=>{
        return action.payload.myid===ele.myid;
      });
      state.TotalAmount-=state.SelectedProducts[idx].price;
      state.SelectedProducts[idx].quantity--;
      if(state.SelectedProducts[idx].quantity===0){
        state.SelectedProducts.splice(idx,1);
      }
    },
    increase(state,action){
      const idx = state.SelectedProducts.findIndex((ele)=>{
        return action.payload.myid===ele.myid;
      });

      if(idx===-1){
        state.SelectedProducts.push(action.payload);
        state.TotalAmount+=action.payload.price;
      }
      else{
        state.SelectedProducts[idx].quantity++;
        state.TotalAmount+=state.SelectedProducts[idx].price;
      }
    },
    setcart(state,action){
      state.TotalAmount = action.payload.totalamount;
      state.SelectedProducts = [...action.payload.selectedproducts];
    },
  }
});

export const SelectProdAction = SelectedProductsSlice.actions;
export default SelectedProductsSlice;