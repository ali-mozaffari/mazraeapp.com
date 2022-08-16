import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";
import "../../../services/config";
import { token } from "../../../services/token";

export const editActivity = createAsyncThunk(
  "activityEdit/editActivity",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    // console.log(payload);
    try {
      const { data } = await axios.put("/api/v2/farm/activity", payload,
        {
          headers: {
            Authorization: token,
            // "Content-Type": "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // console.error(data);
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.data.results);
    }
  }
);
export const clearActivity = createAction("activity/clearActivity");

const activityEditSlice = createSlice({
  name: "activityEdit",
  initialState: {},
  extraReducers: {
    [clearActivity]: (state, action) => {
      state.response = [];
    },
    [editActivity.pending]: (state, action) => {
      state.loading = true;
      state.isDone = false;
    },
    [editActivity.fulfilled]: (state, {payload}) => {
      state.response = payload;
      state.loading = false;
      state.isDone = true;
    },
    [editActivity.rejected]: (state, {payload}) => {
      state.loading = false;
      state.isDone = false;
      state.error = payload;
    },
  },
});

export default activityEditSlice.reducer;
