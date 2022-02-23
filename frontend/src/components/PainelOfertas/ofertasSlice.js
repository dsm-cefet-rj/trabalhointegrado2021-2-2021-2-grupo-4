import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';

const initialState = {
  status: 'not_loaded',
  ofertas: [],
  error: 'null'
}


  export const fetchOfertas = createAsyncThunk('ofertas/fetchOfertas',
    async() => {
      return await (await fetch('http://localhost:3004/ofertas')).json();
    });

  export const updateOfertasServer = createAsyncThunk('ofertas/updateProjetoServer', async (oferta) => {
    let response = await fetch('http://localhost:3004/ofertas/' + oferta.id , 
                                {
                                    method: 'PUT', 
                                    headers: {
                                        'Content-Type': 'application/json;charset=utf-8'
                                    },
                                    body: JSON.stringify(oferta)
                                });
    if(response.ok){
        return oferta;
    }else{
        throw new Error("Erro ao atualizar a oferta");
    }
  });

  function fullfillOfertasReducer(ofertasState, ofertasFetched){
      ofertasState.status = 'loaded';
      ofertasState.ofertas = ofertasFetched
  }

  function addOfertasReducer(state, oferta){
    let proxId = 0
    if (state.ofertas.length > 0)
          proxId = 1 + state.ofertas.map(o => o.id).reduce((x,y) => Math.max(x,y));

        else
          proxId = 1
    return state.ofertas.concat([{...oferta, id: proxId}]);
}
  function removeOfertasReducer(state, idOferta){
    return state.ofertas.filter((o) => o.id !== idOferta);
}

  function updateOfertasReducer(state, oferta){
    let index = state.ofertas.map(o => o.id).indexOf(oferta.id);
    state.ofertas.splice(index, 1, oferta);
    return state.ofertas;
}  

  export const ofertasSlice = createSlice({
    name: 'ofertas',
    initialState: initialState,
    reducers: {
      add_offer: (state, action) => addOfertasReducer(state, action.payload),
      remove_offer: (state, action) => removeOfertasReducer(state, action.payload),
      update_offer: (state, action) => updateOfertasReducer(state, action.payload)
    },
    extraReducers: {
      [fetchOfertas.pending]: (state, action) => {state.status = 'loading'},
      [fetchOfertas.fulfilled]: (state, action) => fullfillOfertasReducer(state, action.payload),
      [fetchOfertas.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message},
      [updateOfertasServer.fulfilled]: (state, action) => {updateOfertasReducer(state, action.payload)},
    },
  })

  export const {add_offer, update_offer, remove_offer} = ofertasSlice.actions
  export default ofertasSlice.reducer
