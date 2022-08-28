import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";
import "../../../../services/config";
import { token } from "./../../../../services/token";


export const getMahsulCategories = createAsyncThunk(
  "mahsulCategories/getMahsulCategories",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get("/api/v2/farm/mahsulCategories", {
        headers: {
          Authorization: token,
        },
      });
      // console.log(data.results)
      return data.results;
    } catch (error) {
      return error?.response;
    }
  }
);

export const clearMahsulCategories = createAction("mahsulCategories/clearMahsulCategories");

const mahsulCategoriesSlice = createSlice({
  name: "mahsulCategories",
  initialState: {},
  extraReducers: {
    [clearMahsulCategories]: (state,  { payload }) => {
      state.loading = false;
      state.mahsulCategory = null;
    },
    [getMahsulCategories.pending]: (state,  { payload }) => {
      state.loading = true;
    },
    [getMahsulCategories.fulfilled]: (state,  { payload }) => {
      state.loading = false;
      state.mahsulCategory =  payload;
    },
    [getMahsulCategories.rejected]: (state,  { payload }) => {
      state.loading = false;
    },
  },
});

export default mahsulCategoriesSlice.reducer;
