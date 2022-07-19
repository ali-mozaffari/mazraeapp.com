import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";
import "../../../services/config";
import { toast } from "react-toastify";
import { token } from "../../../services/token";
import { getQueriesForElement } from "@testing-library/react";

export const editActivity = createAsyncThunk(
  "activity/editActivity",
  async ( payload, { rejectWithValue, getState, dispatch }) => {
    console.log(payload);
    try {
      const {data} = await axios.put("/api/v2/farm/activity", JSON.stringify(payload), {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );
      console.error(data);
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.data.results);
    }
  }
);
export const clearActivity = createAction("activity/clearActivity");

const editActivitySlice = createSlice({
  name: "activity",
  initialState: {},
  extraReducers: {
    [clearActivity]: (state, action) => {
      state.response = [];
    },
    [editActivity.pending]: (state, action) => {
      state.loading = true;
      state.isDone = false;
    },
    [editActivity.fulfilled]: (state, action) => {
      state.response = action.payload;
      state.isDone = true;
      state.loading = false;
      if (action.payload.guid) {
        toast.success("فعالیت به روز رسانی شد", {
          position: "top-center",
          theme: "dark",
        });
      }
    },
    [editActivity.rejected]: (state, action) => {
      state.loading = false;
      state.isDone = false;
      state.error = action.payload;
    },
  },
});

export default editActivitySlice.reducer;
