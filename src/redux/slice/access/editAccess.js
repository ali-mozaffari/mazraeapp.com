import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";
import "../../../services/config";
import { token } from "../../../services/token";

export const editAccess = createAsyncThunk(
  "accessEdit/editAccess",
  async (payload, { rejectWithValue, getState, dispatch }) => {
      // console.log(payload);
    try {
      const { data } = await axios.put(
        "/api/v2/farm/farmPermission",
        JSON.stringify(payload),
        {
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
export const clearAccess = createAction("access/clearAccess");

const accessEditSlice = createSlice({
  name: "accessEdit",
  initialState: {},
  extraReducers: {
    [clearAccess]: (state, action) => {
      state.response = [];
    },
    [editAccess.pending]: (state, action) => {
      state.loading = true;
      state.isDone = false;
    },
    [editAccess.fulfilled]: (state, action) => {
      state.response = action.payload;
      state.loading = false;
      state.isDone = true;
    },
    [editAccess.rejected]: (state, action) => {
      state.loading = false;
      state.isDone = false;
      state.error = action.payload;
    },
  },
});

export default accessEditSlice.reducer;
