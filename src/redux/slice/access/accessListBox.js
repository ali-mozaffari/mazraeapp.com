import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import "../../../services/config";
import { token } from "../../../services/token";

export const getAccessList = createAsyncThunk(
  "accessList/getAccessList",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get("/api/v2/farm/farmPermission", {
        headers: {
          Authorization: token,
        },
      });
      // console.log(data)
      return data.results;
    } catch (error) {
      // return error?.response;
      console.log(error);
      return rejectWithValue(error.data.results);
    }
  }
);

export const deleteAccessList = createAsyncThunk(
  "accessList/deleteAccessList",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete("/api/v2/farm/farmPermission", {
        data: {
          guid: id,
        },
        headers: {
          Authorization: token,
        },
      });
      // console.log(id);
      return data, id;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.data.results);
    }
  }
);

const accessListBoxSlice = createSlice({
  name: "accessList",
  initialState: { value: {} },
  extraReducers: {
    [getAccessList.pending]: (state, action) => {
      state.loading = true;
    },
    [getAccessList.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [getAccessList.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [deleteAccessList.pending]: (state, action) => {
      state.loading = true;
      state.isDone = false;
    },
    [deleteAccessList.fulfilled]: (state, action) => {
      // state.data = action.payload;
      state.data = state.data.filter(({ guid }) => guid !== action.payload);
      // console.log(state.data);
      state.loading = false;
      state.isDone = true;
    },

    [deleteAccessList.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      console.log(state.error);
      state.isDone = false;
    },
  },
});

// export const {deleteFarm} = farmListBoxSlice.actions;
export default accessListBoxSlice.reducer;
