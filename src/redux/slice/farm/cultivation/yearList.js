import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";
import "../../../../services/config";
import { token } from "./../../../../services/token";


export const getYearList = createAsyncThunk(
  "yearList/getYearList",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get("/api/v2/farm/year", {
        headers: {
          Authorization: token,
        },
      });
    //   console.log(data.results)
      return data.results;
    } catch (error) {
      return error?.response;
    }
  }
);

export const clearYearList = createAction("yearList/clearYearList");

const yearListSlice = createSlice({
  name: "yearList",
  initialState: {},
  extraReducers: {
    [clearYearList]: (state,  { payload }) => {
      state.loading = false;
      state.year = null;
    },
    [getYearList.pending]: (state,  { payload }) => {
      state.loading = true;
    },
    [getYearList.fulfilled]: (state,  { payload }) => {
      state.loading = false;
      state.year =  payload;
    },
    [getYearList.rejected]: (state,  { payload }) => {
      state.loading = false;
    },
  },
});

export default yearListSlice.reducer;
