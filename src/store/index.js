import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist'
import storage from "redux-persist/lib/storage";
import contactReducer from './contactSlice'

const rootReduser = combineReducers({
    contacts: contactReducer,
});

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
}

const persistedReducer = persistReducer(persistConfig, rootReduser);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);
export default store;