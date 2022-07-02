import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import "./../../../services/config";

// axios.defaults.baseURL = "https://cc15-185-16-206-237.eu.ngrok.io";

export const getFarmListBoxAPI = createAsyncThunk(
  "get/farmListBox",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get("https://cargo.jadeh.co/cargo/cargoSearch?searchValue=%D8%AA%D9%87%D8%B1%D8%A7%D9%86&page=4", {
        // headers: {
        //   Authorization: "Token 533feb77d1c5a47aa05c5c433c23805987b591cb",
        // },
      });
      console.log(data.data)
      return data.data;
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
    [getFarmListBoxAPI.fulfilled]: (state, action) => {
      state.postList = action.payload;
      state.loading = false;
    },
    [getFarmListBoxAPI.pending]: (state, action) => {
      state.loading = true;
    },
    [getFarmListBoxAPI.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default farmListBoxSlice.reducer;
