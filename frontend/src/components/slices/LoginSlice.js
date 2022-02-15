import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit"
import { httpPost } from "../../utils";
import { baseUrl } from '../../baseUrl';

const loginAdapter = createEntityAdapter()

const initialState = loginAdapter.getInitialState({
  status: 'not_loaded',
  error: null
});

export const loginServer = createAsyncThunk('components/slices/loginServer', async (login) => {
  return await httpPost(`${baseUrl}/users/login`, login);
});

export const loginSlice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    setStatus: (state, action) => {state.status = action.payload}
  },
  extraReducers: {
    [loginServer.pending]: (state, action) => {state.status = 'saving'},
    [loginServer.fulfilled]: (state, action) => {state.status = 'saved'; loginAdapter.addOne(state, action.payload);},
  },
})

export const { setStatus } = loginSlice.actions

export default loginSlice.reducer

export const {
  selectAll: selectAllLogin,
} = loginAdapter.getSelectors(state => state.login)