import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import "./../../../services/config";

// axios.defaults.baseURL = "https://cc15-185-16-206-237.eu.ngrok.io";

export const getFarmListBoxAPI = createAsyncThunk(
  "get/farmListBox",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get("/api/v2/farm/farms", {
        headers: {
          Authorization: "Token 533feb77d1c5a47aa05c5c433c23805987b591cb",
        },
      });
      // console.log(data.results)
      return data.results;
    } catch (error) {
      return error?.response;
    }
  }
);

const farmListBoxSlice = createSlice({
  name: "farmList",
  initialState: {},
  // reducers: {},
  extraReducers: {
    [getFarmListBoxAPI.pending]: (state, action) => {
      state.loading = true;
    },
    [getFarmListBoxAPI.fulfilled]: (state, action) => {
      state.postList = action.payload;
      state.loading = false;
    },
    [getFarmListBoxAPI.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default farmListBoxSlice.reducer;
