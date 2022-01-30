import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit"
import { httpGet } from "../../utils";
import { baseUrl } from '../../baseUrl';

const categoriesAdapter = createEntityAdapter()

const initialState = categoriesAdapter.getInitialState({
  status: 'not_loaded',
  error: null
});

export const fetchCategories = createAsyncThunk('components/slices/fetchCategories', async () => {
  return await httpGet(`${baseUrl}/categories`)
})

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: initialState,
  reducers: {
    setStatus: (state, action) => {state.status = action.payload}
  },
  extraReducers: {
    [fetchCategories.pending]: (state, action) => {state.status = 'loading'},
    [fetchCategories.fulfilled]: (state, action) => {state.status = 'loaded'; categoriesAdapter.setAll(state, action.payload);},
    [fetchCategories.rejected]: (state, action) => {state.status = 'failed'; state.error = 'Falha ao buscar atividades: ' + action.error.message}      
  },
})

export const { setStatus } = categoriesSlice.actions

export default categoriesSlice.reducer

export const {
  selectAll: selectAllCategories,
  selectById: selectCategoryById,
  selectIds: selectCategoriesIds
} = categoriesAdapter.getSelectors(state => state.categories)