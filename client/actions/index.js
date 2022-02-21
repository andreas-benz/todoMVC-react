import { getAllTasksFromDB, addTaskToDB, updateTaskInDB, deleteTaskInDB } from '../apis/tasks'

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

export function updateTaskGS(updatedTask) {
  return {
    type: UPDATE_TASK,
    updatedTask
  }
}

export function delTaskGS(t_id) {
  return {
    type: DEL_TASK,
    t_id
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
    addTaskToDB(newTask)
      .then((idOfaddedTask) => {
        const newTaskInclID = {...newTask, t_id: idOfaddedTask[0]}
        dispatch(addTaskGS(newTaskInclID))
      })
    }
}

export function updateATaskInDB(taskToUpdate) {
  return (dispatch) => {
    updateTaskInDB(taskToUpdate)
      .then((number_of_updated_tasks) => {
        dispatch(updateTaskGS(taskToUpdate))
      })
  }
}

export function deleteATaskInDB(t_id) {
  console.log(t_id)
  return (dispatch) => {
    // dispatch(disableButton())
    deleteTaskInDB(t_id)
      .then((something) => {
        dispatch(delTaskGS(t_id))
        // dispatch(reenableButton())
      })
    }
}