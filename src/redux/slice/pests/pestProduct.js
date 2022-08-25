import { createSlice, createAction } from "@reduxjs/toolkit";

export const addPestProduct = createAction("pestProduct/addPestProduct");


const pestProduct = createSlice({
    name: "pestProduct",
    initialState: {},
    extraReducers: {
      [addPestProduct]: (state, action) => {
        state.product = [action.payload];
      },
    },
});

export default pestProduct.reducer;
