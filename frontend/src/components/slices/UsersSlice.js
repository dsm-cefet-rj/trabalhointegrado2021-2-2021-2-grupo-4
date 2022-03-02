import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit"
import { httpGet } from "../../utils";
import { baseUrl } from '../../baseUrl';

const usersAdapter = createEntityAdapter()

const initialState = usersAdapter.getInitialState({
  status: 'not_loaded',
  error: null,
  currentToken: null
});

export const fetchUsers = createAsyncThunk('components/slices/fetchUsers', async (_, {getState}) => {
    return await httpGet(`${baseUrl}/users`, {headers: {Authorization: 'Bearer ' + getState().logins.currentToken }})
})

export const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  extraReducers: {
    [fetchUsers.pending]: (state, action) => {state.status = 'loading_users'},
    [fetchUsers.fulfilled]: (state, action) => {state.status = 'loaded'; usersAdapter.addOne(state, action.payload);},
    [fetchUsers.rejected]: (state, action) => {state.status = 'failed'; state.error = 'Falha ao buscar users: ' + action.error.message},
  },
})

export const { setStatus } = usersSlice.actions

export default usersSlice.reducer

export const {
  selectAll: selectAllUsers,
} = usersAdapter.getSelectors(state => state.users)