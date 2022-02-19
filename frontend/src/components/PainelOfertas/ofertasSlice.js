import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const ofertasIniciais = []


  export const fetchOfertas = createAsyncThunk('ofertas/fetchOfertas',
    async() => {
      return await (await fetch('http://localhost:3004/ofertas')).json();
    });

  function fullfillOfertasReducer(ofertasState, ofertasFetched){
      return ofertasFetched;
  }

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
    },
    extraReducers: {
      [fetchOfertas.fulfilled]: (state, action) => fullfillOfertasReducer(state, action.payload),
    },
  })

  export const {add_offer, update_offer, remove_offer} = ofertasSlice.actions
  export default ofertasSlice.reducer
