import {createSlice, createAsyncThunk, createAction} from "@reduxjs/toolkit";
import axios from "axios";
import "../../../services/config";
import {toast} from "react-toastify";

export const addActivity = createAsyncThunk(
    "activity/addActivity",
    async (payload, {rejectWithValue, getState, dispatch}) => {
        try {
            const {data} = await axios.post("/api/v2/farm/activity", JSON.stringify(payload), {
                headers: {
                    'Authorization': "Token 452949d0f7d9d7b366358e92eb333d5af56ad960",
                    'Content-Type': 'application/json'
                }
            });
            console.error(data)
            return data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.data.results);
        }
    }
);


export const addActivityFile = createAsyncThunk(
    "activity/addActivityFile",
    async (payload, {rejectWithValue, getState, dispatch}) => {
        try {

            console.warn(payload)
            const {data} = await axios.patch("/api/v2/farm/activity", {data: payload}, {
                headers: {
                    'Authorization': "Token 452949d0f7d9d7b366358e92eb333d5af56ad960",
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.error(data)
            return data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.data.results);
        }
    }
);
export const clearActivity = createAction('activity/clearActivity')

const activity = createSlice({
    name: "activity",
    initialState: {},
    extraReducers: {
        [clearActivity]: (state, action) => {
            state.response = [];
        },
        [addActivity.pending]: (state, action) => {
            state.loading = true;
            state.isDone = false;
        },
        [addActivity.fulfilled]: (state, action) => {
            state.response = action.payload;
            state.isDone = true;
            state.loading = false;
            if (action.payload.guid) {
                toast.success('فعالیت افزوده شد', {position: 'top-center', theme: 'dark'})
            }
        },
        [addActivity.rejected]: (state, action) => {
            state.loading = false;
            state.isDone = false
            state.error = action.payload;
        },


        [addActivityFile.pending]: (state, action) => {
            state.fileLoading = true;
        },
        [addActivityFile.fulfilled]: (state, action) => {
            state.fileLoading = false;
        },
        [addActivityFile.rejected]: (state, action) => {
            state.fileLoading = false;
            state.error = action.payload;
        },
    },
});

export default activity.reducer;
