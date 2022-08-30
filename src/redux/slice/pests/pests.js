import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import "../../../services/config";
import { token } from "../../../services/token";

export const getResultsList = createAsyncThunk(
  "pest/getResults",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get("/api/v2/pest/result", {
        headers: {
          Authorization: token,
        },
        params: payload
      });
      return data;
    } catch (error) {
      // return error?.response;
      return rejectWithValue(error.data.results);
    }
  }
);

const pestSlice = createSlice({
  name: "pest",
  initialState: { results : [] },
  extraReducers: {
    [getResultsList.pending]: (state, action) => {
      state.loading = true;
    },
    [getResultsList.fulfilled]: (state, action) => {
      state.results = action.payload;
      state.loading = false;
    },
    [getResultsList.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default pestSlice.reducer;
