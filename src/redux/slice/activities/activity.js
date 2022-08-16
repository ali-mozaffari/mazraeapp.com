import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";
import "../../../services/config";
import { token } from "../../../services/token";

export const addActivity = createAsyncThunk(
  "activity/addActivity",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      // const {data} = await axios.post("/api/v2/farm/activity", JSON.stringify(payload), {
      const { data } = await axios.post("/api/v2/farm/activity", payload, {
        headers: {
          Authorization: token,
          // 'Content-Type': 'application/json'
          "Content-Type": "multipart/form-data",
        },
      });
      // console.error(data)
      // console.log(data)
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.data.results);
    }
  }
);

export const clearActivity = createAction("activity/clearActivity");

const activity = createSlice({
  name: "activity",
  initialState: {},
  extraReducers: {
    [clearActivity]: (state, action) => {
      state.response = [];
    },
    [addActivity.pending]: (state, action) => {
      state.loading = true;
      state.isDone = false;
    },
    [addActivity.fulfilled]: (state, {payload}) => {
      state.response = payload;
      state.loading = false;
      state.isDone = true;
      // console.log(state.response);
    },
    [addActivity.rejected]: (state, {payload}) => {
      state.loading = false;
      state.isDone = false;
      state.error = payload;
    },
  },
});

export default activity.reducer;
