import {createAction, createReducer, createSlice} from '@reduxjs/toolkit'
import increment from "../actions/baseAction";

const initialState = {
  value: 0,
}

export let increment1 = increment()

export const counterSlice = createReducer(initialState, (builder) => {
    builder
    .addCase(increment, (state, action) => {
      state.counter += action.payload
    })
})

// Action creators are generated for each case reducer function
// export const { decrement, incrementByAmount } = counterSlice.actions

export default counterSlice
