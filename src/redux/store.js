import {configureStore} from '@reduxjs/toolkit'
import farmListReducer  from './slice/base/farmListBox'

export const store = configureStore({
    reducer: {
        farmlist: farmListReducer,
    },
})
