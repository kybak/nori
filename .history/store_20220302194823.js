import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import reduxMulti from "redux-multi";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const windowReactAppName = window._kdc_env_
  ? window._kdc_env_.REACT_APP_ENV_NAME
  : null;

const env = windowReactAppName || process.env.NODE_ENV;

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: [
    "rootCategory",
    "banner",
    "splitTests",
    "layoutPreferences",
    "cart",
    "ohcCheckout"
  ]
};

const persistedReducer = persistReducer(persistConfig);

const composeEnchancers =
  (env === "development" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

let middleware = [thunk, reduxMulti];

if (env === "development" || env === "testing" || env === "test") {
  const logger = createLogger({ collapsed: true });
  middleware = [...middleware, logger];
}

export const store = createStore(rootReducer);
