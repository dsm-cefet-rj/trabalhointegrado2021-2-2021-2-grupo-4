import { configureStore } from "@reduxjs/toolkit";
import ofertasReducer from "./components/PainelOfertas/ofertasSlice";
import activitiesReducer from './components/slices/ActivitiesSlice';
import categoriesReducer from './components/slices/CategoriesSlice';
import cursosReducer from './components/PainelCurso/cursosSlice';

export const store = configureStore({
        activities: activitiesReducer,
        ofertas: ofertasReducer,
        cursos: cursosReducer,
        categories: categoriesReducer,
        ofertas: ofertasReducer
    }
)