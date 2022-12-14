import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";
import "../../../services/config";
import { clearFarm } from "../farm/addFarm";
import { token } from "../../../services/token";
import { Co2Sharp } from "@mui/icons-material";
// import { guid } from "rsuite/esm/utils";

export const getNahadeItemsList = createAsyncThunk(
  "nahade/getNahadeToolsList",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get("/api/v2/farm/nahadeItem", {
        headers: {
          Authorization: token,
        },
      });
      return data.results;
    } catch (error) {
      // return error?.response;
      console.log(error);
      return rejectWithValue(error.data.results);
    }
  }
);

export const addNahade = createAsyncThunk(
  "nahade/addNahade",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.post(
        "/api/v2/farm/nahade",
        JSON.stringify(payload),
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );
      return data;
    } catch (error) {
      // return error?.response;
      console.log(error);
      return rejectWithValue(error.data.results);
    }
  }
);

/* -------Delete Nahade from Edit Activity Database------ */
export const deleteNahadeEditActivity = createAsyncThunk(
  "nahade/deleteNahadeEditActivity",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete("/api/v2/farm/nahade", {
        data: {
          guid: id,
        },
        headers: {
          Authorization: token,
        },
      });
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.data.results);
    }
  }
);

export const addNahadeToList = createAction("nahade/addNahadeToList");
export const deleteNahade = createAction("nahade/deleteNahade");
// export const deleteEditNahade = createAction("nahade/deleteEditNahade");
export const clearNahadeList = createAction("nahade/clearNahadeList");

const nahade = createSlice({
  name: "nahade",
  initialState: { items: {}, response: {}, nahades: [] },
  extraReducers: {
    [addNahadeToList]: (state, action) => {
      state.nahades = [...state.nahades, action.payload];
    },
    [deleteNahade]: (state, action) => {
      state.nahades = state.nahades.filter(
        (element) => element.id !== action.payload
      );
    },
    // [deleteEditNahade]: (state, action) => {
    //   console.log(action.payload)
    //   console.log(state.nahades)
    //   state.nahades = state.nahades.filter(
    //     (item) => item.guid !== action.payload
    //   );
    // },
    [clearNahadeList]: (state, action) => {
      state.nahades = [];
    },
    [getNahadeItemsList.pending]: (state, action) => {
      state.loading = true;
    },
    [getNahadeItemsList.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },
    [getNahadeItemsList.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [addNahade.pending]: (state, action) => {
      state.addNahadeLoading = true;
    },
    [addNahade.fulfilled]: (state, action) => {
      state.addNahadeLoading = false;
    },
    [addNahade.rejected]: (state, action) => {
      state.addNahadeLoading = false;
      state.error = action.payload;
    },
    [deleteNahadeEditActivity.pending]: (state, action) => {
      state.loading = true;
      state.isDeleted = false;
    },
    [deleteNahadeEditActivity.fulfilled]: (state, action) => {
      state.postList = action.payload;
      state.loading = false;
      state.isDeleted = true;
    },
    [deleteNahadeEditActivity.rejected]: (state, action) => {
      state.loading = false;
      state.isDeleted = false;
      state.error = action.payload;
      console.log(state.error);
    },
  },
});

export default nahade.reducer;
