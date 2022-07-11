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


// export const addNahade = createAsyncThunk(
//     "nahadeTools/addNahade",
//     async (payload, {rejectWithValue, getState, dispatch}) => {
//         try {
//             const {data} = await axios.get("/api/v2/farm/nahade", {
//                 headers: {
//                     Authorization: "Token 452949d0f7d9d7b366358e92eb333d5af56ad960",
//                 },
//             });
//             console.warn(data)
//             return data;
//         } catch (error) {
//             // return error?.response;
//             console.log(error);
//             return rejectWithValue(error.data.results);
//         }
//     }
// );


export const addNahadeToList = createAction('nahade/addNahadeToList')
export const deleteNahade = createAction('nahade/deleteNahade')

const nahade = createSlice({
    name: "nahade",
    initialState: {items: {}, response: {}, nahades: []},
    extraReducers: {
        [addNahadeToList]: (state, action) => {
            state.nahades = [...state.nahades, action.payload]
        },
        [deleteNahade]: (state, action) => {
            state.nahades = [state.nahades.filter((item) => item.id !== action.payload)]
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

        // [addNahade.pending]: (state, action) => {
        //     state.loading = true;
        // },
        // [addNahade.fulfilled]: (state, action) => {
        //     state.response = action.payload;
        //     state.loading = false;
        // },
        // [addNahade.rejected]: (state, action) => {
        //     state.loading = false;
        //     state.error = action.payload;
        // },
    },
});

export default nahade.reducer;
