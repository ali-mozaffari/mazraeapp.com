import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import "../../../services/config";
import { token } from "../../../services/token";

export const getActivitiesList = createAsyncThunk(
  "activitiesList/getActivitiesList",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get("/api/v2/farm/activities", {
        headers: {
          Authorization: token,
        },
      });
      // console.log(data.results.details)
      // console.log(data.results)
      // return data.results.details;
      return data.results;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.data.results);
    }
  }
);
// console.log(data.results)

export const copyActivityList = createAsyncThunk(
  "activitiesList/copyActivityList",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(
        "/api/v2/farm/activity",
        {
          guid: id,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      // console.log(data);
      console.log(data.results);
      return data.results;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.data);
    }
  }
);

export const deleteActivityList = createAsyncThunk(
  "farmlist/deleteActivityList",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete("/api/v2/farm/activity", {
        // await axios.delete("/api/v2/farm/activity", {
        data: {
          guid: id,
        },
        headers: {
          Authorization: token,
        },
      });
      // console.log(data);
      return data.results;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.data.results);
    }
  }
);

const activitiesListBoxSlice = createSlice({
  name: "activitiesList",
  // initialState: { value: [] },
  initialState: {
    data: [],
    loading: false,
    isDone: false,
    error: false,
  },
  extraReducers: {
    [getActivitiesList.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getActivitiesList.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.loading = false;
      // console.log(state);
      // return state;
    },
    [getActivitiesList.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [copyActivityList.pending]: (state, { payload }) => {
      state.loading = true;
      state.isDone = false;
    },
    [copyActivityList.fulfilled]: (state, { payload }) => {
      state.data = payload;
      console.log(payload);
      // console.log(state.data);
      state.loading = false;
      state.isDone = true;
    },
    [copyActivityList.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isDone = false;
      state.error = payload;
    },
    [deleteActivityList.pending]: (state, { payload }) => {
      state.loading = true;
      state.isDone = false;
    },
    [deleteActivityList.fulfilled]: (state, { payload }) => {
      state.loading = false;
      // state.data = state.data.details.filter(
      // state.data = state.data.filter(({ guid }) => guid != payload);
      // state.data = state.data.details.filter(({ guid }) => guid != payload);
      state.data = payload;
      // console.log(payload);
      console.log(state.data);
      state.isDone = true;
    },

    [deleteActivityList.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.isDone = false;
    },
  },
});

// export const {getActivitiesList,copyActivity,deleteActivity} = activitiesListBoxSlice.actions;
export default activitiesListBoxSlice.reducer;
