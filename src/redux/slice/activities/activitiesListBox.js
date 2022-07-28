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
      // console.log(data.results)
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
          Authorization: token,
        },
      });
      console.log(data);
      return data, id;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.data.results);
    }
  }
);

// const initialState = {
//   data: [],
//   loading: false,
//   error: null,
// };
const activitiesListBoxSlice = createSlice({
  name: "activitiesList",
  initialState: { value: {} },
  // initialState,
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
      state.loading = false;
      state.data = state.data.details.filter((guid) => guid !== action.payload);
      console.log(state.data);
    },

    [deleteActivityList.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      console.log(state.error);
    },
  },
});

// export const {deleteActivity} = activitiesListBoxSlice.actions;
export default activitiesListBoxSlice.reducer;
