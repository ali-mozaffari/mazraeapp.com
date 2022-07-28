import {createSlice, createAsyncThunk, createAction} from "@reduxjs/toolkit";
import axios from "axios";
import "../../../services/config";
import {token} from "../../../services/token";

export const addAccess = createAsyncThunk(
    "access/addAccess",
    async (payload, {rejectWithValue, getState, dispatch}) => {
        try {
            const {data} = await axios.post("/api/v2/farm/farmPermission", JSON.stringify(payload), {
                headers: {
                    'Authorization': token,
                    'Content-Type': 'application/json'
                }
            });
            
            console.error(data)
            console.log(data.url)
            return data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.data.results);
        }
    }
);



export const clearAccess = createAction('access/clearAccess')

const acceccSlice = createSlice({
    name: "access",
    initialState: {},
    extraReducers: {
        [clearAccess]: (state, action) => {
            state.response = [];
        },
        [addAccess.pending]: (state, action) => {
            state.loading = true;
            state.isDone = false;
        },
        [addAccess.fulfilled]: (state, action) => {
            state.response = action.payload;
            state.isDone = true;
            state.loading = false;
        },
        [addAccess.rejected]: (state, action) => {
            state.loading = false;
            state.isDone = false
            state.error = action.payload;
        },

    },
});

export default acceccSlice.reducer;
