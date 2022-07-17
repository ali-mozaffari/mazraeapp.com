import {createSlice, createAsyncThunk, createAction} from "@reduxjs/toolkit";
import axios from "axios";
import "../../../services/config";
import {clearFarm} from "../farm/addFarm";

export const getNahadeItemsList = createAsyncThunk(
    "nahade/getNahadeToolsList",
    async (payload, {rejectWithValue, getState, dispatch}) => {
        try {
            const {data} = await axios.get("/api/v2/farm/nahadeItem", {
                headers: {
                    Authorization: "Token 0fc6cd3614f0202043b83d095a2324be3dd68e31",
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
    async (payload, {rejectWithValue, getState, dispatch}) => {
        try {
            const {data} = await axios.post("/api/v2/farm/nahade", JSON.stringify(payload), {
                headers: {
                    'Authorization': "Token 452949d0f7d9d7b366358e92eb333d5af56ad960",
                    'Content-Type': 'application/json'
                },
            });
            return data;
        } catch (error) {
            // return error?.response;
            console.log(error);
            return rejectWithValue(error.data.results);
        }
    }
);


export const addNahadeToList = createAction('nahade/addNahadeToList')
export const deleteNahade = createAction('nahade/deleteNahade')
export const clearNahadeList = createAction('nahade/clearNahadeList')

const nahade = createSlice({
    name: "nahade",
    initialState: {items: {}, response: {}, nahades: []},
    extraReducers: {
        [addNahadeToList]: (state, action) => {
            state.nahades = [...state.nahades, action.payload]
        },
        [deleteNahade]: (state, action) => {
            state.nahades = state.nahades.filter(element => element.id !== action.payload)
        },
        [clearNahadeList]: (state, action) => {
            state.nahades = []
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
    },
});

export default nahade.reducer;
