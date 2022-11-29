import { configureStore } from '@reduxjs/toolkit';
import applicationReducer from './slices/application';

export const store = configureStore({
    reducer: {
        application: applicationReducer,
    }
});