import { createSlice } from "@reduxjs/toolkit"

let initialActivities = []

function addActivityReducer(activities, activity) {
  let proxId = 0
  if (activities.length > 0)
    proxId = 1 + activities.map(a => a.id).reduce((x, y) => Math.max(x,y))
  else
    proxId = 1
  return activities.concat([{ ...activity, id: proxId }])
}

function updateActivityReducer(activities, activity){
  let index = activities.map(a => a.id).indexOf(activity.id)
  activities.splice(index, 1, activity)
  return activities
}

function deleteActivityReducer(activities, id){
  return activities.filter((activity) => activity.id !== id)
}

export const activitiesSlice = createSlice({
  name: 'activities',
  initialState: initialActivities,
  reducers: {
    addActivity: (state, action) => addActivityReducer(state, action.payload),
    updateActivity: (state, action) => updateActivityReducer(state, action.payload),
    deleteActivity: (state, action) => deleteActivityReducer(state, action.payload)
  }
})

export const { addActivity, updateActivity, deleteActivity } = activitiesSlice.actions
export default activitiesSlice.reducer