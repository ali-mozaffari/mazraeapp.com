import {configureStore} from '@reduxjs/toolkit'
import farmListReducer  from './slice/farm/farmListBox'
import addFarmReducer  from './slice/farm/addFarm'
import loadingReducer  from './slice/loading/loading'

export const store = configureStore({
    reducer: {
        farmlist: farmListReducer,
        addFarm: addFarmReducer,
        loading: loadingReducer,
    },
})
