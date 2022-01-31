import { configureStore } from "@reduxjs/toolkit";
import ofertasReducer from "./components/PainelOfertas/ofertasSlice";
import activitiesReducer from './components/slices/ActivitiesSlice';
import cursosReducer from "./components/PainelCurso/cursosSlice";

export const store = configureStore({
    reducer: {
        activities: activitiesReducer,
        ofertas: ofertasReducer,
        cursos: cursosReducer
    }
})