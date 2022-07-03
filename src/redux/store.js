import {configureStore} from '@reduxjs/toolkit'
import farmListReducer  from './slice/farm/farmListBox'

export const store = configureStore({
    reducer: {
        farmlist: farmListReducer,
    },
})
