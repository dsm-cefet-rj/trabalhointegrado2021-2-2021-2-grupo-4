import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit"
import { httpPost } from "../../utils";
import { baseUrl } from '../../baseUrl';

const signupAdapter = createEntityAdapter()

const initialState = signupAdapter.getInitialState({
  status: 'not_loaded',
  error: null,
  currentToken: null
});

export const signupServer = createAsyncThunk('components/slices/signupServer', async (signup) => {
  return await httpPost(`${baseUrl}/users/signup`, signup);
});

export const signupSlice = createSlice({
  name: 'signups',
  initialState: initialState,
  extraReducers: {
    [signupServer.pending]: (state, action) => {state.status = 'trying_signup'},
    [signupServer.fulfilled]: (state, action) => {state.status = 'registered'; signupAdapter.addOne(state, action.payload); state.currentToken = action.payload.token },
  },
})

export const { setStatus } = signupSlice.actions

export default signupSlice.reducer

export const {
  selectAll: selectAllSignup,
} = signupAdapter.getSelectors(state => state.signup)