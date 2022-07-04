import {configureStore} from '@reduxjs/toolkit'
import farmListReducer  from './slice/farm/farmListBox'
import addFarmReducer  from './slice/farm/addFarm'

export const store = configureStore({
    reducer: {
        farmlist: farmListReducer,
        addFarm: addFarmReducer,
    },
})
