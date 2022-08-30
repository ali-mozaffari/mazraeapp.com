import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";
import "../../../../services/config";
import { token } from "./../../../../services/token";


export const getSubMahsuls = createAsyncThunk(
  "subMahsul/getSubMahsuls",
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

export const clearSubMahsuls = createAction("subMahsul/clearSubMahsuls");

const subMahsulsSlice = createSlice({
  name: "subMahsul",
  initialState: {},
  extraReducers: {
    [clearSubMahsuls]: (state,  { payload }) => {
      state.loading = false;
      state.subMahsul = null;
    },
    [getSubMahsuls.pending]: (state,  { payload }) => {
      state.loading = true;
    },
    [getSubMahsuls.fulfilled]: (state,  { payload }) => {
      state.loading = false;
      state.subMahsul =  payload;
    },
    [getSubMahsuls.rejected]: (state,  { payload }) => {
      state.loading = false;
    },
  },
});

export default subMahsulsSlice.reducer;
