import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import "../../../services/config";

export const getNahadeItemsList = createAsyncThunk(
    "nahadeTools/getNahadeToolsList",
    async (payload, {rejectWithValue, getState, dispatch}) => {
        try {
            const {data} = await axios.get("/api/v2/farm/nahadeItem", {
                headers: {
                    Authorization: "Token 452949d0f7d9d7b366358e92eb333d5af56ad960",
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

const nahadesList = createSlice({
    name: "nahadeTools",
    initialState: {value: {}},
    extraReducers: {
        [getNahadeItemsList.pending]: (state, action) => {
            state.loading = true;
        },
        [getNahadeItemsList.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.loading = false;
        },
        [getNahadeItemsList.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export default nahadesList.reducer;
