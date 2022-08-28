import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";
import "../../../../services/config";
import { token } from "./../../../../services/token";


export const getMahsuls = createAsyncThunk(
  "mahsuls/getMahsulCategories",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get("/api/v2/farm/mahsul", {
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

export const clearMahsuls = createAction("mahsuls/clearMahsuls");

const mahsulsSlice = createSlice({
  name: "mahsuls",
  initialState: {},
  extraReducers: {
    [clearMahsuls]: (state,  { payload }) => {
      state.loading = false;
      state.mahsul = null;
    },
    [getMahsuls.pending]: (state,  { payload }) => {
      state.loading = true;
    },
    [getMahsuls.fulfilled]: (state,  { payload }) => {
      state.loading = false;
      state.mahsul =  payload;
    },
    [getMahsuls.rejected]: (state,  { payload }) => {
      state.loading = false;
    },
  },
});

export default mahsulsSlice.reducer;
