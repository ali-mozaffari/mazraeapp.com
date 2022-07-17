import {createSlice, createAsyncThunk, createAction} from "@reduxjs/toolkit";
import axios from "axios";
import "../../../services/config";

export const addFarm = createAsyncThunk(
    "farm/addFarm",
    async (payload, {rejectWithValue, getState, dispatch}) => {
        try {
            const {data, status} = await axios.post("/api/v2/farm/farm", payload, {
                headers: {
                    Authorization: "Token 0fc6cd3614f0202043b83d095a2324be3dd68e31",
                },
            });
            return {data, status};

        } catch (error) {
            return error?.response;
        }
    }
);

export const clearFarm = createAction('farm/clearFarm')

const addFarmSlice = createSlice({
    name: "farm",
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

export default addFarmSlice.reducer;
