import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import "../../../services/config";
import {token} from "../../../services/token";

export const getToolsList = createAsyncThunk(
    "tools/getToolsList",
    async (payload, {rejectWithValue, getState, dispatch}) => {
        try {
            const {data} = await axios.get("/api/v2/farm/toolItem", {
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

const toolsList = createSlice({
    name: "tools",
    initialState: {value: {}},
    extraReducers: {
        [getToolsList.pending]: (state, action) => {
            state.loading = true;
        },
        [getToolsList.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.loading = false;
        },
        [getToolsList.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export default toolsList.reducer;
