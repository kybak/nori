import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import reduxMulti from "redux-multi";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

export const store = createStore(rootReducer);
