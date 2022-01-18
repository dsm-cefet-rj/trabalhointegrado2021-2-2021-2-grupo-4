import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
  status: 'not_loaded',
  activities: [],
  error: null
};

function addActivityReducer(state, activity) {
  let proxId = 0
  if (state.activities.length > 0)
    proxId = 1 + state.activities.map(a => a.id).reduce((x, y) => Math.max(x,y))
  else
    proxId = 1
    state.activities = state.activities.concat([{ ...activity, id: proxId }])
}

export const updateActivityServer = createAsyncThunk('components/slices/updateActivityServer',
  async (activity) => {
    let response = await fetch('http://localhost:3004/activities/' + activity.id,
    {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json;charset-utf-8'
      },
      body: JSON.stringify(activity)
    });

    if(response.ok){
      return activity;
    }else{
      throw new Error("Erro ao atualizar a atividade");
    }
  }
);

function updateActivityReducer(state, activity){
  let index = state.activities.map(a => a.id).indexOf(activity.id)
  state.activities.splice(index, 1, activity)
}

function deleteActivityReducer(state, id){
  state.activities = state.activities.filter((activity) => activity.id !== id)
}

export const fetchActivities = createAsyncThunk('components/slices/fetchActivities',
  async () => {
    return await (await fetch('http://localhost:3004/activities')).json();
  })

function fulfillActivitiesReducer(activitiesState, activitiesFetched) {
  activitiesState.status = 'loaded';
  activitiesState.activities = activitiesFetched;
}

export const activitiesSlice = createSlice({
  name: 'activities',
  initialState: initialState,
  reducers: {
    addActivity: (state, action) => addActivityReducer(state, action.payload),
    updateActivity: (state, action) => updateActivityReducer(state, action.payload),
    deleteActivity: (state, action) => deleteActivityReducer(state, action.payload)
  },
  extraReducers: {
    [fetchActivities.pending]: (state, action) => {state.status = 'loading'},
    [fetchActivities.fulfilled]: (state, action) => fulfillActivitiesReducer(state, action.payload),
    [fetchActivities.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message},
    [updateActivityServer.fulfilled]: (state, action) => {updateActivityReducer(state, action.payload)}
  },
})

export const { addActivity, updateActivity, deleteActivity } = activitiesSlice.actions
export default activitiesSlice.reducer