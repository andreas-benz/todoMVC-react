import { SAVE_ALL_TASKS, ADD_TASK, UPDATE_TASK, DEL_TASK } from '../actions'


const initialTaskState = []


function taskReducer (state = initialTaskState, action) {
  
  switch (action.type) {

    case SAVE_ALL_TASKS:
      return action.tasks

    case ADD_TASK:
      return [ ...state, action.newTask]

      // const allIds = state.map(task => task.t_id)
      // const maxId = Math.max(...allIds)
       
      // return [ ...state, { t_id: maxId + 1, name: action.newTask } ]

    case UPDATE_TASK:
      state.forEach(task => {
        if (task.id === action.id) {
          task.name = action.newTask
        }
      })
      return [...state]

    case DEL_TASK:
      return state.filter(task => task.id !== action.taskId)

    default:
      return state
  }
}

export default taskReducer
