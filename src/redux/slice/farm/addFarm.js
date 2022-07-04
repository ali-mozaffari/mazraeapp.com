import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import "../../../services/config";
import {toast} from "react-toastify";

// axios.defaults.baseURL = "https://cc15-185-16-206-237.eu.ngrok.io";

export const addFarm = createAsyncThunk(
    "post/addFarm",
    async (payload, {rejectWithValue, getState, dispatch}) => {
        try {
            const {data} = await axios.post("/api/v2/farm/farm", payload,{
                headers: {
                    Authorization: "Token 452949d0f7d9d7b366358e92eb333d5af56ad960",
                },
            });
            return data;

        } catch (error) {
            return error?.response;
        }
    }
);

const addFarmSlice = createSlice({
    name: "addFarm",
    initialState: {},
    // reducers: {},
    extraReducers: {
        [addFarm.pending]: (state, action) => {
            state.loading = true;
        },
        [addFarm.fulfilled]: (state, action) => {
            if (action.payload.status === 400){
                toast.error(action.payload.data.message, {position:'top-center', theme:'dark'})
            }

            if (action.payload.guid){
                toast.success('مزرعه با موفقیت ایجاد شد', {position: 'top-center', theme: 'dark'})
            }
            state.loading = false;
        },
        [addFarm.rejected]: (state, action) => {
            state.loading = false;
        },
    },
});

export default addFarmSlice.reducer;
