import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit"
import { httpGet, httpPost } from "../../utils";
import { baseUrl } from '../../baseUrl';

const categoriesAdapter = createEntityAdapter()

const initialState = categoriesAdapter.getInitialState({
  status: 'not_loaded',
  error: null
});

export const fetchCategories = createAsyncThunk('components/slices/fetchCategories',  async (_, {getState}) => {
  return await httpGet(`${baseUrl}/categories`, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}})
});

export const addCategoryServer = createAsyncThunk('components/slices/addActivityServer', async (activity, {getState}) => {
  return await httpPost(`${baseUrl}/categories`, activity, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken}});
});

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: initialState,
  reducers: {
    setStatus: (state, action) => {state.status = action.payload}
  },
  extraReducers: {
    [fetchCategories.pending]: (state, action) => {state.status = 'loading'},
    [fetchCategories.fulfilled]: (state, action) => {state.status = 'loaded'; categoriesAdapter.setAll(state, action.payload);},
    [fetchCategories.rejected]: (state, action) => {state.status = 'failed'; state.error = 'Falha ao buscar atividades: ' + action.error.message},   
    [addCategoryServer.pending]: (state, action) => {state.status = 'saving'},
    [addCategoryServer.fulfilled]: (state, action) => {state.status = 'saved'; categoriesAdapter.addOne(state, action.payload);},
    [addCategoryServer.rejected]: (state, action) => {state.status = 'failed'; state.error = 'Falha ao adicionar atividade: ' + action.error.message},     
  },
})

export const { setStatus } = categoriesSlice.actions

export default categoriesSlice.reducer

export const {
  selectAll: selectAllCategories,
  selectById: selectCategoryById,
  selectIds: selectCategoriesIds
} = categoriesAdapter.getSelectors(state => state.categories)