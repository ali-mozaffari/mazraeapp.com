import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import "../../../services/config";
import {token} from "../../../services/token";

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
      return data.results;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.data.results);
    }
  }
);

export const deleteAccessUser = createAction("accessUser/deleteAccessUser");

const accessListBoxSlice = createSlice({
  name: "accessList",
  initialState: { value: {} },
  // reducers: {
  //   deleteFarm: (state, action) => {
  //     state.value = state.value.filter((farm)=> farm.id !== action.payload.id);
  //   }
  // },
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
    [deleteAccessUser]: (state, action) => {
      state.nahades = state.nahades.filter(
        (element) => element.id !== action.payload
      );
    },
    [deleteAccessList.pending]: (state, action) => {
      state.loading = true;
      state.isDone = false;
    },
    [deleteAccessList.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.isDone = true;
      if (!action.payload.guid) {
        toast.success("کاربر حذف شد", {
          position: "top-center",
          theme: "dark",
        });
      }
    },
    // [deleteAccessList.fulfilled]: (state, action) => {
    //   let index = state.findIndex(({ id }) => id === action.payload.id);
    //   state.splice(index, 1);
    // },
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
