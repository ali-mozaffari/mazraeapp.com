import { configureStore } from "@reduxjs/toolkit";
import farmListReducer from "./slice/farm/farmListBox";
import addFarmReducer from "./slice/farm/addFarm";
import toolsReducer from "./slice/activities/toolsList";
import nahadeToolsReducer from "./slice/activities/nahade";
import activityReducer from "./slice/activities/activity";
import loadingReducer from "./slice/loading/loading";
import activitiesListReducer from "./slice/activities/activitiesListBox";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import activityEditReducer from "./slice/activities/editActivity";
import accessListBoxReducer from "./slice/access/accessListBox";
import accessReducer from "./slice/access/addAccess";
import accessEditRducer from "./slice/access/editAccess";
import pestProductRducer from "./slice/pests/pestProduct";
import pestRducer from "./slice/pests/pests";

const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  farmlist: farmListReducer,
  addFarm: addFarmReducer,
  loading: loadingReducer,
  activitiesList: activitiesListReducer,
  tools: toolsReducer,
  activity: activityReducer,
  nahade: nahadeToolsReducer,
  activityEdit: activityEditReducer,
  accessList: accessListBoxReducer,
  addAccess: accessReducer,
  accessEdit: accessEditRducer,
  pestProduct: pestProductRducer,
  pest: pestRducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
