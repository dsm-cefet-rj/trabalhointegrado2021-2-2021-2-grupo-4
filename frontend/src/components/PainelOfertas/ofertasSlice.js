import { createSlice } from '@reduxjs/toolkit';

const ofertasIniciais = []

/* export default function ofertasReducer(ofertas = ofertasIniciais, action){
    switch(action.type){
      case 'add_offer':
        let proxId = 0
        if (ofertas.length > 0)
          proxId = 1 + ofertas.map(o => o.id).reduce((x,y) => Math.max(x,y));

        else
          proxId = 1
        return ofertas.concat([{...action.payload, id: proxId}]);

      case 'remove_offer':
        return ofertas.filter((o) => o.id !== action.payload);

      case 'update_offer':
        
      default:
        return ofertas
    }
  } */

  function addOfertasReducer(ofertas, oferta){
    let proxId = 0
    if (ofertas.length > 0)
          proxId = 1 + ofertas.map(o => o.id).reduce((x,y) => Math.max(x,y));

        else
          proxId = 1
    return ofertas.concat([{...oferta, id: proxId}]);
}
  function removeOfertasReducer(ofertas, idOferta){
    return ofertas.filter((o) => o.id !== idOferta);
}

  function updateOfertasReducer(ofertas, oferta){
    let index = ofertas.map(o => o.id).indexOf(oferta.id);
    ofertas.splice(index, 1, oferta);
    return ofertas;
}  

  export const ofertasSlice = createSlice({
    name: 'ofertas',
    initialState: ofertasIniciais,
    reducers: {
      add_offer: (state, action) => addOfertasReducer(state, action.payload),
      remove_offer: (state, action) => removeOfertasReducer(state, action.payload),
      update_offer: (state, action) => updateOfertasReducer(state, action.payload)
    }
  })
  export const {add_offer, update_offer, remove_offer} = ofertasSlice.actions
  export default ofertasSlice.reducer
