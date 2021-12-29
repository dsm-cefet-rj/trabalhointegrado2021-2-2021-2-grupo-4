import { configureStore } from "@reduxjs/toolkit";
import ofertasReducer from "./components/PainelOfertas/ofertasSlice";

export const store = configureStore({
    reducer: {
        ofertas: ofertasReducer
    }


})