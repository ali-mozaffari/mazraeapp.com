import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";
import "../../../services/config";
import { token } from "../../../services/token";

export const getPestQuestion = createAsyncThunk(
  "pestQuestion/getQuestion",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get("/api/v2/pest/question", {
        headers: {
          Authorization: token,
        },
        params: payload
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.data.results);
    }
  }
);


export const deletePestQuestions = createAction("pestQuestion");


const pestQuestionSlice = createSlice({
  name: "pestQuestion",
  initialState: { results : [] },
  extraReducers: {
    [deletePestQuestions]: (state, action) => {
      state.results = [];
    },
    [getPestQuestion.pending]: (state, action) => {
      state.loading = true;
    },
    [getPestQuestion.fulfilled]: (state, action) => {
      state.results = action.payload;
      state.loading = false;
    },
    [getPestQuestion.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default pestQuestionSlice.reducer;
