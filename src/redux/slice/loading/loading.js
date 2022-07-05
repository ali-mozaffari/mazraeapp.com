import {createSlice, createAction} from "@reduxjs/toolkit";

export const startLoading = createAction('loading/startLoading')
export const stopLoading = createAction('loading/stopLoading')

const loadingSlice = createSlice({
    name: "loading",
    initialState: {
        loading: false
    },
    extraReducers: {
        [startLoading]: (state, action) => {
            state.loading = action.payload;
        }
    },
});

export default loadingSlice.reducer;
