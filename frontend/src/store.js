import { configureStore } from "@reduxjs/toolkit";
import ofertasReducer from "./components/PainelOfertas/ofertasSlice";
import activitiesReducer from './components/slices/ActivitiesSlice';
import categoriesReducer from './components/slices/CategoriesSlice';

export const store = configureStore({
    reducer: {
        activities: activitiesReducer,
        categories: categoriesReducer,
        ofertas: ofertasReducer
    }
})