import { createSlice } from "@reduxjs/toolkit";

const showCartSlice = createSlice({
  name: 'ShowCart',
  initialState:{
    ShowCart: false,
    ShowProgress: {
      visible: false,
      status: "",
      Title: "",
      message: "",
    }
  },
  reducers: {
    show(state){
      state.ShowCart=true;
    },
    hide(state){
      state.ShowCart=false;
    },
    changeNotification(state,action){
      state.ShowProgress.visible=true;
      state.ShowProgress.Title = action.payload.title;
      state.ShowProgress.status = action.payload.status;
      state.ShowProgress.message = action.payload.message;
    },
  }
});

export const CartAction =  showCartSlice.actions 
export default showCartSlice;