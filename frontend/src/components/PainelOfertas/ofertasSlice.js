import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import { httpGet, httpPost, httpPut, httpDelete } from '../../utils';

const ofertasAdapter = createEntityAdapter();

const initialState = ofertasAdapter.getInitialState({
  status: 'not_loaded',
  error: null
});




  export const fetchOfertas = createAsyncThunk('ofertas/fetchOfertas', async() => {
      return await httpGet('http://localhost:3004/ofertas');
    });

  export const updateOfertasServer = createAsyncThunk('ofertas/updateOfertasServer', async (oferta) => {
    return await httpPut(`http://localhost:3004/ofertas/${oferta.id}`,oferta);
    });

  export const removeOfertasServer = createAsyncThunk('ofertas/removeOfertasServer', async (idOferta) => {
    await httpDelete(`http://localhost:3004/ofertas/${idOferta}`);
    return idOferta;
  });

  export const addOfertasServer = createAsyncThunk('ofertas/addOfertasServer', async (oferta) => {
    return await httpPost('http://localhost:3004/ofertas', oferta);
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
      [fetchOfertas.fulfilled]: (state, action) => {state.status = 'loaded'; ofertasAdapter.setAll(state, action.payload);},
      [fetchOfertas.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message},

      [addOfertasServer.fulfilled]: (state, action) => {state.status = 'saved'; ofertasAdapter.addOne(state, action.payload);},
      [addOfertasServer.rejected]: (state, action) => {state.status = 'failed'; state.error = 'Falha ao adicionar oferta: ' + action.error.message},

      [removeOfertasServer.fulfilled]: (state, action) => {state.status = 'deleted'; ofertasAdapter.removeOne(state, action.payload);},
      [removeOfertasServer.rejected]: (state, action) => {state.status = 'failed'; state.error = 'Falha ao excluir oferta: ' + action.error.message},

      [updateOfertasServer.fulfilled]: (state, action) => {ofertasAdapter.upsertOne(state, action.payload)},
      [updateOfertasServer.rejected]: (state, action) => {state.status = 'failed'; state.error = 'Falha ao atualizar oferta: ' + action.error.message},

    },
  })

  export const {add_offer, update_offer, remove_offer} = ofertasSlice.actions
  export default ofertasSlice.reducer

  export const {
    selectAll: selectAllOfertas,
    selectById: selectOfertaById,
    selectIds: selectOfertaIds
} = ofertasAdapter.getSelectors(state => state.ofertas)
