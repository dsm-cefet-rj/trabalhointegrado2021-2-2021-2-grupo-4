import { configureStore } from "@reduxjs/toolkit";
import activitiesReducer from './components/slices/ActivitiesSlice';

export const store = configureStore({
    reducer: {
        activities: activitiesReducer,
        ofertas: ofertasReducer
    }
})