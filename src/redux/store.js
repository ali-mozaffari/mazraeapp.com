import {configureStore} from '@reduxjs/toolkit'
import counterReducer  from './reducers/baseReducer'

export const store = configureStore({
    reducer: {
        counter: counterReducer
    },
})
