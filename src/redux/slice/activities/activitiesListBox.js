import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import "../../../services/config";

export const getActivitiesList = createAsyncThunk(
  "activitiesList/getActivitiesList",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get("/api/v2/farm/activities", {
        headers: {
          Authorization: "Token 0fc6cd3614f0202043b83d095a2324be3dd68e31",
        },
      });
      console.log(data.results)
      return data.results;
    } catch (error) {
      // return error?.response;
      console.log(error);
      return rejectWithValue(error.data.results);
    }
  }
);

export const deleteActivityList = createAsyncThunk(
  "farmlist/deleteActivityList",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete("/api/v2/farm/activity", {
        data: {
          guid: id,
        },
        headers: {
          Authorization: "Token 0fc6cd3614f0202043b83d095a2324be3dd68e31",
        },
      });
      return data.results;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.data.results);
    }
  }
);

const activitiesListBoxSlice = createSlice({
  name: "activitiesList",
  initialState: { value: {} },
  // reducers: {
  //   deleteFarm: (state, action) => {
  //     state.value = state.value.filter((farm)=> farm.id !== action.payload.id);
  //   }
  // },
  extraReducers: {
    [getActivitiesList.pending]: (state, action) => {
      state.loading = true;
    },
    [getActivitiesList.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [getActivitiesList.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [deleteActivityList.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteActivityList.fulfilled]: (state, action) => {
      state.postList = action.payload;
      state.loading = false;
    },
    [deleteActivityList.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      console.log(state.error);
    },
  },
});

// export const {deleteFarm} = farmListBoxSlice.actions;
export default activitiesListBoxSlice.reducer;
