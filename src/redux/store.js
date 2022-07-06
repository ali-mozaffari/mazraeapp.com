import { configureStore} from '@reduxjs/toolkit'
import farmListReducer from './slice/farm/farmListBox'
import addFarmReducer from './slice/farm/addFarm'
import loadingReducer from './slice/loading/loading'
import activitiesListReducer from './slice/activities/activitiesListBox'
import storage from 'redux-persist/lib/storage';
import {persistReducer} from "redux-persist";
import thunk from 'redux-thunk';
import {combineReducers} from 'redux';

const persistConfig = {
    key: 'root',
    storage,
}
const rootReducer = combineReducers({
    farmlist: farmListReducer,
    addFarm: addFarmReducer,
    loading: loadingReducer,
    activitiesList: activitiesListReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})

export default store;
