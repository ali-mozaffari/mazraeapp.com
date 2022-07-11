import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import "../../../services/config";

export const getFarmList = createAsyncThunk(
  "farmlist/getFarmList",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get("/api/v2/farm/farms", {
        headers: {
          Authorization: "Token 452949d0f7d9d7b366358e92eb333d5af56ad960",
        },
      });
      // console.log(data.results)
      return data.results;
    } catch (error) {
      // return error?.response;
      console.log(error);
      return rejectWithValue(error.data.results);
    }
  }
);

export const deleteFarmList = createAsyncThunk(
  "farmlist/deleteFarmList",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete("/api/v2/farm/farm", {
        data: {
          guid: id,
        },
        headers: {
          Authorization: "Token 452949d0f7d9d7b366358e92eb333d5af56ad960",
        },
      });
      return data.results;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.data.results);
    }
  }
);

const farmListBoxSlice = createSlice({
  name: "farmList",
  initialState: { value: {} },
  // reducers: {
  //   deleteFarm: (state, action) => {
  //     state.value = state.value.filter((farm)=> farm.id !== action.payload.id);
  //   }
  // },
  extraReducers: {
    [getFarmList.pending]: (state, action) => {
      state.loading = true;
    },
    [getFarmList.fulfilled]: (state, action) => {
      state.postList = action.payload;
      state.loading = false;
    },
    [getFarmList.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [deleteFarmList.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteFarmList.fulfilled]: (state, action) => {
      state.postList = action.payload;
      state.loading = false;
    },
    [deleteFarmList.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      console.log(state.error);
    },
  },
});

export const { deleteFarm } = farmListBoxSlice.actions;
export default farmListBoxSlice.reducer;
