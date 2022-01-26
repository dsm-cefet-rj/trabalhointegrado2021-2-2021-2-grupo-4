import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit"
import { httpGet, httpDelete, httpPost, httpPut } from "../../utils";
import { baseUrl } from '../../baseUrl';

const activitiesAdapter = createEntityAdapter()

const initialState = activitiesAdapter.getInitialState({
  status: 'not_loaded',
  error: null
});

export const fetchActivities = createAsyncThunk('components/slices/fetchActivities', async () => {
  return await httpGet(`${baseUrl}/activities`)
})

export const addActivityServer = createAsyncThunk('components/slices/addActivityServer', async (activity) => {
  return await httpPost(`${baseUrl}/activities`, activity);
});

export const deleteActivityServer = createAsyncThunk('components/slices/deleteActivityServer', async (idActivity) => {
  await httpDelete(`${baseUrl}/activities/${idActivity}`);
  return idActivity;
});

export const updateActivityServer = createAsyncThunk('components/slices/updateActivityServer', async (activity) => {
  return await httpPut(`${baseUrl}/activities/${activity.id}`, activity);
});

export const activitiesSlice = createSlice({
  name: 'activities',
  initialState: initialState,
  reducers: {
    setStatus: (state, action) => {state.status = action.payload}
  },
  extraReducers: {
    [fetchActivities.pending]: (state, action) => {state.status = 'loading'},
    [deleteActivityServer.pending]: (state, action) => {state.status = 'deleting'},
    [addActivityServer.pending]: (state, action) => {state.status = 'saving'},
    [updateActivityServer.pending]: (state, action) => {state.status = 'saving'},
    [fetchActivities.fulfilled]: (state, action) => {state.status = 'loaded'; activitiesAdapter.setAll(state, action.payload);},
    [fetchActivities.rejected]: (state, action) => {state.status = 'failed'; state.error = 'Falha ao buscar atividades: ' + action.error.message},        
    [deleteActivityServer.fulfilled]: (state, action) => {state.status = 'deleted'; activitiesAdapter.removeOne(state, action.payload);},
    [deleteActivityServer.rejected]: (state, action) => {state.status = 'failed'; state.error = 'Falha ao excluir atividade: ' + action.error.message},
    [addActivityServer.fulfilled]: (state, action) => {state.status = 'saved'; activitiesAdapter.addOne(state, action.payload);},
    [addActivityServer.rejected]: (state, action) => {state.status = 'failed'; state.error = 'Falha ao adicionar atividade: ' + action.error.message},        
    [updateActivityServer.fulfilled]: (state, action) => {state.status = 'saved'; activitiesAdapter.upsertOne(state, action.payload);},
    [updateActivityServer.rejected]: (state, action) => {state.status = 'failed'; state.error = 'Falha ao atualizar atividade: ' + action.error.message},
  },
})

export const { setStatus } = activitiesSlice.actions

export default activitiesSlice.reducer

export const {
  selectAll: selectAllActivities,
  selectById: selectActivitiesById,
  selectIds: selectActivitiesIds
} = activitiesAdapter.getSelectors(state => state.activities)