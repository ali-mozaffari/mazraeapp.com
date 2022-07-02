import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import "./../../../services/config"

// axios.defaults.baseURL = "https://ea65-185-16-206-238.eu.ngrok.io";

// export const getFarmListBoxAPI = async () => axios.get('/api/v2/farm/farms');
export const getFarmListBoxAPI = createAsyncThunk(
  "get/farmListBox",
  async () => {
    try {
        const {data} = await axios.get("/api/v2/farm/farms", {
          headers: {
            'Authorization': "Token 533feb77d1c5a47aa05c5c433c23805987b591cb"
          }
        });
        // console.log(response.data.results)
        return data.results;
    } catch (error) {
        console.log(error);
    }
  }
);

const initialState = {
  value: {},
};

const farmListBoxSlice = createSlice({
  name: "farmList",
  initialState,
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
    }
  },
});

export default farmListBoxSlice.reducer;
