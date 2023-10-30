"use client"
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './Features/Api/ApiSlice';
import authSlice from './Features/Auth/authSlice';
const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSlice,
    },
    devTools:false,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});


export default store;
