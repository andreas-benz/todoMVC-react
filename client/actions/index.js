import { getAllTasksFromDB, addTaskToDB } from '../api'

// VARIABLES

export const SAVE_ALL_TASKS = 'SAVE_ALL_TASKS'
export const ADD_TASK = 'ADD_TASK'
export const UPDATE_TASK = 'UPDATE_TASK'
export const DEL_TASK = 'DEL_TASK'

// ACTION CREATORS

export function saveAllTasksGS(taskArr) {
  return {
    type: SAVE_ALL_TASKS,
    tasks: taskArr
  }
}

export function addTaskGS(newTask) {
  return {
    type: ADD_TASK,
    newTask
  }
}

export function updateTaskGS(t_id, updatedTask) {
  return {
    type: UPDATE_TASK,
    t_id,
    updatedTask: updatedTask
  }
}

export function delTaskGS(t_id) {
  return {
    type: DEL_TASK,
    t_id: t_id
  }
}

// THUNKS

export function getAllTasksThunk () {
  return (dispatch) => {
    // loading / pending
    // dispatch(loading())

    getAllTasksFromDB() // async
      .then(tasks => {
        // the info
        dispatch(saveAllTasksGS(tasks))
        // dispatch(notLoading())
      })
  }
}

export function addATaskToDB(newTask) {
  return (dispatch) => {
    // dispatch(disableButton())
    console.log(newTask)
    addTaskToDB(newTask)
      .then((tasksFromDb) => {
        dispatch(addTaskGS(tasksFromDb))
        // dispatch(reenableButton())
      })
    }
}

export function deleteTaskDB(t_id) {
  return (dispatch) => {
    // dispatch(disableButton())
    deleteTaskDB(t_id)
      .then((t_id) => {
        dispatch(delTaskGS(t_id))
        // dispatch(reenableButton())
      })
    }
}

export function updateTaskDB(taskToUpdate) {
  return (dispatch) => {
    // dispatch(disableButton())
    updateTaskDB(taskToUpdate)
      .then((updatedTask) => {
        dispatch(updateTaskGS(updatedTask))
        // dispatch(reenableButton())
      })
    }
}