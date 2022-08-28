import {createSlice, createAsyncThunk, createAction} from "@reduxjs/toolkit";
import axios from "axios";
import "../../../../services/config";
import {token} from "../../../../services/token";

export const addCultivation = createAsyncThunk(
    "cultivation/addCultivation",
    async (payload, {rejectWithValue, getState, dispatch}) => {
        try {
            const {data, status} = await axios.post("/api/v2/farm/cultivation", payload, {
                headers: {
                    Authorization: token,
                },
            });
            return {data, status};

        } catch (error) {
            return error?.response;
        }
    }
);

export const clearCultivation = createAction('cultivation/clearCultivation')

const addCultivationSlice = createSlice({
    name: "cultivation",
    initialState: {},
    extraReducers: {
        [clearFarm]: (state, action) => {
            state.loading = false;
            state.data = null;
        },
        [addFarm.pending]: (state, action) => {
            state.loading = true;
        },
        [addFarm.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = action.payload.data;
        },
        [addFarm.rejected]: (state, action) => {
            state.loading = false;
        }
    },
});

export default addCultivationSlice.reducer;
