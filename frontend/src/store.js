import { configureStore } from "@reduxjs/toolkit";
import ofertasReducer from "./components/PainelOfertas/ofertasSlice";
import activitiesReducer from './components/slices/ActivitiesSlice';
import categoriesReducer from './components/slices/CategoriesSlice';
import cursosReducer from "./components/slices/cursosSlice";
import loginReducer from "./components/slices/LoginSlice";
import signupReducer from "./components/slices/SignupSlice";

export const store = configureStore({
    reducer: {
        activities: activitiesReducer,
        ofertas: ofertasReducer,
        cursos: cursosReducer,
        categories: categoriesReducer,
        logins: loginReducer,
        signups: signupReducer
    }
})