// import { fetchAllTasks } from '../api'

// VARIABLES

export const SAVE_ALL_TASKS = 'SAVE_ALL_TASKS'
export const ADD_TASK = 'ADD_TASK'
export const UPDATE_TASK = 'UPDATE_TASK'
export const DEL_TASK = 'DEL_TASK'

// ACTION CREATORS

export function saveAllTasks(taskArr) {
  return {
    type: SAVE_ALL_TASKS,
    tasks: taskArr
  }
}

export function addTask(newTask) {
  return {
    type: ADD_TASK,
    newTask
  }
}

export function updateTask(t_id, updatedTask) {
  return {
    type: UPDATE_TASK,
    t_id,
    updatedTask: updatedTask
  }
}

export function delFruit(t_id) {
  return {
    type: DEL_TASK,
    t_id: t_id
  }
}

// THUNKS

// export function myThunk () {
//   return (dispatch) => {
//     // access to dispatch
//     console.log(dispatch)

//     // some async stuff / api call
//     // then dispatch
//   }
// }

// export function getAllTheFruit () {
//   return (dispatch) => {
//     // loading / pending
//     dispatch(loading())

//     fetchAllFruits() // async
//       .then(fruits => {
//         // the info
//         dispatch(saveAllFruit(fruits))
//         // dispatch(notLoading())
//       })
//   }
// }

// export function addAFruit (newfruit) {
//   return (dispatch) => {
//     dispatch(disableButton())
//     saveAFruitAPI(newfruit)
//       .then((fruitFromDb) => {
//         dispatch(saveFruit(fruitFromDb))
//         dispatch(reenableButton())
//       })
//   }
// }