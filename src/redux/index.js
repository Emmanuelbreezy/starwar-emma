import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query'; 
import { starWarApi } from './service/starWarApi';

export const store = configureStore({
    reducer:{
        [starWarApi.reducerPath]: starWarApi.reducer,
    },
})

setupListeners(store.dispatch);